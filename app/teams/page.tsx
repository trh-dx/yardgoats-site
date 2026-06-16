import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TeamsGrid from "@/components/TeamsGrid";
import SpotlightCards from "@/components/SpotlightCards";

export const metadata: Metadata = {
  title: "Our Club | Paradise Yard Goats Baseball",
  description:
    "Meet the Paradise Yard Goats — 7U, 8U, 9U, and 11U youth travel baseball. Built on Dirt. Driven by Development.",
};

export default function TeamsPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ════════════════════════════════════════════════════════════
            HERO
        ════════════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden flex items-center"
          style={{ minHeight: "clamp(360px, 58vh, 540px)", paddingTop: "70px" }}
        >
          {/* Background image */}
          <Image
            src="/images/baseball-tryout-image.png"
            alt=""
            fill
            className="object-cover object-center scale-110"
            priority
          />

          {/* Royal-blue tinted cinematic overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(120deg, rgba(7,17,31,0.97) 0%, rgba(0,43,127,0.45) 55%, rgba(7,17,31,0.93) 100%)",
            }}
          />
          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
            style={{ background: "linear-gradient(to top, #07111F, transparent)" }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-[1280px] mx-auto px-5 w-full py-12">

            {/* Breadcrumb */}
            <nav
              className="flex items-center gap-1.5 mb-8 font-inter text-[0.7rem] tracking-[1.5px] uppercase text-white/35"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-white/60 transition-colors">
                Home
              </Link>
              <span>›</span>
              <span className="text-green">Teams</span>
            </nav>

            {/* Headline */}
            <h1
              className="font-bebas text-white leading-none"
              style={{
                fontSize: "clamp(3.8rem, 9vw, 7.5rem)",
                textShadow: "0 4px 24px rgba(0,0,0,0.7)",
              }}
            >
              Our Club
            </h1>

            {/* Accent */}
            <p
              className="font-marker text-green mt-1"
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.6rem)" }}
            >
              Built on Dirt. Driven by Development.
            </p>

            <p
              className="font-inter text-white/70 mt-4 max-w-[520px]"
              style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)", lineHeight: "1.65" }}
            >
              Developing North Texas ballplayers through hard work, competition, and a passion for the game.
            </p>

          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            FILTER TABS + TEAM CARDS  (client component)
        ════════════════════════════════════════════════════════════ */}
        <TeamsGrid />

        {/* ════════════════════════════════════════════════════════════
            PLAYER SPOTLIGHTS
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-charcoal py-20 md:py-28">
          <div className="max-w-[1280px] mx-auto px-6">

            {/* Header */}
            <div className="text-center mb-14">
              <span
                className="font-inter font-bold uppercase tracking-[3px] text-green block mb-2"
                style={{ fontSize: "0.72rem" }}
              >
                Player Recognition
              </span>
              <h2
                className="font-bebas text-white leading-none mb-3"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
              >
                Player Spotlights
              </h2>
              <div className="w-12 h-[3px] bg-green rounded mx-auto mb-5" />
              <p
                className="font-inter text-muted-gray leading-relaxed max-w-[540px] mx-auto"
                style={{ fontSize: "0.97rem" }}
              >
                Celebrating effort, growth, sportsmanship, and the players who set the standard every day.
              </p>
            </div>

            <SpotlightCards players={[
              {
                name: "Player Name",
                position: "Shortstop",
                team: "11U Yard Goats",
                badge: "Hustle Award",
                highlight: "Has demonstrated outstanding effort and leadership throughout the season while continuing to raise the level of every player around them. A true team-first competitor who leads by example.",
              },
              {
                name: "Player Name",
                position: "Catcher",
                team: "9U Yard Goats",
                badge: "Gold Glove",
                highlight: "Improved dramatically behind the plate this season through patience and hard work. The kind of player every team is better for having — attitude and effort, every single day.",
              },
              {
                name: "Player Name",
                position: "Pitcher / OF",
                team: "8U Yard Goats",
                badge: "Practice Leader",
                highlight: "Shows maturity beyond their years with composure on the mound and infectious energy in the dugout. One of the most coachable players on the roster — always asking what they can do better.",
              },
              {
                name: "Player Name",
                position: "1B / Pitcher",
                team: "7U Yard Goats",
                badge: "Teammate Award",
                highlight: "In their first season of organized baseball, this player has become someone teammates look to for encouragement. Pure heart and hustle from the first inning to the last.",
              },
            ]} />

          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SPONSOR BANNER
        ════════════════════════════════════════════════════════════ */}
        <div className="bg-deep-navy py-8">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border border-green/20 rounded-xl px-8 py-6" style={{ background: "rgba(122,193,67,0.04)" }}>
              <p className="font-inter text-white/70 leading-relaxed max-w-[580px]" style={{ fontSize: "0.97rem" }}>
                Sponsorships help support uniforms, equipment, tournament fees, practice needs, and player development across all Yard Goats teams.
              </p>
              <a
                href="/#sponsors"
                className="flex-shrink-0 bg-green hover:bg-green-dk text-white font-inter font-bold uppercase tracking-[2px] px-8 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
                style={{ fontSize: "0.8rem" }}
              >
                Become a Sponsor
              </a>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════
            BOTTOM CTA BAND
        ════════════════════════════════════════════════════════════ */}
        <section className="py-14" style={{ backgroundColor: "#040C17" }}>

          <div className="max-w-[1280px] mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-8">

            {/* Left — logo + copy */}
            <div className="flex items-center gap-5">
              <Image
                src="/yardgoatsimage.png"
                alt="Yard Goats"
                width={72}
                height={72}
                className="rounded-full shrink-0 ring-2 ring-green/30"
              />
              <div>
                {/* Headline */}
                <h2
                  className="font-bebas text-white leading-none tracking-wide"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                >
                  Ready to Join{" "}
                  <span className="font-marker text-green" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)" }}>
                    The Goats?
                  </span>
                </h2>

                {/* Pipe-separated subtext */}
                <div className="flex flex-wrap items-center gap-2 mt-1 mb-3">
                  {["Find your team.", "Build your confidence.", "Have Fun."].map((item, i, arr) => (
                    <span key={item} className="flex items-center gap-2">
                      <span className="font-inter text-white/70" style={{ fontSize: "0.88rem" }}>{item}</span>
                      {i < arr.length - 1 && <span className="text-green">|</span>}
                    </span>
                  ))}
                </div>

                {/* Age groups */}
                <div className="flex items-center gap-2 font-bebas text-white tracking-widest" style={{ fontSize: "1.4rem" }}>
                  {["7U", "8U", "9U", "11U"].map((age, i, arr) => (
                    <span key={age} className="flex items-center gap-2">
                      <span>{age}</span>
                      {i < arr.length - 1 && <span className="text-green" style={{ fontSize: "0.6rem" }}>★</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — CTA */}
            <Link
              href="/tryouts"
              className="shrink-0 inline-flex items-center gap-3 bg-green hover:bg-green-dk text-white
                         font-inter font-bold text-[0.85rem] tracking-[2px] uppercase
                         px-9 py-4 rounded transition-colors duration-200 whitespace-nowrap"
            >
              Register for Tryouts
              <span aria-hidden="true">&rarr;</span>
            </Link>

          </div>
        </section>
        <div className="h-[3px] bg-green w-full" />

      </main>
      <Footer />
    </>
  );
}
