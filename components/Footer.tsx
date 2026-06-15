import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

// ── Data ──────────────────────────────────────────────────────────────

const QUICK_LINKS = [
  { href: "/",          label: "Home"     },
  { href: "/teams",     label: "Teams"    },
  { href: "/tryouts",   label: "Tryouts"  },
  { href: "/#sponsors", label: "Sponsors" },
  { href: "/about",     label: "About"    },
  { href: "/contact",   label: "Contact"  },
];

// Social icon paths
const SOCIALS = [
  {
    label: "Facebook",
    href: siteConfig.facebook,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

// ── Component ─────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer
      className="border-t border-royal-blue/20 pt-14 pb-7"
      style={{ backgroundColor: "#040C17" }}
    >
      <div className="max-w-[1280px] mx-auto px-5">

        {/* ── Four-column grid ──────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.6fr] gap-10 mb-10">

          {/* Col 1 · Brand */}
          <div>
            <Image
              src="/yardgoatsimage.png"
              alt="Paradise Yard Goats Baseball"
              width={62}
              height={62}
              className="rounded-full object-cover mb-4 ring-2 ring-green/25"
            />
            <div
              className="font-bebas text-white tracking-wide mb-2"
              style={{ fontSize: "1.4rem" }}
            >
              Paradise Yard Goats Baseball
            </div>
            <p className="text-muted-gray text-[0.82rem] leading-relaxed max-w-[230px] mb-5">
              Developing athletes. Building character. Competing everywhere.
            </p>

            {/* Single Facebook icon in brand column — matches mockup */}
            <a
              href={siteConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex w-8 h-8 items-center justify-center rounded bg-slate text-muted-gray hover:bg-royal-blue hover:text-white transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>

          {/* Col 2 · Quick Links */}
          <div>
            <h4
              className="font-inter font-bold text-white uppercase tracking-[3px] mb-4"
              style={{ fontSize: "0.7rem" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-muted-gray text-[0.84rem] hover:text-green transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 · Follow Us */}
          <div>
            <h4
              className="font-inter font-bold text-white uppercase tracking-[3px] mb-4"
              style={{ fontSize: "0.7rem" }}
            >
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded bg-slate text-muted-gray hover:bg-royal-blue hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 4 · Contact */}
          <div>
            <h4
              className="font-inter font-bold text-white uppercase tracking-[3px] mb-4"
              style={{ fontSize: "0.7rem" }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 font-inter font-bold text-[0.78rem] uppercase tracking-[1.5px] text-green hover:text-green-lt transition-colors"
                >
                  Get In Touch
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Bottom bar ────────────────────────────────────────── */}
        <div className="border-t border-white/6 pt-6">
          <p
            className="text-center font-inter text-muted-gray"
            style={{ fontSize: "0.72rem" }}
          >
            © 2024 Paradise Yard Goats Baseball. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
