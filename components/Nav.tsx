"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/",          label: "Home",     exact: true  },
  { href: "/teams",     label: "Teams" },
  { href: "/tryouts",   label: "Tryouts" },
  { href: "/about",     label: "About"   },
  { href: "/#sponsors", label: "Sponsors" },
  { href: "/contact",   label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href) && href !== "/";

  const close = () => setMobileOpen(false);

  return (
    <>
      {/* ── DESKTOP NAV ─────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[70px] flex items-center transition-all duration-300 ${
          scrolled
            ? "bg-deep-navy shadow-[0_4px_32px_rgba(0,0,0,0.6)]"
            : "bg-deep-navy/95 backdrop-blur-md"
        } border-b border-royal-blue/25`}
      >
        <div className="max-w-[1280px] mx-auto px-5 w-full flex items-center justify-between gap-6">

          {/* ── Logo ─────────────────────────────────── */}
          <Link href="/" onClick={close} className="flex items-center gap-3 shrink-0">
            <Image
              src="/yardgoatsimage.png"
              alt="Paradise Yard Goats"
              width={46}
              height={46}
              className="rounded-full object-cover ring-2 ring-green/30"
              priority
            />
            <div className="flex flex-col leading-none">
              <span
                className="text-[0.52rem] font-inter font-bold tracking-[3px] uppercase text-green"
              >
                Paradise
              </span>
              <span
                className="font-bebas text-[1.35rem] text-white tracking-[1px] leading-tight"
              >
                Yard Goats
              </span>
              <span
                className="text-[0.52rem] font-inter font-bold tracking-[3px] uppercase text-royal-blue"
              >
                Baseball
              </span>
            </div>
          </Link>

          {/* ── Desktop links ────────────────────────── */}
          <ul className="hidden lg:flex items-center gap-7 list-none">
            {NAV_LINKS.map((l) => {
              const active = l.exact ? pathname === l.href : isActive(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`inline-flex items-center gap-1 text-[0.75rem] font-inter font-semibold uppercase tracking-[1.5px] transition-colors pb-0.5 ${
                      active
                        ? "text-white border-b-2 border-green"
                        : "text-muted-gray hover:text-white"
                    }`}
                  >
                    {l.label}
                    {l.dropdown && (
                      <svg
                        className="w-2.5 h-2.5 mt-0.5"
                        viewBox="0 0 10 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      >
                        <path d="M1 1l4 4 4-4" />
                      </svg>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── CTA + hamburger ──────────────────────── */}
          <div className="flex items-center gap-3">
            <Link
              href="/#sponsors"
              className="hidden md:inline-flex items-center border border-royal-blue text-white hover:bg-royal-blue font-inter font-bold text-[0.75rem] tracking-[2px] uppercase px-5 py-2.5 rounded transition-colors whitespace-nowrap"
            >
              Become a Sponsor
            </Link>
            <Link
              href="/tryouts"
              className="hidden md:inline-flex items-center bg-green hover:bg-green-dk text-white font-inter font-bold text-[0.75rem] tracking-[2px] uppercase px-5 py-2.5 rounded transition-colors whitespace-nowrap"
            >
              Join The Goats
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center gap-1.5 p-1.5 cursor-pointer"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>

        </div>
      </nav>

      {/* ── MOBILE MENU ─────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="fixed top-[70px] left-0 right-0 z-40 bg-deep-navy border-b border-royal-blue/25 flex flex-col px-5 py-4">
          {NAV_LINKS.map((l) => {
            const active = l.exact ? pathname === l.href : isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={close}
                className={`font-inter font-semibold text-sm uppercase tracking-[1.5px] py-3 border-b border-white/8 transition-colors ${
                  active ? "text-green" : "text-muted-gray hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/tryouts"
            onClick={close}
            className="mt-4 text-center bg-green text-white font-inter font-bold text-[0.8rem] tracking-[2px] uppercase py-3 rounded hover:bg-green-dk transition-colors"
          >
            Join The Goats
          </Link>
        </div>
      )}
    </>
  );
}
