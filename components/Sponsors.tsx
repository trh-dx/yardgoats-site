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

        {/* ── Sponsor logo strip ── */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-5">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
            <span
              className="font-inter font-bold text-[0.72rem] tracking-[3px] uppercase whitespace-nowrap"
              style={{ color: "#A7A8AA" }}
            >
              Our Current Sponsors
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            <div
              className="relative aspect-[2/1] rounded-lg overflow-hidden"
              style={{ background: "#ffffff", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <Image src="/images/sponsors/AMERIDREAM FOR WEB.jpg" alt="AmeriDream" fill className="object-contain" />
            </div>
            <div
              className="relative aspect-[2/1] rounded-lg overflow-hidden"
              style={{ background: "#ffffff", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <Image src="/images/sponsors/GTG Logo.png" alt="GTG" fill className="object-contain" />
            </div>
            <div
              className="relative aspect-[2/1] rounded-lg overflow-hidden"
              style={{ background: "#ffffff", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <Image src="/images/sponsors/Elite Metal Fabricators, Inc_Logo Phone Number.pdf.png" alt="Elite Metal Fabricators" fill className="object-contain" />
            </div>
            <div
              className="relative aspect-[2/1] rounded-lg overflow-hidden"
              style={{ background: "#FFD100", border: "1px solid rgba(255,209,0,0.3)" }}
            >
              <Image src="/images/sponsors/Edward Jones.png" alt="Edward Jones" fill className="object-contain" />
            </div>
            <div
              className="relative aspect-[2/1] rounded-lg overflow-hidden"
              style={{ background: "#ffffff", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <Image src="/images/sponsors/Wise Powder Coating.JPEG" alt="Wise Powder Coating" fill className="object-contain" />
            </div>
            <div
              className="relative aspect-[2/1] rounded-lg overflow-hidden"
              style={{ background: "#ffffff", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <Image src="/images/sponsors/ECS-2.png" alt="ECS" fill className="object-contain" />
            </div>
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
