import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    // Temporary diagnostic — remove after confirming env visibility
    console.log("[contact] VERCEL_ENV:", process.env.VERCEL_ENV);
    console.log("[contact] VERCEL_TARGET_ENV:", process.env.VERCEL_TARGET_ENV);
    console.log("[contact] VERCEL_GIT_COMMIT_SHA:", process.env.VERCEL_GIT_COMMIT_SHA);
    console.log("[contact] RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);
    console.log("[contact] process.env keys containing RESEND:", Object.keys(process.env).filter(k => k.includes("RESEND")));

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Contact route: RESEND_API_KEY is not set.");
      return NextResponse.json(
        { error: "Server email configuration is missing." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    let body: Record<string, string>;
    try {
      body = await req.json();
    } catch (parseErr) {
      console.error("Contact route: failed to parse request body:", parseErr);
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const { pName, pEmail, pPhone, pAge, pInt, pMsg } = body;

    if (!pName?.trim() || !pEmail?.trim() || !pInt?.trim() || !pMsg?.trim()) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

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
      console.error("Contact route: Resend returned an error:", error);
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
