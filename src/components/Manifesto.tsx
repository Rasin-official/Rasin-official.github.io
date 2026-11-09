import { Reveal } from "./ui";

const stats = [
  { value: "+۳", label: "سال تجربه", color: "#ffc53d", rot: "-2deg" },
  { value: "۳", label: "حوزهٔ اصلی خدمات", color: "#ff9ec7", rot: "1.5deg" },
  { value: "↻", label: "آپدیت اجباری!", color: "#6c9bff", rot: "-1.5deg" },
];

export default function Manifesto() {
  return (
    <section id="approach" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <p className="mx-auto max-w-4xl px-2 text-center font-display text-2xl font-bold leading-[1.9] tracking-tight md:text-4xl md:leading-[1.8]">
          برای من، طراحی و محتوا وقتی ارزش دارند که کار را ساده‌تر و پیام را روشن‌تر کنند. با{" "}
          <span className="mark" style={{ "--mark-color": "#ff9ec7" } as React.CSSProperties}>
            طراحی کاربردی و محتوای قابل‌فهم
          </span>{" "}
          و{" "}
          <span className="mark" style={{ "--mark-color": "#ffc53d" } as React.CSSProperties}>
            توجه به جزئیات
          </span>، ایده‌ها را به خروجی‌هایی تبدیل می‌کنم که به کار مخاطب بیایند.
        </p>
      </Reveal>

      <div className="mt-14 flex flex-wrap items-stretch justify-center gap-5 md:mt-16">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={0.1 + i * 0.1} rot={i % 2 ? 3 : -3}>
            <div
              className="btn-chunky flex w-44 flex-col items-center gap-1 rounded-3xl border-2 border-ink px-6 py-6 text-center shadow-hard"
              style={{ backgroundColor: s.color, rotate: s.rot }}
            >
              <span className="font-display text-5xl font-extrabold latin tracking-tight">{s.value}</span>
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] opacity-70">
                {s.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
