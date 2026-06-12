"use client";

interface Team {
  age: string;
  name: string;
  description: string;
  tag: string;
}

export default function TeamCards({ teams }: { teams: Team[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {teams.map((team) => (
        <div
          key={team.age}
          className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-[0_4px_22px_rgba(0,0,0,0.18)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.22)]"
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid rgba(122,193,67,0.18)",
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(122,193,67,0.55)")}
          onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(122,193,67,0.18)")}
        >
          {/* Green top stripe */}
          <div style={{ height: "3px", background: "linear-gradient(to right, #7AC143, #94D45A, #7AC143)" }} />

          <div className="p-6 pb-7">
            {/* Age */}
            <div
              className="font-[family-name:var(--font-bebas)] leading-[0.88] tracking-wide mb-0.5 text-center"
              style={{ fontSize: "4.2rem", color: "#001A3D" }}
            >
              {team.age}
            </div>

            {/* Team label */}
            <div
              className="font-[family-name:var(--font-barlow)] font-bold text-[1rem] tracking-[3px] uppercase mb-3.5 text-center"
              style={{ color: "#001A3D" }}
            >
              Yard Goats
            </div>

            {/* Divider */}
            <div className="w-8 h-[2px] rounded mx-auto mb-3.5" style={{ backgroundColor: "#7AC143" }} />

            {/* Description */}
            <p className="text-[0.875rem] leading-relaxed mb-2 text-center" style={{ color: "#4a5568" }}>
              {team.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
