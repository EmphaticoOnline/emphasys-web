"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import PageHero from "@/components/PageHero";
import DirectionMark from "@/components/visual/DirectionMark";
import EvaluacionCopia from "@/components/evaluacion/EvaluacionCopia";
import { type Answer, questions, resultCopy, scoreEvaluation } from "@/lib/evaluacion-empresarial";
import { trackEvent, trackEvaluationEvent } from "@/lib/analytics";

type Phase = "welcome" | "questions" | "results";

const emptyAnswers = (): Array<Answer | null> => Array(questions.length).fill(null);

const EvaluacionEmpresarial = () => {
  const [phase, setPhase] = useState<Phase>("welcome");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Array<Answer | null>>(emptyAnswers);
  const questionRef = useRef<HTMLHeadingElement>(null);
  const skipInitialScroll = useRef(true);
  const startedRef = useRef(false);
  const completedRef = useRef(false);
  const abandonedRef = useRef(false);
  const [evaluationId, setEvaluationId] = useState(() => crypto.randomUUID());

  const question = questions[step];
  const selected = answers[step];
  const completed = answers.every((answer): answer is Answer => answer !== null);

  useEffect(() => {
    trackEvaluationEvent({ eventType: "visit", evaluationId });
  }, [evaluationId]);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === "hidden" && phase === "questions" && !completedRef.current && !abandonedRef.current) {
        abandonedRef.current = true;
        trackEvaluationEvent({ eventType: "evaluation_abandoned", evaluationId, stepNumber: step + 1 });
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [evaluationId, phase, step]);

  useEffect(() => {
    if (skipInitialScroll.current) {
      skipInitialScroll.current = false;
      return;
    }
    if (phase === "questions") questionRef.current?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [phase, step]);

  const begin = () => {
    if (!startedRef.current) {
      startedRef.current = true;
      trackEvent("evaluation_start");
      trackEvaluationEvent({ eventType: "evaluation_start", evaluationId });
    }
    setPhase("questions");
    setStep(0);
  };

  const choose = (answer: Answer) => {
    setAnswers((current) => current.map((value, index) => (index === step ? answer : value)));
    trackEvaluationEvent({ eventType: "question_answered", evaluationId, stepNumber: step + 1, metadata: { answer } });
  };

  const goTo = (nextStep: number) => {
    if (nextStep > step) trackEvaluationEvent({ eventType: "step_advanced", evaluationId, stepNumber: nextStep + 1 });
    setStep(nextStep);
    setPhase("questions");
  };

  const showResults = () => {
    if (!completed) return;
    if (!completedRef.current) {
      completedRef.current = true;
      trackEvent("evaluation_complete");
      trackEvaluationEvent({ eventType: "evaluation_complete", evaluationId, stepNumber: 8 });
    }
    setPhase("results");
  };

  const restart = () => {
    trackEvaluationEvent({ eventType: "evaluation_restart", evaluationId });
    setEvaluationId(crypto.randomUUID());
    setAnswers(emptyAnswers());
    setStep(0);
    setPhase("welcome");
    abandonedRef.current = false;
  };

  if (phase === "welcome") {
    return (
      <PageHero
        eyebrow="Evaluación Empresarial en 4 Minutos"
        title="¿Qué tan claro tienes el funcionamiento de tu empresa?"
        visual={<DirectionMark />}
        actions={
          <button type="button" className="btn-primary" onClick={begin}>
            Comenzar evaluación
          </button>
        }
      >
        <p>
          Responde ocho preguntas sobre el control, la rentabilidad y la operación de tu negocio. En aproximadamente cuatro minutos obtendrás una primera orientación sobre tus fortalezas y aspectos que conviene revisar. Sin registro y sin compromiso.
        </p>
        <p className="text-base text-slate-500">Es una evaluación orientativa, no un diagnóstico empresarial definitivo.</p>
      </PageHero>
    );
  }

  if (phase === "questions") {
    return (
      <section className="bg-[#f5f4ef] text-slate-900">
        <div className="wrap pb-28 pt-10 sm:pb-20 sm:pt-14">
          <div className="mx-auto max-w-[720px]">
          <p className="eyebrow">Evaluación Empresarial en 4 Minutos</p>
          <div className="mt-6" aria-labelledby="progreso-evaluacion">
            <div className="flex items-start justify-between gap-4">
              <p id="progreso-evaluacion" className="shrink-0 text-sm font-semibold text-[var(--color-emphasys-blue)]">
                Pregunta {step + 1} de {questions.length}
              </p>
              <p className="text-right text-sm text-slate-500">{question.area}</p>
            </div>
            <div
              className="mt-3 grid grid-cols-8 gap-1.5"
              role="progressbar"
              aria-valuemin={1}
              aria-valuemax={questions.length}
              aria-valuenow={step + 1}
              aria-label={`Pregunta ${step + 1} de ${questions.length}`}
            >
              {questions.map((item, index) => {
                const filled = index < step || answers[index] !== null;
                const current = index === step;
                return (
                  <span
                    key={item.id}
                    className={`h-1.5 ${
                      current
                        ? "bg-[var(--color-emphasys-green)]"
                        : filled
                          ? "bg-[rgba(0,98,97,0.45)]"
                          : "bg-[rgba(29,47,104,0.12)]"
                    }`}
                  />
                );
              })}
            </div>
          </div>

          <div className="mt-8 border border-[rgba(29,47,104,0.10)] bg-white p-5 sm:p-8">
            <h1
              ref={questionRef}
              tabIndex={-1}
              className="font-display text-[1.7rem] font-semibold leading-snug tracking-tight text-[var(--color-emphasys-blue)] outline-none sm:text-3xl"
            >
              {question.prompt}
            </h1>
            <fieldset className="mt-6">
              <legend className="sr-only">{question.prompt}</legend>
              <div className="grid gap-3">
                {question.options.map((option, index) => {
                  const answer = index as Answer;
                  const isSelected = selected === answer;
                  return (
                    <label
                      key={option}
                      className={`flex cursor-pointer items-start gap-4 border px-4 py-4 text-left transition ${
                        isSelected
                          ? "border-[var(--color-emphasys-green)] bg-[rgba(0,98,97,0.06)]"
                          : "border-[rgba(29,47,104,0.12)] bg-white hover:border-[rgba(29,47,104,0.32)]"
                      }`}
                    >
                      <input
                        type="radio"
                        className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-emphasys-green)]"
                        name={question.id}
                        value={answer}
                        checked={isSelected}
                        onChange={() => choose(answer)}
                      />
                      <span className="text-base leading-relaxed text-slate-700">{option}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          </div>

          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              className="btn-ghost disabled:pointer-events-none disabled:opacity-40"
              onClick={() => goTo(step - 1)}
              disabled={step === 0}
            >
              Anterior
            </button>
            {step < questions.length - 1 ? (
              <button type="button" className="btn-primary disabled:pointer-events-none disabled:opacity-40" onClick={() => goTo(step + 1)} disabled={selected === null}>
                Siguiente
              </button>
            ) : (
              <button type="button" className="btn-primary disabled:pointer-events-none disabled:opacity-40" onClick={showResults} disabled={!completed}>
                Ver resultados
              </button>
            )}
          </div>
        </div>
        </div>
      </section>
    );
  }

  const result = scoreEvaluation(answers as Answer[]);

  return (
    <section className="bg-[#f5f4ef] text-slate-900">
      <div className="wrap pb-20 pt-12 sm:pt-16">
        <p className="eyebrow">Resultado orientativo</p>
        <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h1 className="font-display max-w-3xl text-[34px] font-semibold leading-[1.08] tracking-tight text-[var(--color-emphasys-blue)] sm:text-5xl">
            {result.title}
          </h1>
          <p className="shrink-0">
            <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{resultCopy.score}</span>
            <span className="font-display text-5xl text-[var(--color-emphasys-blue)]">{result.total}</span>
            <span className="text-xl text-slate-400"> / {result.maximum}</span>
          </p>
        </div>
        <div className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-slate-600">
          <p>{result.message}</p>
          <p>{result.reading}</p>
        </div>

        <h2 className="font-display mt-14 text-3xl font-semibold tracking-tight text-[var(--color-emphasys-blue)]">{resultCopy.findings}</h2>
        {result.findings.length > 0 ? (
          <ol className="mt-6 grid gap-4">
            {result.findings.map((item) => (
              <li key={item.id} className="border border-[rgba(29,47,104,0.10)] bg-white p-6">
                <h3 className="font-display text-2xl text-[var(--color-emphasys-blue)]">{item.area}</h3>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">{item.implication}</p>
              </li>
            ))}
          </ol>
        ) : (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">{resultCopy.noFindings}</p>
        )}

        <h2 className="font-display mt-14 text-3xl font-semibold tracking-tight text-[var(--color-emphasys-blue)]">{resultCopy.strengths}</h2>
        {result.strengths.length > 0 ? (
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {result.strengths.map((item) => (
              <li key={item.id} className="border border-[rgba(29,47,104,0.10)] bg-white p-6">
                <h3 className="font-display text-xl text-[var(--color-emphasys-blue)]">{item.area}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.implication}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">{resultCopy.noStrengths}</p>
        )}

        {result.connections.length > 0 ? (
          <>
            <h2 className="font-display mt-14 text-3xl font-semibold tracking-tight text-[var(--color-emphasys-blue)]">{resultCopy.connections}</h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {result.connections.map((connection) => (
                <article key={connection.id} className="border border-[rgba(29,47,104,0.10)] bg-white p-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-emphasys-green)]">{connection.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">{connection.text}</p>
                </article>
              ))}
            </div>
          </>
        ) : null}

        <aside className="mt-10 border border-[rgba(29,47,104,0.10)] bg-[#eceff4] p-6 sm:p-8">
          <p className="max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">{resultCopy.radiografia}</p>
          <Link href="/radiografia-empresarial" className="btn-ghost mt-6" onClick={() => { trackEvent("radiografia_interest"); trackEvaluationEvent({ eventType: "commercial_interest", evaluationId, metadata: { interest: "radiografia" } }); }}>
            {resultCopy.radiografiaCta}
          </Link>
        </aside>

        <EvaluacionCopia answers={answers as Answer[]} evaluationId={evaluationId} />

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button type="button" className="btn-ghost" onClick={() => goTo(0)}>
            Revisar respuestas
          </button>
          <button type="button" className="btn-ghost" onClick={restart}>
            Comenzar de nuevo
          </button>
        </div>
      </div>
    </section>
  );
};

export default EvaluacionEmpresarial;
