import { perspectives, type Perspective, type PerspectiveBlock } from "./perspectivas-contenido";

export { perspectives };
export type { Perspective, PerspectiveBlock };

export const PERSPECTIVES_PATH = "/perspectivas";
export const WORDS_PER_MINUTE = 200;

export const author = {
  name: "Antonio Díaz",
  jobTitle: "Fundador de Emphasys Soluciones",
  avatar: "/perspectivas/antonio-diaz-avatar.jpg",
  portrait: "/perspectivas/antonio-diaz-autor.jpg",
  bio: [
    "Antonio Díaz es Ingeniero en Computación, fundador de Emphasys Soluciones y cuenta con más de 30 años de experiencia en el desarrollo e implantación de soluciones tecnológicas empresariales.",
    "Cuenta con una certificación en Life Coaching por el Fowler Institute, formación que complementa su visión sobre el papel de las personas en los procesos de transformación organizacional.",
    "Su trabajo se enfoca en comprender cómo funcionan las empresas, mejorar sus procesos y ayudar a que la tecnología se traduzca en resultados reales.",
  ],
};

export const stripTags = (html: string) => html.replace(/<[^>]+>/g, "");

const blockText = (block: PerspectiveBlock) => (block.type === "heading" ? block.text : stripTags(block.html));

export const countWords = (text: string) => text.match(/[\p{L}\p{N}]+/gu)?.length ?? 0;

export const readingMinutes = (article: Perspective) => {
  const words = countWords(article.title) + article.blocks.reduce((sum, block) => sum + countWords(blockText(block)), 0);
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
};

export const perspectivePath = (article: Perspective) => `${PERSPECTIVES_PATH}/${article.slug}`;

export const getPerspective = (slug: string) => perspectives.find((article) => article.slug === slug);

export const getNeighbors = (article: Perspective) => {
  const index = perspectives.findIndex((item) => item.slug === article.slug);
  return { previous: perspectives[index - 1], next: perspectives[index + 1] };
};

export const getSections = (article: Perspective) =>
  article.blocks.flatMap((block) => (block.type === "heading" ? [{ id: block.id, text: block.text }] : []));

export const formatNumber = (n: number) => String(n).padStart(2, "0");
