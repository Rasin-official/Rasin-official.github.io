import { motion } from "framer-motion";
import type { ReactNode } from "react";

/* ── Scroll reveal wrapper ─────────────────────────────────── */

export function Reveal({
  children,
  delay = 0,
  y = 36,
  rot = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  rot?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, rotate: rot }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 260, damping: 24, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ── Scalloped "sticker" badge (rotating seal) ─────────────── */

function scallopPath(bumps: number, r: number, amp: number, cx = 50, cy = 50) {
  const stepsPerBump = 8;
  const total = bumps * stepsPerBump;
  let d = "";
  for (let i = 0; i <= total; i++) {
    const a = (i / total) * Math.PI * 2;
    const rad = r + amp * Math.cos(bumps * a);
    const x = cx + rad * Math.cos(a);
    const y = cy + rad * Math.sin(a);
    d += (i === 0 ? "M" : "L") + x.toFixed(2) + " " + y.toFixed(2);
  }
  return d + "Z";
}

export function Sticker({
  color,
  children,
  size = 128,
  spin = true,
  className,
}: {
  color: string;
  children?: ReactNode;
  size?: number;
  spin?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className ?? ""}`}
      style={{ width: size, height: size }}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className={`absolute inset-0 h-full w-full drop-shadow-[3px_3px_0_rgba(26,21,18,1)] ${spin ? "animate-spin-slow" : ""}`}
      >
        <path d={scallopPath(14, 42, 5)} fill={color} stroke="#1a1512" strokeWidth="2.4" />
      </svg>
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        {children}
      </div>
    </div>
  );
}

/* ── Section heading pattern: badge pills + big title ──────── */

export function SectionHead({
  kicker,
  kickerColor,
  title,
  sub,
  align = "center",
}: {
  kicker: string;
  kickerColor: string;
  title: ReactNode;
  sub?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`mb-12 flex flex-col gap-5 md:mb-16 ${align === "center" ? "items-center text-center" : "items-start"}`}>
      <Reveal>
        <span
          className="inline-block -rotate-2 rounded-full border-2 border-ink px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.18em] shadow-hard-sm"
          style={{ backgroundColor: kickerColor }}
        >
          {kicker}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.04] tracking-tight md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.16}>
          <p className="max-w-xl text-base leading-relaxed opacity-75 md:text-lg">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ── Doodles ───────────────────────────────────────────────── */

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 1.5 14.6 9.4 22.5 12 14.6 14.6 12 22.5 9.4 14.6 1.5 12 9.4 9.4Z" />
    </svg>
  );
}

export function Squiggle({ className, color = "#ff5a2d" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 220 22" fill="none" className={className} aria-hidden>
      <path
        d="M4 14 C 40 4, 78 20, 114 10 S 188 5, 216 12"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ScribbleArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 60" fill="none" className={className} aria-hidden>
      <path
        d="M6 6 C 40 4, 74 14, 70 34 M70 34 l-12 -6 M70 34 l4 -13"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Marquee ───────────────────────────────────────────────── */

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div dir="ltr" className="relative -right-[2vw] w-[104vw] -rotate-[1.2deg] overflow-hidden border-y-2 border-ink bg-ink py-3.5 md:py-4">
      <div className="marquee-track flex w-max animate-marquee items-center gap-8 pr-8">
        {[...row, ...row].map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap font-display text-lg font-bold uppercase tracking-wide text-cream md:text-xl">
            {item}
            <Sparkle className={`h-4 w-4 ${i % 3 === 0 ? "text-yellow" : i % 3 === 1 ? "text-orange" : "text-pink"}`} />
          </span>
        ))}
      </div>
    </div>
  );
}
