import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Teams | Paradise Yard Goats Baseball",
  description:
    "Meet the Paradise Yard Goats — player-focused youth baseball in Paradise, Texas. Explore our teams, coaches, and development philosophy.",
};

// ── Data ─────────────────────────────────────────────────────────────

const teamCards = [
  {
    age: "7U",
    name: "7U Yard Goats",
    format: "Coach Pitch",
    headCoach: "Update with name",
    assistantCoach: "Update with name",
    city: "Paradise, TX",
    record: "—",
  },
  {
    age: "8U",
    name: "8U Yard Goats",
    format: "Coach Pitch",
    headCoach: "Update with name",
    assistantCoach: "Update with name",
    city: "Paradise, TX",
    record: "—",
  },
  {
    age: "9U",
    name: "9U Yard Goats",
    format: "Kid Pitch",
    headCoach: "Update with name",
    assistantCoach: "Update with name",
    city: "Paradise, TX",
    record: "—",
  },
  {
    age: "11U",
    name: "11U Yard Goats",
    format: "Tournament",
    headCoach: "Update with name",
    assistantCoach: "Update with name",
    city: "Paradise, TX",
    record: "—",
  },
];

const coachCards = [
  {
    name: "Coach Name",
    team: "7U / 8U Yard Goats",
    bio: "Dedicated to giving every young player a positive experience on the diamond. Believes the most important development happens in practice, not just in games.",
    years: 5,
    quote: "Every great player was once a beginner who just kept showing up.",
  },
  {
    name: "Coach Name",
    team: "9U Yard Goats",
    bio: "Brings a calm, instructive approach that helps players transition confidently to kid pitch. Focused on building habits that stick — in baseball and in life.",
    years: 4,
    quote: "Work hard in silence. Let the game be your noise.",
  },
  {
    name: "Coach Name",
    team: "11U Yard Goats",
    bio: "Develops the complete player — physical tools, baseball IQ, and the mental toughness to compete at the regional level with poise and intensity.",
    years: 7,
    quote: "Success is earned, never given. This group earns it every day.",
  },
];

const spotlightPlayers = [
  {
    name: "Player Name",
    position: "Shortstop",
    team: "11U Yard Goats",
    highlight:
      "Has demonstrated outstanding effort and leadership throughout the season while continuing to raise the level of every player around them. A true team-first competitor who leads by example.",
  },
  {
    name: "Player Name",
    position: "Catcher",
    team: "9U Yard Goats",
    highlight:
      "Improved dramatically behind the plate this season through patience and hard work. The kind of player every team is better for having — attitude and effort, every single day.",
  },
  {
    name: "Player Name",
    position: "Pitcher / OF",
    team: "8U Yard Goats",
    highlight:
      "Shows maturity beyond their years with composure on the mound and infectious energy in the dugout. One of the most coachable players on the roster — always asking what they can do better.",
  },
  {
    name: "Player Name",
    position: "1B / Pitcher",
    team: "7U Yard Goats",
    highlight:
      "In their first season of organized baseball, this player has become someone teammates look to for encouragement. Pure heart and hustle from the first inning to the last.",
  },
];

// SVG icons for development pillars
const PillarIcons = {
  skills: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="14" r="11" />
      <path d="M6 14 Q9 8 14 14 Q19 20 22 14" />
      <path d="M6 14 Q9 20 14 14 Q19 8 22 14" />
    </svg>
  ),
  team: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="9" r="3.5" />
      <circle cx="19" cy="9" r="3.5" />
      <path d="M2 23 C2 18 5 15.5 9 15.5" />
      <path d="M26 23 C26 18 23 15.5 19 15.5" />
      <path d="M9 15.5 C9 15.5 14 13.5 19 15.5" />
      <path d="M9 23 L19 23" />
    </svg>
  ),
  confidence: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3 L16.5 10.5 H24.5 L18 15 L20.5 22.5 L14 18 L7.5 22.5 L10 15 L3.5 10.5 H11.5 Z" />
    </svg>
  ),
  sport: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 4 L19 4 L19 16 L14 20 L9 16 Z" />
      <path d="M9 4 L5 8 L9 16" />
      <path d="M19 4 L23 8 L19 16" />
      <path d="M14 20 L14 25" />
      <path d="M10 25 L18 25" />
    </svg>
  ),
};

const pillars = [
  {
    icon: PillarIcons.skills,
    title: "Baseball Skills",
    desc: "From throwing mechanics to bat path, we teach the fundamentals that build players who truly understand the game from the ground up.",
  },
  {
    icon: PillarIcons.team,
    title: "Teamwork",
    desc: "Baseball is played together. We build players who trust their teammates, communicate clearly, and celebrate each other's success.",
  },
  {
    icon: PillarIcons.confidence,
    title: "Confidence",
    desc: "We give players repetition, encouragement, and small wins that stack into real belief — on the field and far beyond it.",
  },
  {
    icon: PillarIcons.sport,
    title: "Sportsmanship",
    desc: "How you handle a strikeout says more than a home run. We develop players who compete hard and carry themselves with class.",
  },
];

// ── Component ─────────────────────────────────────────────────────────

export default function TeamsPage() {
  return (
    <>
      <Nav />
      <main style={{ backgroundColor: "#08111F", color: "#F8F6F0" }}>

        {/* ─── SECTION 1 · HERO ─────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ minHeight: "clamp(540px, 88vh, 780px)", paddingTop: "68px" }}
        >
          <Image
            src="/images/baseball-tryout-image.png"
            alt=""
            fill
            className="object-cover object-center scale-105"
            priority
          />
          {/* Forest green cinematic overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, rgba(8,17,31,0.97) 0%, rgba(0,166,81,0.42) 45%, rgba(8,17,31,0.93) 100%)",
            }}
          />
          {/* Top vignette */}
          <div
            className="absolute inset-x-0 top-0 h-40 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, rgba(8,17,31,0.6), transparent)" }}
          />
          {/* Bottom fade */}
          <div
            className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
            style={{ background: "linear-gradient(to top, #08111F, transparent)" }}
          />

          <div
            className="relative max-w-[1180px] mx-auto px-6 flex flex-col justify-center"
            style={{ minHeight: "clamp(540px, 88vh, 780px)" }}
          >
            {/* Breadcrumb */}
            <div
              className="absolute font-[family-name:var(--font-barlow)] text-[0.72rem] tracking-[1.5px] uppercase flex items-center gap-2"
              style={{ top: "2.5rem", left: "1.5rem", color: "rgba(255,255,255,0.35)" }}
            >
              <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>›</span>
              <span style={{ color: "#D4AF37" }}>Teams</span>
            </div>

            <div className="max-w-[680px]">
              {/* Eyebrow badge */}
              <div
                className="inline-flex items-center gap-2 font-[family-name:var(--font-barlow)] font-bold text-[0.72rem] tracking-[4px] uppercase mb-5 px-3 py-1.5 rounded-sm"
                style={{
                  color: "#D4AF37",
                  backgroundColor: "rgba(8,17,31,0.75)",
                  border: "1px solid rgba(212,175,55,0.35)",
                }}
              >
                Paradise Yard Goats Baseball · Paradise, TX
              </div>

              {/* Headline */}
              <h1
                className="font-[family-name:var(--font-bebas)] leading-none tracking-wide mb-5"
                style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)", letterSpacing: "0.02em", textShadow: "0 2px 24px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.9)", lineHeight: 1.1 }}
              >
                <span className="text-white">Built on Dirt.</span><br />
                <span style={{ color: "#D4AF37" }}>Driven by Development.</span>
              </h1>

              {/* Support text */}
              <p
                className="text-[0.97rem] leading-relaxed mb-8 max-w-[500px]"
                style={{ color: "rgba(255,255,255,0.78)" }}
              >
                Developing North Texas ballplayers through hard work, competition, and a passion for the game.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="#teams"
                  className="inline-flex items-center gap-2 font-[family-name:var(--font-barlow)] font-bold text-[0.95rem] tracking-[1.5px] uppercase px-7 py-3 rounded transition-all hover:-translate-y-0.5 active:translate-y-0"
                  style={{ backgroundColor: "#D4AF37", color: "#1A1A1A", border: "2px solid #D4AF37" }}
                >
                  View Teams
                </a>
                <Link
                  href="/tryouts"
                  className="inline-flex items-center gap-2 font-[family-name:var(--font-barlow)] font-bold text-[0.95rem] tracking-[1.5px] uppercase px-7 py-3 rounded transition-all hover:-translate-y-0.5 active:translate-y-0 hover:border-white/70"
                  style={{ color: "#fff", border: "2px solid rgba(255,255,255,0.3)" }}
                >
                  Register for Tryouts
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 2 · TEAM DIRECTORY ───────────────────────────── */}
        <section
          id="teams"
          className="py-16 md:py-24"
          style={{ backgroundColor: "#0a1525", scrollMarginTop: "68px" }}
        >
          <div className="max-w-[1180px] mx-auto px-6">

            <div className="text-center mb-12">
              <span
                className="font-[family-name:var(--font-barlow)] font-bold text-[0.75rem] tracking-[4px] uppercase block mb-2"
                style={{ color: "#D4AF37" }}
              >
                2026 Season
              </span>
              <h2
                className="font-[family-name:var(--font-bebas)] leading-none text-white mb-3"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.2rem)" }}
              >
                Our Teams
              </h2>
              <div className="w-12 h-[3px] rounded mx-auto mb-5" style={{ backgroundColor: "#D4AF37" }} />
              <p
                className="text-[0.95rem] leading-relaxed max-w-[520px] mx-auto"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Find your team and learn more about the coaches and players that make up the Yard Goats family.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {teamCards.map((team) => (
                <div
                  key={team.age}
                  className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-[rgba(212,175,55,0.18)] hover:border-[rgba(212,175,55,0.55)] shadow-[0_4px_28px_rgba(0,0,0,0.45)] hover:shadow-[0_24px_64px_rgba(212,175,55,0.1),0_4px_28px_rgba(0,0,0,0.5)]"
                  style={{ backgroundColor: "#0f1f35" }}
                >
                  {/* Gold top stripe */}
                  <div style={{ height: "3px", background: "linear-gradient(to right, #D4AF37, #E8CC65, #D4AF37)" }} />

                  {/* Photo area */}
                  <div
                    className="relative overflow-hidden flex flex-col items-center justify-center"
                    style={{
                      background: "linear-gradient(160deg, #00A651 0%, #0d2419 100%)",
                      aspectRatio: "4 / 3",
                    }}
                  >
                    {/* Watermark age */}
                    <span
                      className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-bebas)] select-none pointer-events-none leading-none"
                      aria-hidden="true"
                      style={{ fontSize: "clamp(6rem, 17vw, 10rem)", color: "rgba(255,255,255,0.04)" }}
                    >
                      {team.age}
                    </span>
                    {/* Age badge */}
                    <div
                      className="absolute top-3 right-3 font-[family-name:var(--font-bebas)] text-[1.1rem] px-2.5 py-0.5 rounded-sm"
                      style={{ backgroundColor: "#D4AF37", color: "#1A1A1A" }}
                    >
                      {team.age}
                    </div>
                    {/* Placeholder */}
                    <div className="relative z-10 flex flex-col items-center gap-1.5">
                      <span style={{ fontSize: "2rem", opacity: 0.12 }}>⚾</span>
                      <span
                        className="font-[family-name:var(--font-barlow)] font-bold text-[0.6rem] uppercase tracking-[2px]"
                        style={{ color: "rgba(255,255,255,0.28)" }}
                      >
                        Team Photo
                      </span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-4 pt-3.5">
                    <h3
                      className="font-[family-name:var(--font-bebas)] text-white leading-none mb-0.5"
                      style={{ fontSize: "1.55rem" }}
                    >
                      {team.name}
                    </h3>
                    <div
                      className="font-[family-name:var(--font-barlow)] font-bold text-[0.67rem] tracking-[2.5px] uppercase mb-4"
                      style={{ color: "#D4AF37" }}
                    >
                      {team.format}
                    </div>

                    <div className="space-y-1.5 mb-4">
                      {[
                        { label: "Head Coach",  val: team.headCoach },
                        { label: "Asst. Coach", val: team.assistantCoach },
                        { label: "Home",        val: team.city },
                        { label: "Record",      val: team.record },
                      ].map((row) => (
                        <div key={row.label} className="flex gap-2 text-[0.77rem]">
                          <span className="flex-shrink-0 w-[70px]" style={{ color: "rgba(255,255,255,0.32)" }}>
                            {row.label}
                          </span>
                          <span className="text-white truncate">{row.val}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <a
                        href="/#teams"
                        className="flex-1 text-center font-[family-name:var(--font-barlow)] font-bold text-[0.73rem] tracking-[1.5px] uppercase py-2 rounded-sm transition-colors hover:bg-[#E8CC65]"
                        style={{ backgroundColor: "#D4AF37", color: "#1A1A1A" }}
                      >
                        View Team
                      </a>
                      <a
                        href="/#contact"
                        className="flex-1 text-center font-[family-name:var(--font-barlow)] font-bold text-[0.73rem] tracking-[1.5px] uppercase py-2 rounded-sm transition-all hover:border-[rgba(212,175,55,0.55)] hover:text-[#D4AF37]"
                        style={{
                          color: "rgba(255,255,255,0.55)",
                          border: "1px solid rgba(255,255,255,0.13)",
                        }}
                      >
                        Contact Coach
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 3 · MEET THE COACHES ─────────────────────────── */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#0d1b2e" }}>
          <div className="max-w-[1180px] mx-auto px-6">

            <div className="text-center mb-12">
              <span
                className="font-[family-name:var(--font-barlow)] font-bold text-[0.75rem] tracking-[4px] uppercase block mb-2"
                style={{ color: "#D4AF37" }}
              >
                The Coaching Staff
              </span>
              <h2
                className="font-[family-name:var(--font-bebas)] leading-none text-white mb-3"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.2rem)" }}
              >
                Coaches Who Care
              </h2>
              <div className="w-12 h-[3px] rounded mx-auto mb-5" style={{ backgroundColor: "#D4AF37" }} />
              <p
                className="text-[0.95rem] leading-relaxed max-w-[480px] mx-auto"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Our coaches are committed to helping players grow as athletes, teammates, and young leaders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coachCards.map((coach, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden transition-all duration-300 hover:border-[rgba(212,175,55,0.3)] hover:-translate-y-1"
                  style={{
                    backgroundColor: "#121e30",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {/* Photo area */}
                  <div
                    className="pt-8 pb-5 flex flex-col items-center"
                    style={{
                      background: "linear-gradient(to bottom, rgba(0,166,81,0.18) 0%, transparent 100%)",
                    }}
                  >
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center mb-3"
                      style={{
                        background: "linear-gradient(140deg, #00A651, #0d2419)",
                        border: "2px solid rgba(212,175,55,0.3)",
                      }}
                    >
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 40 40" style={{ color: "rgba(255,255,255,0.2)" }}>
                        <circle cx="20" cy="14" r="7" stroke="currentColor" strokeWidth="1.75"/>
                        <path d="M4 38 C4 28 11 23 20 23 C29 23 36 28 36 38" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <h3
                      className="font-[family-name:var(--font-bebas)] text-white leading-none mb-0.5"
                      style={{ fontSize: "1.65rem" }}
                    >
                      {coach.name}
                    </h3>
                    <div
                      className="font-[family-name:var(--font-barlow)] font-bold text-[0.67rem] tracking-[2px] uppercase"
                      style={{ color: "#D4AF37" }}
                    >
                      {coach.team}
                    </div>
                  </div>

                  <div className="px-6 pb-7">
                    <p
                      className="text-[0.88rem] leading-relaxed mb-4"
                      style={{ color: "rgba(255,255,255,0.48)" }}
                    >
                      {coach.bio}
                    </p>

                    <div
                      className="font-[family-name:var(--font-barlow)] font-bold text-[0.65rem] tracking-[2px] uppercase mb-3"
                      style={{ color: "rgba(255,255,255,0.28)" }}
                    >
                      {coach.years} Years Coaching
                    </div>

                    <blockquote
                      className="text-[0.84rem] italic leading-relaxed pl-3"
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        borderLeft: "2px solid #D4AF37",
                      }}
                    >
                      &ldquo;{coach.quote}&rdquo;
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 4 · PLAYER SPOTLIGHTS ────────────────────────── */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#0a1525" }}>
          <div className="max-w-[1180px] mx-auto px-6">

            <div className="text-center mb-12">
              <span
                className="font-[family-name:var(--font-barlow)] font-bold text-[0.75rem] tracking-[4px] uppercase block mb-2"
                style={{ color: "#D4AF37" }}
              >
                Player Recognition
              </span>
              <h2
                className="font-[family-name:var(--font-bebas)] leading-none text-white mb-3"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.2rem)" }}
              >
                Player Spotlights
              </h2>
              <div className="w-12 h-[3px] rounded mx-auto mb-5" style={{ backgroundColor: "#D4AF37" }} />
              <p
                className="text-[0.95rem] leading-relaxed max-w-[480px] mx-auto"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Celebrating effort, growth, sportsmanship, and the players who set the standard every day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {spotlightPlayers.map((player, i) => (
                <div
                  key={i}
                  className="flex rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,175,55,0.28)]"
                  style={{
                    backgroundColor: "#121e30",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {/* Action photo */}
                  <div
                    className="w-[90px] flex-shrink-0 flex items-center justify-center relative overflow-hidden"
                    style={{ background: "linear-gradient(180deg, #00A651 0%, #0a1f10 100%)" }}
                  >
                    <span style={{ fontSize: "1.75rem", opacity: 0.15 }}>⚾</span>
                  </div>

                  {/* Info */}
                  <div className="p-5 flex-1 min-w-0">
                    <div
                      className="font-[family-name:var(--font-barlow)] font-bold text-[0.64rem] tracking-[2.5px] uppercase mb-1"
                      style={{ color: "#D4AF37" }}
                    >
                      {player.position} &nbsp;·&nbsp; {player.team}
                    </div>
                    <h3
                      className="font-[family-name:var(--font-bebas)] text-white leading-none mb-2"
                      style={{ fontSize: "1.4rem" }}
                    >
                      {player.name}
                    </h3>
                    <p
                      className="text-[0.84rem] leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.48)" }}
                    >
                      {player.highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 5 · DEVELOPMENT PHILOSOPHY ──────────────────── */}
        <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: "#0b1827" }}>
          {/* Dirt dot texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(160,120,70,0.12) 1px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative max-w-[1180px] mx-auto px-6">

            {/* Two-column intro */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-14">
              <div>
                <span
                  className="font-[family-name:var(--font-barlow)] font-bold text-[0.75rem] tracking-[4px] uppercase block mb-2"
                  style={{ color: "#D4AF37" }}
                >
                  Our Philosophy
                </span>
                <h2
                  className="font-[family-name:var(--font-bebas)] leading-none text-white mb-4"
                  style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)" }}
                >
                  From the{" "}
                  <span style={{ color: "#D4AF37" }}>Dirt Up</span>
                </h2>
                <div className="w-12 h-[3px] rounded" style={{ backgroundColor: "#D4AF37" }} />
              </div>
              <div className="lg:pb-2">
                <p
                  className="text-[1rem] leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.52)" }}
                >
                  At Paradise Yard Goats, success is measured by more than wins and losses. We focus on
                  teaching fundamentals, building confidence, encouraging teamwork, and helping players
                  develop a lifelong love for the game that carries them far beyond the baseball field.
                </p>
              </div>
            </div>

            {/* Four pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(212,175,55,0.4)]"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(212,175,55,0.14)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{
                      backgroundColor: "rgba(212,175,55,0.09)",
                      color: "#D4AF37",
                    }}
                  >
                    {p.icon}
                  </div>
                  <h4
                    className="font-[family-name:var(--font-bebas)] text-white leading-none mb-2"
                    style={{ fontSize: "1.2rem" }}
                  >
                    {p.title}
                  </h4>
                  <p
                    className="text-[0.82rem] leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.42)" }}
                  >
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 6 · JOIN THE HERD CTA ────────────────────────── */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <Image
            src="/images/baseball-tryout-image.png"
            alt=""
            fill
            className="object-cover object-center"
          />
          {/* Sunset-toned green overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(150deg, rgba(8,17,31,0.94) 0%, rgba(0,166,81,0.85) 50%, rgba(8,17,31,0.94) 100%)",
            }}
          />
          {/* Top + bottom vignette */}
          <div
            className="absolute inset-x-0 top-0 h-20 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, #08111F, transparent)" }}
          />

          <div className="relative max-w-[680px] mx-auto px-6 text-center">
            <div
              className="inline-flex items-center font-[family-name:var(--font-barlow)] font-bold text-[0.7rem] tracking-[4px] uppercase mb-5 px-3 py-1.5 rounded-sm"
              style={{
                color: "#D4AF37",
                backgroundColor: "rgba(212,175,55,0.08)",
                border: "1px solid rgba(212,175,55,0.22)",
              }}
            >
              Open to All Skill Levels
            </div>

            <h2
              className="font-[family-name:var(--font-bebas)] leading-none text-white mb-4"
              style={{ fontSize: "clamp(3rem, 9vw, 6rem)" }}
            >
              Ready to Join{" "}
              <span style={{ color: "#D4AF37" }}>the Goats?</span>
            </h2>

            <p
              className="text-[1rem] leading-relaxed mb-8 max-w-[460px] mx-auto"
              style={{ color: "rgba(255,255,255,0.52)" }}
            >
              We&apos;re always looking for players who want to learn, compete, and grow in a positive
              baseball environment. There&apos;s a spot on this team for you.
            </p>

            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                href="/tryouts"
                className="inline-flex items-center gap-2 font-[family-name:var(--font-barlow)] font-bold text-[0.95rem] tracking-[1.5px] uppercase px-7 py-3 rounded transition-all hover:-translate-y-0.5 hover:bg-[#E8CC65]"
                style={{ backgroundColor: "#D4AF37", color: "#1A1A1A", border: "2px solid #D4AF37" }}
              >
                Register for Tryouts
              </Link>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 font-[family-name:var(--font-barlow)] font-bold text-[0.95rem] tracking-[1.5px] uppercase px-7 py-3 rounded transition-all hover:-translate-y-0.5 hover:border-white/70"
                style={{ color: "#fff", border: "2px solid rgba(255,255,255,0.3)" }}
              >
                Contact Our Coaches
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
