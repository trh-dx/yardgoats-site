"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";

type Fields = { pName: string; pEmail: string; pPhone: string; pAge: string; pInt: string; pMsg: string };
type Errors = Partial<Record<keyof Fields, string>>;

export default function Contact() {
  const [fields, setFields] = useState<Fields>({
    pName: "", pEmail: "", pPhone: "", pAge: "", pInt: "", pMsg: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFields((f) => ({ ...f, [k]: e.target.value }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Errors = {};
    if (!fields.pName.trim())                                  errs.pName  = "Please enter your name.";
    if (!fields.pEmail.trim() || !fields.pEmail.includes("@")) errs.pEmail = "Please enter a valid email.";
    if (!fields.pInt)                                          errs.pInt   = "Please select an interest.";
    if (!fields.pMsg.trim())                                   errs.pMsg   = "Please enter a message.";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  }

  const inputCls = (k: keyof Fields) =>
    `w-full bg-white/5 border rounded-md px-3.5 py-3 text-white text-[0.93rem] outline-none transition-all placeholder:text-gray/50 ${
      errors[k] ? "border-red" : "border-white/12 focus:border-green focus:bg-green/6"
    }`;

  return (
    <section id="contact" className="bg-navy py-16 md:py-24">
      <div className="max-w-[1180px] mx-auto px-6">

        <div className="text-center mb-12">
          <span className="font-[family-name:var(--font-barlow)] font-bold text-[0.78rem] tracking-[4px] uppercase text-tan block mb-2">
            Join the Team
          </span>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,5vw,3.9rem)] leading-none text-white mb-3">
            Get <span className="text-tan">Involved</span>
          </h2>
          <div className="w-[52px] h-[3px] bg-red rounded mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-14">

          {/* Info */}
          <div>
            <h3 className="font-[family-name:var(--font-bebas)] text-[1.85rem] text-white mb-6">
              Connect With Us
            </h3>
            {[
              { icon: "📍", label: "Location", val: "Paradise, Texas" },
              { icon: "✉️", label: "Email", val: "paradiseyardgoats@email.com", href: "mailto:paradiseyardgoats@email.com" },
              { icon: "📅", label: "Season", val: "Spring & Summer 2025" },
            ].map((d) => (
              <div key={d.label} className="flex items-start gap-3 mb-4">
                <span className="text-[1.15rem] mt-0.5">{d.icon}</span>
                <div className="text-[0.88rem] text-gray leading-snug">
                  <strong className="block text-white font-semibold mb-0.5">{d.label}</strong>
                  {d.href ? (
                    <a href={d.href} className="text-tan hover:underline">{d.val}</a>
                  ) : d.val}
                </div>
              </div>
            ))}

            <div className="flex gap-2.5 flex-wrap mt-6">
              <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/5 text-gray-lt text-[0.82rem] font-semibold px-4 py-2.5 rounded border border-white/10 hover:bg-[rgba(24,119,242,0.14)] hover:border-[rgba(24,119,242,0.35)] hover:text-[#8bbfff] transition-all">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </a>
              <a href={siteConfig.gameChanger} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/5 text-gray-lt text-[0.82rem] font-semibold px-4 py-2.5 rounded border border-white/10 hover:bg-white/10 transition-all">
                ⚾ GameChanger
              </a>
            </div>

            <div className="mt-7 p-4 bg-green/8 border-l-[3px] border-green rounded-md">
              <p className="text-[0.87rem] text-gray leading-relaxed">
                Interested in registering your player, becoming a sponsor, or volunteering? Fill out the form and we'll be in touch soon.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-charcoal rounded-xl p-8 border border-white/8">
            {sent ? (
              <div className="text-center py-12">
                <div className="text-[3.5rem] mb-4">⚾</div>
                <h4 className="font-[family-name:var(--font-bebas)] text-[2.2rem] text-green-lt mb-2">
                  You're in the Lineup!
                </h4>
                <p className="text-gray">Thanks for reaching out — we'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block font-[family-name:var(--font-barlow)] font-bold text-[0.77rem] tracking-[1.5px] uppercase text-gray mb-1.5">
                      Parent / Guardian Name *
                    </label>
                    <input type="text" placeholder="Full name" value={fields.pName} onChange={set("pName")} className={inputCls("pName")} />
                    {errors.pName && <span className="text-red text-[0.73rem] mt-1 block">{errors.pName}</span>}
                  </div>
                  <div>
                    <label className="block font-[family-name:var(--font-barlow)] font-bold text-[0.77rem] tracking-[1.5px] uppercase text-gray mb-1.5">
                      Email Address *
                    </label>
                    <input type="email" placeholder="your@email.com" value={fields.pEmail} onChange={set("pEmail")} className={inputCls("pEmail")} />
                    {errors.pEmail && <span className="text-red text-[0.73rem] mt-1 block">{errors.pEmail}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block font-[family-name:var(--font-barlow)] font-bold text-[0.77rem] tracking-[1.5px] uppercase text-gray mb-1.5">
                      Phone Number
                    </label>
                    <input type="tel" placeholder="(940) 000-0000" value={fields.pPhone} onChange={set("pPhone")} className={inputCls("pPhone")} />
                  </div>
                  <div>
                    <label className="block font-[family-name:var(--font-barlow)] font-bold text-[0.77rem] tracking-[1.5px] uppercase text-gray mb-1.5">
                      Player Age
                    </label>
                    <select value={fields.pAge} onChange={set("pAge")} className={inputCls("pAge") + " cursor-pointer"}>
                      <option value="">Select age</option>
                      {["6 years old","7 years old","8 years old","9 years old","10 years old","11+ years old"].map((a) => (
                        <option key={a} value={a} className="bg-charcoal">{a}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block font-[family-name:var(--font-barlow)] font-bold text-[0.77rem] tracking-[1.5px] uppercase text-gray mb-1.5">
                    I'm Interested In *
                  </label>
                  <select value={fields.pInt} onChange={set("pInt")} className={inputCls("pInt") + " cursor-pointer"}>
                    <option value="">Select interest</option>
                    {["Register a Player / Ask About Tryouts","Sponsor Inquiry","Volunteering","General Question"].map((o) => (
                      <option key={o} value={o} className="bg-charcoal">{o}</option>
                    ))}
                  </select>
                  {errors.pInt && <span className="text-red text-[0.73rem] mt-1 block">{errors.pInt}</span>}
                </div>

                <div className="mb-6">
                  <label className="block font-[family-name:var(--font-barlow)] font-bold text-[0.77rem] tracking-[1.5px] uppercase text-gray mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your player, your business, or how you'd like to get involved…"
                    value={fields.pMsg}
                    onChange={set("pMsg")}
                    className={inputCls("pMsg") + " resize-y min-h-[115px]"}
                  />
                  {errors.pMsg && <span className="text-red text-[0.73rem] mt-1 block">{errors.pMsg}</span>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-red text-white font-[family-name:var(--font-barlow)] font-bold text-[1.05rem] tracking-[2px] uppercase py-3.5 rounded border-2 border-red hover:bg-red-dk hover:border-red-dk transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(179,38,30,0.4)]"
                >
                  Send It In ⚾
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
