import { ArrowUpLeft } from "lucide-react";
import { socials } from "../data/portfolio";
import { SectionHead, Reveal } from "./ui";
import { SocialIcon } from "./BrandIcons";

export default function Social() {
  return (
    <section id="social" className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
      <div className="rounded-[2.5rem] border-2 border-ink bg-paper px-6 py-14 shadow-hard-lg md:px-12 md:py-20">
        <SectionHead
          kicker="بیرون از این پورتفولیو"
          kickerColor="#6c9bff"
          title={
            <>
              اینجا هم{" "}
              <span className="mark" style={{ "--mark-color": "#ff9ec7" } as React.CSSProperties}>
                همراه باشیم.
              </span>
            </>
          }
          sub="برای آشنایی بیشتر، دیدن طرح‌ها یا صحبت دربارهٔ همکاری، از این مسیرها در ارتباط باشیم."
        />

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {socials.map((s, i) => (
            <Reveal key={s.id} delay={0.05 + i * 0.06} rot={i % 2 ? 2 : -2}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-pop group flex h-full flex-col justify-between gap-8 rounded-3xl border-2 border-ink bg-cream p-6 shadow-hard"
                style={{ "--pop-rot": `${i % 2 ? "1.5deg" : "-1.5deg"}` } as React.CSSProperties}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`wiggle-hover flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-ink shadow-hard-sm ${s.tile}`}
                  >
                    <SocialIcon id={s.id} className="h-7 w-7" />
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-paper shadow-hard-xs transition-all duration-300 group-hover:rotate-45 group-hover:bg-orange group-hover:text-cream">
                    <ArrowUpLeft className="h-5 w-5" />
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight">{s.platform}</h3>
                  <p className="mt-0.5 font-mono text-sm opacity-60"><bdi dir="auto">{s.handle}</bdi></p>
                  <span className="mt-3 inline-block rounded-full border-2 border-ink bg-paper px-3 py-1 text-xs font-bold shadow-hard-xs">
                    {s.actionLabel}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
