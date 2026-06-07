import { teams } from "@/lib/data";

export default function Teams() {
  return (
    <section id="teams" className="bg-navy py-16 md:py-24">
      <div className="max-w-[1180px] mx-auto px-6">

        <div className="text-center mb-10">
          <span className="font-[family-name:var(--font-barlow)] font-bold text-[0.78rem] tracking-[4px] uppercase text-tan block mb-2">
            Travel &amp; Rec Baseball
          </span>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,5vw,3.9rem)] leading-none text-white mb-3">
            Our <span className="text-tan">Teams</span>
          </h2>
          <div className="w-[52px] h-[3px] bg-red rounded mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 max-w-[1040px] mx-auto">
          {teams.map((team) => (
            <div
              key={team.age}
              className="rounded-[10px] overflow-hidden shadow-[0_4px_28px_rgba(0,0,0,0.45)] hover:-translate-y-2 hover:rotate-[-0.7deg] hover:shadow-[0_30px_70px_rgba(0,0,0,0.6)] transition-all duration-300"
            >
              {/* Card top bar */}
              <div className="bg-green px-3.5 py-1.5 flex justify-between items-center">
                <span className="font-[family-name:var(--font-bebas)] text-[0.78rem] tracking-[3px] text-white/82">
                  Paradise Yard Goats
                </span>
                <span className="font-[family-name:var(--font-bebas)] text-[0.78rem] text-white/70">
                  2025
                </span>
              </div>

              {/* Photo area */}
              <div
                className="w-full aspect-[4/3] flex flex-col items-center justify-center relative overflow-hidden"
                style={{ background: "linear-gradient(160deg, #0d1d30, #060f1c)" }}
              >
                <span
                  className="absolute font-[family-name:var(--font-bebas)] text-[9.5rem] text-white/[0.04] tracking-[-4px] select-none pointer-events-none"
                  aria-hidden="true"
                >
                  {team.age}
                </span>
                <span className="text-[3rem] opacity-20 relative z-10 mb-1">⚾</span>
                <span className="text-[0.68rem] text-gray tracking-[2px] uppercase relative z-10 opacity-55">
                  Team Photo
                </span>
                {/* Age badge */}
                <div className="absolute top-3 right-3 w-[46px] h-[46px] bg-red rounded-full border-2 border-white/28 flex items-center justify-center font-[family-name:var(--font-bebas)] text-[1.2rem] text-white">
                  {team.age}
                </div>
              </div>

              {/* Card body */}
              <div className="bg-[#101c2a] px-5 py-5 border-t-[3px] border-red">
                <h3 className="font-[family-name:var(--font-bebas)] text-[1.75rem] text-white tracking-wide leading-none mb-1.5">
                  {team.name}
                </h3>
                <p className="text-[0.88rem] text-gray leading-relaxed mb-4">
                  {team.description}
                </p>
                <div className="flex justify-between items-center pt-2.5 border-t border-white/7">
                  <span className="font-[family-name:var(--font-barlow)] font-bold text-[0.7rem] tracking-[1.5px] uppercase text-gray">
                    {team.tag}
                  </span>
                  <a
                    href="#contact"
                    className="text-green-lt border border-green rounded px-4 py-1.5 font-[family-name:var(--font-barlow)] font-bold text-[0.8rem] tracking-wide uppercase hover:bg-green hover:text-white transition-all"
                  >
                    Get Info
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
