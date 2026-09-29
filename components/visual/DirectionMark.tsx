const routes = [
  "M34 58 C 118 36, 168 148, 236 228",
  "M22 156 C 92 132, 150 188, 236 228",
  "M46 286 C 108 236, 164 236, 236 228",
  "M78 412 C 128 338, 176 286, 236 228",
  "M214 458 C 214 360, 226 292, 236 228",
  "M392 64 C 348 92, 292 156, 236 228",
  "M424 198 C 352 176, 292 204, 236 228",
  "M386 372 C 332 328, 280 278, 236 228",
];

const origins = [
  [34, 58],
  [22, 156],
  [46, 286],
  [78, 412],
  [214, 458],
  [392, 64],
  [424, 198],
  [386, 372],
];

const DirectionMark = () => {
  return (
    <div className="relative mx-auto w-full max-w-[440px]" aria-hidden="true">
      <div className="pointer-events-none absolute right-4 top-8 h-44 w-44 rounded-full bg-[rgba(0,98,97,0.12)] blur-3xl" />
      <svg viewBox="0 0 460 500" className="relative h-auto w-full" fill="none">
        <circle cx="236" cy="228" r="132" stroke="#1d2f68" strokeOpacity="0.08" />
        <path d="M236 96 a132 132 0 0 1 114 66" stroke="#1d2f68" strokeOpacity="0.28" />
        <path d="M104 228 a132 132 0 0 0 46 114" stroke="#006261" strokeOpacity="0.32" />

        {routes.map((d) => (
          <path key={d} d={d} stroke="#1d2f68" strokeOpacity="0.34" strokeWidth="1.25" />
        ))}

        {origins.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="3.2" fill="#1d2f68" fillOpacity="0.45" />
        ))}

        <path d="M236 228 V52" stroke="#006261" strokeWidth="1.6" />
        <path d="M236 44 L228 62 H244 Z" fill="#006261" />
        <circle cx="236" cy="148" r="2.4" fill="#006261" />
        <circle cx="236" cy="112" r="2.4" fill="#006261" fillOpacity="0.7" />

        <circle cx="236" cy="228" r="18" stroke="#006261" strokeOpacity="0.45" />
        <circle cx="236" cy="228" r="7" fill="#006261" />
        <path d="M236 204 V214 M236 242 V252 M220 228 H230 M242 228 H252" stroke="#1d2f68" strokeOpacity="0.35" />
      </svg>
    </div>
  );
};

export default DirectionMark;
