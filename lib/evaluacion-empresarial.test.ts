import assert from "node:assert/strict";
import test from "node:test";
import { type Answer, questions, scoreEvaluation } from "./evaluacion-empresarial.ts";

const favorable = Array<Answer>(8).fill(0);
const unfavorable = Array<Answer>(8).fill(2);

const withAnswers = (overrides: Partial<Record<number, Answer>>): Answer[] =>
  favorable.map((answer, index) => overrides[index] ?? answer);

const optionTexts = questions.flatMap((question) => question.options);

test("un escenario favorable da 54 puntos y Bien encaminado", () => {
  const result = scoreEvaluation(favorable);
  assert.equal(result.total, 54);
  assert.equal(result.level, "encaminado");
  assert.equal(result.strengths.length, 8);
  assert.equal(result.findings.length, 0);
  assert.equal(result.connections.length, 0);
  assert.match(result.reading, /ocho áreas/);
});

test("un escenario desfavorable da 0 puntos y Áreas que requieren atención", () => {
  const result = scoreEvaluation(unfavorable);
  assert.equal(result.total, 0);
  assert.equal(result.level, "atencion");
  assert.equal(result.strengths.length, 0);
  assert.deepEqual(
    result.findings.map((item) => item.id),
    ["ventas", "seguimiento", "inventarios", "compras", "dependencia", "operacion", "tesoreria", "equipo"],
  );
  assert.ok(result.connections.length > 0);
  assert.ok(result.connections.length <= 2);
});

test("una respuesta desfavorable de peso 5 no queda oculta detrás de 44 puntos", () => {
  const result = scoreEvaluation(withAnswers({ 2: 2 }));
  assert.equal(result.total, 44);
  assert.equal(result.level, "oportunidades");
  assert.deepEqual(
    result.findings.map((item) => item.area),
    ["Ventas y rentabilidad"],
  );
  assert.match(result.reading, /no alcanza a compensar/);
  assert.equal(result.connections.length, 0);
});

test("dos respuestas desfavorables de peso 4 o 5 activan la protección de atención", () => {
  const result = scoreEvaluation(withAnswers({ 3: 2, 6: 2 }));
  assert.equal(result.total, 38);
  assert.equal(result.level, "atencion");
  assert.deepEqual(
    result.findings.map((item) => item.id),
    ["inventarios", "compras"],
  );
  assert.deepEqual(
    result.connections.map((item) => item.id),
    ["inventarios-compras"],
  );
});

test("los límites 41, 40, 25 y 24 respetan los tres niveles", () => {
  const fortyOne = scoreEvaluation(withAnswers({ 2: 1, 3: 1, 5: 1, 4: 1 }));
  assert.equal(fortyOne.total, 41);
  assert.equal(fortyOne.level, "encaminado");

  const forty = scoreEvaluation(withAnswers({ 2: 1, 3: 1, 5: 1, 1: 1 }));
  assert.equal(forty.total, 40);
  assert.equal(forty.level, "oportunidades");

  const ones = Array<Answer>(8).fill(1);
  const twentyFive = scoreEvaluation(ones.map((answer, index) => (index === 1 ? 2 : answer)));
  assert.equal(twentyFive.total, 25);
  assert.equal(twentyFive.level, "oportunidades");

  const twentyFour = scoreEvaluation(ones.map((answer, index) => (index === 0 ? 2 : answer)));
  assert.equal(twentyFour.total, 24);
  assert.equal(twentyFour.level, "atencion");
});

test("39 puntos de la escala de riesgo equivalen a 15 puntos favorables y siguen en atención", () => {
  const answers: Answer[] = [2, 2, 0, 2, 2, 2, 2, 1];
  const result = scoreEvaluation(answers);
  assert.equal(result.total, 15);
  assert.equal(54 - result.total, 39);
  assert.equal(result.level, "atencion");
});

test("una respuesta desfavorable fuera de peso 4 o 5 no activa la protección", () => {
  const result = scoreEvaluation(withAnswers({ 0: 2 }));
  assert.equal(result.total, 48);
  assert.equal(result.level, "encaminado");
  assert.equal(result.connections.length, 0);
});

test("los hallazgos mixtos se ordenan por exposición y conservan el empate", () => {
  const result = scoreEvaluation(withAnswers({ 2: 1, 7: 1, 3: 2, 6: 2 }));
  assert.equal(result.total, 28);
  assert.deepEqual(
    result.findings.map((item) => item.id),
    ["inventarios", "compras", "ventas", "seguimiento"],
  );
  assert.deepEqual(
    result.findings.map((item) => item.exposure),
    [8, 8, 5, 5],
  );
  assert.equal(questions.reduce((sum, question) => sum + question.weight, 0), 27);
});

test("muestra como máximo dos conexiones y respeta el orden cuando empatan", () => {
  const tied = scoreEvaluation(withAnswers({ 1: 2, 3: 1, 6: 1 }));
  assert.deepEqual(
    tied.connections.map((item) => item.id),
    ["inventarios-compras", "tesoreria-compras"],
  );
  assert.equal(tied.connections[0].exposure, tied.connections[1].exposure);

  const ranked = scoreEvaluation(withAnswers({ 1: 2, 2: 1, 3: 1, 6: 1, 7: 1 }));
  assert.equal(ranked.connections.length, 2);
  assert.deepEqual(
    ranked.connections.map((item) => item.id),
    ["rentabilidad-seguimiento", "rentabilidad-inventarios"],
  );
});

test("una sola área débil no justifica una conexión", () => {
  const result = scoreEvaluation(withAnswers({ 3: 2, 6: 0 }));
  assert.equal(
    result.connections.some((item) => item.id === "inventarios-compras"),
    false,
  );
});

test("la interpretación no repite las respuestas literales", () => {
  const mixed = scoreEvaluation([1, 1, 2, 1, 2, 1, 0, 2]);
  const prose = [
    mixed.message,
    mixed.reading,
    ...mixed.findings.map((item) => item.implication),
    ...mixed.strengths.map((item) => item.implication),
    ...mixed.connections.map((item) => item.text),
  ].join("\n");
  for (const option of optionTexts) {
    assert.equal(prose.includes(option), false, option);
  }
});
