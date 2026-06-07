"use client";

import { useState } from "react";
import { schedule } from "@/lib/data";
import { siteConfig } from "@/lib/config";

const divisions = ["All", "7U", "8U", "9U", "11U"] as const;
type Division = typeof divisions[number];

export default function Schedule() {
  const [active, setActive] = useState<Division>("All");

  const filtered = active === "All"
    ? schedule
    : schedule.filter((row) => row.team.includes(active));

  return (
    <section
      id="schedule"
      className="relative py-16 md:py-24"
      style={{ background: "linear-gradient(135deg, #0c1c12 0%, #09142a 100%)" }}
    >
      {/* Field line texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(46,125,50,0.022) 40px, rgba(46,125,50,0.022) 41px)",
        }}
      />

      <div className="relative z-10 max-w-[1180px] mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-end mb-6 flex-wrap gap-4">
          <div>
            <span className="font-[family-name:var(--font-barlow)] font-bold text-[0.78rem] tracking-[4px] uppercase text-tan block mb-2">
              2025 Season
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,5vw,3.9rem)] leading-none text-white mb-3">
              From the <span className="text-tan">Dugout</span>
            </h2>
            <div className="w-[52px] h-[3px] bg-red rounded" />
          </div>
          <div className="flex gap-4 flex-wrap">
            <a
              href={siteConfig.gameChanger}
              className="font-[family-name:var(--font-barlow)] font-bold text-[0.84rem] tracking-wide uppercase text-tan border-b border-transparent hover:border-tan transition-all flex items-center gap-1.5"
            >
              ⏱ GameChanger
            </a>
            <a
              href={siteConfig.ncs}
              className="font-[family-name:var(--font-barlow)] font-bold text-[0.84rem] tracking-wide uppercase text-tan border-b border-transparent hover:border-tan transition-all flex items-center gap-1.5"
            >
              📅 NCS Events
            </a>
          </div>
        </div>

        {/* Division filter buttons */}
        <div className="flex gap-2 flex-wrap mb-6">
          {divisions.map((div) => (
            <button
              key={div}
              onClick={() => setActive(div)}
              className={`font-[family-name:var(--font-barlow)] font-bold text-[0.82rem] tracking-[1.5px] uppercase px-5 py-2 rounded border-2 transition-all cursor-pointer ${
                active === div
                  ? "bg-green text-white border-green shadow-[0_4px_16px_rgba(46,125,50,0.4)]"
                  : "bg-transparent text-gray-lt border-white/20 hover:border-green/60 hover:text-white"
              }`}
            >
              {div === "All" ? "All Teams" : div}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {["Date", "Event", "Location", "Team", "Time"].map((h) => (
                  <th
                    key={h}
                    className="bg-green/14 text-green-lt font-[family-name:var(--font-barlow)] font-bold text-[0.78rem] tracking-[2px] uppercase px-4 py-3 text-left border-b border-green/30"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? (
                filtered.map((row, i) => (
                  <tr key={i} className="hover:bg-white/2 transition-colors">
                    <td className="px-4 py-3 text-[0.9rem] text-gray-lt border-b border-white/5 whitespace-nowrap">
                      {row.date}
                    </td>
                    <td className="px-4 py-3 text-[0.9rem] border-b border-white/5">
                      <span className="text-white font-semibold">{row.event}</span>
                      {row.isTournament && (
                        <span className="ml-2 bg-tan/18 text-tan text-[0.67rem] font-bold tracking-wide uppercase px-1.5 py-0.5 rounded">
                          Tournament
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-[0.9rem] text-gray-lt border-b border-white/5">
                      {row.location}
                    </td>
                    <td className="px-4 py-3 text-[0.9rem] text-gray-lt border-b border-white/5 whitespace-nowrap">
                      {row.team}
                    </td>
                    <td className="px-4 py-3 text-[0.9rem] text-gray-lt border-b border-white/5 whitespace-nowrap">
                      {row.time}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-gray text-[0.9rem]">
                    No games scheduled for {active} yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="text-center">
          <a
            href={siteConfig.gameChanger}
            className="inline-flex items-center gap-2 bg-green text-white font-[family-name:var(--font-barlow)] font-bold text-[0.95rem] tracking-[1.5px] uppercase px-7 py-3 rounded border-2 border-green hover:bg-green-dk hover:border-green-dk transition-all hover:-translate-y-0.5"
          >
            View Full Schedule on GameChanger
          </a>
        </div>

      </div>
    </section>
  );
}
