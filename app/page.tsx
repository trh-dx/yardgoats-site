import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Scoreboard from "@/components/Scoreboard";
import Sponsors from "@/components/Sponsors";

export const metadata: Metadata = {
  title: {
    absolute: "Paradise Yard Goats Baseball | Youth Baseball in Paradise, TX",
  },
  description:
    "Paradise Yard Goats is a youth baseball organization in Paradise, Texas, helping players ages 7U through 11U grow through teamwork, development, and competitive baseball.",
  openGraph: {
    title: "Paradise Yard Goats Baseball | Youth Baseball in Paradise, TX",
    description:
      "Paradise Yard Goats is a youth baseball organization in Paradise, Texas, helping players ages 7U through 11U grow through teamwork, development, and competitive baseball.",
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
          className="relative min-h-[78vh] lg:min-h-[85vh] flex items-start overflow-hidden"
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
          <div className="relative z-10 max-w-[1280px] mx-auto px-5 w-full pt-10 pb-16">
            <div className="max-w-[580px]">

              {/* "HOME OF" — accent script */}
              <p
                className="font-marker text-green mb-1"
                style={{ fontSize: "clamp(1.23rem, 2.8vw, 1.78rem)" }}
              >
                Home of The
              </p>

              {/* "PARADISE YARD GOATS" — display */}
              <h1
                className="font-bebas text-white leading-none tracking-wide whitespace-nowrap"
                style={{
                  fontSize: "clamp(3rem, 9vw, 9rem)",
                  WebkitTextStroke: "2.5px #1A5FD4",
                  textShadow: "2px 3px 6px rgba(0,0,0,0.55)",
                }}
              >
                Paradise Yard Goats
              </h1>

              {/* "YOUTH BASEBALL" — white with green accent bar */}
              <div className="mt-1 md:-mt-3 w-fit">
                <p
                  className="font-bebas text-white leading-none"
                  style={{
                    fontSize: "clamp(2rem, 5.5vw, 4.5rem)",
                    letterSpacing: "0.12em",
                    WebkitTextStroke: "0.5px #003DA5",
                    textShadow: "1px 2px 0 rgba(0, 61, 165, 0.28)",
                  }}
                >
                  Youth Baseball
                </p>
                <div className="h-[3px] bg-green rounded mt-1" />
              </div>

              {/* Tagline */}
              <div
                className="mt-6 font-inter text-muted-gray tracking-[0.8px] leading-relaxed"
                style={{ fontSize: "clamp(0.85rem, 1.4vw, 1rem)" }}
              >
                <p>Built on teamwork, grit, development, and community pride in Paradise, Texas.</p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  href="/teams"
                  className="inline-flex items-center border-2 border-white text-white font-inter font-bold text-[0.8rem] tracking-[2px] uppercase px-7 py-3 rounded hover:bg-white hover:text-deep-navy transition-all duration-200"
                >
                  Our Teams
                </Link>
              </div>

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

      </main>
      <Footer />
    </>
  );
}
