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
        featured ? "md:col-span-2 md:grid md:grid-cols-[180px_1fr] md:gap-8 md:items-start" : ""
      }`}
    >
      <div className="absolute left-0 top-0 h-full w-[3px] bg-[var(--color-emphasys-green)]" />
      <div className="flex flex-col space-y-3">
        <Image
          src={item.logo}
          alt={item.company}
          width={220}
          height={64}
          className="h-12 w-auto object-contain object-left opacity-85"
        />
        <p className="text-sm font-semibold tracking-wide text-[var(--color-emphasys-blue)]">{item.company}</p>
      </div>
      <div>
        <p className="mt-5 font-display text-xl leading-snug text-slate-800 md:text-[1.35rem]">“{item.quote}”</p>
        <p className="mt-5 text-sm text-slate-500">{item.author}</p>
      </div>
    </article>
  );
};

export default CaseCard;
