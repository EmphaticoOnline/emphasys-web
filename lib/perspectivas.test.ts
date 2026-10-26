import test from "node:test";
import assert from "node:assert/strict";
import { countWords, getNeighbors, getPerspective, getSections, perspectives, readingMinutes } from "./perspectivas";

test("hay cuatro artículos con slugs únicos y en orden", () => {
  assert.equal(perspectives.length, 4);
  assert.deepEqual(perspectives.map((article) => article.number), [1, 2, 3, 4]);
  assert.equal(new Set(perspectives.map((article) => article.slug)).size, 4);
});

test("cuenta palabras con acentos y signos de interrogación", () => {
  assert.equal(countWords("¿Por qué fracasan los proyectos?"), 5);
});

test("los tiempos de lectura salen del texto real a 200 palabras por minuto", () => {
  assert.deepEqual(perspectives.map(readingMinutes), [7, 7, 10, 10]);
});

test("la navegación entre artículos respeta los extremos de la serie", () => {
  const first = getPerspective(perspectives[0].slug)!;
  const last = getPerspective(perspectives[3].slug)!;
  assert.equal(getNeighbors(first).previous, undefined);
  assert.equal(getNeighbors(first).next?.number, 2);
  assert.equal(getNeighbors(last).next, undefined);
  assert.equal(getPerspective("no-existe"), undefined);
});

test("cada artículo tiene secciones con ids únicos", () => {
  for (const article of perspectives) {
    const ids = getSections(article).map((section) => section.id);
    assert.ok(ids.length > 0);
    assert.equal(new Set(ids).size, ids.length);
  }
});
