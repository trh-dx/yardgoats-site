"use client";

import Image from "next/image";
import Link from "next/link";

// ── Data ──────────────────────────────────────────────────────────────

const TEAMS = [
  {
    age: "7U",
    title: "Foundations",
    description: "Learning the game. Building the future.",
    image: "/images/7u-card.png",
  },
  {
    age: "8U",
    title: "Development",
    description: "Building skills. Building confidence.",
    image: "/images/8u-card.png",
  },
  {
    age: "9U",
    title: "Compete",
    description: "Working together. Competing harder.",
    image: "/images/baseball-tryout-image.png",
  },
  {
    age: "11U",
    title: "Dominate",
    description: "Advanced training. Championship mindset.",
    image: "/images/baseball-tryout-image.png",
  },
] as const;

// ── Component ─────────────────────────────────────────────────────────

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {TEAMS.map((team) => (
            <article
              key={team.age}
              className="group flex flex-col bg-charcoal border border-slate rounded-lg overflow-hidden
                         hover:border-royal-blue/70
                         hover:shadow-[0_0_28px_rgba(0,61,165,0.35)]
                         transition-all duration-300"
            >
              {/* ── Image area ──────────────────────────── */}
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src={team.image}
                  alt={`${team.age} team`}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient scrim — dark bottom so text over it is legible */}
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
              </div>

              {/* ── Content ─────────────────────────────── */}
              <div className="flex flex-col flex-1 px-5 pt-4 pb-5">
                <h3
                  className="font-bebas text-white tracking-wide leading-none mb-1.5"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 1.9rem)" }}
                >
                  {team.title}
                </h3>
                <p className="font-inter text-muted-gray text-[0.84rem] leading-relaxed flex-1 mb-5">
                  {team.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
