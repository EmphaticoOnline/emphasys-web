const RadiographMark = () => {
  return (
    <svg viewBox="0 0 220 220" className="h-auto w-full max-w-[220px]" aria-hidden="true" fill="none">
      <circle cx="110" cy="110" r="104" stroke="#1d2f68" strokeOpacity="0.12" />
      <circle cx="110" cy="110" r="78" stroke="#006261" strokeOpacity="0.35" />
      <circle cx="110" cy="110" r="48" stroke="#1d2f68" strokeOpacity="0.55" />
      <circle cx="110" cy="110" r="8" fill="#006261" />
      <path d="M110 18v28M110 174v28M18 110h28M174 110h28" stroke="#1d2f68" strokeOpacity="0.35" />
      <path d="M42 42l18 18M160 42l-18 18M42 178l18-18M160 178l-18-18" stroke="#006261" strokeOpacity="0.45" />
    </svg>
  );
};

export default RadiographMark;
