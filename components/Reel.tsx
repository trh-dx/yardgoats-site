import { siteConfig } from "@/lib/config";

export default function Reel() {
  return (
    <section className="bg-navy py-24">
      <div className="max-w-[1180px] mx-auto px-6">

        <div className="text-center mb-10">
          <span className="font-[family-name:var(--font-barlow)] font-bold text-[0.78rem] tracking-[4px] uppercase text-tan block mb-2">
            Highlights
          </span>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,5vw,3.9rem)] leading-none text-white mb-3">
            Watch Us <span className="text-tan">Play</span>
          </h2>
          <div className="w-[52px] h-[3px] bg-red rounded mx-auto" />
        </div>

        <div className="flex flex-col items-center gap-6">
          {/* Responsive 9:16 reel container, capped at 380px wide */}
          <div className="w-full max-w-[380px] rounded-xl overflow-hidden border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.6)]">
            <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
              <iframe
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F26966823259653903&show_text=false&mute=0"
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
                scrolling="no"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>

          <a
            href={siteConfig.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent text-white font-[family-name:var(--font-barlow)] font-bold text-[0.88rem] tracking-[1.5px] uppercase px-5 py-2.5 rounded border-2 border-white/30 hover:border-white hover:bg-white/8 transition-all"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            More on Facebook
          </a>
        </div>

      </div>
    </section>
  );
}
