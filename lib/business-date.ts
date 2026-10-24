export const BUSINESS_TIME_ZONE = "America/Mexico_City";

const formatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: BUSINESS_TIME_ZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export const businessDateISO = (instant: Date = new Date()) => {
  const parts = Object.fromEntries(formatter.formatToParts(instant).filter(({ type }) => type !== "literal").map(({ type, value }) => [type, value]));
  return `${parts.year}-${parts.month}-${parts.day}`;
};

export const shiftBusinessDate = (dateISO: string, days: number) => {
  const date = new Date(`${dateISO}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
};

export const monitorDateRange = (preset: string | undefined, now: Date = new Date()) => {
  const today = businessDateISO(now);
  if (preset === "yesterday") {
    const yesterday = shiftBusinessDate(today, -1);
    return { from: yesterday, to: yesterday };
  }
  const days = preset === "7d" ? 6 : preset === "30d" ? 29 : 0;
  return { from: shiftBusinessDate(today, -days), to: today };
};
