"use client";

import Image from "next/image";
import { teams } from "@/lib/data";

export default function TeamsGrid() {
  return (
    <section className="bg-deep-navy py-16 md:py-20">
      <div className="site-container">

        {/* ── Team Overview header ────────────────────────────── */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
            <span aria-hidden="true" className="h-[2px] w-6 sm:w-8 bg-green rounded-full" />
            <span
              className="font-inter font-bold uppercase tracking-[3px] text-green"
              style={{ fontSize: "0.72rem" }}
            >
              Team Overview
            </span>
            <span aria-hidden="true" className="h-[2px] w-6 sm:w-8 bg-green rounded-full" />
          </div>
          <h2
            className="font-bebas text-white leading-none"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
          >
            Meet Our <span className="text-green">Teams</span>
          </h2>
        </div>

        {/* ── Cards grid ──────────────────────────────────────── */}
        <div className="grid grid-cols-6 gap-5 lg:gap-6">
          {teams.map((team) => {
            return (
            <article
              key={`${team.age}-${team.coach}`}
              className={`col-span-6 sm:col-span-3 lg:col-span-2 group flex flex-col bg-charcoal border border-royal-blue/30 rounded-lg overflow-hidden hover:border-royal-blue/70 hover:shadow-[0_0_28px_rgba(0,61,165,0.35)] transition-all duration-300`}
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
                    className="absolute top-3 left-3 font-bebas text-deep-navy tracking-widest rounded px-3 py-0.5"
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
                  <div
                    className="absolute top-4 right-4 font-bebas text-white tracking-widest rounded overflow-hidden flex flex-col items-center"
                    style={{ minWidth: "68px", border: "2px solid #7AC143" }}
                  >
                    {/* Green top — age */}
                    <div
                      className="w-full text-center px-3 py-1 text-deep-navy"
                      style={{ backgroundColor: "#7AC143", fontSize: "1.3rem", lineHeight: 1.3 }}
                    >
                      {team.age}
                    </div>
                    {/* Dark navy bottom — team label (11U only) */}
                    {"teamLabel" in team && (
                      <div
                        className={`w-full text-center px-2 ${team.age === "11U" ? "py-1" : "py-px"}`}
                        style={{ backgroundColor: "#0F172A", fontSize: "0.68rem", lineHeight: 1.6, letterSpacing: "0.14em" }}
                      >
                        {(team as { teamLabel: string }).teamLabel}
                      </div>
                    )}
                  </div>

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
                      <span className="font-bold text-white/70 uppercase tracking-[1.5px]" style={{ fontSize: "0.62rem" }}>Coach: </span>
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

                <p className="font-inter text-muted-gray text-[0.84rem] leading-relaxed flex-1 mb-3">
                  {team.description}
                </p>

                {"gameChangerUrl" in team && (
                  <>
                    <a
                      href={(team as { gameChangerUrl: string }).gameChangerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-royal-blue hover:bg-darker-blue text-white font-inter font-bold uppercase tracking-[2px] py-2.5 rounded transition-all duration-200 hover:-translate-y-0.5"
                      style={{ fontSize: "0.75rem" }}
                    >
                      Team Schedule and Roster →
                    </a>
                    <p className="text-center text-white/40 font-inter mt-1.5" style={{ fontSize: "0.65rem" }}>
                      Powered by GameChanger
                    </p>
                  </>
                )}
              </div>
            </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
