import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Field Rentals",
  description:
    "Reserve The Goat Yard in Paradise, Texas for team practices, private lessons, small group workouts, and baseball events.",
};

const rentalOptions = [
  {
    title: "Team Practice Rental",
    desc: "Reserve field time for team practices, workouts, and baseball development.",
  },
  {
    title: "Private Lesson / Small Group",
    desc: "Book space for private instruction, small group training, or skill-specific workouts.",
  },
  {
    title: "Weekend Field Block",
    desc: "Request larger time blocks for extended practices, scrimmages, or team events.",
  },
  {
    title: "Event or Tournament Inquiry",
    desc: "Contact us about special events, tournaments, camps, or larger rental needs.",
  },
];

const rentalRules = [
  "All rentals must be booked or approved in advance.",
  "Please leave the field better than you found it.",
  "No metal spikes unless approved.",
  "Weather may impact field availability.",
  "Lights access must be approved in advance.",
  "No unauthorized field use.",
  "Additional rules may apply depending on rental type.",
];

export default function FieldRentalsPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Page Header ──────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden pt-[70px]"
          style={{ minHeight: "clamp(300px, 50vh, 420px)" }}
        >
          <Image
            src="/images/baseball-tryout-image.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(7,17,31,0.97) 0%, rgba(7,17,31,0.92) 45%, rgba(7,17,31,0.65) 75%, rgba(7,17,31,0.40) 100%)",
            }}
          />

          <div
            className="relative max-w-[1280px] mx-auto px-6 py-12 flex flex-col justify-end"
            style={{ minHeight: "inherit" }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[0.72rem] font-inter uppercase tracking-[1.5px] text-white/40 mb-6">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>&rsaquo;</span>
              <span className="text-green">Field Rentals</span>
            </nav>

            <p
              className="font-bebas tracking-[3px] text-green mb-2"
              style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
            >
              THE GOAT YARD — PARADISE, TEXAS
            </p>

            <h1
              className="font-bebas text-white leading-none tracking-wide"
              style={{ fontSize: "clamp(4rem, 10vw, 7.5rem)" }}
            >
              RENT THE <span className="text-green">GOAT YARD</span>
            </h1>

            <p
              className="font-inter text-white/75 mt-4 max-w-[560px]"
              style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)", lineHeight: "1.65" }}
            >
              Reserve field time for team practices, private lessons, small group workouts,
              and baseball events in Paradise, Texas.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={siteConfig.fieldRentals}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green hover:bg-green-dk text-white font-inter font-bold text-[0.8rem] tracking-[2px] uppercase px-7 py-3 rounded transition-colors duration-200"
              >
                View Availability &amp; Book Field Time
              </a>
              <a
                href="#rental-rules"
                className="border-2 border-white text-white font-inter font-bold text-[0.8rem] tracking-[2px] uppercase px-7 py-3 rounded hover:bg-white hover:text-deep-navy transition-all duration-200"
              >
                Rental Rules
              </a>
            </div>
          </div>
        </section>

        {/* ── Field Availability Strip ──────────────────────────────── */}
        <div style={{ backgroundColor: "#003DA5" }} className="py-8">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">

              {/* Calendar icon */}
              <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
                <svg
                  className="w-7 h-7 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <rect x="3" y="4" width="18" height="17" rx="2.5" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="8" y1="2" x2="8" y2="6.5" />
                  <line x1="16" y1="2" x2="16" y2="6.5" />
                </svg>
              </div>

              {/* Text */}
              <div className="flex-1 text-center sm:text-left">
                <h2
                  className="font-bebas text-white leading-none tracking-wide mb-1"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
                >
                  Check Field Availability
                </h2>
                <p className="font-inter text-white/80" style={{ fontSize: "0.92rem" }}>
                  Field availability and rental requests are managed through our online booking system.
                  Use the button below to view open times and request your field rental.
                </p>
              </div>

              {/* Button */}
              <a
                href={siteConfig.fieldRentals}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 font-inter font-bold uppercase tracking-[2px] text-white px-7 py-3 rounded transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 whitespace-nowrap"
                style={{
                  fontSize: "0.8rem",
                  backgroundColor: "#07111F",
                  border: "2px solid rgba(255,255,255,0.18)",
                }}
              >
                Open Booking Calendar
              </a>

            </div>
          </div>
        </div>

        {/* ── Rental Options ───────────────────────────────────────── */}
        <section className="bg-deep-navy py-20 md:py-28">
          <div className="max-w-[1280px] mx-auto px-6">

            {/* Section heading */}
            <div className="text-center mb-14">
              <p
                className="font-inter font-bold text-green uppercase tracking-[4px] mb-2"
                style={{ fontSize: "0.72rem" }}
              >
                Reserve Your Time
              </p>
              <h2
                className="font-bebas text-white leading-none tracking-wide"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
              >
                Rental <span className="text-green">Options</span>
              </h2>
              <div className="w-12 h-[3px] bg-royal-blue rounded mx-auto mt-3" />
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {rentalOptions.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col rounded-lg overflow-hidden border border-royal-blue/30 hover:border-green/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
                  style={{ backgroundColor: "#0F172A" }}
                >
                  {/* Top green accent stripe */}
                  <div className="h-[3px] w-full" style={{ backgroundColor: "#7AC143" }} />

                  <div className="flex flex-col flex-1 px-6 pt-7 pb-7">
                    <h3
                      className="font-bebas text-white leading-tight mb-3"
                      style={{ fontSize: "1.45rem" }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="font-inter text-muted-gray leading-relaxed flex-1 mb-6"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {card.desc}
                    </p>
                    <a
                      href={siteConfig.fieldRentals}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-inter font-bold uppercase tracking-[2px] text-white text-center py-2.5 px-4 rounded transition-all duration-200 hover:opacity-90"
                      style={{
                        fontSize: "0.72rem",
                        backgroundColor: "#003DA5",
                        border: "1.5px solid #003DA5",
                      }}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Rental Rules ─────────────────────────────────────────── */}
        <section id="rental-rules" className="bg-charcoal py-20 md:py-28">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="max-w-[720px]">

              <span
                className="font-inter font-bold uppercase tracking-[3px] text-green block mb-2"
                style={{ fontSize: "0.72rem" }}
              >
                Before You Book
              </span>
              <h2
                className="font-bebas text-white leading-none mb-3"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
              >
                Field Rental <span className="text-green">Rules</span>
              </h2>
              <div className="w-12 h-[3px] rounded mb-10" style={{ backgroundColor: "#B3261E" }} />

              <ul className="space-y-5">
                {rentalRules.map((rule) => (
                  <li key={rule} className="flex items-start gap-4">
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5"
                      style={{ borderColor: "#7AC143" }}
                    >
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden>
                        <path
                          d="M1 4l2.5 2.5L9 1"
                          stroke="#7AC143"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span
                      className="font-inter text-muted-gray leading-relaxed"
                      style={{ fontSize: "0.95rem" }}
                    >
                      {rule}
                    </span>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </section>

        {/* ── Bottom CTA ───────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#7AC143" }} className="py-8">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">

              <Image
                src="/yardgoatsimage.png"
                alt="Yard Goats"
                width={60}
                height={60}
                className="rounded-full object-cover flex-shrink-0 ring-2 ring-white/30"
              />

              <div className="flex-1 text-center sm:text-left">
                <p
                  className="font-bebas text-white tracking-wide leading-tight"
                  style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)" }}
                >
                  READY TO GET ON THE FIELD?
                </p>
                <p className="font-inter text-white/85 mt-0.5" style={{ fontSize: "0.9rem" }}>
                  View available times and reserve your field rental through our online booking system.
                </p>
              </div>

              <a
                href={siteConfig.fieldRentals}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 font-inter font-bold uppercase tracking-[2px] text-white px-8 py-3 rounded transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                style={{
                  fontSize: "0.8rem",
                  backgroundColor: "#07111F",
                  border: "2px solid #07111F",
                }}
              >
                BOOK FIELD TIME
              </a>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
