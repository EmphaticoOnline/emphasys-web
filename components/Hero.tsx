"use client";

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-[#F7F9FB] text-slate-900">
      <div className="mx-auto w-full max-w-[900px] px-6 pt-20 pb-16 sm:px-10 lg:px-0">
        <p
          className="text-xs font-semibold uppercase tracking-[0.28em]"
          style={{ color: "var(--color-emphasys-blue)", opacity: 0.65 }}
        >
          Para empresas que han crecido más rápido que su estructura
        </p>

        <h1
          className="mt-6 max-w-[820px] text-[32px] font-extrabold leading-[1.06] tracking-tight md:text-4xl lg:text-5xl"
          style={{ color: "var(--color-emphasys-blue)" }}
        >
          Recupera el control de tu negocio
        </h1>

        <p className="mt-8 max-w-[780px] text-lg leading-relaxed text-slate-600 md:text-xl">
          Cuando una empresa crece, también crecen las decisiones, los pendientes, las personas y la información que hay que coordinar.
        </p>

        <p className="mt-4 max-w-[780px] text-base leading-relaxed text-slate-600 md:text-lg">
          Emphasys ayuda a empresarios a entender qué está frenando a su empresa, recuperar claridad y construir una operación capaz de crecer con mayor control.
        </p>

        <a
          href="https://wa.me/523311107328?text=Hola%2C%20quiero%20conversar%20sobre%20lo%20que%20est%C3%A1%20pasando%20en%20mi%20empresa.%20%C2%BFPodemos%20revisar%20mi%20caso%3F"
          target="_blank"
          rel="noreferrer"
          className="mt-12 inline-block rounded-full px-10 py-4 text-base font-semibold text-white shadow-md transition duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F9FB]"
          style={{ backgroundColor: "var(--color-emphasys-green)" }}
        >
          Agendar una conversación
        </a>

        <div className="mt-16 h-px w-full bg-slate-200" />
      </div>
    </section>
  );
};

export default Hero;
