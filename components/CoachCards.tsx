"use client";

interface CoachCard {
  name: string;
  team: string;
  bio: string;
  years: number;
  quote: string;
}

export default function CoachCards({ coaches }: { coaches: CoachCard[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {coaches.map((coach, i) => (
        <div
          key={i}
          className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-[0_4px_28px_rgba(0,0,0,0.45)] hover:shadow-[0_24px_64px_rgba(122,193,67,0.1),0_4px_28px_rgba(0,0,0,0.5)]"
          style={{
            backgroundColor: "#0f1f35",
            border: "1px solid rgba(122,193,67,0.18)",
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(122,193,67,0.55)")}
          onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(122,193,67,0.18)")}
        >
          {/* Green top stripe */}
          <div style={{ height: "3px", background: "linear-gradient(to right, #7AC143, #94D45A, #7AC143)" }} />

          {/* Photo area */}
          <div
            className="pt-8 pb-5 flex flex-col items-center"
            style={{
              background: "linear-gradient(to bottom, rgba(0,61,165,0.18) 0%, transparent 100%)",
            }}
          >
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center mb-3"
              style={{
                background: "linear-gradient(140deg, #7AC143, #0d2419)",
                border: "2px solid rgba(122,193,67,0.3)",
              }}
            >
              <svg className="w-10 h-10" fill="none" viewBox="0 0 40 40" style={{ color: "rgba(255,255,255,0.2)" }}>
                <circle cx="20" cy="14" r="7" stroke="currentColor" strokeWidth="1.75"/>
                <path d="M4 38 C4 28 11 23 20 23 C29 23 36 28 36 38" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
              </svg>
            </div>
            <h3
              className="font-bebas text-white leading-none mb-0.5"
              style={{ fontSize: "1.65rem" }}
            >
              {coach.name}
            </h3>
            <div
              className="font-barlow font-bold text-[0.67rem] tracking-[2px] uppercase"
              style={{ color: "#7AC143" }}
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
              className="font-barlow font-bold text-[0.65rem] tracking-[2px] uppercase mb-3"
              style={{ color: "rgba(255,255,255,0.28)" }}
            >
              {coach.years} Years Coaching
            </div>

            <blockquote
              className="text-[0.84rem] italic leading-relaxed pl-3"
              style={{
                color: "rgba(255,255,255,0.5)",
                borderLeft: "2px solid #7AC143",
              }}
            >
              &ldquo;{coach.quote}&rdquo;
            </blockquote>
          </div>
        </div>
      ))}
    </div>
  );
}
