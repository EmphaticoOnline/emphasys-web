const scatter = [
  { x: 18, y: 28, w: 22, h: 14, r: -12 },
  { x: 52, y: 18, w: 16, h: 16, r: 18 },
  { x: 28, y: 58, w: 18, h: 10, r: 8 },
  { x: 70, y: 48, w: 14, h: 20, r: -22 },
  { x: 14, y: 92, w: 20, h: 12, r: 6 },
  { x: 48, y: 86, w: 12, h: 12, r: 34 },
  { x: 76, y: 78, w: 18, h: 14, r: -8 },
  { x: 36, y: 118, w: 16, h: 10, r: 14 },
  { x: 8, y: 136, w: 14, h: 16, r: -16 },
  { x: 62, y: 128, w: 20, h: 12, r: 10 },
];

const aligned = [
  [0, 0],
  [1, 0],
  [2, 0],
  [0, 1],
  [1, 1],
  [2, 1],
  [0, 2],
  [1, 2],
  [2, 2],
];

const HeroComposition = () => {
  return (
    <div className="relative mx-auto w-full max-w-[460px]" aria-hidden="true">
      <div className="absolute -right-8 top-8 h-40 w-40 rounded-full bg-[rgba(0,98,97,0.10)] blur-3xl" />
      <div className="relative overflow-hidden rounded-[28px] border border-[rgba(29,47,104,0.10)] bg-white/80 p-6 shadow-[0_28px_70px_rgba(18,26,61,0.12)] backdrop-blur-sm sm:p-8">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
            Del desorden a la estructura
          </p>
          <span className="h-1.5 w-8 rounded-full bg-[var(--color-emphasys-green)]" />
        </div>

        <svg viewBox="0 0 320 180" className="h-auto w-full" fill="none">
          {scatter.map((box, i) => (
            <rect
              key={`s-${i}`}
              x={box.x}
              y={box.y}
              width={box.w}
              height={box.h}
              rx="2.5"
              fill={i % 3 === 0 ? "#1d2f68" : i % 3 === 1 ? "#006261" : "#94a3b8"}
              opacity={0.28 + (i % 4) * 0.1}
              transform={`rotate(${box.r} ${box.x + box.w / 2} ${box.y + box.h / 2})`}
            />
          ))}

          <line x1="148" y1="16" x2="148" y2="164" stroke="#1d2f68" strokeOpacity="0.18" />
          <line x1="148" y1="16" x2="148" y2="164" stroke="#006261" strokeOpacity="0.55" strokeDasharray="3 7" />

          {aligned.map(([col, row], i) => (
            <rect
              key={`a-${i}`}
              x={178 + col * 36}
              y={34 + row * 36}
              width={26}
              height={26}
              rx="4"
              fill={row === 1 && col === 1 ? "#006261" : "#1d2f68"}
              opacity={row === 1 && col === 1 ? 1 : 0.82 - col * 0.08}
            />
          ))}
        </svg>

        <div className="mt-5 grid grid-cols-2 gap-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
          <span>Crecimiento improvisado</span>
          <span className="text-right text-[var(--color-emphasys-blue)]">Control sostenible</span>
        </div>
      </div>
    </div>
  );
};

export default HeroComposition;
