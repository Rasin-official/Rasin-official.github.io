import { useEffect, useState } from "react";
import { ArrowUpLeft, Copy, Check, Heart } from "lucide-react";
import { profile, socials } from "../data/portfolio";
import { Reveal, Sparkle, Sticker, Marquee } from "./ui";
import { SocialIcon } from "./BrandIcons";

function useClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("fa-IR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Asia/Tehran",
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const time = useClock();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <footer id="contact" className="relative">
      {/* ── big CTA card ── */}
      <div className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <Reveal>
          <div className="relative overflow-visible rounded-[2.5rem] border-2 border-ink bg-ink px-6 py-16 text-center text-cream shadow-hard-lg md:px-12 md:py-24">
            {/* deco sparkles */}
            <Sparkle className="absolute left-8 top-10 h-6 w-6 animate-float text-yellow" />
            <Sparkle className="absolute bottom-12 right-10 h-8 w-8 animate-float text-orange [animation-delay:1.4s]" />
            <Sparkle className="absolute right-1/4 top-8 h-4 w-4 animate-float text-pink [animation-delay:0.7s]" />

            <div className="absolute -top-12 right-6 md:right-16">
              <Sticker color="#ff5a2d" size={110}>
                <span className="font-display text-[11px] font-extrabold uppercase leading-tight text-cream">
                  بیا
                  <br />
                  گپ بزنیم!
                </span>
              </Sticker>
            </div>

            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-yellow">
              ایده‌ای دارید؟ پروژه‌ای در راه است؟
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              بیایید با هم چیزی{" "}
              <span className="relative inline-block">
                فوق‌العاده
                <svg viewBox="0 0 300 20" className="absolute -bottom-2 left-0 w-full" preserveAspectRatio="none">
                  <path d="M4 12 C 60 4, 140 18, 200 8 S 280 6, 296 10" stroke="#ffc53d" strokeWidth="7" strokeLinecap="round" fill="none" />
                </svg>
              </span>{" "}
              بسازیم.
            </h2>
            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-cream/70 md:text-base">
              برای طراحی رابط کاربری، تولید محتوا یا ساخت تصویر، ویدیو و موشن با هوش مصنوعی، دربارهٔ پروژه‌تان گپ بزنیم. آمادهٔ همکاری دورکاری‌ام.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="btn-chunky group flex max-w-full items-center gap-2 rounded-full border-2 border-cream bg-orange px-3 py-4 font-display text-xs font-bold text-cream shadow-[5px_5px_0_0_#faf3e7] sm:px-7 sm:text-base md:px-8 md:text-lg"
              >
                <bdi dir="ltr" className="whitespace-nowrap">{profile.email}</bdi>
                <ArrowUpLeft className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1 sm:h-5 sm:w-5" />
              </a>
              <button
                onClick={copyEmail}
                aria-live="polite"
                className="btn-chunky flex items-center gap-2 rounded-full border-2 border-cream bg-transparent px-6 py-4 font-display text-base font-bold text-cream shadow-[5px_5px_0_0_#faf3e7] md:text-lg"
              >
                {copied ? <Check className="h-5 w-5 text-green" /> : <Copy className="h-5 w-5" />}
                {copied ? "کپی شد!" : "کپی ایمیل"}
              </button>
            </div>

            {/* social shortcut row */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.platform}
                  className="btn-chunky flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-cream/25 bg-cream/5 shadow-[3px_3px_0_0_rgba(250,243,231,0.25)] transition-colors duration-200 hover:bg-orange"
                >
                  <SocialIcon id={s.id} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Marquee items={["با هم کار کنیم", "سلامی بکنید", "ایده‌های تازه بیاورید", "بدون اسپویل، لطفاً!"]} />

      {/* ── bottom bar ── */}
      <div className="bg-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 pb-24 pt-8 text-center md:flex-row md:flex-wrap md:px-8 md:pb-8 md:text-right">
          <div>
            <p className="font-display text-lg font-bold">{profile.locationJoke}</p>
            <p className="font-mono text-xs opacity-60">({profile.locationReal})</p>
          </div>

          <div className="flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-4 py-2 font-mono text-xs font-bold shadow-hard-xs">
            <span className="h-2 w-2 animate-blink rounded-full bg-green" />
            ساعت گرگان — <bdi>{time || "…"}</bdi>
          </div>

          <div className="flex flex-col items-center gap-1.5 font-mono text-xs opacity-70 md:items-start">
            <p>© {new Date().toLocaleDateString("fa-IR", { year: "numeric" })} {profile.name}</p>
            <p className="flex items-center gap-1.5">
              ساخته‌شده با
              <Heart aria-label="علاقه" className="h-3.5 w-3.5 shrink-0 fill-orange text-orange" />
              و کلی کنجکاوی
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
