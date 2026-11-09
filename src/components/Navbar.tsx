import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpLeft } from "lucide-react";
import { profile } from "../data/portfolio";

const links = [
  { label: "دربارهٔ من", href: "#about" },
  { label: "ابزارها", href: "#tools" },
  { label: "تجربه‌ها", href: "#experience" },
  { label: "ارتباط", href: "#social" },
  { label: "علایق", href: "#hobbies" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 md:top-6">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 22, delay: 0.1 }}
        className={`mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border-2 border-ink bg-paper py-2 ps-2 pe-3 transition-shadow duration-300 ${
          scrolled ? "shadow-hard" : "shadow-hard-sm"
        }`}
      >
        {/* logo */}
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-orange font-display text-sm font-extrabold text-cream shadow-hard-xs transition-transform duration-300 group-hover:rotate-12">
            {profile.initials}
          </span>
          <span className="hidden font-display text-base font-bold tracking-tight sm:block">
            {profile.firstName} <span className="opacity-40">/ {profile.role.split(" ")[0]}</span>
          </span>
        </a>

        {/* desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-1.5 font-mono text-[13px] font-bold uppercase tracking-wide transition-colors duration-200 hover:bg-yellow"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="btn-chunky hidden items-center gap-1.5 rounded-full border-2 border-ink bg-ink px-5 py-2.5 font-display text-sm font-bold text-cream shadow-hard-sm sm:flex"
          >
            همکاری کنیم
            <ArrowUpLeft className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "بستن فهرست" : "باز کردن فهرست"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="btn-chunky flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-yellow shadow-hard-xs lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            id="mobile-navigation"
            className="mx-auto mt-3 max-w-5xl rounded-3xl border-2 border-ink bg-paper p-3 shadow-hard lg:hidden"
          >
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-lg font-bold transition-colors hover:bg-yellow ${
                  i !== links.length - 1 ? "mb-1" : ""
                }`}
              >
                {l.label}
                <span className="font-mono text-xs opacity-40">{(i + 1).toLocaleString("fa-IR", { minimumIntegerDigits: 2 })}</span>
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="btn-chunky mt-2 flex items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-ink px-4 py-3.5 font-display text-lg font-bold text-cream shadow-hard-sm"
            >
              همکاری کنیم <ArrowUpLeft className="h-5 w-5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
