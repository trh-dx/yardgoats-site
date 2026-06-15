import { gallery } from "@/lib/data";
import { siteConfig } from "@/lib/config";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-charcoal py-16 md:py-24">
      <div className="max-w-[1180px] mx-auto px-6">

        <div className="flex justify-between items-end mb-8 flex-wrap gap-4">
          <div>
            <span className="font-barlow font-bold text-[0.78rem] tracking-[4px] uppercase text-tan block mb-2">
              Photos &amp; Highlights
            </span>
            <h2 className="font-bebas text-[clamp(2.5rem,5vw,3.9rem)] leading-none text-white mb-3">
              Game Day <span className="text-tan">Photos</span>
            </h2>
            <div className="w-[52px] h-[3px] bg-red rounded" />
          </div>
          <a
            href={siteConfig.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent text-white font-barlow font-bold text-[0.88rem] tracking-[1.5px] uppercase px-5 py-2.5 rounded border-2 border-white/40 hover:border-white hover:bg-white/8 transition-all"
          >
            Follow on Facebook
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3" style={{ gridAutoRows: "clamp(140px, 22vw, 200px)" }}>
          {gallery.map((item, i) => (
            <div
              key={i}
              className={`relative bg-[linear-gradient(140deg,#111e2e,#08111f)] rounded-lg border border-white/7 flex flex-col items-center justify-center overflow-hidden cursor-pointer group transition-all hover:border-green/50 hover:scale-[1.025] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] ${
                item.tall ? "row-span-2" : ""
              }`}
            >
              <span className="text-[2.5rem] opacity-20 mb-1.5 group-hover:opacity-30 transition-opacity">
                {item.icon}
              </span>
              <span className="text-[0.68rem] text-gray tracking-[2px] uppercase opacity-55">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
