"use client";

import Image from "next/image";
import { teams } from "@/lib/data";

export default function TeamsGrid() {
  return (
    <section className="bg-deep-navy py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto px-5">

        {/* ── Heading ─────────────────────────────────────────── */}
        <div className="mb-10">
          <h2
            className="font-bebas text-white leading-none mb-3"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)" }}
          >
            Travel <span className="text-green">Baseball</span>
          </h2>
          <p
            className="font-inter text-muted-gray leading-relaxed max-w-[640px]"
            style={{ fontSize: "0.97rem" }}
          >
            From early fundamentals to competitive tournament play, Paradise Yard Goats teams help players grow with confidence, effort, and a love for the game.
          </p>
        </div>

        {/* ── Cards grid ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {teams.map((team) => (
            <article
              key={team.age}
              className="group flex flex-col bg-charcoal border border-royal-blue/30 rounded-lg overflow-hidden
                         hover:border-royal-blue/70
                         hover:shadow-[0_0_28px_rgba(0,61,165,0.35)]
                         transition-all duration-300"
            >
              {/* ── Image area ──────────────────────────── */}
              {"image" in team ? (
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={team.image as string}
                    alt={`${team.age} team`}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient scrim */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(7,17,31,0.15) 0%, rgba(7,17,31,0.75) 100%)",
                    }}
                  />
                  {/* Age badge */}
                  <span
                    className="absolute top-3 left-3 font-bebas text-white tracking-widest rounded px-3 py-0.5"
                    style={{
                      fontSize: "1.05rem",
                      lineHeight: 1.6,
                      backgroundColor: "rgba(122,193,67,0.92)",
                    }}
                  >
                    {team.age}
                  </span>
                  {/* Tag badge */}
                  <span
                    className="absolute top-3 right-3 font-inter font-bold text-white/90 uppercase tracking-[1px] rounded px-2.5 py-0.5"
                    style={{
                      fontSize: "0.65rem",
                      backgroundColor: "rgba(7,17,31,0.75)",
                    }}
                  >
                    {team.tag}
                  </span>
                </div>
              ) : (
                <div className="relative px-5 pt-5 pb-4" style={{ borderBottom: "1px solid #1E293B" }}>
                  {/* Age badge — top right */}
                  <span
                    className="absolute top-4 right-4 font-bebas text-white tracking-widest rounded px-3 py-0.5"
                    style={{
                      fontSize: "1.05rem",
                      lineHeight: 1.6,
                      backgroundColor: "rgba(122,193,67,0.92)",
                    }}
                  >
                    {team.age}
                  </span>

                  {/* Title */}
                  <p
                    className="font-bebas text-white/35 leading-none tracking-[3px] uppercase"
                    style={{ fontSize: "0.75rem" }}
                  >
                    Paradise
                  </p>
                  <p
                    className="font-bebas text-white leading-none mb-2"
                    style={{ fontSize: "1.75rem" }}
                  >
                    Yard <span className="text-green">Goats</span>
                  </p>

                  {"coach" in team && (
                    <p className="font-inter text-white/55 mb-2" style={{ fontSize: "0.75rem" }}>
                      <span className="text-white/35 uppercase tracking-[1.5px]" style={{ fontSize: "0.62rem" }}>Coach: </span>
                      {(team as { coach: string }).coach}
                    </p>
                  )}

                  {/* Tag pill — below coach */}
                  <span
                    className="inline-block font-inter font-bold text-white/90 uppercase tracking-[1px] rounded px-2.5 py-0.5"
                    style={{
                      fontSize: "0.65rem",
                      backgroundColor: "rgba(30,41,59,1)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {team.tag}
                  </span>
                </div>
              )}

              {/* ── Content ─────────────────────────────── */}
              <div className="flex flex-col flex-1 px-5 pt-4 pb-5">
                <h3
                  className="font-bebas text-white tracking-wide leading-none mb-1.5"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 1.9rem)" }}
                >
                  {team.title}
                </h3>

                <p className="font-inter text-muted-gray text-[0.84rem] leading-relaxed flex-1 mb-4">
                  {team.description}
                </p>

                {"wins" in team && "losses" in team && (
                  <div className="flex items-center pt-3 border-t border-slate mb-4">
                    <div className="flex-1 text-center">
                      <div className="font-inter font-bold uppercase tracking-[2px] text-white/40 mb-0.5" style={{ fontSize: "0.6rem" }}>
                        Record
                      </div>
                      <div className="font-bebas text-white leading-none" style={{ fontSize: "2.8rem" }}>
                        {team.wins}-{team.losses}
                      </div>
                    </div>
                    <div className="w-px h-10 bg-slate" />
                    <div className="flex-1 text-center">
                      <div className="font-inter font-bold uppercase tracking-[2px] text-white/40 mb-0.5" style={{ fontSize: "0.6rem" }}>
                        Win Pct
                      </div>
                      <div className="font-bebas text-green leading-none" style={{ fontSize: "2.8rem" }}>
                        {team.wins + team.losses === 0 ? "—" : `.${Math.round((team.wins / (team.wins + team.losses)) * 1000)}`}
                      </div>
                    </div>
                  </div>
                )}

                <a
                  href="#"
                  className="block text-center bg-green hover:bg-green-dk text-white font-inter font-bold uppercase tracking-[2px] py-2.5 rounded transition-all duration-200 hover:-translate-y-0.5"
                  style={{ fontSize: "0.75rem" }}
                >
                  View Roster
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
