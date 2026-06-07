import Image from "next/image";
import { siteConfig } from "@/lib/config";

const quickLinks = [
  { href: "#about",    label: "About the Yard Goats" },
  { href: "#teams",    label: "Our Teams" },
  { href: "#schedule", label: "From the Dugout" },
  { href: "#sponsors", label: "Step Up to the Plate" },
  { href: "#gallery",  label: "Game Day Photos" },
  { href: "#contact",  label: "Get Involved" },
];

const extLinks = [
  { href: siteConfig.gameChanger, label: "GameChanger Schedule" },
  { href: siteConfig.ncs,         label: "NCS Events" },
  { href: siteConfig.facebook,    label: "Facebook Page" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050c17] border-t-2 border-green/22 pt-12 pb-8">
      <div className="max-w-[1180px] mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 mb-10">

          {/* Brand */}
          <div>
            <Image
              src="/yardgoatsimage.png"
              alt="Yard Goats"
              width={58}
              height={58}
              className="rounded-full object-cover mb-3 bg-green"
            />
            <div className="font-[family-name:var(--font-bebas)] text-[1.55rem] text-white tracking-[2px] mb-1.5">
              Paradise Yard Goats Baseball
            </div>
            <p className="text-[0.83rem] text-gray leading-relaxed max-w-[270px]">
              Youth baseball built on teamwork, grit, development, and community pride in Paradise, Texas.
            </p>
            <div className="flex gap-2 mt-4">
              <a
                href={siteConfig.facebook}
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[33px] h-[33px] bg-white/5 border border-white/8 rounded flex items-center justify-center text-gray hover:bg-[rgba(24,119,242,0.18)] hover:text-[#8bbfff] transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-[family-name:var(--font-barlow)] font-bold text-[0.77rem] tracking-[2px] uppercase text-gray mb-3">
              Quick Links
            </h4>
            <ul className="space-y-1.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-lt text-[0.87rem] hover:text-tan transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External links */}
          <div>
            <h4 className="font-[family-name:var(--font-barlow)] font-bold text-[0.77rem] tracking-[2px] uppercase text-gray mb-3">
              External Links
            </h4>
            <ul className="space-y-1.5">
              {extLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-gray-lt text-[0.87rem] hover:text-tan transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-white/6 pt-6 flex justify-between items-center flex-wrap gap-2">
          <p className="text-[0.77rem] text-[#4a5568]">
            &copy; 2025 Paradise Yard Goats Baseball{" "}
            <span className="text-tan">•</span> Paradise, Texas
          </p>
          <p className="text-[0.77rem] text-[#4a5568]">
            Built with community <span className="text-tan">♥</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
