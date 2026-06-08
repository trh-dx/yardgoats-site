import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { schedule } from "@/lib/data";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Teams | Paradise Yard Goats Baseball",
  description:
    "Meet the 7U, 8U, 9U, and 11U Paradise Yard Goats teams — coach pitch through tournament baseball in Paradise, Texas.",
};

const teamData = [
  {
    age: "7U",
    eligible: "Ages 6–7",
    format: "Coach Pitch",
    level: "Rec / Development",
    season: "Spring & Summer",
    sectionBg: "bg-navy",
    accentHex: "#2E7D32",
    bar: "bg-green",
    badge: "bg-green/14 text-green-lt border-green/30",
    dot: "bg-green",
    btn: "bg-green text-white border-green hover:bg-green-dk hover:border-green-dk hover:shadow-[0_8px_20px_rgba(46,125,50,0.35)]",
    description:
      "The entry point to Yard Goats baseball. The 7U team is built around sparking a genuine love for the game — young players learn to throw, catch, and hit in a positive, pressure-free environment where fun always comes first.",
    highlights: [
      "Coach pitch — relaxed, player-friendly format",
      "Fielding positions, base running, and batting basics",
      "Team-first culture established from day one",
      "No prior experience required",
      "Encouraging coaching staff focused on growth",
    ],
  },
  {
    age: "8U",
    eligible: "Ages 7–8",
    format: "Coach Pitch",
    level: "Rec / Competitive",
    season: "Spring & Summer",
    sectionBg: "bg-charcoal",
    accentHex: "#C49A6C",
    bar: "bg-tan",
    badge: "bg-tan/14 text-tan border-tan/30",
    dot: "bg-tan",
    btn: "bg-tan text-navy border-tan hover:bg-tan-lt hover:border-tan-lt hover:shadow-[0_8px_20px_rgba(196,154,108,0.35)]",
    description:
      "The 8U Yard Goats build on a 7U foundation with more structure, competitive play, and real reps that push players to grow. Game IQ starts developing in earnest — players begin to understand the game beyond just the basics.",
    highlights: [
      "Advancing coach pitch with structured game format",
      "Competitive rec play and local league games",
      "Skill development: fielding, hitting mechanics, throws",
      "Game awareness and situational baseball basics",
      "Tournament exposure for motivated players",
    ],
  },
  {
    age: "9U",
    eligible: "Ages 8–9",
    format: "Kid Pitch",
    level: "Competitive",
    season: "Spring & Summer",
    sectionBg: "bg-navy",
    accentHex: "#B3261E",
    bar: "bg-red",
    badge: "bg-red/14 text-red border-red/30",
    dot: "bg-red",
    btn: "bg-red text-white border-red hover:bg-red-dk hover:border-red-dk hover:shadow-[0_8px_20px_rgba(179,38,30,0.35)]",
    description:
      "The bridge division. 9U makes the jump to kid pitch — a major step requiring faster thinking, cleaner execution, and real trust in teammates. Fundamentals get pressure-tested in live game action where every at-bat matters.",
    highlights: [
      "Kid pitch — players throw from the mound",
      "Advanced fielding and positional awareness",
      "In-game strategy and situational decision making",
      "Competitive league and tournament schedule",
      "Preparation for high-level tournament advancement",
    ],
  },
  {
    age: "11U",
    eligible: "Ages 10–11",
    format: "Tournament",
    level: "Tournament",
    season: "Spring – Fall",
    sectionBg: "bg-charcoal",
    accentHex: "#C49A6C",
    bar: "bg-tan",
    badge: "bg-tan/14 text-tan border-tan/30",
    dot: "bg-tan",
    btn: "bg-tan text-navy border-tan hover:bg-tan-lt hover:border-tan-lt hover:shadow-[0_8px_20px_rgba(196,154,108,0.35)]",
    description:
      "Our flagship competitive division. The 11U Yard Goats are ready for regional and invitational tournament baseball. This team demands advanced skills, high coachability, and the mental toughness to compete when the moment is biggest.",
    highlights: [
      "Kid pitch with advanced mechanics and strategy",
      "Regional and invitational tournament schedule",
      "Advanced team defense and offensive schemes",
      "High-intensity practice structure",
      "Development pathway toward high school baseball",
    ],
  },
];

export default function TeamsPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Banner ──────────────────────────────────────── */}
        <section
          className="relative bg-navy pt-[68px] overflow-hidden"
          style={{ minHeight: "clamp(380px, 55vh, 460px)" }}
        >
          {/* Diagonal field stripes */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(46,125,50,0.04) 40px, rgba(46,125,50,0.04) 41px)",
            }}
          />
          {/* Green radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 15% 55%, rgba(46,125,50,0.1) 0%, transparent 70%)",
            }}
          />
          {/* Bottom fade */}
          <div
            className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
            style={{ background: "linear-gradient(to top, #08111F, transparent)" }}
          />

          <div className="relative max-w-[1180px] mx-auto px-6 pt-10 pb-16">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[0.73rem] text-white/45 mb-10 font-[family-name:var(--font-barlow)] uppercase tracking-[1.5px]">
              <Link href="/" className="hover:text-tan transition-colors">Home</Link>
              <span>›</span>
              <span className="text-tan">Teams</span>
            </div>

            <div className="max-w-[680px]">
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

              <h1
                className="font-[family-name:var(--font-bebas)] leading-none text-white tracking-wide mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]"
                style={{ fontSize: "clamp(3.2rem, 9vw, 6.2rem)" }}
              >
                Our <span className="text-green-lt">Teams</span>
              </h1>

              <p className="text-white/80 text-[1.05rem] leading-relaxed mb-8 max-w-[480px]">
                Four divisions, one community. From first-time players to regional
                competitors — there&apos;s a place for every kid in Paradise.
              </p>

              {/* Division jump badges */}
              <div className="flex flex-wrap gap-3">
                {teamData.map((t) => (
                  <a
                    key={t.age}
                    href={`#team-${t.age}`}
                    className="font-[family-name:var(--font-bebas)] text-[1.1rem] tracking-[2px] px-4 py-1.5 rounded border-2 border-white/20 text-white/80 hover:border-green hover:text-green-lt transition-all"
                  >
                    {t.age}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Sticky Division Nav ──────────────────────────── */}
        <div className="bg-green sticky top-[68px] z-40 border-b border-green-dk/60 py-2.5">
          <div className="max-w-[1180px] mx-auto px-6 flex items-center gap-2 overflow-x-auto">
            <span className="font-[family-name:var(--font-barlow)] font-bold text-[0.7rem] tracking-[2.5px] uppercase text-white/60 pr-3 border-r border-white/20 flex-shrink-0">
              Jump to
            </span>
            {teamData.map((t) => (
              <a
                key={t.age}
                href={`#team-${t.age}`}
                className="font-[family-name:var(--font-bebas)] text-[0.95rem] tracking-[2px] px-4 py-1 rounded bg-white/10 text-white hover:bg-white/25 whitespace-nowrap flex-shrink-0 transition-all"
              >
                {t.age}
              </a>
            ))}
          </div>
        </div>

        {/* ── Team Sections ─────────────────────────────────── */}
        {teamData.map((team, idx) => {
          const teamSchedule = schedule.filter((row) =>
            row.team.includes(team.age)
          );
          const flip = idx % 2 !== 0;

          return (
            <section
              key={team.age}
              id={`team-${team.age}`}
              className={`${team.sectionBg} py-16 md:py-24`}
              style={{ scrollMarginTop: "130px" }}
            >
              <div className="max-w-[1180px] mx-auto px-6">

                {/* Section label */}
                <div className="flex items-center gap-3 mb-10">
                  <div className={`h-[3px] w-12 ${team.bar} rounded`} />
                  <span className="font-[family-name:var(--font-barlow)] font-bold text-[0.78rem] tracking-[4px] uppercase text-tan">
                    {team.format} Division
                  </span>
                </div>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-start">

                  {/* Info column */}
                  <div className={flip ? "lg:order-last" : ""}>
                    {/* Age + format badge */}
                    <div className="flex items-end gap-5 mb-2">
                      <h2
                        className="font-[family-name:var(--font-bebas)] leading-none text-white"
                        style={{ fontSize: "clamp(4.5rem, 13vw, 7.5rem)" }}
                      >
                        {team.age}
                      </h2>
                      <span
                        className={`mb-3 text-[0.7rem] font-[family-name:var(--font-barlow)] font-bold uppercase tracking-[2px] px-2.5 py-1 rounded border ${team.badge}`}
                      >
                        {team.format}
                      </span>
                    </div>

                    <p className="text-[0.75rem] font-[family-name:var(--font-barlow)] font-bold uppercase tracking-[2.5px] text-gray mb-5">
                      {team.eligible} · {team.level}
                    </p>

                    <p className="text-gray-lt text-[1rem] leading-relaxed mb-7 max-w-[510px]">
                      {team.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-3 mb-8">
                      {team.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-[0.9rem] text-gray-lt">
                          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[7px] ${team.dot}`} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Stats strip */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                      {[
                        { label: "Format",  val: team.format },
                        { label: "Ages",    val: team.eligible },
                        { label: "Season",  val: team.season },
                        { label: "Level",   val: team.level },
                      ].map((s) => (
                        <div key={s.label} className="bg-white/[0.04] rounded-lg p-3 border border-white/8">
                          <div className="text-[0.6rem] font-[family-name:var(--font-barlow)] font-bold uppercase tracking-[2px] text-gray mb-1">
                            {s.label}
                          </div>
                          <div className="font-[family-name:var(--font-barlow)] font-bold text-[0.83rem] text-white leading-snug">
                            {s.val}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex gap-3 flex-wrap">
                      <a
                        href="/#contact"
                        className={`inline-flex items-center gap-2 font-[family-name:var(--font-barlow)] font-bold text-[0.88rem] tracking-[1.5px] uppercase px-6 py-2.5 rounded border-2 transition-all hover:-translate-y-0.5 ${team.btn}`}
                      >
                        Get Info
                      </a>
                      <Link
                        href="/tryouts"
                        className="inline-flex items-center gap-2 bg-transparent text-white font-[family-name:var(--font-barlow)] font-bold text-[0.88rem] tracking-[1.5px] uppercase px-6 py-2.5 rounded border-2 border-white/30 hover:border-white hover:bg-white/8 transition-all hover:-translate-y-0.5"
                      >
                        2026 Tryouts
                      </Link>
                    </div>
                  </div>

                  {/* Visual column */}
                  <div className={flip ? "lg:order-first" : ""}>
                    {/* Team card / photo placeholder */}
                    <div className="rounded-xl overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.5)] mb-4 border border-white/[0.06]">
                      {/* Card top bar */}
                      <div
                        className="px-4 py-2.5 flex justify-between items-center"
                        style={{ backgroundColor: team.accentHex }}
                      >
                        <span className="font-[family-name:var(--font-bebas)] text-[0.82rem] tracking-[3px] text-white/85">
                          Paradise Yard Goats
                        </span>
                        <span className="font-[family-name:var(--font-bebas)] text-[0.82rem] text-white/70">
                          2026
                        </span>
                      </div>
                      {/* Photo area */}
                      <div
                        className="relative w-full flex flex-col items-center justify-center overflow-hidden"
                        style={{
                          background: "linear-gradient(160deg, #0d1d30, #060f1c)",
                          aspectRatio: "16 / 11",
                        }}
                      >
                        {/* Watermark */}
                        <span
                          className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-bebas)] text-white/[0.038] select-none pointer-events-none leading-none"
                          aria-hidden="true"
                          style={{ fontSize: "clamp(8rem, 22vw, 16rem)" }}
                        >
                          {team.age}
                        </span>
                        {/* Age circle */}
                        <div
                          className="absolute top-3.5 right-3.5 w-[54px] h-[54px] rounded-full border-2 border-white/22 flex items-center justify-center font-[family-name:var(--font-bebas)] text-[1.3rem] text-white"
                          style={{ backgroundColor: team.accentHex }}
                        >
                          {team.age}
                        </div>
                        {/* Placeholder center */}
                        <div className="relative z-10 flex flex-col items-center">
                          <span className="text-[2.5rem] opacity-[0.13] mb-2">⚾</span>
                          <span className="text-[0.68rem] text-gray tracking-[2px] uppercase opacity-50">
                            Team Photo
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Schedule mini-card */}
                    <div className="rounded-xl border border-white/8 overflow-hidden">
                      <div className="px-4 py-2.5 bg-white/[0.04] border-b border-white/8 flex items-center justify-between">
                        <span className="font-[family-name:var(--font-barlow)] font-bold text-[0.72rem] tracking-[2.5px] uppercase text-gray">
                          {team.age} Schedule
                        </span>
                        <a
                          href="/#schedule"
                          className="text-[0.7rem] font-[family-name:var(--font-barlow)] font-bold tracking-wide uppercase text-green-lt hover:text-white transition-colors"
                        >
                          Full Schedule →
                        </a>
                      </div>

                      {teamSchedule.length > 0 ? (
                        <div className="divide-y divide-white/[0.05]">
                          {teamSchedule.slice(0, 3).map((row, i) => (
                            <div key={i} className="flex items-start gap-3 px-4 py-3">
                              <div className="w-16 flex-shrink-0 pt-0.5">
                                <div className="text-[0.72rem] font-[family-name:var(--font-barlow)] font-bold text-tan leading-tight">
                                  {row.date}
                                </div>
                                {row.time !== "TBD" && (
                                  <div className="text-[0.65rem] text-gray mt-0.5">{row.time}</div>
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-[0.85rem] text-white font-semibold leading-snug">
                                  {row.event}
                                </div>
                                <div className="text-[0.72rem] text-gray mt-0.5">{row.location}</div>
                              </div>
                              {row.isTournament && (
                                <span className="text-[0.6rem] font-bold tracking-wide uppercase bg-tan/15 text-tan px-2 py-0.5 rounded flex-shrink-0 mt-0.5">
                                  Tourn.
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="px-4 py-5 text-center text-[0.82rem] text-gray">
                          Schedule updates coming soon.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* ── Philosophy ────────────────────────────────────── */}
        <section
          className="py-16 md:py-24"
          style={{ background: "linear-gradient(135deg, #0c1c12 0%, #09142a 100%)" }}
        >
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="text-center mb-12 max-w-[640px] mx-auto">
              <span className="font-[family-name:var(--font-barlow)] font-bold text-[0.78rem] tracking-[4px] uppercase text-tan block mb-2">
                What We Stand For
              </span>
              <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,5vw,3.9rem)] leading-none text-white mb-3">
                Built on <span className="text-tan">Character</span>
              </h2>
              <div className="w-[52px] h-[3px] bg-red rounded mx-auto mb-4" />
              <p className="text-gray text-[0.95rem] leading-relaxed">
                Paradise Yard Goats isn&apos;t just about wins. We measure success by how hard our
                players compete, how much they improve, and how they treat their teammates.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: "⚾",
                  title: "Fundamentals First",
                  body: "Every division, every practice — we coach the right mechanics so the game gets easier as players level up.",
                },
                {
                  icon: "🤝",
                  title: "Team Over Self",
                  body: "From 7U to 11U, we build players who cheer for their teammates as loud as they celebrate themselves.",
                },
                {
                  icon: "🏆",
                  title: "Compete With Heart",
                  body: "We teach players to leave it all on the field, respect the game, and handle both wins and losses with class.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-white/[0.04] rounded-xl p-7 border border-white/8 hover:border-green/30 hover:bg-white/[0.06] transition-all"
                >
                  <div className="text-[2.4rem] mb-4">{card.icon}</div>
                  <h3 className="font-[family-name:var(--font-bebas)] text-[1.5rem] text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray text-[0.88rem] leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="bg-charcoal py-14 md:py-20 border-t border-white/6">
          <div className="max-w-[680px] mx-auto px-6 text-center">
            <span className="font-[family-name:var(--font-barlow)] font-bold text-[0.78rem] tracking-[4px] uppercase text-tan block mb-2">
              Ready to Play?
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,5vw,3.9rem)] leading-none text-white mb-4">
              Find Your <span className="text-green-lt">Division</span>
            </h2>
            <p className="text-gray text-[0.97rem] leading-relaxed mb-8">
              Tryouts are open to all skill levels. Come show us what you&apos;ve got — we&apos;ll
              find the right spot for your player.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                href="/tryouts"
                className="inline-flex items-center gap-2 bg-green text-white font-[family-name:var(--font-barlow)] font-bold text-[0.95rem] tracking-[1.5px] uppercase px-7 py-3 rounded border-2 border-green hover:bg-green-dk hover:border-green-dk transition-all hover:shadow-[0_8px_24px_rgba(46,125,50,0.4)]"
              >
                ⚾ 2026 Tryout Info
              </Link>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-transparent text-white font-[family-name:var(--font-barlow)] font-bold text-[0.95rem] tracking-[1.5px] uppercase px-7 py-3 rounded border-2 border-white/40 hover:border-white hover:bg-white/8 transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
