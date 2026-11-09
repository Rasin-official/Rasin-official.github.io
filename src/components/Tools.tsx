import { tools } from "../data/portfolio";
import { SectionHead, Reveal, Sparkle } from "./ui";
import { ToolIcon } from "./BrandIcons";

export default function Tools() {
  return (
    <section id="tools" className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
      <div className="relative rounded-[2.5rem] border-2 border-ink bg-paper px-6 py-14 shadow-hard-lg md:px-12 md:py-20">
        {/* corner sparkle deco */}
        <Sparkle className="absolute -left-3 -top-3 h-9 w-9 rotate-12 text-yellow" />
        <Sparkle className="absolute -bottom-3 -right-3 h-9 w-9 -rotate-12 text-orange" />

        <SectionHead
          kicker="جعبه‌ابزار من"
          kickerColor="#ffc53d"
          title={
            <>
              از ایده تا اجرا، برای{" "}
              <span className="mark" style={{ "--mark-color": "#6c9bff" } as React.CSSProperties}>
                طراحی و تولید محتوا.
              </span>
            </>
          }
          sub="ابزارهایی که با آن‌ها ایده‌ها را به رابط کاربری، محتوا و تصویر و ویدیو تبدیل می‌کنم."
        />

        {/* tool cards */}
        <div className="tool-grid grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3">
          {tools.map((t, i) => (
            <Reveal key={t.id} delay={0.05 + i * 0.05} rot={i % 2 ? 2 : -2}>
              <div
                className="card-pop group flex h-full flex-col gap-4 rounded-3xl border-2 border-ink bg-cream p-5 shadow-hard md:p-6"
                style={{ "--pop-rot": t.rot } as React.CSSProperties}
              >
                <div
                  className={`wiggle-hover flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-ink ${t.tile} shadow-hard-sm`}
                >
                  <ToolIcon id={t.id} className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight md:text-xl"><bdi dir="ltr">{t.name}</bdi></h3>
                  <p className="mt-1 text-sm leading-snug opacity-65">{t.blurb}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
