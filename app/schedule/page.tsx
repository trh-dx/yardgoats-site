import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Schedule from "@/components/Schedule";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Schedule | Paradise Yard Goats Baseball",
  description:
    "View the full 2026 Paradise Yard Goats game schedule — regular season games, tournaments, and events for all divisions.",
};

const tournaments = [
  {
    name: "NCS Summer Classic",
    dates: "June 14–15",
    location: "Bridgeport, TX",
    teams: "11U",
    type: "NCS Tournament",
  },
  {
    name: "DFW Youth Invitational",
    dates: "June 28–29",
    location: "Fort Worth, TX",
    teams: "9U / 11U",
    type: "Invitational",
  },
  {
    name: "Summer Showdown",
    dates: "July 19–20",
    location: "Weatherford, TX",
    teams: "8U / 11U",
    type: "Tournament",
  },
];

export default function SchedulePage() {
  return (
    <>
      <Nav />
      <main style={{ backgroundColor: "#08111F", color: "#F8F6F0" }}>

        {/* ─── SECTION 1 · HERO ─────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ minHeight: "clamp(480px, 72vh, 680px)", paddingTop: "68px" }}
        >
          <Image
            src="/images/baseball-tryout-image.png"
            alt=""
            fill
            className="object-cover object-center scale-105"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, rgba(8,17,31,0.97) 0%, rgba(0,166,81,0.42) 45%, rgba(8,17,31,0.93) 100%)",
            }}
          />
          <div
            className="absolute inset-x-0 top-0 h-40 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, rgba(8,17,31,0.6), transparent)" }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
            style={{ background: "linear-gradient(to top, #08111F, transparent)" }}
          />

          <div
            className="relative max-w-[1180px] mx-auto px-6 flex flex-col justify-center"
            style={{ minHeight: "clamp(480px, 72vh, 680px)" }}
          >
            {/* Breadcrumb */}
            <div
              className="absolute font-[family-name:var(--font-barlow)] text-[0.72rem] tracking-[1.5px] uppercase flex items-center gap-2"
              style={{ top: "2.5rem", left: "1.5rem", color: "rgba(255,255,255,0.35)" }}
            >
              <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>›</span>
              <span style={{ color: "#D4AF37" }}>Schedule</span>
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
                Paradise Yard Goats Baseball · 2026 Season
              </div>

              {/* Headline */}
              <h1
                className="font-[family-name:var(--font-bebas)] leading-none text-white tracking-wide mb-5"
                style={{
                  fontSize: "clamp(4.5rem, 13vw, 9rem)",
                  letterSpacing: "0.02em",
                  textShadow: "0 2px 24px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.9)",
                }}
              >
                FROM THE{" "}
                <span style={{ color: "#D4AF37" }}>DUGOUT</span>
              </h1>

              <div
                className="font-[family-name:var(--font-barlow)] font-bold italic text-[1.05rem] leading-[2] mb-6"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                Every game matters.<br />
                Every at-bat counts.<br />
                Show up ready.
              </div>

              <p
                className="text-[0.97rem] leading-relaxed mb-8 max-w-[500px]"
                style={{ color: "rgba(255,255,255,0.78)" }}
              >
                Full 2026 season schedule for all Yard Goats divisions — regular season games,
                tournaments, and events in one place.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#schedule"
                  className="inline-flex items-center gap-2 font-[family-name:var(--font-barlow)] font-bold text-[0.95rem] tracking-[1.5px] uppercase px-7 py-3 rounded transition-all hover:-translate-y-0.5 active:translate-y-0"
                  style={{ backgroundColor: "#D4AF37", color: "#1A1A1A", border: "2px solid #D4AF37" }}
                >
                  View Schedule
                </a>
                <a
                  href={siteConfig.gameChanger}
                  className="inline-flex items-center gap-2 font-[family-name:var(--font-barlow)] font-bold text-[0.95rem] tracking-[1.5px] uppercase px-7 py-3 rounded transition-all hover:-translate-y-0.5 active:translate-y-0 hover:border-white/70"
                  style={{ color: "#fff", border: "2px solid rgba(255,255,255,0.3)" }}
                >
                  GameChanger Live
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 2 · TOURNAMENT HIGHLIGHTS ───────────────────── */}
        <section className="py-14 md:py-20" style={{ backgroundColor: "#0a1525" }}>
          <div className="max-w-[1180px] mx-auto px-6">

            <div className="text-center mb-10">
              <span
                className="font-[family-name:var(--font-barlow)] font-bold text-[0.75rem] tracking-[4px] uppercase block mb-2"
                style={{ color: "#D4AF37" }}
              >
                2026 Season
              </span>
              <h2
                className="font-[family-name:var(--font-bebas)] leading-none text-white mb-3"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
              >
                Tournament Calendar
              </h2>
              <div className="w-12 h-[3px] rounded mx-auto mb-5" style={{ backgroundColor: "#D4AF37" }} />
              <p
                className="text-[0.95rem] leading-relaxed max-w-[480px] mx-auto"
                style={{ color: "rgba(255,255,255,0.52)" }}
              >
                Mark your calendars. These are the big weekends — come out and cheer on the Goats.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {tournaments.map((t, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden border border-[rgba(212,175,55,0.18)] hover:border-[rgba(212,175,55,0.45)] transition-all duration-300 hover:-translate-y-1.5"
                  style={{ backgroundColor: "#0f1f35" }}
                >
                  <div style={{ height: "3px", background: "linear-gradient(to right, #D4AF37, #E8CC65, #D4AF37)" }} />
                  <div className="p-6">
                    <div
                      className="inline-block font-[family-name:var(--font-barlow)] font-bold text-[0.62rem] tracking-[2.5px] uppercase px-2 py-0.5 rounded-sm mb-3"
                      style={{ backgroundColor: "rgba(212,175,55,0.12)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.25)" }}
                    >
                      {t.type}
                    </div>
                    <h3
                      className="font-[family-name:var(--font-bebas)] text-white leading-none mb-4"
                      style={{ fontSize: "1.55rem" }}
                    >
                      {t.name}
                    </h3>
                    <div className="space-y-2">
                      {[
                        { label: "Dates",    val: t.dates },
                        { label: "Location", val: t.location },
                        { label: "Teams",    val: t.teams },
                      ].map((row) => (
                        <div key={row.label} className="flex gap-2 text-[0.82rem]">
                          <span className="flex-shrink-0 w-[64px]" style={{ color: "rgba(255,255,255,0.35)" }}>
                            {row.label}
                          </span>
                          <span className="text-white">{row.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 3 · FULL SCHEDULE TABLE ─────────────────────── */}
        <Schedule />

        {/* ─── SECTION 4 · EXTERNAL LINKS CTA ──────────────────────── */}
        <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: "#0b1827" }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(160,120,70,0.1) 1px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative max-w-[1180px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* GameChanger */}
              <a
                href={siteConfig.gameChanger}
                className="group rounded-xl p-8 flex items-start gap-5 border transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,175,55,0.4)]"
                style={{ backgroundColor: "#0f1f35", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-xl"
                  style={{ backgroundColor: "rgba(212,175,55,0.1)" }}
                >
                  ⏱
                </div>
                <div>
                  <h3
                    className="font-[family-name:var(--font-bebas)] text-white leading-none mb-1"
                    style={{ fontSize: "1.4rem" }}
                  >
                    GameChanger
                  </h3>
                  <p className="text-[0.85rem] leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.48)" }}>
                    Live scoring, stats, and play-by-play for every Yard Goats game. Follow your player from anywhere.
                  </p>
                  <span
                    className="font-[family-name:var(--font-barlow)] font-bold text-[0.75rem] tracking-[2px] uppercase"
                    style={{ color: "#D4AF37" }}
                  >
                    Open GameChanger →
                  </span>
                </div>
              </a>

              {/* NCS Events */}
              <a
                href={siteConfig.ncs}
                className="group rounded-xl p-8 flex items-start gap-5 border transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,175,55,0.4)]"
                style={{ backgroundColor: "#0f1f35", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-xl"
                  style={{ backgroundColor: "rgba(212,175,55,0.1)" }}
                >
                  📅
                </div>
                <div>
                  <h3
                    className="font-[family-name:var(--font-bebas)] text-white leading-none mb-1"
                    style={{ fontSize: "1.4rem" }}
                  >
                    NCS Events
                  </h3>
                  <p className="text-[0.85rem] leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.48)" }}>
                    Tournament brackets, event details, and registration info for all NCS-sanctioned Yard Goats events.
                  </p>
                  <span
                    className="font-[family-name:var(--font-barlow)] font-bold text-[0.75rem] tracking-[2px] uppercase"
                    style={{ color: "#D4AF37" }}
                  >
                    View NCS Events →
                  </span>
                </div>
              </a>

            </div>
          </div>
        </section>

        {/* ─── SECTION 5 · JOIN CTA ──────────────────────────────────── */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <Image
            src="/images/baseball-tryout-image.png"
            alt=""
            fill
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(150deg, rgba(8,17,31,0.94) 0%, rgba(0,166,81,0.85) 50%, rgba(8,17,31,0.94) 100%)",
            }}
          />
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
              Want to Be on{" "}
              <span style={{ color: "#D4AF37" }}>the Field?</span>
            </h2>
            <p
              className="text-[1rem] leading-relaxed mb-8 max-w-[460px] mx-auto"
              style={{ color: "rgba(255,255,255,0.52)" }}
            >
              Register for tryouts and earn your spot on one of our 2026 Yard Goats teams.
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
