import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-[rgba(29,47,104,0.10)] bg-[#121a3d] text-white">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Image
            src="/logos/logo-emphasys.png"
            alt="Emphasys Soluciones"
            width={220}
            height={64}
            className="h-12 w-auto brightness-0 invert"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            El negocio siempre va antes que el software. Ayudamos a empresarios a recuperar el control de su empresa.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">Explorar</p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <Link href="/" className="text-white/80 hover:text-white">Inicio</Link>
            <Link href="/#metodo" className="text-white/80 hover:text-white">Cómo trabajamos</Link>
            <Link href="/radiografia-empresarial" className="text-white/80 hover:text-white">Radiografía Empresarial</Link>
            <Link href="/#casos" className="text-white/80 hover:text-white">Casos</Link>
            <Link href="#contacto" className="text-white/80 hover:text-white">Contacto</Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">Conversación</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-white/80">
            <a href="mailto:ventas@emphasys.mx" className="hover:text-white">ventas@emphasys.mx</a>
            <a href="https://wa.me/523312889584" target="_blank" rel="noreferrer" className="hover:text-white">
              +52 33 1288 9584
            </a>
            <p className="text-white/50">L-V 9:00–18:00 (Centro de México)</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Emphasys. Todos los derechos reservados.</p>
          <p>Guadalajara, México</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
