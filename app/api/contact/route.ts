import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ── Cloudflare Turnstile (spam protection) ────────────────────────────────────
// Every submission must carry a Turnstile token that Cloudflare confirms BEFORE
// anything is sent through Resend. Fails closed: a missing secret, missing token,
// failed/expired/reused token, wrong hostname, or an unreachable Cloudflare all
// reject the submission.
const SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const ALLOWED_HOSTNAMES = new Set(["paradiseyardgoats.club", "www.paradiseyardgoats.club"]);
// Cloudflare's public test keys report this hostname. Accepted only outside production.
const TEST_KEY_HOSTNAME = "example.com";
const IS_PRODUCTION = process.env.NODE_ENV === "production";

type SiteverifyResult = {
  success: boolean;
  hostname?: string;
  "error-codes"?: string[];
  metadata?: { result_with_testing_key?: boolean };
};

type Verification = { ok: true } | { ok: false; status: number; error: string; reason: string };

async function verifyTurnstile(token: string, secret: string, remoteip: string | null): Promise<Verification> {
  const retry = "Verification failed or expired. Please complete the check again and resend.";

  let result: SiteverifyResult;
  try {
    const form = new URLSearchParams({ secret, response: token });
    if (remoteip) form.set("remoteip", remoteip);
    const res = await fetch(SITEVERIFY_URL, {
      method: "POST",
      body: form,
      signal: AbortSignal.timeout(8000),
    });
    result = (await res.json()) as SiteverifyResult;
  } catch (err) {
    console.error("Contact route: Turnstile siteverify request failed:", err instanceof Error ? err.name : err);
    return {
      ok: false,
      status: 503,
      error: "We couldn't verify the form right now. Please try again in a moment.",
      reason: "siteverify-unreachable",
    };
  }

  if (!result.success) {
    return { ok: false, status: 403, error: retry, reason: (result["error-codes"] ?? []).join(",") || "unsuccessful" };
  }

  const usedTestKey = result.metadata?.result_with_testing_key === true;
  if (usedTestKey && IS_PRODUCTION) {
    return { ok: false, status: 403, error: retry, reason: "test-key-in-production" };
  }
  const hostnameOk =
    !!result.hostname &&
    (ALLOWED_HOSTNAMES.has(result.hostname) || (usedTestKey && result.hostname === TEST_KEY_HOSTNAME));
  if (!hostnameOk) {
    return { ok: false, status: 403, error: retry, reason: `hostname-mismatch:${result.hostname ?? "none"}` };
  }

  return { ok: true };
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Contact route: RESEND_API_KEY is not set.");
      return NextResponse.json(
        { error: "Server email configuration is missing." },
        { status: 500 }
      );
    }

    let body: Record<string, string>;
    try {
      body = await req.json();
    } catch (parseErr) {
      console.error("Contact route: failed to parse request body:", parseErr);
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const { pName, pEmail, pPhone, pAge, pInt, pMsg, turnstileToken } = body;

    if (!pName?.trim() || !pEmail?.trim() || !pInt?.trim() || !pMsg?.trim()) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // ── Spam check — must pass before Resend is touched ──
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (!turnstileSecret) {
      console.error("Contact route: TURNSTILE_SECRET_KEY is not set; rejecting submission.");
      return NextResponse.json(
        { error: "The contact form is temporarily unavailable. Please email us directly." },
        { status: 500 }
      );
    }
    if (typeof turnstileToken !== "string" || !turnstileToken.trim()) {
      return NextResponse.json(
        { error: "Please complete the verification check before sending." },
        { status: 400 }
      );
    }
    const remoteip =
      req.headers.get("cf-connecting-ip") ??
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      null;
    const verification = await verifyTurnstile(turnstileToken, turnstileSecret, remoteip);
    if (!verification.ok) {
      console.warn("Contact route: Turnstile verification rejected:", verification.reason);
      return NextResponse.json({ error: verification.error }, { status: verification.status });
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Paradise Yard Goats <forms@paradiseyardgoats.club>",
      to: "paradiseyardgoats@gmail.com",
      replyTo: pEmail,
      subject: `New Contact Form: ${pInt}`,
      html: `
        <h2>New message from the Paradise Yard Goats contact form</h2>
        <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:15px;">
          <tr><td><strong>Name</strong></td><td>${pName}</td></tr>
          <tr><td><strong>Email</strong></td><td>${pEmail}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${pPhone || "—"}</td></tr>
          <tr><td><strong>Player Age</strong></td><td>${pAge || "—"}</td></tr>
          <tr><td><strong>Interest</strong></td><td>${pInt}</td></tr>
          <tr><td><strong>Message</strong></td><td style="white-space:pre-wrap">${pMsg}</td></tr>
        </table>
      `,
    });

    if (error) {
      console.error("Contact route: Resend returned an error:", {
        name: error.name,
        message: error.message,
        statusCode: error.statusCode,
      });
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route: unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
