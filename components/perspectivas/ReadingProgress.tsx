"use client";

import { useEffect, useState } from "react";

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const article = document.querySelector("[data-reading-article]");
      if (!article) return setProgress(0);
      const rect = article.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      setProgress(total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 1);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div aria-hidden="true" className="h-0.5 bg-[rgba(29,47,104,0.08)]">
      <div className="h-0.5 bg-[var(--color-emphasys-green)]" style={{ width: `${(progress * 100).toFixed(1)}%` }} />
    </div>
  );
};

export default ReadingProgress;
