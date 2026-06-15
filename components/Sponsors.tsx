"use client";
import { sponsors } from "@/lib/data";

// ── Baseball stitch SVG divider ───────────────────────────────────────
function StitchDivider({ color }: { color: string }) {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="flex-1 h-px" style={{ background: color }} />
      <svg width="32" height="10" viewBox="0 0 32 10" fill="none">
        <path
          d="M0,5 C4,1.5 7,8.5 11,5 C15,1.5 18,8.5 22,5 C25,2 29,8 32,5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <div className="flex-1 h-px" style={{ background: color }} />
    </div>
  );
}

// ── Per-tier visual config ────────────────────────────────────────────
const cfg: Record<string, {
  stripe: string; stripeH: string;
  bg: string;
  borderI: string; borderH: string; borderW: string;
  shadowI: string; shadowH: string;
  accent: string; priceColor: string;
  stitch: string;
  topGlow?: string;
  badge?: { text: string; bg: string; color: string; border: string };
  iconSize: string; nameSize: string; priceSize: string; priceSufSize: string;
  padTop: string; lift: string;
  btnBg: string; btnColor: string; btnBorder: string; btnHoverBg: string;
}> = {
  Single: {
    stripe: "#A7A8AA",  stripeH: "2px",
    bg: "#0c1525",
    borderI: "rgba(167,168,170,0.18)", borderH: "rgba(167,168,170,0.55)", borderW: "1px",
    shadowI: "0 4px 24px rgba(0,0,0,0.65)",
    shadowH: "0 20px 50px rgba(0,0,0,0.7), 0 0 0 1px rgba(167,168,170,0.12)",
    accent: "#A7A8AA", priceColor: "#D0D1D2",
    stitch: "rgba(167,168,170,0.18)",
    iconSize: "2.4rem", nameSize: "2.1rem", priceSize: "3.4rem", priceSufSize: "2rem",
    padTop: "pt-7", lift: "-6px",
    btnBg: "transparent", btnColor: "#A7A8AA", btnBorder: "rgba(167,168,170,0.4)",
    btnHoverBg: "rgba(167,168,170,0.1)",
  },
  Double: {
    stripe: "#003DA5", stripeH: "2px",
    bg: "#0c1525",
    borderI: "rgba(0,61,165,0.28)", borderH: "rgba(0,61,165,0.72)", borderW: "1px",
    shadowI: "0 4px 24px rgba(0,0,0,0.65)",
    shadowH: "0 22px 56px rgba(0,61,165,0.2), 0 4px 24px rgba(0,0,0,0.65)",
    accent: "#6699EE", priceColor: "#7AAAF0",
    stitch: "rgba(0,61,165,0.28)",
    iconSize: "2.4rem", nameSize: "2.1rem", priceSize: "3.4rem", priceSufSize: "2rem",
    padTop: "pt-7", lift: "-6px",
    btnBg: "transparent", btnColor: "#7AAAF0", btnBorder: "rgba(0,61,165,0.5)",
    btnHoverBg: "rgba(0,61,165,0.14)",
  },
  Triple: {
    stripe: "#7AC143", stripeH: "3px",
    bg: "linear-gradient(170deg,#0b1d0e 0%,#0c1525 65%)",
    borderI: "rgba(122,193,67,0.35)", borderH: "rgba(122,193,67,0.78)", borderW: "1px",
    shadowI: "0 6px 28px rgba(0,0,0,0.7)",
    shadowH: "0 24px 60px rgba(122,193,67,0.24), 0 6px 28px rgba(0,0,0,0.7)",
    accent: "#7AC143", priceColor: "#7AC143",
    stitch: "rgba(122,193,67,0.24)",
    badge: { text: "Best Value", bg: "rgba(122,193,67,0.12)", color: "#7AC143", border: "rgba(122,193,67,0.4)" },
    iconSize: "2.6rem", nameSize: "2.3rem", priceSize: "3.7rem", priceSufSize: "2.1rem",
    padTop: "pt-9", lift: "-8px",
    btnBg: "#7AC143", btnColor: "#000000", btnBorder: "#7AC143",
    btnHoverBg: "#94D45A",
  },
  "Home Run": {
    stripe: "#B3261E", stripeH: "4px",
    bg: "linear-gradient(160deg,#170608 0%,#0e0b1c 100%)",
    borderI: "rgba(179,38,30,0.48)", borderH: "rgba(179,38,30,0.88)", borderW: "2px",
    shadowI: "0 8px 40px rgba(179,38,30,0.24), 0 4px 24px rgba(0,0,0,0.75)",
    shadowH: "0 30px 75px rgba(179,38,30,0.45), 0 8px 40px rgba(0,0,0,0.75)",
    accent: "#E05C55", priceColor: "#E05C55",
    stitch: "rgba(179,38,30,0.28)",
    topGlow: "radial-gradient(ellipse 85% 55% at 50% 0%,rgba(179,38,30,0.18) 0%,transparent 100%)",
    badge: { text: "Premier Sponsor", bg: "rgba(179,38,30,0.15)", color: "#F07070", border: "rgba(179,38,30,0.48)" },
    iconSize: "3rem", nameSize: "2.7rem", priceSize: "4.4rem", priceSufSize: "2.5rem",
    padTop: "pt-10", lift: "-10px",
    btnBg: "#B3261E", btnColor: "#ffffff", btnBorder: "#B3261E",
    btnHoverBg: "#8c1d17",
  },
};

const icons: Record<string, string> = {
  Single:     "⚾",
  Double:     "🏅",
  Triple:     "⭐",
  "Home Run": "🏆",
};

// ── Component ─────────────────────────────────────────────────────────
export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "#070c15" }}
    >
      {/* Stadium glow — royal blue light from above */}
      <div
        className="absolute inset-x-0 top-0 h-72 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(0,61,165,0.2) 0%, transparent 100%)",
        }}
      />

      {/* Subtle dirt-dot texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.028) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top + bottom fades to adjacent sections */}
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
        <div className="text-center max-w-[720px] mx-auto mb-4">
          <span
            className="font-barlow font-bold text-[0.78rem] tracking-[4px] uppercase block mb-2"
            style={{ color: "#7AC143" }}
          >
            Make an Impact
          </span>
          <h2
            className="font-bebas leading-none text-white mb-3"
            style={{ fontSize: "clamp(2.2rem,4.5vw,3.5rem)" }}
          >
            Step Up to the Plate for{" "}
            <span style={{ color: "#7AC143" }}>Local Youth Baseball</span>
          </h2>
          <div className="w-[52px] h-[3px] bg-red rounded mx-auto mb-4" />
          <p className="text-gray leading-relaxed mb-3">
            Paradise Yard Goats depends on the support of local families, businesses, and community
            sponsors. Sponsorships help cover tournament fees, uniforms, equipment, practice needs,
            and player development.
          </p>
          <p
            className="font-barlow font-bold text-[0.88rem] leading-relaxed italic"
            style={{ color: "rgba(122,193,67,0.8)" }}
          >
            Your sponsorship helps local kids play more baseball, represent Paradise, and keep costs manageable for families.
          </p>
        </div>

        {/* ── Sponsor cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-16 mt-12">
          {sponsors.map((pkg) => {
            const s = cfg[pkg.name];
            if (!s) return null;

            return (
              <div
                key={pkg.name}
                className="relative rounded-xl transition-[transform] duration-300"
                style={{
                  background: s.bg,
                  border: `${s.borderW} solid ${s.borderI}`,
                  boxShadow: s.shadowI,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = s.borderH;
                  e.currentTarget.style.boxShadow = s.shadowH;
                  e.currentTarget.style.transform = `translateY(${s.lift})`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = s.borderI;
                  e.currentTarget.style.boxShadow = s.shadowI;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Top stripe — rounded to match card */}
                <div
                  className="rounded-t-xl"
                  style={{ height: s.stripeH, background: s.stripe }}
                />

                {/* Home Run inner atmospheric glow */}
                {s.topGlow && (
                  <div
                    className="absolute inset-x-0 top-0 h-36 pointer-events-none rounded-t-xl"
                    style={{ background: s.topGlow }}
                  />
                )}

                {/* Badge pill — floats above card */}
                {s.badge && (
                  <span
                    className="absolute left-1/2 -translate-x-1/2 font-barlow font-bold text-[0.62rem] tracking-[2px] uppercase px-3 py-1 rounded-b-md whitespace-nowrap z-10"
                    style={{
                      top: s.stripeH,
                      background: s.badge.bg,
                      color: s.badge.color,
                      border: `1px solid ${s.badge.border}`,
                      borderTop: "none",
                    }}
                  >
                    {s.badge.text}
                  </span>
                )}

                {/* Card content */}
                <div className={`relative px-6 pb-7 ${s.padTop}`}>

                  {/* Icon */}
                  <div className="text-center mb-2" style={{ fontSize: s.iconSize }}>
                    {icons[pkg.name]}
                  </div>

                  {/* Tier label */}
                  <div
                    className="font-barlow font-bold text-[0.68rem] tracking-[3px] uppercase text-center mb-0.5"
                    style={{ color: s.accent }}
                  >
                    {pkg.tier}
                  </div>

                  {/* Package name */}
                  <div
                    className="font-bebas text-white text-center leading-none mb-1"
                    style={{ fontSize: s.nameSize }}
                  >
                    {pkg.name}
                  </div>

                  {/* Price */}
                  <div
                    className="font-bebas leading-none text-center"
                    style={{ fontSize: s.priceSize, color: s.priceColor }}
                  >
                    {pkg.price}
                    {pkg.priceSuffix && (
                      <span style={{ fontSize: s.priceSufSize }}>{pkg.priceSuffix}</span>
                    )}
                  </div>

                  {/* Price note */}
                  <div
                    className="text-center text-[0.71rem] mb-0"
                    style={{ color: "rgba(167,168,170,0.55)" }}
                  >
                    one-time sponsorship
                  </div>

                  {/* Baseball stitch divider */}
                  <StitchDivider color={s.stitch} />

                  {/* Perks */}
                  <ul className="space-y-0 mb-6">
                    {pkg.perks.map((perk) => (
                      <li
                        key={perk}
                        className="flex items-start gap-2.5 text-[0.86rem] py-1.5"
                        style={{
                          color: "rgba(255,255,255,0.72)",
                          borderBottom: "1px solid rgba(255,255,255,0.05)",
                        }}
                      >
                        <span
                          className="font-bold mt-0.5 shrink-0 text-[0.78rem]"
                          style={{ color: s.accent }}
                        >
                          ✓
                        </span>
                        {perk}
                      </li>
                    ))}
                  </ul>

                  {/* CTA button */}
                  <a
                    href="#contact"
                    className="block w-full text-center font-barlow font-bold tracking-[1.5px] uppercase rounded-sm transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      padding: pkg.name === "Home Run" ? "0.75rem 1rem" : "0.62rem 1rem",
                      fontSize: pkg.name === "Home Run" ? "0.86rem" : "0.8rem",
                      backgroundColor: s.btnBg,
                      color: s.btnColor,
                      border: `2px solid ${s.btnBorder}`,
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = s.btnHoverBg;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = s.btnBg;
                    }}
                  >
                    {pkg.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Sponsor logo wall ── */}
        <div>
          <div className="flex items-center gap-4 mb-5">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
            <h3
              className="font-barlow font-bold text-[0.75rem] tracking-[3px] uppercase whitespace-nowrap"
              style={{ color: "#A7A8AA" }}
            >
              Our Current Sponsors
            </h3>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={i}
                className="aspect-[2/1] rounded-lg flex items-center justify-center text-[0.65rem] tracking-wide uppercase"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px dashed rgba(255,255,255,0.1)",
                  color: "rgba(167,168,170,0.5)",
                }}
              >
                Sponsor
              </div>
            ))}
            <div
              className="aspect-[2/1] rounded-lg flex items-center justify-center text-[0.65rem] tracking-wide uppercase"
              style={{
                background: "rgba(122,193,67,0.04)",
                border: "1px dashed rgba(122,193,67,0.25)",
                color: "rgba(122,193,67,0.6)",
              }}
            >
              Your Logo
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
