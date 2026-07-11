import Image from "next/image";
import Link from "next/link";

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "#070c15" }}
    >
      {/* Stadium glow */}
      <div
        className="absolute inset-x-0 top-0 h-72 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(0,61,165,0.2) 0%, transparent 100%)",
        }}
      />

      {/* Dot texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.028) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top / bottom fades */}
      <div
        className="absolute inset-x-0 top-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #001A3D, transparent)" }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to top, #001A3D, transparent)" }}
      />

      <div className="relative max-w-[1180px] mx-auto px-6">

        {/* ── Header ── */}
        <div className="text-center max-w-[680px] mx-auto mb-12">
          <span
            className="font-inter font-bold text-[0.72rem] tracking-[4px] uppercase block mb-3"
            style={{ color: "#7AC143" }}
          >
            Become a Sponsor
          </span>
          <h2
            className="font-bebas leading-none text-white mb-4"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
          >
            Support Local Players.{" "}
            <span style={{ color: "#7AC143" }}>Grow Your Local Brand.</span>
          </h2>
          <div className="w-[52px] h-[3px] rounded mx-auto mb-5" style={{ background: "#B3261E" }} />
          <p
            className="font-inter leading-relaxed"
            style={{ color: "rgba(167,168,170,0.85)", fontSize: "0.97rem" }}
          >
            Yard Goats sponsors help fund equipment, tournament fees, facilities and player development.
          </p>
        </div>

        {/* ── Premier sponsors ── */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-5">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
            <span
              className="font-inter font-bold text-[0.72rem] tracking-[3px] uppercase whitespace-nowrap"
              style={{ color: "#7AC143" }}
            >
              Diamond Sponsors
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { src: "/images/sponsors/AMERIDREAM FOR WEB.jpg", alt: "AmeriDream", href: "#" },
              { src: "/images/sponsors/GTG Logo.png", alt: "GTG", href: "#" },
              { src: "/images/sponsors/Elite Metal Fabricators, Inc_Logo Phone Number.pdf.png", alt: "Elite Metal Fabricators", href: "#" },
            ].map(({ src, alt, href }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[2/1] rounded-xl overflow-hidden ring-1 ring-white/20 block"
                style={{ background: "#ffffff" }}
              >
                <div className="absolute inset-3">
                  <Image src={src} alt={alt} fill className="object-contain" />
                </div>
                <div className="absolute inset-0 flex items-end justify-center pb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: "linear-gradient(to top, rgba(7,17,31,0.82) 0%, transparent 65%)" }}>
                  <span className="flex items-center gap-1.5 font-inter font-bold uppercase tracking-[1.5px] text-white" style={{ fontSize: "0.72rem" }}>
                    Visit Sponsor
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* ── Supporting sponsors ── */}
          <div className="flex items-center gap-4 mb-5">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
            <span
              className="font-inter font-bold text-[0.72rem] tracking-[3px] uppercase whitespace-nowrap"
              style={{ color: "#A7A8AA" }}
            >
              Supporting Sponsors
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { src: "/images/sponsors/Edward Jones.png", alt: "Edward Jones", bg: "#FFD100", border: "rgba(255,209,0,0.3)", href: "#" },
              { src: "/images/sponsors/Wise Powder Coating.JPEG", alt: "Wise Powder Coating", bg: "#ffffff", border: "rgba(255,255,255,0.15)", href: "#" },
              { src: "/images/sponsors/ECS-2.png", alt: "ECS", bg: "#ffffff", border: "rgba(255,255,255,0.15)", href: "#" },
            ].map(({ src, alt, bg, border, href }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[3/1] rounded-lg overflow-hidden block"
                style={{ background: bg, border: `1px solid ${border}` }}
              >
                <div className="absolute inset-2">
                  <Image src={src} alt={alt} fill className="object-contain" />
                </div>
                <div className="absolute inset-0 flex items-end justify-center pb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: "linear-gradient(to top, rgba(7,17,31,0.82) 0%, transparent 65%)" }}>
                  <span className="flex items-center gap-1.5 font-inter font-bold uppercase tracking-[1.5px] text-white" style={{ fontSize: "0.65rem" }}>
                    Visit Sponsor
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="flex flex-col items-center gap-4">
          <p
            className="font-inter font-bold uppercase tracking-[3px]"
            style={{ color: "#7AC143", fontSize: "0.78rem" }}
          >
            Packages starting at $250
          </p>
          <Link
            href="/sponsors"
            className="inline-flex items-center bg-green hover:bg-green-dk text-white font-inter font-bold text-[0.85rem] tracking-[2px] uppercase px-8 py-4 rounded transition-colors duration-200"
          >
            Explore Sponsorships
          </Link>
        </div>

      </div>
    </section>
  );
}
