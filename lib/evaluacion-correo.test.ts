import assert from "node:assert/strict";
import { beforeEach, test } from "node:test";
import { type Answer } from "./evaluacion-empresarial.ts";
import {
  type EvaluationMail,
  buildEvaluationMail,
  handleEvaluationCopyRequest,
  resetEvaluationRateLimit,
} from "./evaluacion-correo.ts";
import { resultCopy, scoreEvaluation } from "./evaluacion-empresarial.ts";

const favorable = Array<Answer>(8).fill(0);
const unfavorable = Array<Answer>(8).fill(2);
const mixed: Answer[] = [2, 2, 0, 2, 2, 2, 2, 1];

beforeEach(() => {
  resetEvaluationRateLimit();
});

const capture = () => {
  const sent: EvaluationMail[] = [];
  return {
    sent,
    mailer: async (message: EvaluationMail) => {
      sent.push(message);
    },
  };
};

test("el correo reproduce el prediagnóstico calculado en el servidor", () => {
  const result = scoreEvaluation(mixed);
  const mail = buildEvaluationMail(result, "persona@empresa.com");

  assert.equal(mail.to, "persona@empresa.com");
  assert.match(mail.subject, /Evaluación Empresarial en 4 Minutos/);
  assert.match(mail.subject, new RegExp(result.title));
  for (const part of [mail.text, mail.html]) {
    assert.match(part, new RegExp(result.title));
    assert.match(part, new RegExp(`${result.total} / ${result.maximum}`));
    assert.match(part, new RegExp(result.message.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(part, /Inventarios/);
    assert.match(part, /Ventas y rentabilidad/);
    assert.match(part, /Inventarios y compras/);
    assert.match(part, /Dependencia, equipo y procesos/);
    assert.match(part, new RegExp(resultCopy.radiografia.slice(0, 40).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(part, /emphasys\.mx\/radiografia-empresarial/);
  }
  assert.equal(result.total, 15);
  assert.doesNotMatch(mail.text, /Sigue funcionando casi igual/);
});

test("un resultado sin conexiones no inventa una relación en el correo", () => {
  const mail = buildEvaluationMail(scoreEvaluation(favorable), "persona@empresa.com");
  assert.equal(mail.text.includes(resultCopy.connections), false);
  assert.match(mail.text, /54 \/ 54/);
  assert.match(mail.text, new RegExp(resultCopy.noFindings.slice(0, 24)));
});

test("ignora puntuación y nivel enviados por el navegador", async () => {
  const { sent, mailer } = capture();
  const response = await handleEvaluationCopyRequest(
    {
      answers: unfavorable,
      email: "Persona@Empresa.com",
      total: 54,
      level: "encaminado",
      title: "Bien encaminado",
      message: "Texto inventado por el navegador.",
    },
    { ip: "203.0.113.10", mailer, now: 1_000 },
  );

  assert.equal(response.status, 200);
  assert.equal(sent.length, 1);
  assert.equal(sent[0].to, "persona@empresa.com");
  assert.match(sent[0].text, /0 \/ 54/);
  assert.match(sent[0].text, /Áreas que requieren atención/);
  assert.equal(sent[0].text.includes("Bien encaminado"), false);
  assert.equal(sent[0].text.includes("Texto inventado"), false);
});

test("un campo de consentimiento sobrante no cambia ni condiciona el envío", async () => {
  const plain = capture();
  const extra = capture();
  const payload = { answers: favorable, email: "persona@empresa.com" };

  const withoutField = await handleEvaluationCopyRequest(payload, {
    ip: "203.0.113.11",
    mailer: plain.mailer,
    now: 2_000,
  });
  const withField = await handleEvaluationCopyRequest(
    { ...payload, marketing: true },
    { ip: "203.0.113.12", mailer: extra.mailer, now: 2_000 },
  );

  assert.equal(withoutField.status, 200);
  assert.equal(withField.status, 200);
  assert.equal(plain.sent[0].text, extra.sent[0].text);
  assert.equal(plain.sent[0].html, extra.sent[0].html);
  assert.equal(plain.sent[0].text.includes("recomendaciones"), false);
});

test("rechaza correos y respuestas inválidos sin llamar al envío", async () => {
  const { sent, mailer } = capture();
  const invalidEmail = await handleEvaluationCopyRequest(
    { answers: favorable, email: "no-es-correo" },
    { ip: "203.0.113.13", mailer, now: 3_000 },
  );
  const invalidAnswers = await handleEvaluationCopyRequest(
    { answers: [0, 1, 2, 3, 0, 0, 0, 0], email: "persona@empresa.com" },
    { ip: "203.0.113.14", mailer, now: 3_000 },
  );

  assert.equal(invalidEmail.status, 400);
  assert.equal(invalidAnswers.status, 400);
  assert.equal(sent.length, 0);
});

test("limita envíos repetidos por IP y por correo", async () => {
  const { sent, mailer } = capture();
  const now = 4_000;
  for (let index = 0; index < 3; index += 1) {
    const response = await handleEvaluationCopyRequest(
      { answers: favorable, email: "persona@empresa.com" },
      { ip: `203.0.113.${20 + index}`, mailer, now },
    );
    assert.equal(response.status, 200);
  }

  const blockedEmail = await handleEvaluationCopyRequest(
    { answers: favorable, email: "persona@empresa.com" },
    { ip: "203.0.113.40", mailer, now },
  );
  assert.equal(blockedEmail.status, 429);

  for (let index = 0; index < 5; index += 1) {
    const response = await handleEvaluationCopyRequest(
      { answers: favorable, email: `otro${index}@empresa.com` },
      { ip: "198.51.100.8", mailer, now: 5_000 },
    );
    assert.equal(response.status, 200);
  }
  const blockedIp = await handleEvaluationCopyRequest(
    { answers: favorable, email: "tercero@empresa.com" },
    { ip: "198.51.100.8", mailer, now: 5_000 },
  );

  assert.equal(blockedIp.status, 429);
  assert.equal(sent.length, 8);
});

test("un fallo del servicio de correo no se reporta como éxito", async () => {
  const response = await handleEvaluationCopyRequest(
    { answers: favorable, email: "persona@empresa.com" },
    {
      ip: "203.0.113.50",
      now: 6_000,
      mailer: async () => {
        throw new Error("api-key-should-not-leak");
      },
    },
  );

  assert.equal(response.status, 500);
  assert.equal("error" in response.body && response.body.error.includes("api-key"), false);
});
