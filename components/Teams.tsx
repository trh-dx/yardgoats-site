import { teams } from "@/lib/data";

export default function Teams() {
  return (
    <section id="teams" className="bg-navy py-16 md:py-24">
      <div className="max-w-[1180px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-3">
          <span className="font-[family-name:var(--font-barlow)] font-bold text-[0.78rem] tracking-[4px] uppercase text-green block mb-2">
            Travel &amp; Rec Baseball
          </span>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,5vw,3.9rem)] leading-none text-white mb-3">
            Yard Goats <span className="text-green">Teams</span>
          </h2>
          <div className="w-[52px] h-[3px] bg-red rounded mx-auto" />
        </div>
        <p className="text-center text-gray text-[1.05rem] leading-[1.78] max-w-[640px] mx-auto mt-4 mb-12">
          From early fundamentals to competitive tournament play, Paradise Yard Goats teams help
          players grow with confidence, effort, and a love for the game.
        </p>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {teams.map((team) => (
            <div
              key={team.age}
              className="bg-white rounded-xl overflow-hidden shadow-[0_4px_22px_rgba(0,0,0,0.22)] hover:-translate-y-[7px] hover:shadow-[0_20px_56px_rgba(0,0,0,0.3)] transition-all duration-300"
            >
              {/* Green accent bar */}
              <div className="h-1 bg-green" />

              <div className="p-6 pb-7">
                {/* Icon badge */}
                <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center text-lg mb-4">
                  ⚾
                </div>

                {/* Age number */}
                <div className="font-[family-name:var(--font-bebas)] text-[4.2rem] leading-[0.88] text-navy tracking-wide mb-0.5">
                  {team.age}
                </div>

                {/* Team label */}
                <div className="font-[family-name:var(--font-barlow)] font-bold text-[0.7rem] tracking-[3px] uppercase text-green mb-3.5">
                  Yard Goats
                </div>

                {/* Description */}
                <p className="text-[0.875rem] text-[#4a5568] leading-relaxed mb-6">
                  {team.description}
                </p>

                {/* CTA */}
                <a
                  href="#contact"
                  className="block text-center text-navy border-2 border-navy rounded-md py-2.5 px-4 font-[family-name:var(--font-barlow)] font-bold text-[0.8rem] tracking-[1.5px] uppercase hover:bg-navy hover:text-white transition-all duration-300"
                >
                  Ask About Openings
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Sponsor callout */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-green/10 border border-green/25 rounded-xl px-7 py-7">
          <p className="text-gray-lt text-[0.93rem] leading-[1.7] flex-1 max-w-[640px]">
            Sponsorships help support uniforms, equipment, tournament fees, practice needs, and
            player development across all Yard Goats teams.
          </p>
          <a
            href="#sponsors"
            className="shrink-0 bg-green text-white border-2 border-green rounded px-7 py-3 font-[family-name:var(--font-barlow)] font-bold text-[0.95rem] tracking-[1.5px] uppercase hover:bg-green-dk hover:border-green-dk transition-all duration-300 whitespace-nowrap"
          >
            Become a Sponsor
          </a>
        </div>

      </div>
    </section>
  );
}
