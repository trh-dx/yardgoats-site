"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Inline line icons (Lucide shapes: MapPin, UsersRound, Trophy, Heart) — no icon package installed
const icons: Record<string, ReactNode> = {
  mapPin: (
    <>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  usersRound: (
    <>
      <path d="M18 21a8 8 0 0 0-16 0" />
      <circle cx="10" cy="8" r="5" />
      <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
    </>
  ),
  trophy: (
    <>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </>
  ),
  heart: (
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  ),
};

const cells = [
  { val: "Paradise, TX",       label: "Home Base",     icon: "mapPin" },
  { val: "7U · 8U · 9U · 11U", label: "Age Groups",    icon: "usersRound" },
  { val: "Tournament Ball",    label: "Level of Play", icon: "trophy" },
  { val: "Community Supported", label: "Powered By",   icon: "heart" },
];

// Icon sits above the text on phones (no room beside it), to the left from sm up.
// Vertical dividers only between cells: 2×2 below lg (cells 0 and 2), one row of 4 from lg (cells 0–2)
const dividers = ["border-r", "lg:border-r", "border-r", ""];

const STAGGER_MS = 150;

export default function Scoreboard() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-charcoal border-t-[3px] border-b-[3px] border-royal-blue" ref={ref}>
      <div className="grid grid-cols-2 lg:grid-cols-4 site-container">
        {cells.map((cell, i) => (
          <div
            key={i}
            className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3.5 lg:gap-2.5 xl:gap-4 px-3 sm:px-5 lg:px-2.5 xl:px-5 py-3 border-white/8 ${dividers[i]} transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: visible ? `${i * STAGGER_MS}ms` : "0ms" }}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-7 md:w-8 md:h-8 lg:w-7 lg:h-7 xl:w-9 xl:h-9 text-green shrink-0"
            >
              {icons[cell.icon]}
            </svg>
            <div className="text-center sm:text-left">
              <div className="font-bebas text-[1.55rem] text-white tracking-wide leading-none">
                {cell.val}
              </div>
              <div className="text-[0.63rem] font-bold tracking-[3px] uppercase text-[#4A86E8] mt-1">
                {cell.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
