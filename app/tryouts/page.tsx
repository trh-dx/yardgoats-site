import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "2026 Tryouts | Paradise Yard Goats Baseball",
  description:
    "Join the Paradise Yard Goats. Tryout info for 7U, 8U, and 10U teams in Paradise, Texas. All skill levels welcome.",
};

const divisions = [
  {
    age: "7U",
    eligible: "Ages 6–7",
    format: "Coach Pitch",
    description:
      "The perfect entry point for young players. We focus on making the game fun, learning the basics, and building a love for baseball.",
    highlights: [
      "Coach pitch format",
      "Fundamental skill building",
      "Positive team environment",
      "No prior experience needed",
    ],
    accent: "green" as const,
  },
  {
    age: "8U",
    eligible: "Ages 7–8",
    format: "Coach Pitch",
    description:
      "Players continue developing fundamentals while gaining competitive experience and growing confidence on the field.",
    highlights: [
      "Coach pitch format",
      "Fundamentals + competition",
      "League & rec play",
      "Building game IQ",
    ],
    accent: "tan" as const,
  },
  {
    age: "9U",
    eligible: "Ages 8–9",
    format: "Kid Pitch",
    description:
      "The bridge division. Players step up to kid pitch and start putting their fundamentals to work in a more competitive setting.",
    highlights: [
      "Kid pitch format",
      "Competitive fundamentals",
      "Game strategy & awareness",
      "Building toward tournament play",
    ],
    accent: "green" as const,
  },
  {
    age: "11U",
    eligible: "Ages 10–11",
    format: "Kid Pitch",
    description:
      "Our most competitive division. Players ready to compete at a high level, face advanced pitching, and play in regional tournaments.",
    highlights: [
      "Kid pitch format",
      "Regional tournament play",
      "Advanced skill development",
      "Competitive coaching staff",
    ],
    accent: "red" as const,
  },
];

const accentClasses = {
  green: { bar: "bg-green", badge: "bg-green/12 text-green-lt border-green/30", dot: "bg-green" },
  tan:   { bar: "bg-tan",   badge: "bg-tan/12 text-tan border-tan/30",           dot: "bg-tan" },
  red:   { bar: "bg-red",   badge: "bg-red/12 text-red border-red/30",           dot: "bg-red" },
};

const steps = [
  {
    num: "01",
    title: "Show Up",
    body: "Come to the tryout location at your division's scheduled time. Be on time and ready to play and have fun.",
  },
  {
    num: "02",
    title: "Warm Up",
    body: "Players warm up together with coaches. We keep it fun and low-pressure so every player can show their best.",
  },
  {
    num: "03",
    title: "Skills Evaluation",
    body: "Coaches evaluate throwing, fielding, hitting, and running. We look for coachability and hustle as much as raw ability.",
  },
  {
    num: "04",
    title: "Hear Back",
    body: "Coaches follow up with families after tryouts.",
  },
];

const whatToBring = [
  "Baseball glove",
  "Athletic cleats or sneakers",
  "Bat (if you have one)",
  "Batting helmet (if you have one)",
  "Water bottle",
  "Athletic clothes",
  "Positive attitude",
  "Parent or guardian",
];

export default function TryoutsPage() {
  return (
    <>
      <Nav />
      <main>

        {/* Page Header — Banner */}
        <section className="relative bg-navy pt-[68px] overflow-hidden" style={{ minHeight: "clamp(420px, 70vh, 540px)" }}>
          {/* Background image */}
          <Image
            src="/images/baseball-tryout-image.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />

          {/* Left-heavy overlay: text side is nearly opaque, ball side lets image breathe */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(0,26,61,0.97) 0%, rgba(0,26,61,0.93) 38%, rgba(0,26,61,0.72) 62%, rgba(0,26,61,0.45) 100%)",
            }}
          />
          {/* Top fade for nav blend */}
          <div
            className="absolute inset-x-0 top-0 h-28 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, rgba(0,26,61,0.65) 0%, transparent 100%)" }}
          />
          {/* Bottom fade into green facts bar */}
          <div
            className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(0,26,61,0.6) 0%, transparent 100%)" }}
          />

          {/* Content */}
          <div className="relative max-w-[1180px] mx-auto px-6 pt-10 pb-16">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[0.73rem] text-white/45 mb-10 font-[family-name:var(--font-barlow)] uppercase tracking-[1.5px]">
              <Link href="/" className="hover:text-tan transition-colors">Home</Link>
              <span>›</span>
              <span className="text-tan">Tryouts</span>
            </div>

            <div className="max-w-[600px]">
              {/* Logo + org name */}
              <div className="flex items-center flex-wrap gap-4 mb-5">
                <Image
                  src="/yardgoatsimage.png"
                  alt="Yard Goats"
                  width={68}
                  height={68}
                  className="rounded-full bg-green object-cover flex-shrink-0 drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
                />
                <span className="font-[family-name:var(--font-barlow)] font-bold text-[1rem] tracking-[3px] uppercase text-tan">
                  Paradise Yard Goats Baseball
                </span>
              </div>

              {/* Title */}
              <h1
                className="font-[family-name:var(--font-bebas)] leading-none text-white tracking-wide mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]"
                style={{ fontSize: "clamp(3.2rem, 9vw, 6.2rem)" }}
              >
                2026 YG{" "}
                <span className="text-green-lt">Tryouts</span>
              </h1>

              {/* Tagline */}
              <p className="text-white/80 text-[1.05rem] leading-relaxed mb-8 max-w-[460px]">
                We're looking for players ready to compete, grow, and represent Paradise, Texas.{" "}
                <strong className="text-white">All skill levels welcome.</strong>
              </p>

              {/* Register CTA */}
              <a
                href={siteConfig.register}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-green text-white font-[family-name:var(--font-barlow)] font-bold text-[1rem] tracking-[2px] uppercase px-8 py-3.5 rounded border-2 border-green hover:bg-green-dk hover:border-green-dk transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(46,125,50,0.5)] drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
              >
                ⚾ Register for Tryouts
              </a>
            </div>
          </div>
        </section>

        {/* Key Facts Bar */}
        <div className="py-5" style={{ backgroundColor: "#003DA5" }}>
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: null,   label: "Dates",      val: "July 12th",             sub: undefined },
                { icon: "📍",  label: "Location",   val: "The Goat Yard",          sub: "Pecan St, Paradise, TX" },
                { icon: "⚾",  label: "Age Groups", val: "7U · 8U · 9U · 11U",    sub: undefined },
                { icon: "💰",  label: "Cost",       val: "Free to Try Out",        sub: undefined },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-3">
                  {f.icon ? (
                    <span className="w-7 h-7 flex-shrink-0 flex items-center justify-center text-[1.5rem]">{f.icon}</span>
                  ) : (
                    <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="4" width="18" height="17" rx="2.5" stroke="white" strokeWidth="1.6"/>
                      <line x1="3" y1="9" x2="21" y2="9" stroke="white" strokeWidth="1.6"/>
                      <line x1="8" y1="2" x2="8" y2="6.5" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                      <line x1="16" y1="2" x2="16" y2="6.5" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                      <rect x="6.5" y="11.5" width="2.5" height="2.5" rx="0.5" fill="white"/>
                      <rect x="10.75" y="11.5" width="2.5" height="2.5" rx="0.5" fill="white"/>
                      <rect x="15" y="11.5" width="2.5" height="2.5" rx="0.5" fill="white"/>
                      <rect x="6.5" y="15.5" width="2.5" height="2.5" rx="0.5" fill="white"/>
                      <rect x="10.75" y="15.5" width="2.5" height="2.5" rx="0.5" fill="white"/>
                    </svg>
                  )}
                  <div>
                    <div className="text-[0.75rem] font-[family-name:var(--font-barlow)] font-bold uppercase tracking-[2px] text-navy mb-0.5">
                      {f.label}
                    </div>
                    <div className="text-white font-[family-name:var(--font-barlow)] font-bold text-[1.05rem] leading-tight">
                      {f.val}
                    </div>
                    {f.sub && (
                      <div className="text-white/75 font-[family-name:var(--font-barlow)] text-[0.97rem] leading-tight">
                        {f.sub}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tryout Schedule */}
        <section className="bg-navy py-14 md:py-20">
          <div className="max-w-[860px] mx-auto px-6 text-center">
            <span className="font-[family-name:var(--font-barlow)] font-bold text-[0.78rem] tracking-[4px] uppercase text-tan block mb-2">
              Tryout Schedule
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(3.5rem,10vw,7rem)] leading-none text-white mb-1">
              July 12<span className="text-green-lt align-super text-[0.45em]">th</span>
            </h2>
            <p className="inline-block font-[family-name:var(--font-barlow)] font-bold italic text-[1.1rem] tracking-[2px] uppercase text-white bg-green px-6 py-1.5 rounded-sm mb-10" style={{ transform: "skewX(-8deg)" }}>
              Learn. Compete. Grow.
            </p>

            <div className="flex flex-wrap justify-center gap-8">
              {[
                { ages: "7U & 8U", time: "12:00 PM", end: "12:45 PM", bg: "#7AC143" },
                { ages: "9U",      time: "1:00 PM",  end: "1:45 PM",  bg: "#003DA5" },
                { ages: "11U",     time: "2:00 PM",  end: "2:45 PM",  bg: "#B3261E" },
              ].map((slot) => (
                <div key={slot.ages} className="relative flex-shrink-0" style={{ width: "clamp(150px, 42vw, 190px)", height: "clamp(190px, 53vw, 240px)" }}>
                  {/* Home plate shape */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundColor: slot.bg,
                      clipPath: "polygon(0% 0%, 100% 0%, 100% 65%, 50% 100%, 0% 65%)",
                    }}
                  />
                  {/* Content sits inside the rectangular upper 65% */}
                  <div
                    className="absolute inset-x-0 top-0 flex flex-col items-center justify-center text-center px-3"
                    style={{ height: "65%" }}
                  >
                    <span className="font-[family-name:var(--font-bebas)] text-[2.4rem] leading-none text-white tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                      {slot.ages}
                    </span>
                    <div className="font-[family-name:var(--font-bebas)] text-[1.55rem] leading-none text-white mt-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
                      {slot.time}
                    </div>
                    <div className="text-[0.68rem] font-[family-name:var(--font-barlow)] font-bold uppercase tracking-[2px] text-white/75 mt-1">
                      – {slot.end}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href={siteConfig.register}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-green text-white font-[family-name:var(--font-barlow)] font-bold text-[1rem] tracking-[2px] uppercase px-8 py-3.5 rounded border-2 border-green hover:bg-green-dk hover:border-green-dk transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(46,125,50,0.5)]"
              >
                ⚾ Register for Tryouts
              </a>
            </div>
          </div>
        </section>

        {/* Age Divisions */}
        <section className="bg-charcoal py-16 md:py-24">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="text-center mb-12">
              <span className="font-[family-name:var(--font-barlow)] font-bold text-[0.78rem] tracking-[4px] uppercase text-tan block mb-2">
                Divisions
              </span>
              <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,5vw,3.9rem)] leading-none text-white mb-3">
                Find Your <span className="text-tan">Division</span>
              </h2>
              <div className="w-[52px] h-[3px] bg-red rounded mx-auto" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {divisions.map((d) => {
                const cls = accentClasses[d.accent];
                return (
                  <div
                    key={d.age}
                    className="bg-navy rounded-xl overflow-hidden border border-white/8 flex flex-col"
                  >
                    <div className={`h-1.5 ${cls.bar}`} />
                    <div className="p-7 flex flex-col flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="font-[family-name:var(--font-bebas)] text-[3.2rem] leading-none text-white">
                            {d.age}
                          </span>
                          <div className="text-[0.73rem] font-[family-name:var(--font-barlow)] font-bold uppercase tracking-[2px] text-gray mt-0.5">
                            {d.eligible}
                          </div>
                        </div>
                        <span
                          className={`text-[0.68rem] font-[family-name:var(--font-barlow)] font-bold uppercase tracking-[1.5px] px-2.5 py-1 rounded border ${cls.badge}`}
                        >
                          {d.format}
                        </span>
                      </div>
                      <p className="text-gray text-[0.9rem] leading-relaxed mb-5">
                        {d.description}
                      </p>
                      <ul className="mt-auto space-y-2.5">
                        {d.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2.5 text-[0.85rem] text-gray-lt">
                            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${cls.dot}`} />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What to Expect + What to Bring */}
        <section className="bg-navy py-16 md:py-24">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 md:gap-16">

              {/* Steps */}
              <div>
                <span className="font-[family-name:var(--font-barlow)] font-bold text-[0.78rem] tracking-[4px] uppercase text-tan block mb-2">
                  Process
                </span>
                <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.2rem,4vw,3.2rem)] leading-none text-white mb-3">
                  What to <span className="text-tan">Expect</span>
                </h2>
                <div className="w-[52px] h-[3px] bg-red rounded mb-10" />

                <div className="space-y-8">
                  {steps.map((s) => (
                    <div key={s.num} className="flex gap-5">
                      <div className="font-[family-name:var(--font-bebas)] text-[2.4rem] leading-none text-green-lt/30 flex-shrink-0 w-10 pt-0.5">
                        {s.num}
                      </div>
                      <div>
                        <h3 className="font-[family-name:var(--font-bebas)] text-[1.5rem] text-white mb-1">
                          {s.title}
                        </h3>
                        <p className="text-gray text-[0.9rem] leading-relaxed">{s.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bring List */}
              <div>
                <span className="font-[family-name:var(--font-barlow)] font-bold text-[0.78rem] tracking-[4px] uppercase text-tan block mb-2">
                  Checklist
                </span>
                <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.2rem,4vw,3.2rem)] leading-none text-white mb-3">
                  What to <span className="text-tan">Bring</span>
                </h2>
                <div className="w-[52px] h-[3px] bg-red rounded mb-10" />

                <ul className="space-y-3">
                  {whatToBring.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray text-[0.93rem]">
                      <span className="w-5 h-5 rounded-full border-2 border-green flex items-center justify-center flex-shrink-0 text-green text-[0.6rem]">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-4 bg-green/8 border-l-[3px] border-green rounded-md">
                  <p className="text-[0.87rem] text-gray leading-relaxed">
                    Don't have all the gear?{" "}
                    <strong className="text-white">Come anyway.</strong> We'll never
                    turn a player away for lack of equipment.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal py-14 md:py-20 border-t border-white/6">
          <div className="max-w-[680px] mx-auto px-6 text-center">
            <span className="font-[family-name:var(--font-barlow)] font-bold text-[0.78rem] tracking-[4px] uppercase text-tan block mb-2">
              Stay in the Loop
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,5vw,3.9rem)] leading-none text-white mb-4">
              Ready to Be a <span className="text-green-lt">Yard Goat?</span>
            </h2>
            <p className="text-gray text-[0.97rem] leading-relaxed mb-8">
              Follow our Facebook page for tryout date announcements, or send us a
              message and we'll reach out when dates are confirmed.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a
                href={siteConfig.register}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green text-white font-[family-name:var(--font-barlow)] font-bold text-[0.95rem] tracking-[1.5px] uppercase px-7 py-3 rounded border-2 border-green hover:bg-green-dk hover:border-green-dk transition-all hover:shadow-[0_8px_24px_rgba(46,125,50,0.4)]"
              >
                Register Now ⚾
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[rgba(24,119,242,0.15)] text-white font-[family-name:var(--font-barlow)] font-bold text-[0.95rem] tracking-[1.5px] uppercase px-7 py-3 rounded border-2 border-[rgba(24,119,242,0.4)] hover:bg-[rgba(24,119,242,0.28)] hover:border-[rgba(24,119,242,0.7)] transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Follow on Facebook
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-transparent text-white font-[family-name:var(--font-barlow)] font-bold text-[0.95rem] tracking-[1.5px] uppercase px-7 py-3 rounded border-2 border-white/40 hover:border-white hover:bg-white/8 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
