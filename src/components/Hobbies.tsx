import { hobbies } from "../data/portfolio";
import { SectionHead, Reveal } from "./ui";

export default function Hobbies() {
  return (
    <section id="hobbies" className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
      <div className="rounded-[2.5rem] border-2 border-ink bg-cream-2 px-6 py-14 shadow-hard-lg md:px-12 md:py-20">
        <SectionHead
          kicker="وقتی کار تمام می‌شود"
          kickerColor="#52b366"
          title={
            <>
              کمی بیشتر{" "}
              <span className="mark" style={{ "--mark-color": "#ffc53d" } as React.CSSProperties}>
                از دنیای من.
              </span>
            </>
          }
          sub="تکنولوژی، بازی، داستان و دیزاین؛ چیزهایی که دکمهٔ کنجکاوی‌ام را روشن نگه می‌دارند."
        />

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {hobbies.map((h, i) => (
            <Reveal key={h.title} delay={0.05 + i * 0.06} rot={i % 2 ? 1.5 : -1.5}>
              <div
                className="card-pop group flex h-full flex-col overflow-hidden rounded-3xl border-2 border-ink bg-paper shadow-hard"
                style={{ "--pop-rot": `${i % 2 ? "1.2deg" : "-1.2deg"}` } as React.CSSProperties}
              >
                <div className={`relative overflow-hidden border-b-2 border-ink ${h.tile}`}>
                  <img
                    src={h.image}
                    alt={h.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:rotate-2"
                  />
                  <span className="absolute right-3 top-3 rounded-full border-2 border-ink bg-paper px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest shadow-hard-xs">
                    {h.label}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold tracking-tight md:text-2xl">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-70">{h.blurb}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
