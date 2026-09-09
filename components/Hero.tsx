"use client";

import HeroComposition from "@/components/visual/HeroComposition";

const Hero = () => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#f5f4ef] text-slate-900">
      <div className="grid-faint pointer-events-none absolute inset-0 opacity-80" />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[rgba(29,47,104,0.06)] blur-3xl" />

      <div className="wrap relative grid items-center gap-12 pb-16 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-24 lg:pt-20">
        <div>
          <p className="eyebrow">Para empresas que han crecido más rápido que su estructura</p>

          <h1 className="font-display mt-6 max-w-[820px] text-[40px] font-semibold leading-[1.04] tracking-tight text-[var(--color-emphasys-blue)] sm:text-5xl lg:text-[64px]">
            Recupera el control de tu negocio
          </h1>

          <p className="mt-8 max-w-[640px] text-lg leading-relaxed text-slate-600 md:text-xl">
            Cuando una empresa crece, también crecen las decisiones, los pendientes, las personas y la información que hay que coordinar.
          </p>

          <p className="mt-4 max-w-[640px] text-base leading-relaxed text-slate-600 md:text-lg">
            Emphasys ayuda a empresarios a entender qué está frenando a su empresa, recuperar claridad y construir una operación capaz de crecer con mayor control.
          </p>

          <a
            href="https://wa.me/523311107328?text=Hola%2C%20quiero%20conversar%20sobre%20lo%20que%20est%C3%A1%20pasando%20en%20mi%20empresa.%20%C2%BFPodemos%20revisar%20mi%20caso%3F"
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-10"
          >
            Agendar una conversación
          </a>
        </div>

        <HeroComposition />
      </div>
    </section>
  );
};

export default Hero;
