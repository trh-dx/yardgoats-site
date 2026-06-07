const cells = [
  { val: ["Paradise, ", "TX"],   redIdx: 1, label: "Home Base" },
  { val: ["7U", " · ", "8U", " · ", "9U", " · ", "11U"], greenIdx: [0, 2, 4, 6], label: "Age Groups" },
  { val: ["Tournament ", "Ball"], redIdx: 1, label: "Level of Play" },
  { val: ["Community ", "Supported"], greenIdx: [1], label: "Powered By" },
];

export default function Scoreboard() {
  return (
    <div className="bg-charcoal border-t-[3px] border-b-[3px] border-green">
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-[1180px] mx-auto">
        {cells.map((cell, i) => (
          <div
            key={i}
            className={`flex flex-col items-center text-center px-5 py-4 ${
              i < cells.length - 1 ? "border-r border-white/8 last:border-r-0" : ""
            }`}
          >
            <div className="font-[family-name:var(--font-bebas)] text-[1.55rem] text-white tracking-wide leading-none">
              {cell.val.map((part, j) => {
                const isRed   = cell.redIdx === j;
                const isGreen = Array.isArray(cell.greenIdx) && cell.greenIdx.includes(j);
                return (
                  <span
                    key={j}
                    className={isRed ? "text-red" : isGreen ? "text-green-lt" : ""}
                  >
                    {part}
                  </span>
                );
              })}
            </div>
            <div className="text-[0.63rem] font-bold tracking-[3px] uppercase text-gray mt-1">
              {cell.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
