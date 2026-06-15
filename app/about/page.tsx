import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About Us | Paradise Yard Goats Baseball",
  description: "Learn about the Paradise Yard Goats — our mission, coaches, and commitment to developing players and building character through competitive youth baseball.",
};

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
      </svg>
    ),
    title: "Coaching",
    body: "Coaches focused on player development at every age group.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M6 9H3v12h3V9z" />
        <path d="M10 3H7v18h3V3z" />
        <path d="M14 6h-3v15h3V6z" />
        <path d="M18 1h-3v20h3V1z" />
        <path d="M22 5h-3v16h3V5z" />
      </svg>
    ),
    title: "Competitive Schedule",
    body: "We play the best, to be the best — tournaments and top-tier competition.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Player Development",
    body: "Building skills, confidence, and baseball IQ at every level of play.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Character First",
    body: "Integrity, accountability, and teamwork come first — on and off the field.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 000 20M12 2a14.5 14.5 0 010 20M2 12h20" />
        <path d="M2.5 8.5h19M2.5 15.5h19" />
      </svg>
    ),
    title: "Community",
    body: "Proudly representing Paradise, Texas — built by the community, for the community.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── PAGE HEADER ─────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden pt-[70px]"
          style={{ minHeight: "clamp(300px, 50vh, 420px)" }}
        >
          <Image
            src="/images/baseball-tryout-image.png"
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
          {/* Bottom fade into next section */}
          <div
            className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, #07111F)" }}
          />

          <div
            className="relative max-w-[1280px] mx-auto px-6 py-12 flex flex-col justify-end"
            style={{ minHeight: "inherit" }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[0.72rem] font-inter uppercase tracking-[1.5px] text-white/40 mb-6">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>&rsaquo;</span>
              <span className="text-green">About</span>
            </nav>

            {/* Accent eyebrow */}
            <p
              className="font-bebas tracking-[3px] text-green mb-2"
              style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
            >
              More than baseball.
            </p>

            {/* Title */}
            <h1
              className="font-bebas text-white leading-none tracking-wide"
              style={{ fontSize: "clamp(4rem, 10vw, 7.5rem)" }}
            >
              About <span className="text-green">The Yard Goats</span>
            </h1>
          </div>
        </section>

        {/* ── MAIN CONTENT ────────────────────────────────────────── */}
        <section className="bg-deep-navy py-20 md:py-28">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

              {/* LEFT — Mission */}
              <div>
                <span
                  className="font-inter font-bold uppercase tracking-[3px] text-green block mb-2"
                  style={{ fontSize: "0.72rem" }}
                >
                  Our Mission
                </span>
                <h2
                  className="font-bebas text-white leading-none mb-3"
                  style={{ fontSize: "clamp(2.6rem, 5vw, 3.8rem)" }}
                >
                  Developing Players.<br />
                  <span className="text-green">Building Men.</span>
                </h2>
                <div className="w-12 h-[3px] rounded mb-8" style={{ backgroundColor: "#B3261E" }} />

                <div className="space-y-5 mb-10">
                  <p
                    className="font-inter text-muted-gray leading-relaxed"
                    style={{ fontSize: "1rem" }}
                  >
                    Paradise Yard Goats Baseball gives young athletes a place to compete, grow, and
                    represent Paradise with pride. From coach pitch to tournament play, our teams focus
                    on fundamentals, effort, sportsmanship, and love for the game.
                  </p>
                </div>

                <Link
                  href="/tryouts"
                  className="inline-flex items-center gap-2 bg-green hover:bg-green-dk text-white font-inter font-bold uppercase tracking-[2px] px-8 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5"
                  style={{ fontSize: "0.8rem" }}
                >
                  Join The Goats
                </Link>
              </div>

              {/* RIGHT — Feature list */}
              <div className="space-y-4">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="flex items-start gap-5 bg-charcoal border border-royal-blue/25 rounded-lg p-5 hover:border-royal-blue/60 transition-colors duration-200"
                  >
                    {/* Circle icon */}
                    <div
                      className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-green"
                      style={{ background: "rgba(0,61,165,0.18)", border: "1.5px solid rgba(0,61,165,0.4)" }}
                    >
                      {f.icon}
                    </div>
                    <div>
                      <h3
                        className="font-bebas text-white leading-none mb-1"
                        style={{ fontSize: "1.35rem" }}
                      >
                        {f.title}
                      </h3>
                      <p
                        className="font-inter text-muted-gray leading-relaxed"
                        style={{ fontSize: "0.9rem" }}
                      >
                        {f.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── PHILOSOPHY ──────────────────────────────────────────── */}
        <section className="bg-charcoal py-20 md:py-28">
          <div className="max-w-[1280px] mx-auto px-6">

            {/* Top — headline + body */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-16">
              <div>
                <span
                  className="font-inter font-bold uppercase tracking-[3px] text-green block mb-3"
                  style={{ fontSize: "0.72rem" }}
                >
                  Our Philosophy
                </span>
                <h2
                  className="font-bebas text-white leading-none mb-3"
                  style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
                >
                  From The <span className="text-green">Dirt Up</span>
                </h2>
                <div className="w-12 h-[3px] bg-green rounded" />
              </div>
              <p
                className="font-inter text-muted-gray leading-relaxed self-center"
                style={{ fontSize: "1rem" }}
              >
                At Paradise Yard Goats, success is measured by more than wins and losses. We focus on
                teaching fundamentals, building confidence, encouraging teamwork, and helping players
                develop a lifelong love for the game that carries them far beyond the baseball field.
              </p>
            </div>

            {/* Bottom — 4-column pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                      <path d="M12 6v6l4 2" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  ),
                  title: "Baseball Skills",
                  body: "From throwing mechanics to bat path, we teach the fundamentals that build players who truly understand the game from the ground up.",
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 00-3-3.87" />
                      <path d="M16 3.13a4 4 0 010 7.75" />
                    </svg>
                  ),
                  title: "Teamwork",
                  body: "Baseball is played together. We build players who trust their teammates, communicate clearly, and celebrate each other's success.",
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ),
                  title: "Confidence",
                  body: "We give players repetition, encouragement, and small wins that stack into real belief — on the field and far beyond it.",
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M8 6h8v8a4 4 0 01-8 0V6z" />
                      <path d="M6 6H4v3a4 4 0 004 4" />
                      <path d="M18 6h2v3a4 4 0 01-4 4" />
                      <path d="M12 18v3" />
                      <path d="M9 21h6" />
                    </svg>
                  ),
                  title: "Sportsmanship",
                  body: "How you handle a strikeout says more than a home run. We develop players who compete hard and carry themselves with class.",
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="flex flex-col items-center text-center rounded-xl p-7 border border-white/8 hover:border-green/30 transition-colors duration-200"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-green mb-5"
                    style={{ background: "rgba(122,193,67,0.1)", border: "1px solid rgba(122,193,67,0.25)" }}
                  >
                    {p.icon}
                  </div>
                  <h3
                    className="font-bebas text-white tracking-wide mb-3"
                    style={{ fontSize: "1.25rem" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="font-inter text-muted-gray leading-relaxed"
                    style={{ fontSize: "0.88rem" }}
                  >
                    {p.body}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── BOTTOM CTA BANNER ───────────────────────────────────── */}
        <section style={{ backgroundColor: "#7AC143" }} className="py-8">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              <Image
                src="/yardgoatsimage.png"
                alt="Yard Goats"
                width={60}
                height={60}
                className="rounded-full object-cover flex-shrink-0 ring-2 ring-white/30"
              />
              <div className="flex-1 text-center sm:text-left">
                <p
                  className="font-bebas text-white tracking-wide leading-tight"
                  style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)" }}
                >
                  Think You Have What It Takes?
                </p>
                <p className="font-inter text-white/85 mt-0.5" style={{ fontSize: "0.9rem" }}>
                  Tryouts are open — come show us what you&apos;ve got.
                </p>
              </div>
              <a
                href={siteConfig.register}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 font-inter font-bold uppercase tracking-[2px] text-white px-8 py-3 rounded transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ fontSize: "0.8rem", backgroundColor: "#07111F", border: "2px solid #07111F" }}
              >
                Register Now
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
