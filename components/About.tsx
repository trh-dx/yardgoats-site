const values = [
  { icon: "🤝", label: "Community First" },
  { icon: "📈", label: "Player Development" },
  { icon: "🏆", label: "Compete & Grow" },
];

export default function About() {
  return (
    <section id="about" className="bg-navy-mid py-24">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <span className="font-[family-name:var(--font-barlow)] font-bold text-[0.78rem] tracking-[4px] uppercase text-tan block mb-2">
              Who We Are
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,5vw,3.9rem)] leading-none text-white mb-3">
              About the <span className="text-tan">Yard Goats</span>
            </h2>
            <div className="w-[52px] h-[3px] bg-green rounded mb-7" />
            <p className="text-[#8fa8be] leading-relaxed text-[1.05rem]">
              Paradise Yard Goats Baseball gives young athletes a place to compete, grow, and
              represent Paradise with pride. From coach pitch to tournament play, our teams focus on
              fundamentals, effort, sportsmanship, and love for the game.
            </p>

            <div className="grid grid-cols-3 gap-3 mt-8">
              {values.map((v) => (
                <div
                  key={v.label}
                  className="bg-green/8 border border-green/20 rounded-lg p-4 text-center hover:bg-green/16 hover:border-green hover:-translate-y-1 transition-all"
                >
                  <div className="text-[1.7rem] mb-1.5">{v.icon}</div>
                  <h4 className="font-[family-name:var(--font-barlow)] font-bold text-[0.8rem] tracking-[1.5px] uppercase text-green-lt">
                    {v.label}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="relative order-first md:order-last">
            <div
              className="w-full aspect-[4/3] rounded-xl border-2 border-dashed border-white/11 flex flex-col items-center justify-center overflow-hidden"
              style={{
                background: "linear-gradient(140deg, #0e1f34, #08111f)",
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent, transparent 22px, rgba(255,255,255,0.014) 22px, rgba(255,255,255,0.014) 23px)",
              }}
            >
              <span className="text-[4rem] opacity-20 mb-2">⚾</span>
              <span className="text-[0.7rem] text-gray tracking-[2px] uppercase">Team Photo</span>
            </div>
            <div className="absolute bottom-[-13px] right-[-13px] bg-tan text-navy font-[family-name:var(--font-bebas)] text-[1.1rem] tracking-wide px-4 py-2 rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
              Paradise, TX ⚾
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
