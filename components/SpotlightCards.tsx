"use client";

interface SpotlightPlayer {
  name: string;
  position: string;
  team: string;
  badge: string;
  highlight: string;
}

export default function SpotlightCards({ players }: { players: SpotlightPlayer[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {players.map((player, i) => (
        <div
          key={i}
          className="flex flex-col rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(122,193,67,0.1)]"
          style={{
            backgroundColor: "#121e30",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(122,193,67,0.45)")}
          onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
        >
          {/* Green accent stripe */}
          <div style={{ height: "3px", background: "#7AC143", flexShrink: 0 }} />

          <div className="flex flex-1">
            {/* Action photo */}
            <div
              className="w-[90px] flex-shrink-0 flex items-center justify-center relative overflow-hidden"
              style={{ background: "linear-gradient(180deg, #A7A8AA 0%, #001A3D 100%)" }}
            >
              <span style={{ fontSize: "1.75rem", opacity: 0.15 }}>⚾</span>
            </div>

            {/* Info */}
            <div className="p-5 flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                <div
                  className="font-[family-name:var(--font-barlow)] font-bold text-[0.64rem] tracking-[2.5px] uppercase"
                  style={{ color: "#7AC143" }}
                >
                  {player.position} &nbsp;·&nbsp; {player.team}
                </div>
                <span
                  className="font-[family-name:var(--font-barlow)] font-bold text-[0.58rem] tracking-[1.5px] uppercase px-2 py-0.5 rounded-sm flex-shrink-0"
                  style={{
                    color: "#7AC143",
                    backgroundColor: "rgba(122,193,67,0.08)",
                    border: "1px solid rgba(122,193,67,0.28)",
                  }}
                >
                  {player.badge}
                </span>
              </div>
              <h3
                className="font-[family-name:var(--font-bebas)] text-white leading-none mb-2"
                style={{ fontSize: "1.4rem" }}
              >
                {player.name}
              </h3>
              <p
                className="text-[0.84rem] leading-relaxed"
                style={{ color: "rgba(255,255,255,0.48)" }}
              >
                {player.highlight}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
