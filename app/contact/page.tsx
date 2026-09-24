"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

type Fields = { pName: string; pEmail: string; pPhone: string; pAge: string; pInt: string; pMsg: string };
type Errors = Partial<Record<keyof Fields, string>>;

const FIELD_IDS: Record<keyof Fields, string> = {
  pName:  "contact-name",
  pEmail: "contact-email",
  pPhone: "contact-phone",
  pAge:   "contact-age",
  pInt:   "contact-interest",
  pMsg:   "contact-message",
};
const REQUIRED_ORDER: (keyof Fields)[] = ["pName", "pEmail", "pInt", "pMsg"];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/p/Paradise-Yard-Goats-61575015420696/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const contactDetails = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "paradiseyardgoats@gmail.com",
    href: "mailto:paradiseyardgoats@gmail.com",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Location",
    value: "Paradise, Texas",
    href: null,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    label: "Season",
    value: "Fall 2026",
    href: null,
  },
];

export default function ContactPage() {
  const EMPTY: Fields = { pName: "", pEmail: "", pPhone: "", pAge: "", pInt: "", pMsg: "" };
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState("");
  const successRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (sent) successRef.current?.focus();
  }, [sent]);

  const set = (k: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFields((f) => ({ ...f, [k]: e.target.value }));
      if (errors[k]) setErrors((errs) => ({ ...errs, [k]: undefined }));
    };

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (sending) return;
    const errs: Errors = {};
    if (!fields.pName.trim())                                     errs.pName  = "Please enter your name.";
    if (!fields.pEmail.trim() || !fields.pEmail.includes("@"))   errs.pEmail = "Please enter a valid email.";
    if (!fields.pInt)                                             errs.pInt   = "Please select an interest.";
    if (!fields.pMsg.trim())                                      errs.pMsg   = "Please enter a message.";
    setErrors(errs);
    const firstInvalid = REQUIRED_ORDER.find((k) => errs[k]);
    if (firstInvalid) {
      document.getElementById(FIELD_IDS[firstInvalid])?.focus();
      return;
    }

    setSending(true);
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = await res.json();
      if (!res.ok) {
        setServerError(data.error ?? "Something went wrong. Please try again.");
      } else {
        setFields(EMPTY);
        setSent(true);
      }
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  }

  const inputBase =
    "w-full bg-white/5 border rounded-md px-4 py-2.5 text-white text-base outline-none transition-all placeholder:text-white/35 focus:border-green focus:ring-2 focus:ring-green/40";
  const inputCls = (k: keyof Fields) =>
    `${inputBase} ${errors[k] ? "border-[#F07070]" : "border-white/15"}`;
  const labelCls =
    "block font-inter font-bold text-[0.72rem] uppercase tracking-[1.5px] text-white/60 mb-2";
  const a11y = (k: keyof Fields) => ({
    id: FIELD_IDS[k],
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${FIELD_IDS[k]}-error` : undefined,
  });
  const errorText = (k: keyof Fields) =>
    errors[k] && (
      <p id={`${FIELD_IDS[k]}-error`} className="font-inter text-[#F07070] text-[0.78rem] mt-1.5">
        {errors[k]}
      </p>
    );
  const req = <span className="text-[#F07070]" aria-hidden>*</span>;

  return (
    <>
      <Nav />
      <main>

        {/* ── PAGE HEADER ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-[70px]">
          <Image
            src="https://images.unsplash.com/photo-1651002488585-1ed4a57f5d76?auto=format&fit=crop&w=1920&q=80"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />

          {/* Left-heavy dark overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(7,17,31,0.97) 0%, rgba(7,17,31,0.92) 45%, rgba(7,17,31,0.65) 75%, rgba(7,17,31,0.40) 100%)",
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, #07111F)" }}
          />

          <div className="relative max-w-[1280px] mx-auto px-6 py-8 md:py-12">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[0.72rem] font-inter uppercase tracking-[1.5px] text-white/40 mb-4">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>&rsaquo;</span>
              <span className="text-green">Contact</span>
            </nav>

            <p
              className="font-bebas tracking-[3px] text-green mb-2"
              style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
            >
              CONNECT. SUPPORT. GET INVOLVED.
            </p>
            <h1
              className="font-bebas text-white leading-none tracking-wide"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
            >
              Contact the <span className="text-green">Yard Goats</span>
            </h1>
          </div>
        </section>

        {/* ── MAIN CONTENT ──────────────────────────────────────────
            DOM order is intro → form → details so mobile and keyboard order
            match; on lg the grid moves details under the intro in column 1. */}
        <section className="bg-deep-navy pb-10 md:pb-14">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] lg:grid-rows-[auto_1fr] gap-y-7 lg:gap-x-12 lg:gap-y-8 items-start">

              {/* Intro */}
              <div className="lg:col-start-1 lg:row-start-1">
                <h2
                  className="font-bebas text-white leading-none mb-3"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
                >
                  Get In Touch
                </h2>
                <div className="w-10 h-[3px] rounded mb-4" style={{ backgroundColor: "#B3261E" }} />
                <p
                  className="font-inter text-muted-gray leading-relaxed"
                  style={{ fontSize: "0.97rem" }}
                >
                  Have a question or want more information about our program? Reach out — we&apos;d
                  love to connect.
                </p>
                {/* Details sit below the form on mobile, so surface the email here */}
                <p className="lg:hidden font-inter text-muted-gray mt-3" style={{ fontSize: "0.93rem" }}>
                  Prefer email?{" "}
                  <a href="mailto:paradiseyardgoats@gmail.com" className="text-white underline decoration-green/60 underline-offset-2 hover:text-green">
                    paradiseyardgoats@gmail.com
                  </a>
                </p>
              </div>

              {/* Form */}
              <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 bg-charcoal border border-white/8 rounded-xl p-5 sm:p-6 lg:p-8">
                {sent ? (
                  <div role="status" className="text-center py-12">
                    <div className="text-[3.5rem] mb-4" aria-hidden>⚾</div>
                    <h3
                      ref={successRef}
                      tabIndex={-1}
                      className="font-bebas text-green leading-none mb-2 outline-none"
                      style={{ fontSize: "2.4rem" }}
                    >
                      Message Received!
                    </h3>
                    <p className="font-inter text-muted-gray" style={{ fontSize: "0.93rem" }}>
                      Thanks for reaching out — we&apos;ll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={submit} noValidate aria-label="Contact form" className="space-y-5">

                    <p className="font-inter text-white/50" style={{ fontSize: "0.78rem" }}>
                      Fields marked <span className="text-[#F07070]">*</span> are required.
                    </p>

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-4">
                      <div>
                        <label htmlFor={FIELD_IDS.pName} className={labelCls}>
                          Parent / Guardian / Sponsor Name {req}
                        </label>
                        <input
                          {...a11y("pName")}
                          name="pName"
                          type="text"
                          autoComplete="name"
                          required
                          placeholder="Full name"
                          value={fields.pName}
                          onChange={set("pName")}
                          className={inputCls("pName")}
                        />
                        {errorText("pName")}
                      </div>
                      <div>
                        <label htmlFor={FIELD_IDS.pEmail} className={labelCls}>
                          Email Address {req}
                        </label>
                        <input
                          {...a11y("pEmail")}
                          name="pEmail"
                          type="email"
                          autoComplete="email"
                          required
                          placeholder="your@email.com"
                          value={fields.pEmail}
                          onChange={set("pEmail")}
                          className={inputCls("pEmail")}
                        />
                        {errorText("pEmail")}
                      </div>
                    </div>

                    {/* Phone + Player Age */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-4">
                      <div>
                        <label htmlFor={FIELD_IDS.pPhone} className={labelCls}>
                          Phone Number
                        </label>
                        <input
                          {...a11y("pPhone")}
                          name="pPhone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="(940) 000-0000"
                          value={fields.pPhone}
                          onChange={set("pPhone")}
                          className={inputCls("pPhone")}
                        />
                      </div>
                      <div>
                        <label htmlFor={FIELD_IDS.pAge} className={labelCls}>
                          Player Age
                        </label>
                        <select
                          {...a11y("pAge")}
                          name="pAge"
                          autoComplete="off"
                          value={fields.pAge}
                          onChange={set("pAge")}
                          className={`${inputCls("pAge")} cursor-pointer`}
                        >
                          <option value="">Select age</option>
                          {["6 years old","7 years old","8 years old","9 years old","10 years old","11+ years old"].map((a) => (
                            <option key={a} value={a} className="bg-charcoal">{a}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* I'm Interested In */}
                    <div>
                      <label htmlFor={FIELD_IDS.pInt} className={labelCls}>
                        I&apos;m Interested In {req}
                      </label>
                      <select
                        {...a11y("pInt")}
                        name="pInt"
                        autoComplete="off"
                        required
                        value={fields.pInt}
                        onChange={set("pInt")}
                        className={`${inputCls("pInt")} cursor-pointer`}
                      >
                        <option value="">Select interest</option>
                        {["Register a Player / Ask About Tryouts","Sponsorship","General Question"].map((o) => (
                          <option key={o} value={o} className="bg-charcoal">{o}</option>
                        ))}
                      </select>
                      {errorText("pInt")}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor={FIELD_IDS.pMsg} className={labelCls}>
                        Message {req}
                      </label>
                      <textarea
                        {...a11y("pMsg")}
                        name="pMsg"
                        required
                        placeholder="Tell us about your player, your business, or how you'd like to get involved…"
                        value={fields.pMsg}
                        onChange={set("pMsg")}
                        className={`${inputCls("pMsg")} block h-[150px] min-h-[120px] resize-y`}
                      />
                      {errorText("pMsg")}
                    </div>

                    {/* Server error */}
                    {serverError && (
                      <p role="alert" className="font-inter text-[#F07070] text-[0.85rem] text-center">
                        {serverError}
                      </p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={sending}
                      aria-disabled={sending}
                      className="w-full bg-green text-deep-navy font-inter font-bold uppercase tracking-[2px] py-3.5 rounded transition-all duration-200 hover:bg-green-lt hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                      style={{ fontSize: "0.85rem" }}
                    >
                      {sending ? "Sending…" : "Send Message"}
                    </button>

                  </form>
                )}
              </div>

              {/* Contact details */}
              <div className="lg:col-start-1 lg:row-start-2">
                <div className="space-y-4 mb-7">
                  {contactDetails.map((d) => (
                    <div key={d.label} className="flex items-start gap-4">
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-green"
                        style={{ background: "rgba(0,61,165,0.16)", border: "1px solid rgba(0,61,165,0.35)" }}
                      >
                        {d.icon}
                      </div>
                      <div>
                        <div
                          className="font-inter font-bold uppercase tracking-[2px] text-white/40 mb-0.5"
                          style={{ fontSize: "0.65rem" }}
                        >
                          {d.label}
                        </div>
                        {d.href ? (
                          <a
                            href={d.href}
                            className="font-inter text-white hover:text-green transition-colors"
                            style={{ fontSize: "0.95rem" }}
                          >
                            {d.value}
                          </a>
                        ) : (
                          <span className="font-inter text-white" style={{ fontSize: "0.95rem" }}>
                            {d.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social icons */}
                <div>
                  <div
                    className="font-inter font-bold uppercase tracking-[2px] text-white/40 mb-3"
                    style={{ fontSize: "0.65rem" }}
                  >
                    Follow Us
                  </div>
                  <div className="flex gap-2.5">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-muted-gray hover:text-white hover:bg-royal-blue/20 border border-white/8 hover:border-royal-blue/50 transition-all duration-200"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
