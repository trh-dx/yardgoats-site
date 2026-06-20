import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Scoreboard from "@/components/Scoreboard";
import Sponsors from "@/components/Sponsors";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Paradise Yard Goats Baseball — youth travel baseball in Paradise, TX for ages 7U through 11U. Teamwork, grit, development, and community pride.",
  openGraph: {
    title: "Paradise Yard Goats Baseball | Paradise, TX",
    description:
      "Youth travel baseball in Paradise, TX for ages 7U–11U. Built on teamwork, grit, development, and community pride.",
  },
};

// ── Data ──────────────────────────────────────────────────────────────


const TEAMS = [
  { age: "7U",  label: "Develop Fundamentals", href: "/teams" },
  { age: "8U",  label: "Build Confidence",     href: "/teams" },
  { age: "9U",  label: "Compete Together",     href: "/teams" },
  { age: "11U", label: "Train To Win",         href: "/teams" },
];

// ── Page ──────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>

        {/* ════════════════════════════════════════════════════════════
            SECTION 1 · HERO
        ════════════════════════════════════════════════════════════ */}
        <section
          className="relative min-h-screen flex items-center overflow-hidden"
          style={{ paddingTop: "70px" }}
        >
          {/* Background — baseball stadium/field */}
          <Image
            src="https://images.unsplash.com/photo-1503766587563-7cf366650cd9?auto=format&fit=crop&w=1920&q=80"
            alt=""
            fill
            className="object-cover object-center scale-105"
            priority
          />

          {/* Desktop overlay — left-heavy so image breathes on the right */}
          <div
            className="absolute inset-0 pointer-events-none hidden lg:block"
            style={{
              background:
                "linear-gradient(105deg, rgba(7,17,31,0.97) 0%, rgba(7,17,31,0.90) 40%, rgba(7,17,31,0.60) 70%, rgba(7,17,31,0.30) 100%)",
            }}
          />
          {/* Mobile overlay — softer so the field image remains visible */}
          <div
            className="absolute inset-0 pointer-events-none block lg:hidden"
            style={{
              background:
                "linear-gradient(to bottom, rgba(7,17,31,0.55) 0%, rgba(7,17,31,0.82) 60%, rgba(7,17,31,0.95) 100%)",
            }}
          />
          {/* Bottom fade into feature bar */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background: "linear-gradient(to top, #07111F 0%, transparent 100%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-[1280px] mx-auto px-5 w-full py-16">
            <div className="max-w-[580px]">

              {/* "HOME OF" — accent script */}
              <p
                className="font-marker text-green mb-1"
                style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)" }}
              >
                Home of
              </p>

              {/* "THE YARD GOATS" — display */}
              <h1
                className="font-bebas text-white leading-none tracking-wide whitespace-nowrap"
                style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}
              >
                The Yard Goats
              </h1>

              {/* "BASEBALL" — royal blue display */}
              <p
                className="font-bebas text-royal-blue leading-none -mt-1"
                style={{
                  fontSize: "clamp(2rem, 5.5vw, 4.5rem)",
                  letterSpacing: "0.12em",
                }}
              >
                Baseball
              </p>

              {/* Tagline */}
              <div
                className="mt-6 font-inter text-muted-gray tracking-[2.5px] leading-loose"
                style={{ fontSize: "clamp(0.9rem, 1.4vw, 1rem)" }}
              >
                <p>Youth baseball built on teamwork, grit, development, and community pride in Paradise, Texas.</p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  href="/teams"
                  className="inline-flex items-center border-2 border-white text-white font-inter font-bold text-[0.8rem] tracking-[2px] uppercase px-7 py-3 rounded hover:bg-white hover:text-deep-navy transition-all duration-200"
                >
                  Our Teams
                </Link>
                <Link
                  href="/tryouts"
                  className="inline-flex items-center bg-green hover:bg-green-dk text-white font-inter font-bold text-[0.8rem] tracking-[2px] uppercase px-7 py-3 rounded transition-colors duration-200"
                >
                  Join The Goats
                </Link>
              </div>

              {/* Tryout date callout */}
              <Link
                href="/tryouts"
                className="inline-flex items-center gap-3 mt-6 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-green/40 rounded px-4 py-2.5 transition-all duration-200 group"
              >
                <svg
                  className="w-4 h-4 text-green shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <rect x="3" y="4" width="18" height="17" rx="2.5" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="8" y1="2" x2="8" y2="6.5" />
                  <line x1="16" y1="2" x2="16" y2="6.5" />
                </svg>
                <span className="font-inter text-[0.8rem] text-white/75">
                  <span className="text-green font-bold">Tryouts: July 12</span>
                  {" · "}The Goat Yard, Paradise TX
                </span>
                <span className="font-inter text-[0.75rem] text-green/70 group-hover:text-green transition-colors ml-1">
                  Details →
                </span>
              </Link>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 2 · SCOREBOARD BAR
        ════════════════════════════════════════════════════════════ */}
        <Scoreboard />

        {/* ════════════════════════════════════════════════════════════
            SECTION 3 · TEAMS BY AGE GROUP
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-deep-navy py-20 md:py-28">
          <div className="max-w-[1280px] mx-auto px-5">

            {/* Header */}
            <div className="text-center mb-12">
              <p
                className="font-inter font-bold text-green uppercase tracking-[4px] mb-2"
                style={{ fontSize: "0.72rem" }}
              >
                Our Teams
              </p>
              <h2
                className="font-bebas text-white leading-none"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
              >
                Teams By Age Group
              </h2>
              <div className="w-12 h-[3px] bg-royal-blue rounded mx-auto mt-3" />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {TEAMS.map((team) => (
                <div
                  key={team.age}
                  className="group flex flex-col items-center text-center bg-charcoal border border-slate hover:border-green/40 rounded-lg px-6 py-8 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Age */}
                  <span
                    className="font-bebas text-green leading-none"
                    style={{ fontSize: "clamp(3.5rem, 8vw, 5.5rem)" }}
                  >
                    {team.age}
                  </span>

                  {/* Label */}
                  <span
                    className="font-inter font-bold text-white uppercase tracking-[2px] mt-2 mb-6"
                    style={{ fontSize: "clamp(0.6rem, 1.2vw, 0.72rem)" }}
                  >
                    {team.label}
                  </span>

                  {/* Button */}
                  <Link
                    href={team.href}
                    className="mt-auto border border-white/60 text-white font-inter font-bold text-[0.7rem] tracking-[2px] uppercase px-5 py-2 rounded group-hover:border-green group-hover:text-green transition-colors duration-200"
                  >
                    View Team
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 4 · SPONSORS
        ════════════════════════════════════════════════════════════ */}
        <Sponsors />

        {/* ════════════════════════════════════════════════════════════
            SECTION 5 · JOIN THE GOATS CTA
        ════════════════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-36 overflow-hidden">

          {/* Background — baseball/dirt image */}
          <Image
            src="/images/baseball-tryout-image.png"
            alt=""
            fill
            className="object-cover object-center"
          />

          {/* Dark overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(7,17,31,0.96) 0%, rgba(7,17,31,0.88) 55%, rgba(7,17,31,0.65) 100%)",
            }}
          />
          {/* Top fade */}
          <div
            className="absolute inset-x-0 top-0 h-20 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, #07111F 0%, transparent 100%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-[1280px] mx-auto px-5">
            <div className="max-w-[680px]">

              {/* Accent line */}
              <p
                className="font-marker text-green mb-2"
                style={{ fontSize: "clamp(1rem, 2.2vw, 1.4rem)" }}
              >
                Think You Have What It Takes?
              </p>

              {/* Main headline */}
              <h2
                className="font-bebas text-white leading-none"
                style={{ fontSize: "clamp(4rem, 10vw, 8.5rem)" }}
              >
                Join The Goats
              </h2>

              {/* Divider accent */}
              <div className="w-16 h-[3px] bg-green rounded my-6" />

              {/* Supporting copy */}
              <p
                className="font-inter text-white/70 leading-relaxed mb-8 max-w-[480px]"
                style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)" }}
              >
                Open to players ages 7–11. Tryouts are July 12 at The Goat Yard in Paradise, TX — no experience required, just a good attitude and a willingness to compete.
              </p>

              {/* CTA button */}
              <Link
                href="/tryouts"
                className="inline-flex items-center bg-green hover:bg-green-dk text-white font-inter font-bold text-[0.85rem] tracking-[2px] uppercase px-8 py-4 rounded transition-colors duration-200"
              >
                Register For Tryouts
              </Link>

            </div>
          </div>
        </section>


      </main>
      <Footer />
    </>
  );
}
