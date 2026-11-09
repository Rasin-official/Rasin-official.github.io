import { motion } from "framer-motion";
import { ArrowUpLeft, ArrowLeft, MapPin, Sparkles, PanelsTopLeft, Mic, Clapperboard } from "lucide-react";
import { profile, marqueeItems, services } from "../data/portfolio";
import { Sticker, Sparkle, Squiggle, ScribbleArrow, Marquee, Reveal } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;
const serviceIcons = [PanelsTopLeft, Mic, Clapperboard];

function Word({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="inline-block overflow-hidden pb-1 align-bottom">
      <motion.span
        className="inline-block"
        initial={{ y: "110%", rotate: 4 }}
        animate={{ y: 0, rotate: 0 }}
        transition={{ duration: 0.7, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="about" className="relative overflow-hidden pt-32 md:pt-44">
      {/* floating background sparkles */}
      <Sparkle className="absolute left-[6%] top-40 h-8 w-8 animate-float text-orange opacity-70" />
      <Sparkle className="absolute right-[10%] top-28 h-5 w-5 animate-float text-yellow opacity-80 [animation-delay:1.2s]" />
      <Sparkle className="absolute bottom-[24%] left-[14%] h-5 w-5 animate-float text-pink opacity-70 [animation-delay:2s] md:left-[8%]" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* ── left: copy ── */}
        <div className="relative z-10 text-center lg:text-right">
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.25 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-green px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.15em] shadow-hard-sm"
          >
            <span className="h-2 w-2 animate-blink rounded-full bg-ink" />
            {profile.availability}
          </motion.div>

          <h1 className="font-display text-[10vw] font-extrabold leading-[0.98] tracking-tight sm:text-6xl md:text-6xl xl:text-[4.4rem]">
            <Word delay={0.3}>سلام،</Word> <Word delay={0.38}>من</Word>{" "}
            <span className="whitespace-nowrap">
              <Word delay={0.46}>{profile.firstName}م.</Word>
            </span>
            <br />
            <span className="relative inline-block">
              <span className="-mt-2 inline-block overflow-hidden pb-2 pt-2 align-bottom">
                <motion.span
                  className="mark inline-block"
                  initial={{ y: "110%", rotate: 4 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ duration: 0.7, delay: 0.58, ease }}
                >
                  طراح رابط کاربری
                </motion.span>
              </span>
            </span>
            <br />
            <span className="me-3 inline-block overflow-hidden pb-1 align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: "110%", rotate: 4 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.7, ease }}
              >
                و تولیدکنندهٔ{" "}
              </motion.span>
            </span>
            <span className="relative inline-block overflow-hidden pb-3 align-bottom">
              <motion.span
                className="relative inline-block"
                initial={{ y: "110%", rotate: 4 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.78, ease }}
              >
                محتوا
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1.35, ease }}
                  className="absolute -bottom-1 left-0 block w-full origin-right"
                >
                  <Squiggle className="h-4 w-full md:h-5" />
                </motion.span>
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease }}
            className="mx-auto mt-6 max-w-md text-base leading-relaxed opacity-80 md:text-lg lg:mx-0"
          >
            <span className="block font-bold">{profile.tagline}</span>
            <span className="mt-3 block">{profile.currentWork}</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.12, ease }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href={`mailto:${profile.email}`}
              className="btn-chunky group flex items-center gap-2.5 rounded-full border-2 border-ink bg-orange px-7 py-4 font-display text-base font-bold text-cream shadow-hard md:text-lg"
            >
              در تماس باشیم
              <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1.5" />
            </a>
            <a
              href={profile.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-chunky flex items-center gap-2.5 rounded-full border-2 border-ink bg-paper px-7 py-4 font-display text-base font-bold shadow-hard md:text-lg"
            >
              مشاهده نمونه کار ها
              <ArrowUpLeft className="h-5 w-5" />
            </a>
            <span className="mt-1 flex w-full items-center justify-center gap-1.5 font-mono text-xs opacity-60 lg:justify-start">
              <MapPin className="h-3.5 w-3.5 shrink-0" /> {profile.location}؛ آماده دورکاری
            </span>
          </motion.div>
        </div>

        {/* ── right: avatar collage ── */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
            animate={{ opacity: 1, scale: 1, rotate: 2.5 }}
            transition={{ type: "spring", stiffness: 160, damping: 18, delay: 0.55 }}
            className="card-pop relative overflow-hidden rounded-[2rem] border-2 border-ink bg-paper p-3 shadow-hard-lg"
            style={{ "--pop-rot": "0deg" } as React.CSSProperties}
          >
            <div className="overflow-hidden rounded-[1.4rem] border-2 border-ink bg-cream-2">
              <motion.img
                src={profile.avatar}
                alt={`تصویر تزئینی پورتفولیوی ${profile.name}`}
                className="h-auto w-full"
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, delay: 0.6, ease }}
              />
            </div>
            <div className="flex items-center justify-between px-2 py-3">
              <div>
                <p className="font-display text-lg font-bold leading-none">{profile.name}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider opacity-60">
                  {profile.role}
                </p>
              </div>
              <Sparkles className="h-6 w-6 text-orange" />
            </div>
          </motion.div>

          {/* rotating seal */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 16, delay: 1.1 }}
            className="absolute -left-8 -top-10 md:-left-12"
          >
            <Sticker color="#ffc53d" size={104}>
              <span className="font-display text-[11px] font-extrabold uppercase leading-tight tracking-wide">
                ۱۰ از ۱۰
                <br />
                انرژی خوب
              </span>
            </Sticker>
          </motion.div>

          {/* floating chip: currently */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 17, delay: 1.25 }}
            className="absolute -right-3 top-8 animate-float rounded-2xl border-2 border-ink bg-paper px-4 py-2.5 shadow-hard-sm md:-right-8"
            style={{ "--float-rot": "3deg" } as React.CSSProperties}
          >
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest opacity-50">این روز ها؟</p>
            <p className="font-display text-sm font-bold">تلاش برای بهتر شدن!</p>
          </motion.div>

          {/* floating chip: est */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 17, delay: 1.4 }}
            className="absolute -bottom-7 -left-3 animate-float rounded-full border-2 border-ink bg-green px-5 py-2.5 shadow-hard-sm md:-left-10"
            style={{ "--float-rot": "-4deg", animationDelay: "0.8s" } as React.CSSProperties}
          >
            <p className="flex items-center gap-1.5 font-display text-sm font-bold">
              <Sparkle className="h-3.5 w-3.5" /> حرفه‌ای از ۲۰۲۳
            </p>
          </motion.div>

          <ScribbleArrow className="absolute -top-14 right-2 h-14 w-20 -scale-x-100 rotate-[200deg] text-ink opacity-60 max-lg:hidden" />
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-6xl px-5 md:mt-24 md:px-8">
        <Reveal>
          <h2 className="mb-6 text-center font-display text-2xl font-bold md:text-3xl">چطور می‌توانم کمک کنم؟</h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = serviceIcons[i];
            return (
              <Reveal key={service.title} delay={i * 0.08}>
                <div className="card-pop h-full rounded-3xl border-2 border-ink bg-paper p-6 text-right shadow-hard">
                  <span className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-ink shadow-hard-xs ${service.tile}`}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-bold">{service.title}</h3>
                  <p className="mt-2 text-sm opacity-75">{service.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* marquee */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.35, ease }}
        className="mt-20 md:mt-28"
      >
        <Marquee items={marqueeItems} />
      </motion.div>
    </section>
  );
}
