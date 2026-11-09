import { ArrowUpLeft, CalendarClock, FolderOpen, Laptop, MessageSquareText } from "lucide-react";
import { jobs, profile } from "../data/portfolio";
import { SectionHead, Reveal, Sparkle } from "./ui";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
      <div className="rounded-[2.5rem] border-2 border-ink bg-cream-2 px-6 py-14 shadow-hard-lg md:px-12 md:py-20">
        <SectionHead
          kicker="مسیر من تا امروز"
          kickerColor="#ff9ec7"
          title={
            <>
              تجربه‌هایی که ساخته‌ام،{" "}
              <span className="mark" style={{ "--mark-color": "#52b366" } as React.CSSProperties}>
                کارهایی که به ثمر رسیده‌اند.
              </span>
            </>
          }
        />

        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-8">
          {/* ── job stack ── */}
          <div className="relative">
            {/* dashed spine */}
            <div className="dashed-line absolute bottom-8 right-[27px] top-8 w-[2px] opacity-25 max-lg:hidden" />

            <div className="flex flex-col gap-6">
              {jobs.map((job, i) => (
                <Reveal key={job.company} delay={0.06 * i} rot={i % 2 ? 1.5 : -1.5}>
                  <div className="relative lg:pr-16">
                    {/* number node */}
                    <div className="absolute right-0 top-6 flex h-14 w-14 -rotate-6 items-center justify-center rounded-2xl border-2 border-ink bg-ink font-display text-lg font-extrabold text-cream shadow-hard-sm max-lg:hidden">
                      {(i + 1).toLocaleString("fa-IR", { minimumIntegerDigits: 2 })}
                    </div>

                    <div
                      data-job-card
                      className="card-pop group rounded-3xl border-2 border-ink bg-paper p-6 shadow-hard md:p-8"
                      style={{ "--pop-rot": job.rot } as React.CSSProperties}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex min-w-0 items-center gap-4">
                          <span
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-ink font-display text-xl font-extrabold shadow-hard-sm transition-transform duration-300 group-hover:rotate-6 ${job.tile}`}
                          >
                            {job.company[0]}
                          </span>
                          <div className="min-w-0">
                            <h3 className="font-display text-xl font-bold leading-tight tracking-tight md:text-2xl">
                              {job.role}
                            </h3>
                            <p className="font-mono text-xs font-bold uppercase tracking-widest opacity-55">
                            <bdi dir="auto">{job.company}</bdi>
                            </p>
                          </div>
                        </div>
                        <span className="rounded-full border-2 border-ink bg-yellow px-3.5 py-1 font-mono text-xs font-bold shadow-hard-xs">
                          {job.period}
                        </span>
                      </div>

                      <p className="mt-4 max-w-2xl text-sm leading-relaxed opacity-75 md:text-base">
                        {job.blurb}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border-2 border-ink bg-cream px-3 py-1 text-xs font-bold transition-colors duration-200 hover:bg-orange hover:text-cream"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* ── side widgets ── */}
          <div className="flex flex-col gap-6">
            <Reveal delay={0.1}>
              <a
                href={profile.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-pop group block rounded-3xl border-2 border-ink bg-paper p-6 shadow-hard md:p-7"
                style={{ "--pop-rot": "1deg" } as React.CSSProperties}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-ink bg-pink shadow-hard-xs">
                  <FolderOpen className="h-6 w-6" />
                </span>
                <span className="mt-5 flex items-center gap-2 font-display text-xl font-bold">
                  مشاهده نمونه کار ها <ArrowUpLeft className="h-5 w-5 shrink-0" />
                </span>
                <span className="mt-3 block text-sm opacity-70">پروژه‌ها را در مجموعهٔ نمونه‌کارها ببینید.</span>
              </a>
            </Reveal>
            {/* book a call */}
            <Reveal delay={0.18}>
              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent("گفت‌وگوی آشنایی ۱۵ دقیقه‌ای")}`}
                className="card-pop group flex items-center gap-4 rounded-3xl border-2 border-ink bg-ink p-6 text-cream shadow-hard md:p-7"
                style={{ "--pop-rot": "-1.5deg" } as React.CSSProperties}
              >
                <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-cream/30 bg-orange shadow-[3px_3px_0_0_rgba(250,243,231,0.35)]">
                  <CalendarClock className="h-7 w-7 text-cream" />
                  <Sparkle className="absolute -right-2 -top-2 h-4 w-4 text-yellow" />
                </span>
                <span>
                  <span className="block font-display text-xl font-bold leading-tight md:text-2xl">
                    یک گفت‌وگوی ۱۵ دقیقه‌ای
                  </span>
                  <span className="mt-1 block text-sm text-cream/70">
                    بی‌تکلف گپ بزنیم؛ شاید شروع یک همکاری باشد.
                  </span>
                </span>
              </a>
            </Reveal>

            {/* remote availability */}
            <Reveal delay={0.26}>
              <div className="card-pop rounded-3xl border-2 border-ink bg-yellow p-6 shadow-hard md:p-7" style={{ "--pop-rot": "2deg" } as React.CSSProperties}>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-ink bg-paper shadow-hard-xs">
                    <Laptop className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest opacity-60">
                    همکاری مستقل
                  </span>
                </div>
                <p className="mt-4 font-display text-2xl font-extrabold tracking-tight">
                  آماده دورکاری
                </p>
                <p className="mt-3 text-xs font-medium opacity-65">
                  برای طراحی رابط کاربری و تولید محتوا، در ارتباط باشیم.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.32} className="lg:flex lg:flex-1">
              <div data-start-card className="card-pop flex w-full flex-col rounded-3xl border-2 border-ink bg-blue p-5 shadow-hard md:p-6" style={{ "--pop-rot": "-1deg" } as React.CSSProperties}>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-ink bg-paper shadow-hard-xs">
                    <MessageSquareText className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-bold">برای شروع همکاری</h3>
                </div>
                <ol className="my-4 flex flex-col justify-center gap-3 text-sm lg:flex-1">
                  <li className="flex items-center gap-3 rounded-xl bg-paper/40 px-3 py-2">
                    <span className="font-bold" aria-hidden="true">۰۱</span>
                    <span>موضوع و هدف پروژه</span>
                  </li>
                  <li className="flex items-center gap-3 rounded-xl bg-paper/40 px-3 py-2">
                    <span className="font-bold" aria-hidden="true">۰۲</span>
                    <span>نوع خروجی موردنیاز</span>
                  </li>
                  <li className="flex items-center gap-3 rounded-xl bg-paper/40 px-3 py-2">
                    <span className="font-bold" aria-hidden="true">۰۳</span>
                    <span>زمان‌بندی مدنظر شما</span>
                  </li>
                </ol>
                <a
                  href={`mailto:${profile.email}?subject=${encodeURIComponent("شروع همکاری")}&body=${encodeURIComponent("سلام رسول،\n\nموضوع و هدف پروژه:\n\nنوع خروجی موردنیاز:\n\nزمان‌بندی مدنظر:\n")}`}
                  className="mt-auto flex items-center justify-between gap-2 rounded-full border-2 border-ink bg-paper px-4 py-2 text-sm font-bold shadow-hard-xs transition-colors hover:bg-yellow"
                >
                  از پروژه‌ات بگو <ArrowUpLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

