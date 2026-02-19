const ManifestSection = () => {
  return (
  <section className="bg-slate-50 text-slate-900">
  <div className="mx-auto max-w-[900px] px-6 pt-16 pb-24 sm:px-10 lg:px-0">
        <div className="space-y-8">
          <h2
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
            style={{ color: "var(--color-emphasys-blue)" }}
          >
            La claridad no aparece sola. Se diseña.
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-slate-600">
            <p>
              No empezamos por la herramienta.
              {" "}
              <span className="font-semibold text-slate-900">Empezamos por entender tu operación.</span>
            </p>
            <p>Preguntamos. Escuchamos. Observamos.</p>
            <p>
              Identificamos dónde se dispersa la información. Dónde se diluyen las responsabilidades. Dónde el
              crecimiento empieza a convertirse en fricción.
            </p>
            <p>Después simplificamos.</p>
            <p>
              No automatizamos el desorden. {" "}
              <span className="font-semibold text-slate-900">Diseñamos estructura.</span>
            </p>
            <p>Definimos responsabilidades claras. Creamos visibilidad real. Construimos una arquitectura que permita decidir con criterio.</p>
            <p>
              Entonces sí. La tecnología deja de ser un parche y se convierte en soporte de una empresa que ya tiene
              orden.
            </p>
          </div>

          <p
            className="mt-12 text-2xl font-semibold leading-tight sm:text-3xl"
            style={{ color: "var(--color-emphasys-blue)" }}
          >
            Sin estructura, el crecimiento es riesgo.
            <br />
            Con estructura, es estrategia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ManifestSection;
