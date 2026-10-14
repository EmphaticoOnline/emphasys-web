import {
  type Answer,
  EVALUATION_NAME,
  type EvaluationResult,
  resultCopy,
  scoreEvaluation,
} from "./evaluacion-empresarial.ts";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_IP = 5;
const MAX_PER_EMAIL = 3;

const attempts = new Map<string, number[]>();

export type EvaluationMail = {
  to: string;
  subject: string;
  text: string;
  html: string;
};

export type Mailer = (message: EvaluationMail) => Promise<void>;

export type CopyResponse = { status: number; body: { ok: true } | { error: string } };

export const isEvaluationEmail = (value: string) =>
  value.length <= 254 && EMAIL_PATTERN.test(value) && !/[\r\n]/.test(value);

export const resetEvaluationRateLimit = () => {
  attempts.clear();
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const rememberAttempt = (key: string, now: number) => {
  const recent = (attempts.get(key) ?? []).filter((timestamp) => now - timestamp < WINDOW_MS);
  if (recent.length >= (key.startsWith("email:") ? MAX_PER_EMAIL : MAX_PER_IP)) return false;
  recent.push(now);
  attempts.set(key, recent);
  return true;
};

export const buildEvaluationMail = (result: EvaluationResult, to: string): EvaluationMail => {
  const scoreLine = `${resultCopy.score}: ${result.total} / ${result.maximum}`;
  const findings =
    result.findings.length > 0
      ? result.findings.map((item) => `${item.area}\n${item.implication}`).join("\n\n")
      : resultCopy.noFindings;
  const strengths =
    result.strengths.length > 0
      ? result.strengths.map((item) => `${item.area}\n${item.implication}`).join("\n\n")
      : resultCopy.noStrengths;
  const connections =
    result.connections.length > 0
      ? `\n\n${resultCopy.connections}\n\n${result.connections.map((item) => `${item.title}\n${item.text}`).join("\n\n")}`
      : "";

  const text = [
    EVALUATION_NAME,
    "",
    `Nivel: ${result.title}`,
    scoreLine,
    "",
    result.message,
    "",
    result.reading,
    "",
    resultCopy.findings,
    "",
    findings,
    "",
    resultCopy.strengths,
    "",
    strengths,
    connections,
    "",
    resultCopy.radiografia,
    resultCopy.radiografiaCta,
    resultCopy.radiografiaUrl,
  ].join("\n");

  const findingHtml =
    result.findings.length > 0
      ? result.findings
          .map(
            (item) =>
              `<h3 style="margin:24px 0 8px;font-family:Georgia,serif;font-size:22px;color:#1d2f68;">${escapeHtml(item.area)}</h3><p style="margin:0;line-height:1.6;color:#3f4754;">${escapeHtml(item.implication)}</p>`,
          )
          .join("")
      : `<p style="margin:16px 0 0;line-height:1.6;color:#3f4754;">${escapeHtml(resultCopy.noFindings)}</p>`;

  const strengthHtml =
    result.strengths.length > 0
      ? result.strengths
          .map(
            (item) =>
              `<h3 style="margin:24px 0 8px;font-family:Georgia,serif;font-size:20px;color:#1d2f68;">${escapeHtml(item.area)}</h3><p style="margin:0;line-height:1.6;color:#3f4754;">${escapeHtml(item.implication)}</p>`,
          )
          .join("")
      : `<p style="margin:16px 0 0;line-height:1.6;color:#3f4754;">${escapeHtml(resultCopy.noStrengths)}</p>`;

  const connectionHtml =
    result.connections.length > 0
      ? `<h2 style="margin:36px 0 0;font-family:Georgia,serif;font-size:26px;color:#1d2f68;">${escapeHtml(resultCopy.connections)}</h2>${result.connections
          .map(
            (item) =>
              `<h3 style="margin:24px 0 8px;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:#006261;">${escapeHtml(item.title)}</h3><p style="margin:0;line-height:1.6;color:#3f4754;">${escapeHtml(item.text)}</p>`,
          )
          .join("")}`
      : "";

  const html = `<!doctype html><html lang="es"><body style="margin:0;background:#f5f4ef;color:#1a1e28;">
  <div style="max-width:640px;margin:0 auto;padding:32px 24px 48px;font-family:Georgia,serif;">
    <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#1d2f68;">${escapeHtml(EVALUATION_NAME)}</p>
    <h1 style="margin:16px 0 8px;font-size:34px;line-height:1.15;color:#1d2f68;">${escapeHtml(result.title)}</h1>
    <p style="margin:0 0 24px;font-family:Arial,sans-serif;color:#5b6370;">${escapeHtml(scoreLine)}</p>
    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:17px;line-height:1.6;color:#3f4754;">${escapeHtml(result.message)}</p>
    <p style="margin:0;font-family:Arial,sans-serif;font-size:17px;line-height:1.6;color:#3f4754;">${escapeHtml(result.reading)}</p>
    <h2 style="margin:36px 0 0;font-size:26px;color:#1d2f68;">${escapeHtml(resultCopy.findings)}</h2>
    ${findingHtml}
    <h2 style="margin:36px 0 0;font-size:26px;color:#1d2f68;">${escapeHtml(resultCopy.strengths)}</h2>
    ${strengthHtml}
    ${connectionHtml}
    <div style="margin-top:36px;padding:24px;background:#eceff4;">
      <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:16px;line-height:1.6;color:#3f4754;">${escapeHtml(resultCopy.radiografia)}</p>
      <a href="${resultCopy.radiografiaUrl}" style="font-family:Arial,sans-serif;color:#1d2f68;">${escapeHtml(resultCopy.radiografiaCta)}</a>
    </div>
  </div>
</body></html>`;

  return {
    to,
    subject: `${EVALUATION_NAME}: ${result.title}`,
    text,
    html,
  };
};

const parseAnswers = (value: unknown): Answer[] | null => {
  if (!Array.isArray(value) || value.length !== 8) return null;
  const answers: Answer[] = [];
  for (const item of value) {
    if (item !== 0 && item !== 1 && item !== 2) return null;
    answers.push(item);
  }
  return answers;
};

export const handleEvaluationCopyRequest = async (
  payload: unknown,
  options: { ip: string; mailer: Mailer; now?: number },
): Promise<CopyResponse> => {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return { status: 400, body: { error: "No pudimos preparar la copia con estos datos." } };
  }

  const { answers: rawAnswers, email: rawEmail, total, level, title, message } = payload as {
    answers?: unknown;
    email?: unknown;
    total?: unknown;
    level?: unknown;
    title?: unknown;
    message?: unknown;
  };

  void total;
  void level;
  void title;
  void message;

  const answers = parseAnswers(rawAnswers);
  if (!answers) {
    return { status: 400, body: { error: "No pudimos preparar la copia con estas respuestas." } };
  }

  if (typeof rawEmail !== "string" || !isEvaluationEmail(rawEmail.trim().toLowerCase())) {
    return { status: 400, body: { error: "Ingresa un correo válido." } };
  }

  const email = rawEmail.trim().toLowerCase();
  const now = options.now ?? Date.now();
  const ipKey = `ip:${options.ip.slice(0, 64) || "desconocido"}`;
  if (!rememberAttempt(ipKey, now) || !rememberAttempt(`email:${email}`, now)) {
    return { status: 429, body: { error: "Ya solicitaste varias copias. Inténtalo más tarde." } };
  }

  let result: EvaluationResult;
  try {
    result = scoreEvaluation(answers);
  } catch {
    return { status: 400, body: { error: "No pudimos preparar la copia con estas respuestas." } };
  }

  try {
    await options.mailer(buildEvaluationMail(result, email));
  } catch (error) {
    console.error("Error enviando copia de evaluación", error instanceof Error ? error.name : "unknown");
    return { status: 500, body: { error: "No se pudo enviar la copia. Inténtalo más tarde." } };
  }

  return { status: 200, body: { ok: true } };
};
