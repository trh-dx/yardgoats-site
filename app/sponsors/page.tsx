import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import SponsorPackages from "@/components/SponsorPackages";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: {
    absolute: "Youth Baseball Sponsorships | Paradise Yard Goats",
  },
  description:
    "Support Paradise Yard Goats Baseball through local sponsorship opportunities that help fund equipment, tournament fees, facilities, and player development.",
};

const BENEFITS = [
  {
    label: "Tournament Fees",
    body: "Compete at the highest level across Texas.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M18 2H6v7a6 6 0 0012 0V2z"/>
        <path d="M6 9H4.5a2.5 2.5 0 010-5H6"/>
        <path d="M18 9h1.5a2.5 2.5 0 000-5H18"/>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
        <line x1="4" y1="22" x2="20" y2="22"/>
      </svg>
    ),
  },
  {
    label: "Equipment",
    body: "Quality gear for safety and performance.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" aria-hidden>
        {/* Bat 1 — handle bottom-left, barrel top-right */}
        <line x1="4" y1="20" x2="12" y2="12" strokeWidth="1.3"/>
        <line x1="12" y1="12" x2="20" y2="4" strokeWidth="2.8"/>
        {/* Bat 2 — handle bottom-right, barrel top-left */}
        <line x1="20" y1="20" x2="12" y2="12" strokeWidth="1.3"/>
        <line x1="12" y1="12" x2="4" y2="4" strokeWidth="2.8"/>
      </svg>
    ),
  },
  {
    label: "Practice Facilities",
    body: "Maintain fields and improve our training environment.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    label: "Player Development",
    body: "Coaching, training, and resources to grow.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
];

const STATS = [
  { value: "250+",      label: "Players & Families Impacted" },
  { value: "10+",       label: "Tournaments Each Season"     },
  { value: "1",         label: "Mission: Develop Champions"  },
  { value: "COUNTLESS", label: "Memories & Opportunities"    },
];

const WHY_PARTNER = [
  {
    title: "Reach Local Families",
    body: "Your business gets in front of hundreds of local families all season long.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    title: "Increase Community Visibility",
    body: "Show your support and build brand recognition in our community.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M3 11l19-9-9 19-2-8-8-2z"/>
      </svg>
    ),
  },
  {
    title: "Support Youth Development",
    body: "Help young athletes build skills, confidence, and character.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
        <polyline points="14.5 13.5 16.5 15.5 20.5 11.5"/>
      </svg>
    ),
  },
  {
    title: "Make a Lasting Impact",
    body: "Your investment helps create memories and opportunities that last a lifetime.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
  },
];

const PREMIER_LOGOS = [
  { src: "/images/sponsors/AMERIDREAM FOR WEB.jpg",                                  alt: "AmeriDream",              bg: "#ffffff" },
  { src: "/images/sponsors/GTG Logo.png",                                             alt: "GTG",                     bg: "#ffffff" },
  { src: "/images/sponsors/Elite Metal Fabricators, Inc_Logo Phone Number.pdf.png",  alt: "Elite Metal Fabricators",  bg: "#ffffff" },
];

const SUPPORTING_LOGOS = [
  { src: "/images/sponsors/Edward Jones.png",          alt: "Edward Jones",        bg: "#FFD100" },
  { src: "/images/sponsors/Wise Powder Coating.JPEG",  alt: "Wise Powder Coating", bg: "#ffffff" },
  { src: "/images/sponsors/ECS-2.png",                 alt: "ECS",                 bg: "#ffffff" },
];

export default function SponsorsPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ════════════════════════════════════════════════════════════
            HERO
        ════════════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden"
          style={{ paddingTop: "70px", background: "#07111F" }}
        >
          <Image
            src="/images/baseball-tryout-image.png"
            alt=""
            fill
            className="object-cover object-center"
            style={{ opacity: 0.2 }}
            priority
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(105deg, rgba(7,17,31,0.99) 0%, rgba(7,17,31,0.96) 50%, rgba(7,17,31,0.80) 100%)",
            }}
          />

          <div className="relative max-w-[1280px] mx-auto px-6 py-20 md:py-28 flex items-center gap-10 md:gap-16">

            {/* Text */}
            <div className="flex-1 max-w-[640px]">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-[0.72rem] font-inter uppercase tracking-[1.5px] text-white/40 mb-8">
                <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
                <span>&rsaquo;</span>
                <span className="text-green">Sponsors</span>
              </nav>

              <h1 className="leading-none mb-6">
                <span
                  className="font-bebas text-white block"
                  style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
                >
                  Invest in Players.
                </span>
                <span
                  className="font-marker text-green block"
                  style={{ fontSize: "clamp(1.8rem, 4.2vw, 3.8rem)", lineHeight: 1.2 }}
                >
                  Impact the Community.
                </span>
              </h1>

              <p
                className="font-inter text-muted-gray max-w-[500px]"
                style={{ fontSize: "clamp(0.9rem, 1.8vw, 1rem)", lineHeight: "1.8" }}
              >
                Your sponsorship helps fund essential resources, reduce costs for families, and create
                opportunities for our players to succeed on and off the field.
              </p>
            </div>

            {/* YG baseball */}
            <div
              className="hidden lg:block flex-shrink-0 relative"
              style={{ width: "320px", height: "320px" }}
            >
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: "-30%",
                  background: "radial-gradient(circle, rgba(122,193,67,0.18) 0%, transparent 65%)",
                  filter: "blur(40px)",
                }}
              />
              <Image
                src="/yardgoatsimage.png"
                alt="Paradise Yard Goats"
                fill
                className="object-contain"
                style={{ filter: "drop-shadow(0 0 40px rgba(122,193,67,0.25))" }}
              />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            BENEFITS
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-deep-navy py-12 md:py-16">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
              {BENEFITS.map(({ label, body, icon }) => (
                <div key={label} className="flex flex-col items-center text-center gap-3">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-green flex-shrink-0"
                    style={{ background: "rgba(122,193,67,0.08)", border: "1px solid rgba(122,193,67,0.2)" }}
                  >
                    {icon}
                  </div>
                  <div
                    className="font-inter font-bold uppercase tracking-[2px] text-white"
                    style={{ fontSize: "0.75rem" }}
                  >
                    {label}
                  </div>
                  <div
                    className="font-inter text-muted-gray leading-relaxed"
                    style={{ fontSize: "0.83rem" }}
                  >
                    {body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            STATS
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-deep-navy py-10 md:py-14">
          <div className="max-w-[1280px] mx-auto px-6">
            <div
              className="rounded-xl grid grid-cols-2 md:grid-cols-4"
              style={{ border: "1px solid rgba(0,61,165,0.3)", background: "#0a1628" }}
            >
              {STATS.map(({ value, label }, i) => (
                <div
                  key={label}
                  className={`flex flex-col items-center text-center py-8 px-4 ${
                    i < 2 ? "border-b md:border-b-0" : ""
                  } ${
                    i === 0 || i === 2 ? "border-r" : i === 1 ? "md:border-r" : ""
                  }`}
                  style={{ borderColor: "rgba(255,255,255,0.07)" }}
                >
                  <span
                    className="font-bebas text-green leading-none mb-1"
                    style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)" }}
                  >
                    {value}
                  </span>
                  <span
                    className="font-inter font-bold uppercase tracking-[1.5px] text-white/55"
                    style={{ fontSize: "0.65rem" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SPONSORSHIP PACKAGES
        ════════════════════════════════════════════════════════════ */}
        <section id="packages" className="bg-deep-navy py-16 md:py-20">
          <div className="max-w-[1280px] mx-auto px-6">

            {/* Section heading */}
            <div className="flex items-center justify-center gap-5 mb-10">
              <div className="w-16 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
              <h2
                className="font-bebas text-white tracking-[5px] whitespace-nowrap"
                style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)" }}
              >
                Sponsorship Packages
              </h2>
              <div className="w-16 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
            </div>

            <SponsorPackages />
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            WHY PARTNER
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-deep-navy py-16 md:py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <div
              className="rounded-xl p-6 md:p-10 lg:p-16"
              style={{ border: "1px solid rgba(0,61,165,0.28)", background: "#0a1628" }}
            >
              <h2
                className="font-bebas text-white text-center leading-none mb-10"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Why Partner with the{" "}
                <span className="text-green">Yard Goats?</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                {WHY_PARTNER.map(({ title, body, icon }) => (
                  <div key={title} className="flex gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-green"
                      style={{ background: "rgba(122,193,67,0.08)", border: "1px solid rgba(122,193,67,0.2)" }}
                    >
                      {icon}
                    </div>
                    <div>
                      <h3
                        className="font-inter font-bold text-white mb-1"
                        style={{ fontSize: "0.95rem" }}
                      >
                        {title}
                      </h3>
                      <p
                        className="font-inter text-muted-gray leading-relaxed"
                        style={{ fontSize: "0.87rem" }}
                      >
                        {body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            LOGO WALL
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-deep-navy py-12 md:py-16">
          <div className="max-w-[1280px] mx-auto px-6">

            {/* Premier */}
            <div className="flex items-center gap-4 mb-5">
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
              <span
                className="font-inter font-bold text-[0.72rem] tracking-[3px] uppercase whitespace-nowrap"
                style={{ color: "#7AC143" }}
              >
                Premier Sponsors
              </span>
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {PREMIER_LOGOS.map(({ src, alt, bg }) => (
                <div
                  key={alt}
                  className="relative aspect-[2/1] rounded-xl overflow-hidden ring-1 ring-white/20"
                  style={{ background: bg }}
                >
                  <div className="absolute inset-3">
                    <Image src={src} alt={alt} fill className="object-contain" />
                  </div>
                </div>
              ))}
            </div>

            {/* Supporting */}
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

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {SUPPORTING_LOGOS.map(({ src, alt, bg }) => (
                <div
                  key={alt}
                  className="relative aspect-[3/1] rounded-lg overflow-hidden"
                  style={{ background: bg, border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <div className="absolute inset-2">
                    <Image src={src} alt={alt} fill className="object-contain" />
                  </div>
                </div>
              ))}
              <div
                className="aspect-[3/1] rounded-lg flex flex-col items-center justify-center gap-1 text-center px-3"
                style={{
                  background: "rgba(122,193,67,0.04)",
                  border: "1px dashed rgba(122,193,67,0.35)",
                }}
              >
                <span className="font-inter font-bold text-[0.65rem] tracking-wide uppercase" style={{ color: "rgba(122,193,67,0.7)" }}>
                  Your Logo Here
                </span>
                <span className="font-inter text-[0.62rem]" style={{ color: "rgba(167,168,170,0.6)" }}>
                  Join our team of sponsors!
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            CTA BANNER
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-deep-navy py-10 md:py-14">
          <div className="max-w-[1280px] mx-auto px-6">
            <div
              className="rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8"
              style={{ background: "#0a1628", border: "1px solid rgba(122,193,67,0.22)" }}
            >

              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <h3
                  className="font-bebas text-white leading-none mb-2"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
                >
                  Want to become a sponsor?
                </h3>
                <p className="font-inter text-muted-gray leading-relaxed" style={{ fontSize: "0.88rem" }}>
                  We offer custom sponsorship opportunities to fit your business goals and budget.
                  Let&rsquo;s build champions together.
                </p>
              </div>

              {/* Button */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex-shrink-0 inline-flex items-center gap-2 bg-green hover:bg-green-dk text-white font-inter font-bold uppercase tracking-[2px] px-11 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5"
                style={{ fontSize: "0.82rem" }}
              >
                Let&rsquo;s Partner
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
