import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Aviso de privacidad | Emphasys",
  description:
    "Aviso de privacidad de Emphasys Software, S.C. sobre los datos personales tratados en emphasys.mx, el formulario de contacto y la Evaluación Empresarial en 4 Minutos.",
  alternates: { canonical: "/aviso-de-privacidad" },
  openGraph: {
    title: "Aviso de privacidad | Emphasys",
    description:
      "Conoce qué datos personales trata Emphasys, para qué los usa y cómo ejercer tus derechos ARCO.",
    url: "https://emphasys.mx/aviso-de-privacidad",
    type: "article",
    images: [{ url: "/social-card.svg", width: 1200, height: 630, alt: "Aviso de privacidad de Emphasys" }],
  },
};

const Section = ({ number, title, children }: { number: string; title: string; children: ReactNode }) => (
  <section className="border-t border-[rgba(29,47,104,0.12)] py-10 sm:py-12">
    <h2 className="font-display text-2xl font-semibold leading-snug tracking-tight text-[var(--color-emphasys-blue)] sm:text-3xl">
      <span className="mr-3 text-[var(--color-emphasys-green)]">{number}</span>
      {title}
    </h2>
    <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">{children}</div>
  </section>
);

export default function AvisoDePrivacidadPage() {
  return (
    <article className="bg-[#f5f4ef] text-slate-900">
      <header className="relative overflow-hidden">
        <div className="grid-faint pointer-events-none absolute inset-0 opacity-70" />
        <div className="wrap relative pb-12 pt-14 sm:pb-16 sm:pt-16">
          <p className="eyebrow">Aviso de privacidad integral</p>
          <h1 className="font-display mt-5 max-w-3xl text-[34px] font-semibold leading-[1.08] tracking-tight text-[var(--color-emphasys-blue)] sm:text-5xl">
            Aviso de Privacidad
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Emphasys Software, S.C. Última actualización: 13 de octubre de 2026.
          </p>
        </div>
      </header>

      <div className="wrap pb-20">
        <Section number="01" title="Identidad y domicilio del responsable">
          <p>
            Emphasys Software, S.C. (en adelante, Emphasys), con domicilio en Goa 1594, Fraccionamiento Colón Industrial y Anexos, C.P. 44930, Guadalajara, Jalisco, México, es responsable del tratamiento de datos personales recabados mediante https://emphasys.mx y sus medios de contacto.
          </p>
          <p>
            Correo para asuntos de privacidad: <a className="text-[var(--color-emphasys-green)] underline-offset-4 hover:underline" href="mailto:ventas@emphasys.mx">ventas@emphasys.mx</a>.
          </p>
        </Section>

        <Section number="02" title="Datos personales tratados">
          <p>
            Según la funcionalidad que utilice el visitante, Emphasys podrá tratar su nombre, dirección de correo electrónico, teléfono, nombre de empresa y la información que proporcione voluntariamente en formularios y comunicaciones. Para enviar la copia solicitada de la Evaluación Empresarial en 4 Minutos, se trata la dirección de correo proporcionada y las respuestas necesarias para generar el prediagnóstico.
          </p>
          <p>
            También pueden tratarse datos técnicos necesarios para la seguridad y prevención de abuso, como la dirección IP, sujetos a la configuración efectiva del sitio y de sus proveedores. No se solicitan deliberadamente datos personales sensibles en estas funcionalidades.
          </p>
        </Section>

        <Section number="03" title="Finalidades">
          <p>
            <span className="font-semibold text-slate-800">Necesarias:</span> responder solicitudes de contacto e información; dar seguimiento a comunicaciones iniciadas por el titular; procesar y mostrar los resultados de la Evaluación Empresarial; enviar una copia de esos resultados únicamente cuando sea solicitada; y mantener la seguridad y prevenir el uso abusivo de los formularios.
          </p>
          <p>
            <span className="font-semibold text-slate-800">Secundarias:</span> el envío de publicidad o recomendaciones comerciales futuras solo se realizará bajo un mecanismo separado y conforme a la legislación aplicable. Solicitar una copia del prediagnóstico no autoriza publicidad ni incorpora automáticamente a una lista comercial.
          </p>
        </Section>

        <Section number="04" title="Evaluación Empresarial en 4 Minutos">
          <p>
            El visitante puede completar la evaluación y consultar el prediagnóstico íntegro sin facilitar sus datos de contacto. Si solicita recibir una copia, solo se requiere su correo electrónico y se procesan las ocho respuestas para generar el mensaje. El correo se utiliza para atender esa solicitud, no para inscribir a la persona automáticamente en campañas de mercadotecnia.
          </p>
        </Section>

        <Section number="05" title="Encargados, proveedores y transferencias">
          <p>
            Emphasys utiliza proveedores tecnológicos para operar el sitio y atender las finalidades informadas. Entre ellos se encuentra Resend, proveedor de envío de correo electrónico. Dichos proveedores pueden tratar datos por cuenta de Emphasys conforme a las condiciones de servicio aplicables.
          </p>
          <p>Emphasys no vende datos personales de sus visitantes.</p>
        </Section>

        <Section number="06" title="Derechos ARCO">
          <p>
            El titular puede solicitar el Acceso, Rectificación, Cancelación u Oposición respecto de sus datos personales mediante un mensaje a <a className="text-[var(--color-emphasys-green)] underline-offset-4 hover:underline" href="mailto:ventas@emphasys.mx">ventas@emphasys.mx</a>. La solicitud deberá indicar su nombre, un medio para recibir respuesta, el derecho que desea ejercer y una descripción suficiente de los datos relacionados. Podrá solicitarse información razonable para acreditar identidad o representación.
          </p>
          <p>Emphasys responderá y, en su caso, dará cumplimiento en los plazos y términos previstos en la legislación mexicana aplicable.</p>
        </Section>

        <Section number="07" title="Revocación y limitación del uso">
          <p>
            Cuando proceda legalmente, el titular podrá revocar su consentimiento o solicitar la limitación del uso o divulgación de sus datos escribiendo a <a className="text-[var(--color-emphasys-green)] underline-offset-4 hover:underline" href="mailto:ventas@emphasys.mx">ventas@emphasys.mx</a>. Se atenderá la solicitud conforme a las obligaciones y excepciones aplicables.
          </p>
        </Section>

        <Section number="08" title="Seguridad y conservación">
          <p>
            Emphasys aplicará medidas administrativas, técnicas y físicas apropiadas para proteger los datos personales frente a pérdida, acceso no autorizado, alteración o uso indebido. Los conservará durante el tiempo necesario para las finalidades comunicadas o para cumplir obligaciones legales.
          </p>
        </Section>

        <Section number="09" title="Cookies y tecnologías similares">
          <p>
            El sitio genera únicamente contadores operativos agregados —sin cookies de seguimiento, identificadores persistentes, fingerprinting, IP almacenada ni datos personales en eventos— para medir visitas por página, clics de intento hacia WhatsApp, teléfono y correo, envíos exitosos de formularios, botones hacia la Evaluación y clics hacia Radiografía. La Evaluación conserva además sus contadores agregados de inicio, avance, finalización y correo. El seguimiento detallado de sesiones y la asociación técnica de solicitudes de correo están desactivados por defecto y solo podrán habilitarse con consentimiento o fundamento aplicable.
          </p>
          <p>
            Para limitar solicitudes abusivas de la copia por correo, el servidor puede consultar la dirección IP de forma temporal, sin registrarla en una base de datos.
          </p>
          <p>
            Los enlaces a servicios externos, como WhatsApp, se abren fuera del sitio. El tratamiento que ocurra ahí corresponde a ese servicio.
          </p>
          <p>
            Queda pendiente de revisión legal confirmar la base aplicable para los contadores operativos sin consentimiento, así como definir y publicar sus plazos definitivos de conservación. Actualmente no se cargan herramientas de analítica de terceros ni se muestra un banner de consentimiento para ellas.
          </p>
        </Section>

        <Section number="10" title="Cambios al aviso">
          <p>
            Los cambios al presente aviso se comunicarán a través de https://emphasys.mx/aviso-de-privacidad. Cuando corresponda, Emphasys utilizará medios adicionales de información o recabará el consentimiento requerido por la legislación.
          </p>
        </Section>

        <Section number="11" title="Contacto">
          <p>Emphasys Software, S.C.</p>
          <p>Goa 1594, Fraccionamiento Colón Industrial y Anexos</p>
          <p>C.P. 44930, Guadalajara, Jalisco, México</p>
          <p>
            <a className="text-[var(--color-emphasys-green)] underline-offset-4 hover:underline" href="mailto:ventas@emphasys.mx">ventas@emphasys.mx</a>
          </p>
          <p>
            <a className="text-[var(--color-emphasys-green)] underline-offset-4 hover:underline" href="https://emphasys.mx">https://emphasys.mx</a>
          </p>
        </Section>
      </div>
    </article>
  );
}
