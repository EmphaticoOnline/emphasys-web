const inside = [
  { x: 46, y: 70, fill: "#1d2f68", opacity: 0.92 },
  { x: 100, y: 70, fill: "#1d2f68", opacity: 0.7 },
  { x: 46, y: 124, fill: "#1d2f68", opacity: 0.55 },
  { x: 100, y: 124, fill: "#006261", opacity: 0.92 },
];

const OutgrownStructure = () => {
  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:mx-0 lg:max-w-[440px] lg:justify-self-end" aria-hidden="true">
      <div className="pointer-events-none absolute -left-8 top-8 h-36 w-36 rounded-full bg-[rgba(0,98,97,0.12)] blur-3xl" />
      <div className="relative overflow-hidden rounded-[28px] border border-[rgba(29,47,104,0.10)] bg-white/80 p-5 shadow-[0_28px_70px_rgba(18,26,61,0.10)] backdrop-blur-sm sm:p-7">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-1.5 w-8 rounded-full bg-[var(--color-emphasys-green)]" />
          <span className="h-px flex-1 bg-[rgba(29,47,104,0.12)]" />
        </div>

        <svg viewBox="0 0 340 220" className="h-auto w-full" fill="none">
          <rect x="150" y="12" width="168" height="176" rx="12" fill="#006261" fillOpacity="0.06" />
          <path d="M162 16 H318" stroke="#1d2f68" strokeOpacity="0.28" strokeWidth="1.35" />
          <path d="M318 16 V176" stroke="#006261" strokeOpacity="0.5" strokeWidth="1.35" />

          <rect x="22" y="40" width="148" height="156" rx="8" stroke="#1d2f68" strokeOpacity="0.38" strokeWidth="1.5" />

          {inside.map((cell) => (
            <rect
              key={`${cell.x}-${cell.y}`}
              x={cell.x}
              y={cell.y}
              width="40"
              height="40"
              rx="4"
              fill={cell.fill}
              opacity={cell.opacity}
            />
          ))}

          <rect
            x="138"
            y="16"
            width="46"
            height="46"
            rx="4"
            fill="#1d2f68"
            opacity="0.86"
            transform="rotate(-8 161 39)"
          />
          <rect x="214" y="36" width="36" height="58" rx="4" fill="#006261" />
          <rect x="196" y="108" width="28" height="28" rx="3" fill="#94a3b8" opacity="0.75" />
          <rect
            x="232"
            y="112"
            width="58"
            height="18"
            rx="3"
            fill="#1d2f68"
            opacity="0.42"
            transform="rotate(8 261 121)"
          />
          <rect x="168" y="146" width="24" height="38" rx="3" fill="#006261" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
};

export default OutgrownStructure;
