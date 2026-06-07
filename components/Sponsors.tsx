import { sponsors } from "@/lib/data";

const icons: Record<string, string> = {
  Single: "⚾",
  Double: "🏅",
  "Home Run": "🏆",
};

export default function Sponsors() {
  return (
    <section id="sponsors" className="bg-navy py-16 md:py-24">
      <div className="max-w-[1180px] mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-[720px] mx-auto mb-12">
          <span className="font-[family-name:var(--font-barlow)] font-bold text-[0.78rem] tracking-[4px] uppercase text-tan block mb-2">
            Make an Impact
          </span>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.2rem,4.5vw,3.5rem)] leading-none text-white mb-3">
            Step Up to the Plate for{" "}
            <span className="text-tan">Local Youth Baseball</span>
          </h2>
          <div className="w-[52px] h-[3px] bg-red rounded mx-auto mb-4" />
          <p className="text-gray leading-relaxed">
            Paradise Yard Goats depends on the support of local families, businesses, and community
            sponsors. Sponsorships help cover tournament fees, uniforms, equipment, practice needs,
            and player development.
          </p>
        </div>

        {/* Package cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {sponsors.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-xl p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_55px_rgba(0,0,0,0.5)] ${
                pkg.featured
                  ? "border border-red bg-[linear-gradient(160deg,#1F2933,rgba(179,38,30,0.09))]"
                  : "border border-white/9 bg-charcoal"
              }`}
            >
              {pkg.featured && (
                <span className="absolute top-[-11px] left-1/2 -translate-x-1/2 bg-red text-white font-[family-name:var(--font-barlow)] font-bold text-[0.68rem] tracking-[2px] uppercase px-3 py-0.5 rounded-full">
                  Featured
                </span>
              )}
              <div className="text-[2.4rem] mb-3">{icons[pkg.name]}</div>
              <div className="font-[family-name:var(--font-barlow)] font-bold text-[0.74rem] tracking-[3px] uppercase text-gray mb-1">
                {pkg.tier}
              </div>
              <div className="font-[family-name:var(--font-bebas)] text-[2.2rem] text-white tracking-wide mb-1">
                {pkg.name}
              </div>
              <div
                className={`font-[family-name:var(--font-bebas)] text-[3.5rem] leading-none mb-1 ${
                  pkg.featured ? "text-red" : "text-tan"
                }`}
              >
                {pkg.price}
                {pkg.priceSuffix && (
                  <span className="text-[2rem]">{pkg.priceSuffix}</span>
                )}
              </div>
              <div className="text-[0.77rem] text-gray mb-6">one-time sponsorship</div>

              <ul className="text-left mb-7 space-y-0">
                {pkg.perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-start gap-2 text-[0.88rem] text-gray-lt py-1.5 border-b border-white/[0.055]"
                  >
                    <span className="text-green-lt font-bold mt-0.5 shrink-0">✓</span>
                    {perk}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center font-[family-name:var(--font-barlow)] font-bold text-[0.9rem] tracking-[1.5px] uppercase py-2.5 rounded border-2 transition-all ${
                  pkg.featured
                    ? "bg-red text-white border-red hover:bg-red-dk hover:border-red-dk hover:shadow-[0_8px_24px_rgba(179,38,30,0.4)]"
                    : pkg.name === "Double"
                    ? "bg-tan text-navy border-tan hover:bg-tan-lt"
                    : "bg-transparent text-white border-white/40 hover:border-white hover:bg-white/8"
                } hover:-translate-y-0.5`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Sponsor logo wall */}
        <div>
          <h3 className="text-center font-[family-name:var(--font-barlow)] font-bold text-[0.78rem] tracking-[3px] uppercase text-gray mb-5">
            Our Current Sponsors
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={i}
                className="aspect-[2/1] bg-white/[0.04] border border-dashed border-white/12 rounded-lg flex items-center justify-center text-[0.68rem] text-gray tracking-wide uppercase"
              >
                Sponsor
              </div>
            ))}
            <div className="aspect-[2/1] bg-white/[0.04] border border-dashed border-white/12 rounded-lg flex items-center justify-center text-[0.68rem] text-gray tracking-wide uppercase">
              Your Logo
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
