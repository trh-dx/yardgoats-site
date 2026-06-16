import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

const QUICK_LINKS = [
  { href: "/",          label: "Home"     },
  { href: "/teams",     label: "Teams"    },
  { href: "/tryouts",   label: "Tryouts"  },
  { href: "/sponsors",  label: "Sponsors" },
  { href: "/about",     label: "About"    },
  { href: "/contact",   label: "Contact"  },
];


const SPONSOR_LINKS = [
  { href: "/#sponsors", label: "Our Sponsors"    },
  { href: "/#sponsors", label: "Become a Sponsor" },
];

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h4 className="font-inter font-bold text-white uppercase tracking-[3px]" style={{ fontSize: "0.72rem" }}>
        {children}
      </h4>
      <div className="w-8 h-[2px] bg-green rounded mt-2" />
    </div>
  );
}

function ColLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="font-inter text-muted-gray hover:text-green transition-colors" style={{ fontSize: "0.9rem" }}>
        {label}
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-royal-blue/20 pt-10 pb-5" style={{ backgroundColor: "#040C17" }}>
      <div className="max-w-[1280px] mx-auto px-5">

        {/* ── Main grid ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1px_1fr_1px_1fr_1px_1fr_1px_1.4fr] gap-0 mb-8 items-start">

          {/* Col 1 · Brand */}
          <div className="pr-10 pb-8 lg:pb-0">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/yardgoatsimage.png"
                alt="Paradise Yard Goats Baseball"
                width={72}
                height={72}
                className="rounded-full object-cover ring-2 ring-green/25 shrink-0"
              />
              <div className="flex flex-col items-center leading-none">
                {/* PARADISE with lines */}
                <div className="flex items-center gap-1.5 w-full">
                  <div className="flex-1 h-px bg-green" />
                  <span className="font-inter font-bold text-green uppercase tracking-[3px]" style={{ fontSize: "0.55rem" }}>Paradise</span>
                  <div className="flex-1 h-px bg-green" />
                </div>
                {/* YARD GOATS */}
                <span className="font-bebas text-white tracking-wide" style={{ fontSize: "1.7rem", lineHeight: 1.1 }}>Yard Goats</span>
                {/* BASEBALL with lines */}
                <div className="flex items-center gap-1.5 w-full">
                  <div className="flex-1 h-px bg-green" />
                  <span className="font-inter font-bold text-green uppercase tracking-[3px]" style={{ fontSize: "0.55rem" }}>Baseball</span>
                  <div className="flex-1 h-px bg-green" />
                </div>
              </div>
            </div>

            {/* Tagline */}
            <p className="font-marker text-green mb-2" style={{ fontSize: "1.1rem" }}>
              Small Town. Big Dreams.
            </p>

            {/* Description */}
            <p className="font-inter text-muted-gray mb-4" style={{ fontSize: "0.84rem", lineHeight: 1.7 }}>
              Developing athletes.<br />
              Building character.<br />
              Competing everywhere.
            </p>

            {/* Facebook icon */}
            <a
              href={siteConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex w-9 h-9 items-center justify-center rounded bg-slate text-muted-gray hover:bg-royal-blue hover:text-white transition-all"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>

          {/* Divider */}
          <div className="hidden lg:block bg-white/8 self-stretch" />

          {/* Col 2 · Quick Links */}
          <div className="px-8 pb-8 lg:pb-0">
            <ColHeading>Quick Links</ColHeading>
            <ul className="space-y-3">
              {QUICK_LINKS.map((l) => <ColLink key={l.href + l.label} href={l.href} label={l.label} />)}
            </ul>
          </div>

          {/* Divider */}
          <div className="hidden lg:block bg-white/8 self-stretch" />

          {/* Col 3 · Age Groups */}
          <div className="px-8 pb-8 lg:pb-0">
            <ColHeading>Age Groups</ColHeading>
            <ul className="space-y-3">
              <ColLink href="/teams" label="7U - 11U" />
            </ul>
          </div>

          {/* Divider */}
          <div className="hidden lg:block bg-white/8 self-stretch" />

          {/* Col 4 · Sponsors */}
          <div className="px-8 pb-8 lg:pb-0">
            <ColHeading>Sponsors</ColHeading>
            <ul className="space-y-3">
              {SPONSOR_LINKS.map((l) => <ColLink key={l.label} href={l.href} label={l.label} />)}
            </ul>
          </div>

          {/* Divider */}
          <div className="hidden lg:block bg-white/8 self-stretch" />

          {/* Col 5 · Contact */}
          <div className="pl-8">
            <ColHeading>Contact</ColHeading>
            <ul className="space-y-4 mb-5">
              {/* Location */}
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded flex items-center justify-center shrink-0 bg-green/10 text-green">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="font-inter text-muted-gray" style={{ fontSize: "0.9rem" }}>Paradise, Texas</span>
              </li>
              {/* Email */}
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded flex items-center justify-center shrink-0 bg-green/10 text-green">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <a href={`mailto:${siteConfig.email}`} className="font-inter text-muted-gray hover:text-green transition-colors" style={{ fontSize: "0.9rem" }}>
                  {siteConfig.email}
                </a>
              </li>
            </ul>

            {/* Facebook button */}
            <a
              href={siteConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-slate hover:bg-royal-blue text-muted-gray hover:text-white transition-all duration-200 rounded px-4 py-2.5"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="font-inter font-bold uppercase tracking-[1.5px]" style={{ fontSize: "0.72rem" }}>Follow us on Facebook</span>
            </a>
          </div>

        </div>

        {/* ── Bottom bar ────────────────────────────────────────── */}
        <div className="border-t border-white/6 pt-4">
          <p className="text-center font-inter text-muted-gray" style={{ fontSize: "0.72rem" }}>
            © 2024 Paradise Yard Goats Baseball. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
