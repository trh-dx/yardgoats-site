"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#about",    label: "About",    route: false },
  { href: "/teams",     label: "Teams",    route: true  },
  { href: "/#schedule", label: "Schedule", route: false },
  { href: "/#sponsors", label: "Sponsors", route: false },
  { href: "/#gallery",  label: "Photos",   route: false },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onTryouts = pathname === "/tryouts";
  const onTeams   = pathname === "/teams";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center justify-between px-6 border-b border-green/20 transition-all duration-300 ${
          scrolled
            ? "bg-navy/99 shadow-[0_4px_32px_rgba(0,0,0,0.55)]"
            : "bg-navy/92 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" onClick={closeMenu}>
          <Image
            src="/yardgoatsimage.png"
            alt="Yard Goats"
            width={44}
            height={44}
            className="rounded-full object-cover bg-green"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-[family-name:var(--font-bebas)] text-[1.28rem] text-white tracking-wide">
              Yard Goats
            </span>
            <span className="text-[0.57rem] text-tan font-bold tracking-[3px] uppercase">
              Paradise, Texas
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 list-none">
          {links.map((l) => {
            const active = l.route && onTeams && l.href === "/teams";
            const cls = `text-[0.82rem] font-semibold uppercase tracking-wide transition-colors ${
              active ? "text-tan" : "text-gray-lt hover:text-tan"
            }`;
            return (
              <li key={l.href}>
                {l.route ? (
                  <Link href={l.href} className={cls}>{l.label}</Link>
                ) : (
                  <a href={l.href} className={cls}>{l.label}</a>
                )}
              </li>
            );
          })}
          <li>
            <Link
              href="/tryouts"
              className={`text-[0.82rem] font-bold uppercase tracking-wide transition-colors ${
                onTryouts ? "text-tan" : "nav-pulse hover:[animation-play-state:paused]"
              }`}
            >
              Tryouts
            </Link>
          </li>
          <li>
            <a
              href="/#contact"
              className="bg-red text-white text-[0.82rem] font-bold uppercase tracking-wide px-4 py-1.5 rounded hover:bg-red-dk transition-colors"
            >
              Get Involved
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed top-[68px] left-0 right-0 z-40 bg-navy/99 backdrop-blur-md border-b border-green/20 flex flex-col px-6 py-4">
          {links.map((l) => {
            const active = l.route && onTeams && l.href === "/teams";
            const cls = `font-semibold py-2.5 border-b border-white/7 transition-colors ${
              active ? "text-tan" : "text-gray-lt hover:text-tan"
            }`;
            return l.route ? (
              <Link key={l.href} href={l.href} onClick={closeMenu} className={cls}>{l.label}</Link>
            ) : (
              <a key={l.href} href={l.href} onClick={closeMenu} className={cls}>{l.label}</a>
            );
          })}
          <Link
            href="/tryouts"
            onClick={closeMenu}
            className={`font-semibold py-2.5 border-b border-white/7 transition-colors ${
              onTryouts ? "text-tan" : "text-gray-lt hover:text-tan"
            }`}
          >
            Tryouts
          </Link>
          <a
            href="/#contact"
            onClick={closeMenu}
            className="text-gray-lt font-semibold py-2.5 border-b border-white/7 hover:text-tan transition-colors"
          >
            Get Involved
          </a>
        </div>
      )}
    </>
  );
}
