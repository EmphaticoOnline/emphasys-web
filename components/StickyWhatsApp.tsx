"use client";

import { useEffect, useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/523312889584?text=Hola%2C%20quiero%20ordenar%20mi%20negocio%20y%20mejorar%20mi%20control%20de%20ventas%20y%20costos.%20%C2%BFPodemos%20revisar%20mi%20caso%3F";

const StickyWhatsApp = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setVisible(y > 280);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-40">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-xl transition-all duration-200 ease-out hover:brightness-95 hover:-translate-y-0.5 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-white whitespace-nowrap"
        aria-label="Agendar una conversación"
      >
        <svg aria-hidden="true" focusable="false" viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor">
          <path d="M16 3C9.383 3 4 8.383 4 15c0 2.358.676 4.563 1.844 6.422L4 29l7.74-1.793A11.885 11.885 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3Zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-1.594 0-3.102-.375-4.445-1.039l-.316-.152-.348.08-4.1.95.92-3.08.105-.35-.199-.316A9.94 9.94 0 0 1 6 15c0-5.523 4.477-10 10-10Zm-5.16 5.02c-.129 0-.332.051-.504.258-.172.207-.66.645-.66 1.57 0 .926.676 1.82.77 1.945.094.125 1.3 2.086 3.172 2.84 1.566.625 1.887.5 2.227.47.34-.03 1.105-.453 1.262-.891.156-.438.156-.812.109-.891-.047-.078-.172-.125-.36-.219-.188-.094-1.117-.551-1.289-.613-.172-.063-.297-.094-.422.094-.125.188-.484.613-.594.738-.11.125-.219.141-.406.047-.188-.094-.793-.293-1.5-.936-.555-.495-.926-1.109-1.039-1.305-.11-.188-.012-.301.082-.395.086-.086.219-.238.328-.363.11-.125.141-.219.203-.36.062-.141.031-.266-.016-.375-.047-.109-.461-1.11-.637-1.527-.172-.411-.344-.36-.469-.367-.125-.008-.258-.008-.398-.008Z" />
        </svg>
        Agendar una conversación
      </a>
    </div>
  );
};

export default StickyWhatsApp;
