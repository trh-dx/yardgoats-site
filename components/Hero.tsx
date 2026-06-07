import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy pt-[68px]"
    >
      {/* Real photo background */}
      <Image
        src="https://images.unsplash.com/photo-1503766587563-7cf366650cd9?auto=format&fit=crop&w=1920&q=80"
        alt=""
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark overlay — keeps text readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,17,31,0.72) 0%, rgba(8,17,31,0.65) 50%, rgba(8,17,31,0.85) 100%)",
        }}
      />

      {/* Green tint at bottom to blend into scoreboard */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(8,17,31,0.9) 0%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-8 max-w-[880px] mx-auto">
        <Image
          src="/yardgoatsimage.png"
          alt="Paradise Yard Goats"
          width={190}
          height={190}
          className="mb-6 drop-shadow-[0_8px_36px_rgba(0,0,0,0.7)]"
          style={{ width: "min(190px, 44vw)", height: "auto" }}
          priority
        />

        <div className="flex items-center gap-2.5 mb-4">
          <span className="block w-8 h-px bg-tan" />
          <span className="font-[family-name:var(--font-barlow)] font-bold text-[0.82rem] tracking-[5px] uppercase text-tan">
            Paradise, Texas
          </span>
          <span className="block w-8 h-px bg-tan" />
        </div>

        <h1
          className="font-[family-name:var(--font-bebas)] leading-[0.87] tracking-wide mb-6"
          style={{ fontSize: "clamp(3.6rem, 10.5vw, 8.8rem)" }}
        >
          <span className="block text-white">Paradise</span>
          <span className="block text-green-lt">Yard Goats</span>
          <span className="block text-tan">Baseball</span>
        </h1>

        <p
          className="text-gray max-w-[540px] mx-auto mb-9 leading-relaxed"
          style={{ fontSize: "clamp(1rem, 2vw, 1.18rem)" }}
        >
          Youth baseball built on teamwork, grit, development, and community pride in Paradise, Texas.
        </p>

        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="#sponsors"
            className="inline-flex items-center gap-2 bg-red text-white font-[family-name:var(--font-barlow)] font-bold text-[0.95rem] tracking-[1.5px] uppercase px-7 py-3 rounded border-2 border-red hover:bg-red-dk hover:border-red-dk transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(179,38,30,0.4)]"
          >
            Become a Sponsor
          </a>
          <a
            href="/tryouts"
            className="inline-flex items-center gap-2 bg-transparent text-white font-[family-name:var(--font-barlow)] font-bold text-[0.95rem] tracking-[1.5px] uppercase px-7 py-3 rounded border-2 border-white/40 hover:border-white hover:bg-white/8 transition-all hover:-translate-y-0.5"
          >
            Ask About Tryouts
          </a>
          <a
            href="#schedule"
            className="inline-flex items-center gap-2 bg-green text-white font-[family-name:var(--font-barlow)] font-bold text-[0.95rem] tracking-[1.5px] uppercase px-7 py-3 rounded border-2 border-green hover:bg-green-dk hover:border-green-dk transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(46,125,50,0.4)]"
          >
            Follow the Season
          </a>
        </div>
      </div>
    </section>
  );
}
