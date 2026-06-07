import { schedule } from "@/lib/data";

export default function Schedule() {
  return (
    <section
      id="schedule"
      className="relative py-24"
      style={{ background: "linear-gradient(135deg, #0c1c12 0%, #09142a 100%)" }}
    >
      {/* Field line texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(46,125,50,0.022) 40px, rgba(46,125,50,0.022) 41px)",
        }}
      />

      <div className="relative z-10 max-w-[1180px] mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-end mb-8 flex-wrap gap-4">
          <div>
            <span className="font-[family-name:var(--font-barlow)] font-bold text-[0.78rem] tracking-[4px] uppercase text-tan block mb-2">
              2025 Season
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,5vw,3.9rem)] leading-none text-white mb-3">
              From the <span className="text-tan">Dugout</span>
            </h2>
            <div className="w-[52px] h-[3px] bg-red rounded" />
          </div>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#"
              className="font-[family-name:var(--font-barlow)] font-bold text-[0.84rem] tracking-wide uppercase text-tan border-b border-transparent hover:border-tan transition-all flex items-center gap-1.5"
            >
              ⏱ GameChanger
            </a>
            <a
              href="#"
              className="font-[family-name:var(--font-barlow)] font-bold text-[0.84rem] tracking-wide uppercase text-tan border-b border-transparent hover:border-tan transition-all flex items-center gap-1.5"
            >
              📅 NCS Events
            </a>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {["Date", "Event", "Location", "Team", "Time"].map((h) => (
                  <th
                    key={h}
                    className="bg-green/14 text-green-lt font-[family-name:var(--font-barlow)] font-bold text-[0.78rem] tracking-[2px] uppercase px-4 py-3 text-left border-b border-green/30"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, i) => (
                <tr key={i} className="hover:bg-white/2 transition-colors">
                  <td className="px-4 py-3 text-[0.9rem] text-gray-lt border-b border-white/5 whitespace-nowrap">
                    {row.date}
                  </td>
                  <td className="px-4 py-3 text-[0.9rem] border-b border-white/5">
                    <span className="text-white font-semibold">{row.event}</span>
                    {row.isTournament && (
                      <span className="ml-2 bg-tan/18 text-tan text-[0.67rem] font-bold tracking-wide uppercase px-1.5 py-0.5 rounded">
                        Tournament
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-[0.9rem] text-gray-lt border-b border-white/5">
                    {row.location}
                  </td>
                  <td className="px-4 py-3 text-[0.9rem] text-gray-lt border-b border-white/5 whitespace-nowrap">
                    {row.team}
                  </td>
                  <td className="px-4 py-3 text-[0.9rem] text-gray-lt border-b border-white/5 whitespace-nowrap">
                    {row.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-green text-white font-[family-name:var(--font-barlow)] font-bold text-[0.95rem] tracking-[1.5px] uppercase px-7 py-3 rounded border-2 border-green hover:bg-green-dk hover:border-green-dk transition-all hover:-translate-y-0.5"
          >
            View Full Schedule on GameChanger
          </a>
        </div>

      </div>
    </section>
  );
}
