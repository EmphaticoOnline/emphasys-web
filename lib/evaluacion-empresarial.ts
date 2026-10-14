export type Answer = 0 | 1 | 2;

export type LevelId = "encaminado" | "oportunidades" | "atencion";

export type Question = {
  id: string;
  area: string;
  weight: number;
  prompt: string;
  options: readonly [string, string, string];
};

export const questions: readonly Question[] = [
  {
    id: "dependencia",
    area: "Dependencia del dueño",
    weight: 3,
    prompt: "Si mañana te ausentas una semana, ¿qué pasa con tu negocio?",
    options: [
      "Sigue funcionando casi igual.",
      "Algunas cosas se detienen.",
      "La empresa se frena.",
    ],
  },
  {
    id: "tesoreria",
    area: "Tesorería",
    weight: 2,
    prompt: "¿Qué tan claro tienes cuánto dinero necesita tu empresa cada mes para operar?",
    options: [
      "Lo conozco con precisión y lo reviso regularmente.",
      "Tengo una idea aproximada, pero no siempre coincide con la realidad.",
      "No lo sé con certeza, voy cubriendo sobre la marcha.",
    ],
  },
  {
    id: "ventas",
    area: "Ventas y rentabilidad",
    weight: 5,
    prompt: "¿Sabes cuáles de tus productos o servicios realmente dejan más ganancias a tu empresa?",
    options: [
      "Sí, conozco los más rentables y tomo decisiones con eso.",
      "Más o menos, sé qué productos vendo más, pero no necesariamente cuáles dejan más ganancias.",
      "No lo tengo claro, realmente no sé cuáles son los que más aportan a mis ganancias.",
    ],
  },
  {
    id: "inventarios",
    area: "Inventarios",
    weight: 4,
    prompt:
      "¿Qué tan clara es la idea que tienes del valor total de tu inventario y de cuánto de ese valor está en productos que se venden poco?",
    options: [
      "Tengo una estimación bastante certera del valor total de mi inventario y también identifico qué parte está en productos que se venden poco.",
      "Tengo una idea general, pero no sé realmente cuánto dinero está parado en productos de baja o nula rotación.",
      "No lo tengo claro; no sé cuánto dinero tengo invertido en mi inventario.",
    ],
  },
  {
    id: "equipo",
    area: "Equipo y responsabilidades",
    weight: 1,
    prompt: "Cuando surge un problema en el día a día, ¿qué tan seguido termina en tus manos?",
    options: [
      "Casi nunca, el equipo lo resuelve.",
      "A veces, me consultan ciertos temas.",
      "Casi siempre, termino interviniendo yo.",
    ],
  },
  {
    id: "operacion",
    area: "Fluidez y eficiencia operativa",
    weight: 3,
    prompt: "¿Qué tan fluidamente funcionan los procesos de tu empresa, desde que inicia una actividad hasta que se completa?",
    options: [
      "Muy bien. Las actividades fluyen de manera ágil, coordinada y prácticamente sin interrupciones.",
      "Regular. Generalmente las cosas funcionan, pero hay retrasos, tareas duplicadas o problemas de comunicación que dificultan la operación.",
      "Con muchas dificultades. Los procesos frecuentemente se atoran, son lentos o requieren demasiados pasos para conseguir resultados.",
    ],
  },
  {
    id: "compras",
    area: "Planeación de compras",
    weight: 4,
    prompt: "¿Qué tan claro tienes cuánto dinero necesita invertir tu empresa en compras y en qué productos conviene hacerlo?",
    options: [
      "Tengo mucha claridad. Sé cuánto necesito invertir y qué productos debo comprar, basándome en su demanda y rotación.",
      "Tengo una idea aproximada. Generalmente compro según la experiencia y las necesidades que van surgiendo.",
      "No tengo suficiente claridad. Frecuentemente compro sin saber con precisión cuánto invertir ni qué productos conviene priorizar.",
    ],
  },
  {
    id: "seguimiento",
    area: "Seguimiento comercial",
    weight: 5,
    prompt: "¿Qué tan efectivo es el seguimiento que da tu empresa a las cotizaciones y oportunidades de venta?",
    options: [
      "Muy efectivo. Damos seguimiento sistemático a las oportunidades y sabemos cuáles se convierten en ventas.",
      "Regular. Damos seguimiento, pero algunas oportunidades se nos escapan.",
      "Poco efectivo. No tenemos un seguimiento consistente y probablemente perdemos ventas por ello.",
    ],
  },
];

export const MAX_SCORE = 54;

export const EVALUATION_NAME = "Evaluación Empresarial en 4 Minutos";

export const resultCopy = {
  noFindings: "Ninguna de las áreas evaluadas concentra una exposición relevante en esta primera lectura.",
  noStrengths:
    "En esta primera lectura no se distinguen bases claras en las áreas evaluadas. Conviene revisarlas antes de apoyarse en ellas para decidir.",
  radiografia:
    "Esta evaluación es una primera aproximación, no un diagnóstico definitivo. La Radiografía Empresarial permite entender las causas, las conexiones entre áreas y las prioridades reales para actuar.",
  radiografiaCta: "Conocer la Radiografía Empresarial",
  radiografiaUrl: "https://emphasys.mx/radiografia-empresarial",
  findings: "Principales hallazgos",
  strengths: "Fortalezas identificadas",
  connections: "Posibles conexiones",
  score: "Puntuación orientativa",
} as const;

const levelCopy: Record<LevelId, { title: string; message: string }> = {
  encaminado: {
    title: "Bien encaminado",
    message:
      "Tus respuestas sugieren que cuentas con varias bases de organización y control. Aun así, hay aspectos que conviene revisar para sostener el crecimiento.",
  },
  oportunidades: {
    title: "Oportunidades importantes de mejora",
    message:
      "Tus respuestas muestran fortalezas, pero también áreas donde podrías estar perdiendo eficiencia, claridad o posibilidades de crecimiento. Identificarlas es el primer paso para mejorarlas.",
  },
  atencion: {
    title: "Áreas que requieren atención",
    message:
      "Tus respuestas señalan varios aspectos que merecen revisarse con mayor profundidad. Atenderlos puede ayudarte a recuperar control y tomar mejores decisiones.",
  },
};

const levelRank: Record<LevelId, number> = {
  encaminado: 0,
  oportunidades: 1,
  atencion: 2,
};

const implications: Record<string, Record<0 | 1 | 2, string>> = {
  dependencia: {
    0: "La continuidad de la operación parece concentrada en una sola persona. Si esa presencia falta, el control y la capacidad de crecer pueden detenerse al mismo tiempo.",
    1: "Una parte de la operación todavía depende de una persona. Eso puede limitar la organización cuando la empresa necesite avanzar sin su intervención directa.",
    2: "La operación puede sostenerse sin la presencia constante del dueño. Esa base reparte el control y deja más espacio para crecer.",
  },
  tesoreria: {
    0: "Sin una cifra confiable del dinero que la operación necesita cada mes, es difícil anticipar faltantes. El control del flujo queda expuesto a decidir sobre la marcha.",
    1: "La referencia del dinero necesario para operar no siempre coincide con lo que ocurre. Esa diferencia puede ocultar tensión de flujo y complicar el control del gasto.",
    2: "Hay una referencia clara del dinero que la operación necesita. Eso ayuda a anticipar el flujo y a decidir con más control.",
  },
  ventas: {
    0: "No está diferenciado qué ofertas dejan más margen. El esfuerzo comercial puede aumentar las ventas sin que eso mejore la rentabilidad.",
    1: "Se ve con más claridad lo que más se vende que lo que más deja. El crecimiento puede apoyarse en volumen que no sostiene el margen.",
    2: "Las decisiones pueden apoyarse en lo que realmente deja margen, no solo en lo que más se vende.",
  },
  inventarios: {
    0: "El valor del inventario y la parte que casi no rota no están claros. Parte del dinero de la empresa podría estar detenida sin que el día a día lo muestre.",
    1: "Hay una noción general del inventario, pero no de cuánto dinero está en productos de baja rotación. Esa imprecisión puede ocultar capital inmovilizado.",
    2: "Se distingue el valor del inventario y la parte que se mueve poco. Eso hace más visible el dinero que podría estar detenido.",
  },
  equipo: {
    0: "Los problemas cotidianos siguen concentrándose en una persona. La organización se carga y el control depende de su intervención.",
    1: "Parte de los problemas todavía escala a una sola persona. Si esas responsabilidades no se cierran, crecer puede sumar carga en lugar de capacidad.",
    2: "El equipo resuelve la mayor parte de los problemas del día a día. La organización depende menos de una sola persona.",
  },
  operacion: {
    0: "Los procesos se traban con frecuencia. El retrabajo y las esperas pueden consumir margen y volver menos predecible el cumplimiento.",
    1: "La operación avanza, aunque con retrasos, duplicidades o fallas de comunicación. Eso puede restar eficiencia y hacer menos confiable la entrega.",
    2: "Las actividades avanzan de forma coordinada. Esa fluidez sostiene la entrega y hace más predecible la operación.",
  },
  compras: {
    0: "No hay un criterio claro de cuánto comprar ni qué priorizar. Las compras pueden desajustarse de la demanda y presionar tanto el inventario como el flujo.",
    1: "Las compras se apoyan sobre todo en la experiencia y en lo que va apareciendo. Sin un criterio más estable, es posible comprar de más o descubrir faltantes tarde.",
    2: "Las compras tienen un criterio ligado a la demanda y a la rotación. Eso alinea la inversión con lo que la empresa sí necesita.",
  },
  seguimiento: {
    0: "El seguimiento de oportunidades no es consistente. Una parte de la demanda ya trabajada puede no llegar a convertirse en venta.",
    1: "El seguimiento existe, pero algunas oportunidades se pierden en el camino. Esa fuga puede limitar el crecimiento aunque haya prospección.",
    2: "Las oportunidades se siguen y es visible cuáles se convierten en venta. El crecimiento comercial se puede observar, no solo suponer.",
  },
};

const connections = [
  {
    id: "inventarios-compras",
    title: "Inventarios y compras",
    areas: ["inventarios", "compras"],
    text: "La lectura del inventario y la de las compras se ven incompletas al mismo tiempo. Es posible comprar sin distinguir qué ya está detenido y qué sí se mueve, y así inmovilizar dinero o dejar huecos de producto.",
  },
  {
    id: "rentabilidad-inventarios",
    title: "Rentabilidad e inventarios",
    areas: ["ventas", "inventarios"],
    text: "Cuando no está claro qué deja margen y tampoco qué inventario rota poco, el capital puede quedarse en productos que se mueven sin sostener la rentabilidad.",
  },
  {
    id: "rentabilidad-seguimiento",
    title: "Rentabilidad y seguimiento comercial",
    areas: ["ventas", "seguimiento"],
    text: "Si el margen de cada oferta es difuso y el seguimiento comercial es irregular, el esfuerzo puede ir hacia oportunidades que no son las que más convienen a la empresa.",
  },
  {
    id: "tesoreria-compras",
    title: "Tesorería y compras",
    areas: ["tesoreria", "compras"],
    text: "Sin una referencia confiable del dinero que la operación necesita y sin un criterio claro de compra, las salidas pueden adelantarse a la capacidad real de pago.",
  },
  {
    id: "dependencia-equipo-procesos",
    title: "Dependencia, equipo y procesos",
    areas: ["dependencia", "equipo", "operacion"],
    text: "La operación, los problemas cotidianos y la forma de trabajar siguen dependiendo de personas más que de un proceso que el equipo pueda sostener. Eso puede frenar el control y el crecimiento cuando falta quien hoy lo concentra.",
  },
  {
    id: "procesos-seguimiento",
    title: "Procesos y seguimiento comercial",
    areas: ["operacion", "seguimiento"],
    text: "Si la operación se atasca y el seguimiento comercial es irregular, una oportunidad puede enfriarse antes de volverse pedido, o el pedido puede cumplirse con retrabajo.",
  },
] as const;

export type AreaFinding = {
  id: string;
  area: string;
  value: 0 | 1 | 2;
  exposure: number;
  weight: number;
  index: number;
  implication: string;
};

export type AreaConnection = {
  id: string;
  title: string;
  text: string;
  exposure: number;
};

export type EvaluationResult = {
  total: number;
  maximum: number;
  level: LevelId;
  title: string;
  message: string;
  reading: string;
  findings: AreaFinding[];
  strengths: AreaFinding[];
  connections: AreaConnection[];
};

const higherLevel = (left: LevelId, right: LevelId): LevelId =>
  levelRank[left] >= levelRank[right] ? left : right;

const levelFromScore = (total: number): LevelId => {
  if (total >= 41) return "encaminado";
  if (total >= 25) return "oportunidades";
  return "atencion";
};

const byExposure = (left: AreaFinding, right: AreaFinding) => {
  if (right.exposure !== left.exposure) return right.exposure - left.exposure;
  return left.index - right.index;
};

const favorableValue = (answer: Answer): 0 | 1 | 2 => (2 - answer) as 0 | 1 | 2;

export const scoreEvaluation = (answers: readonly Answer[]): EvaluationResult => {
  if (answers.length !== questions.length) {
    throw new Error("La evaluación requiere las ocho respuestas.");
  }

  const areas: AreaFinding[] = questions.map((question, index) => {
    const value = favorableValue(answers[index]);
    return {
      id: question.id,
      area: question.area,
      value,
      exposure: (2 - value) * question.weight,
      weight: question.weight,
      index,
      implication: implications[question.id][value],
    };
  });

  const total = areas.reduce((sum, area) => sum + area.value * area.weight, 0);
  const criticalUnfavorable = areas.filter((area) => area.weight >= 4 && area.value === 0).length;
  const protection: LevelId =
    criticalUnfavorable >= 2 ? "atencion" : criticalUnfavorable >= 1 ? "oportunidades" : "encaminado";
  const scoreLevel = levelFromScore(total);
  const level = higherLevel(scoreLevel, protection);
  const copy = levelCopy[level];
  const findings = areas.filter((area) => area.value < 2).sort(byExposure);
  const strengths = areas.filter((area) => area.value === 2);
  const byId = new Map(areas.map((area) => [area.id, area]));

  const relevantConnections = connections
    .map((connection, order) => ({
      id: connection.id,
      title: connection.title,
      text: connection.text,
      order,
      exposure: connection.areas.reduce((sum, id) => sum + (byId.get(id)?.exposure ?? 0), 0),
      justified: connection.areas.every((id) => (byId.get(id)?.value ?? 2) < 2),
    }))
    .filter((connection) => connection.justified)
    .sort((left, right) => right.exposure - left.exposure || left.order - right.order)
    .slice(0, 2)
    .map(({ id, title, text, exposure }) => ({ id, title, text, exposure }));

  const focus = findings.slice(0, 2).map((finding) => finding.area);
  const focusText =
    focus.length === 0
      ? "En esta lectura, las ocho áreas aparecen como bases de organización y control sobre las que se puede sostener el crecimiento."
      : `La mayor exposición está en ${focus.join(" y ")}. Conviene mirar primero sus posibles efectos sobre la rentabilidad, la organización, el control o el crecimiento, sin asumir que el resto del puntaje los compensa.`;
  const protectionText =
    levelRank[level] > levelRank[scoreLevel]
      ? " La puntuación global no alcanza a compensar las señales de las áreas con mayor peso."
      : "";

  return {
    total,
    maximum: MAX_SCORE,
    level,
    title: copy.title,
    message: copy.message,
    reading: `${focusText}${protectionText}`,
    findings,
    strengths,
    connections: relevantConnections,
  };
};
