import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Tryouts",
  description:
    "Your opportunity starts here. Tryout info for 7U, 8U, 9U, and 11U teams in Paradise, Texas. July 12 at The Goat Yard.",
};

const tryouts = [
  { age: "7U & 8U", time: "12:00PM - 12:45PM" },
  { age: "9U",      time: "1:00PM - 1:45PM" },
  { age: "11U",     time: "2:00PM - 2:45PM" },
];


export default function TryoutsPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Page Header ──────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden pt-[70px]"
          style={{ minHeight: "clamp(300px, 50vh, 420px)" }}
        >
          {/* Background image */}
          <Image
            src="/images/baseball-tryout-image.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay — left heavier so text pops */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(7,17,31,0.95) 0%, rgba(7,17,31,0.90) 45%, rgba(7,17,31,0.60) 75%, rgba(7,17,31,0.40) 100%)",
            }}
          />

          {/* Content */}
          <div className="relative max-w-[1280px] mx-auto px-6 py-12 flex flex-col justify-end" style={{ minHeight: "inherit" }}>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[0.72rem] font-inter uppercase tracking-[1.5px] text-white/40 mb-6">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>&rsaquo;</span>
              <span className="text-green">Tryouts</span>
            </nav>

            {/* Accent line */}
            <p
              className="font-bebas tracking-[3px] text-green mb-2"
              style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
            >
              YOUR OPPORTUNITY STARTS HERE.
            </p>

            {/* Main title */}
            <h1
              className="font-bebas text-white leading-none tracking-wide"
              style={{ fontSize: "clamp(4rem, 10vw, 7.5rem)" }}
            >
              2026 YG <span className="text-green">TRYOUTS</span>
            </h1>

            {/* Subline */}
            <p
              className="font-inter text-white/75 mt-4 max-w-[520px]"
              style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)", lineHeight: "1.65" }}
            >
              We&rsquo;re looking for players ready to compete, grow, and represent Paradise, Texas.
            </p>
          </div>
        </section>

        {/* ── Info Strip ───────────────────────────────────────────── */}
        <div style={{ backgroundColor: "#003DA5" }} className="py-5">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">

              {/* Date */}
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 flex-shrink-0 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="3" y="4" width="18" height="17" rx="2.5"/>
                  <line x1="3" y1="9" x2="21" y2="9"/>
                  <line x1="8" y1="2" x2="8" y2="6.5"/>
                  <line x1="16" y1="2" x2="16" y2="6.5"/>
                </svg>
                <div>
                  <div className="font-inter font-bold uppercase tracking-[2px] text-white/50" style={{ fontSize: "0.65rem" }}>Date</div>
                  <div className="font-inter font-bold text-white" style={{ fontSize: "1rem" }}>July 12</div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 flex-shrink-0 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <div className="font-inter font-bold uppercase tracking-[2px] text-white/50" style={{ fontSize: "0.65rem" }}>Location</div>
                  <div className="font-inter font-bold text-white leading-tight" style={{ fontSize: "1rem" }}>The Goat Yard</div>
                  <div className="font-inter text-white/70 leading-tight" style={{ fontSize: "0.82rem" }}>Pecan St, Paradise, TX</div>
                </div>
              </div>

              {/* Age Groups */}
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 flex-shrink-0 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                </svg>
                <div>
                  <div className="font-inter font-bold uppercase tracking-[2px] text-white/50" style={{ fontSize: "0.65rem" }}>Age Groups</div>
                  <div className="font-inter font-bold text-white" style={{ fontSize: "1rem" }}>7U &middot; 8U &middot; 9U &middot; 11U</div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── Upcoming Tryouts ─────────────────────────────────────── */}
        <section className="bg-deep-navy py-16 md:py-20">
          <div className="max-w-[1280px] mx-auto px-6">

            {/* Section heading */}
            <h2
              className="font-bebas text-white text-center mb-10 tracking-wide"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              UPCOMING TRYOUTS
            </h2>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[860px] mx-auto w-full">
              {tryouts.map((t) => (
                <div
                  key={t.age}
                  className="flex flex-col items-center text-center rounded-lg overflow-hidden border border-royal-blue/30"
                  style={{ backgroundColor: "#0F172A" }}
                >
                  {/* Top accent bar */}
                  <div className="w-full h-1" style={{ backgroundColor: "#003DA5" }} />

                  <div className="px-6 pt-8 pb-8 flex flex-col items-center w-full">
                    {/* Age group */}
                    <span
                      className="font-bebas text-green tracking-widest mb-4"
                      style={{ fontSize: "clamp(2.2rem, 4vw, 2.8rem)" }}
                    >
                      {t.age}
                    </span>

                    {/* Divider */}
                    <div className="w-10 h-px bg-royal-blue/50 mb-4" />

                    {/* Time */}
                    <p
                      className="font-inter font-semibold text-white mb-6"
                      style={{ fontSize: "0.85rem" }}
                    >
                      {t.time}
                    </p>

                    {/* CTA button */}
                    <a
                      href={siteConfig.register}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full font-inter font-bold uppercase tracking-[2px] text-white text-center py-2.5 px-4 rounded transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                      style={{
                        fontSize: "0.72rem",
                        backgroundColor: "#003DA5",
                        border: "1.5px solid #003DA5",
                      }}
                    >
                      REGISTER NOW
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What To Expect + What To Bring ───────────────────────── */}
        <section className="bg-charcoal py-16 md:py-24">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">

              {/* Left — process steps */}
              <div>
                <span className="font-inter font-bold uppercase tracking-[3px] text-green block mb-2" style={{ fontSize: "0.72rem" }}>
                  Process
                </span>
                <h2 className="font-bebas text-white leading-none mb-3" style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)" }}>
                  WHAT TO <span className="text-green">EXPECT</span>
                </h2>
                <div className="w-12 h-[3px] rounded mb-10" style={{ backgroundColor: "#B3261E" }} />

                <div className="space-y-8">
                  {[
                    { num: "01", title: "Show Up",          body: "Come to the tryout location at your division's scheduled time. Be on time and ready to play and have fun." },
                    { num: "02", title: "Warm Up",          body: "Players warm up together with coaches. We keep it fun and low-pressure so every player can show their best." },
                    { num: "03", title: "Skills Evaluation", body: "Coaches evaluate throwing, fielding, hitting, and running. We look for coachability and hustle as much as raw ability." },
                    { num: "04", title: "Hear Back",        body: "Coaches follow up with families after tryouts." },
                  ].map((s) => (
                    <div key={s.num} className="flex gap-5">
                      <div className="font-bebas flex-shrink-0 w-10 pt-0.5 leading-none" style={{ fontSize: "2.4rem", color: "rgba(122,193,67,0.28)" }}>
                        {s.num}
                      </div>
                      <div>
                        <h3 className="font-bebas text-white mb-1" style={{ fontSize: "1.45rem" }}>{s.title}</h3>
                        <p className="font-inter text-muted-gray leading-relaxed" style={{ fontSize: "0.9rem" }}>{s.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — bring checklist */}
              <div>
                <span className="font-inter font-bold uppercase tracking-[3px] text-green block mb-2" style={{ fontSize: "0.72rem" }}>
                  Checklist
                </span>
                <h2 className="font-bebas text-white leading-none mb-3" style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)" }}>
                  WHAT TO <span className="text-green">BRING</span>
                </h2>
                <div className="w-12 h-[3px] rounded mb-10" style={{ backgroundColor: "#B3261E" }} />

                <ul className="space-y-4">
                  {[
                    "Baseball glove",
                    "Athletic cleats or sneakers",
                    "Bat (if you have one)",
                    "Batting helmet (if you have one)",
                    "Water bottle",
                    "Athletic clothes",
                    "Positive attitude",
                    "Parent or guardian",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: "#7AC143" }}>
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden>
                          <path d="M1 4l2.5 2.5L9 1" stroke="#7AC143" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="font-inter text-muted-gray" style={{ fontSize: "0.93rem" }}>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-4 rounded-md border-l-[3px]" style={{ backgroundColor: "rgba(122,193,67,0.08)", borderColor: "#7AC143" }}>
                  <p className="font-inter leading-relaxed" style={{ fontSize: "0.87rem", color: "#94A3B8" }}>
                    Don&rsquo;t have all the gear?{" "}
                    <strong className="text-white">Come anyway.</strong>{" "}
                    We&rsquo;ll never turn a player away for lack of equipment.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Bottom CTA ───────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#7AC143" }} className="py-8">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">

              {/* Logo */}
              <Image
                src="/yardgoatsimage.png"
                alt="Yard Goats"
                width={60}
                height={60}
                className="rounded-full object-cover flex-shrink-0 ring-2 ring-white/30"
              />

              {/* Text */}
              <div className="flex-1 text-center sm:text-left">
                <p
                  className="font-bebas text-white tracking-wide leading-tight"
                  style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)" }}
                >
                  THINK YOU HAVE WHAT IT TAKES?
                </p>
                <p
                  className="font-inter text-white/85 mt-0.5"
                  style={{ fontSize: "0.9rem" }}
                >
                  Come compete. Earn your spot. Be a Yard Goat.
                </p>
              </div>

              {/* Button */}
              <a
                href={siteConfig.register}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 font-inter font-bold uppercase tracking-[2px] text-white px-8 py-3 rounded transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                style={{
                  fontSize: "0.8rem",
                  backgroundColor: "#07111F",
                  border: "2px solid #07111F",
                }}
              >
                REGISTER NOW
              </a>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
