import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import SpotlightCards from "@/components/SpotlightCards";
import CoachCards from "@/components/CoachCards";
import TeamCards from "@/components/TeamCards";
import { teams } from "@/lib/data";

export const metadata: Metadata = {
  title: "Teams | Paradise Yard Goats Baseball",
  description:
    "Meet the Paradise Yard Goats — player-focused youth baseball in Paradise, Texas. Explore our teams, coaches, and development philosophy.",
};

// ── Data ─────────────────────────────────────────────────────────────

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
    badge: "Hustle Award",
    highlight:
      "Has demonstrated outstanding effort and leadership throughout the season while continuing to raise the level of every player around them. A true team-first competitor who leads by example.",
  },
  {
    name: "Player Name",
    position: "Catcher",
    team: "9U Yard Goats",
    badge: "Gold Glove",
    highlight:
      "Improved dramatically behind the plate this season through patience and hard work. The kind of player every team is better for having — attitude and effort, every single day.",
  },
  {
    name: "Player Name",
    position: "Pitcher / OF",
    team: "8U Yard Goats",
    badge: "Practice Leader",
    highlight:
      "Shows maturity beyond their years with composure on the mound and infectious energy in the dugout. One of the most coachable players on the roster — always asking what they can do better.",
  },
  {
    name: "Player Name",
    position: "1B / Pitcher",
    team: "7U Yard Goats",
    badge: "Teammate Award",
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
      <main style={{ backgroundColor: "#001A3D", color: "#F8F6F0" }}>

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
                "linear-gradient(120deg, rgba(0,26,61,0.97) 0%, rgba(0,61,165,0.42) 45%, rgba(0,26,61,0.93) 100%)",
            }}
          />
          {/* Top vignette */}
          <div
            className="absolute inset-x-0 top-0 h-40 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, rgba(0,26,61,0.6), transparent)" }}
          />
          {/* Bottom fade */}
          <div
            className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
            style={{ background: "linear-gradient(to top, #001A3D, transparent)" }}
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
              <span style={{ color: "#7AC143" }}>Teams</span>
            </div>

            <div className="max-w-[680px]">
              {/* Eyebrow badge */}
              <div
                className="inline-flex items-center gap-2 font-[family-name:var(--font-barlow)] font-bold text-[0.72rem] tracking-[4px] uppercase mb-5 px-3 py-1.5 rounded-sm"
                style={{
                  color: "#7AC143",
                  backgroundColor: "rgba(0,26,61,0.75)",
                  border: "1px solid rgba(122,193,67,0.35)",
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
                <span style={{ color: "#7AC143" }}>Driven by Development.</span>
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
                  style={{ backgroundColor: "#7AC143", color: "#000000", border: "2px solid #7AC143" }}
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
          style={{ backgroundColor: "#001A3D", scrollMarginTop: "68px" }}
        >
          <div className="max-w-[1180px] mx-auto px-6">

            <div className="text-center mb-3">
              <span
                className="font-[family-name:var(--font-barlow)] font-bold text-[0.75rem] tracking-[4px] uppercase block mb-2"
                style={{ color: "#7AC143" }}
              >
                Travel Baseball
              </span>
              <h2
                className="font-[family-name:var(--font-bebas)] leading-none text-white mb-3"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.2rem)" }}
              >
                Yard Goats <span style={{ color: "#7AC143" }}>Teams</span>
              </h2>
              <div className="w-12 h-[3px] rounded mx-auto" style={{ backgroundColor: "#B3261E" }} />
            </div>
            <p
              className="text-center text-[1.05rem] leading-[1.78] max-w-[640px] mx-auto mt-4 mb-12"
              style={{ color: "#A7A8AA" }}
            >
              From early fundamentals to competitive tournament play, Paradise Yard Goats teams help
              players grow with confidence, effort, and a love for the game.
            </p>

            <TeamCards teams={teams} />

            {/* Sponsor callout */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-xl px-7 py-7"
              style={{
                backgroundColor: "rgba(122,193,67,0.09)",
                border: "1px solid rgba(122,193,67,0.22)",
              }}
            >
              <p className="text-[0.93rem] leading-[1.7] flex-1 max-w-[640px]" style={{ color: "#D0D1D2" }}>
                Sponsorships help support uniforms, equipment, tournament fees, practice needs, and
                player development across all Yard Goats teams.
              </p>
              <a
                href="/#sponsors"
                className="shrink-0 font-[family-name:var(--font-barlow)] font-bold text-[0.95rem] tracking-[1.5px] uppercase px-7 py-3 rounded transition-all duration-300 whitespace-nowrap hover:opacity-90"
                style={{ backgroundColor: "#7AC143", color: "#ffffff", border: "2px solid #7AC143" }}
              >
                Become a Sponsor
              </a>
            </div>

          </div>
        </section>

        {/* ─── SECTION 3 · MEET THE COACHES ─────────────────────────── */}
        <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: "#002255" }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(160,120,70,0.12) 1px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative max-w-[1180px] mx-auto px-6">

            <div className="text-center mb-12">
              <span
                className="font-[family-name:var(--font-barlow)] font-bold text-[0.75rem] tracking-[4px] uppercase block mb-2"
                style={{ color: "#7AC143" }}
              >
                The Coaching Staff
              </span>
              <h2
                className="font-[family-name:var(--font-bebas)] leading-none text-white mb-3"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.2rem)" }}
              >
                Coaches Who Care
              </h2>
              <div className="w-12 h-[3px] rounded mx-auto mb-5" style={{ backgroundColor: "#7AC143" }} />
              <p
                className="text-[0.95rem] leading-relaxed max-w-[480px] mx-auto"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Our coaches are committed to helping players grow as athletes, teammates, and young leaders.
              </p>
            </div>

            <CoachCards coaches={coachCards} />
          </div>
        </section>

        {/* ─── SECTION 4 · PLAYER SPOTLIGHTS ────────────────────────── */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#001A3D" }}>
          <div className="max-w-[1180px] mx-auto px-6">

            <div className="text-center mb-12">
              <span
                className="font-[family-name:var(--font-barlow)] font-bold text-[0.75rem] tracking-[4px] uppercase block mb-2"
                style={{ color: "#7AC143" }}
              >
                Player Recognition
              </span>
              <h2
                className="font-[family-name:var(--font-bebas)] leading-none text-white mb-3"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.2rem)" }}
              >
                Player Spotlights
              </h2>
              <div className="w-12 h-[3px] rounded mx-auto mb-5" style={{ backgroundColor: "#7AC143" }} />
              <p
                className="text-[0.95rem] leading-relaxed max-w-[480px] mx-auto"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Celebrating effort, growth, sportsmanship, and the players who set the standard every day.
              </p>
            </div>

            <SpotlightCards players={spotlightPlayers} />
          </div>
        </section>

        {/* ─── SECTION 5 · DEVELOPMENT PHILOSOPHY ──────────────────── */}
        <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: "#002255" }}>
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
                  style={{ color: "#7AC143" }}
                >
                  Our Philosophy
                </span>
                <h2
                  className="font-[family-name:var(--font-bebas)] leading-none text-white mb-4"
                  style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)" }}
                >
                  From the{" "}
                  <span style={{ color: "#7AC143" }}>Dirt Up</span>
                </h2>
                <div className="w-12 h-[3px] rounded" style={{ backgroundColor: "#7AC143" }} />
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
                  className="rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(122,193,67,0.4)]"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(122,193,67,0.14)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{
                      backgroundColor: "rgba(122,193,67,0.09)",
                      color: "#7AC143",
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
        <section className="relative py-24 md:py-40 overflow-hidden"
          style={{
            background: "radial-gradient(ellipse 90% 85% at center, #003DA5 0%, #002255 60%, #001A3D 100%)",
          }}
        >
          {/* Top fade — bridges from S5 #002255 */}
          <div
            className="absolute inset-x-0 top-0 h-32 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, #002255, transparent)" }}
          />
          {/* Logo watermark — shifted up so face aligns with headline */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ transform: "translateY(-12%)" }}
          >
            <Image
              src="/yardgoatsimage.png"
              alt=""
              width={680}
              height={680}
              className="object-contain select-none"
              style={{ opacity: 0.07, filter: "grayscale(1)" }}
            />
          </div>

          <div className="relative max-w-[680px] mx-auto px-6 text-center">
            {/* Badge */}
            <div
              className="inline-flex items-center font-[family-name:var(--font-barlow)] font-bold text-[0.7rem] tracking-[4px] uppercase mb-5 px-3 py-1.5 rounded-sm"
              style={{
                color: "#7AC143",
                backgroundColor: "rgba(122,193,67,0.1)",
                border: "1px solid rgba(122,193,67,0.55)",
              }}
            >
              Open to All Skill Levels
            </div>

            {/* Headline */}
            <h2
              className="font-[family-name:var(--font-bebas)] leading-none text-white mb-4"
              style={{ fontSize: "clamp(3rem, 9vw, 6rem)" }}
            >
              Ready to Join<br />
              <span style={{ color: "#7AC143" }}>The Goats?</span>
            </h2>

            {/* Body — two clean lines, no orphan */}
            <p
              className="text-[1rem] leading-relaxed mb-8 max-w-[380px] mx-auto"
              style={{ color: "rgba(255,255,255,0.52)" }}
            >
              We&apos;re always looking for players who want to learn, compete, and grow — there&apos;s a spot on this team for you.
            </p>

            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                href="/tryouts"
                className="inline-flex items-center gap-2 font-[family-name:var(--font-barlow)] font-bold text-[0.95rem] tracking-[1.5px] uppercase px-7 py-3 rounded transition-all hover:-translate-y-0.5 hover:bg-[#94D45A]"
                style={{ backgroundColor: "#7AC143", color: "#000000", border: "2px solid #7AC143" }}
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
