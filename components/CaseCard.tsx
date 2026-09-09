import Image from "next/image";

export type CaseItem = {
  company: string;
  quote: string;
  author: string;
  logo: string;
};

const CaseCard = ({ item, featured = false }: { item: CaseItem; featured?: boolean }) => {
  return (
    <article
      className={`relative overflow-hidden border border-[rgba(29,47,104,0.10)] bg-white p-7 shadow-[0_16px_40px_rgba(18,26,61,0.05)] sm:p-8 ${
        featured ? "md:col-span-2 lg:col-span-3 md:grid md:grid-cols-[220px_1fr] md:gap-8 md:items-center" : ""
      }`}
    >
      <div className="absolute left-0 top-0 h-full w-[3px] bg-[var(--color-emphasys-green)]" />
      <div className={featured ? "flex items-center justify-center px-3 py-2 md:min-h-[7.5rem]" : ""}>
        <Image
          src={item.logo}
          alt={item.company}
          width={featured ? 280 : 220}
          height={featured ? 217 : 64}
          className={`w-auto object-contain opacity-85 ${
            featured ? "h-[4.5rem] object-center md:h-[4.75rem]" : "h-12 object-left"
          }`}
        />
      </div>
      <div>
        <p className="mt-5 font-display text-xl leading-snug text-slate-800 md:text-[1.35rem]">“{item.quote}”</p>
        <p className="mt-5 text-sm text-slate-500">{item.author}</p>
      </div>
    </article>
  );
};

export default CaseCard;
