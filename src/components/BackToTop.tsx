import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#top"
          aria-label="بازگشت به ابتدای صفحه"
          initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.5, rotate: 30 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="btn-chunky fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-ink bg-yellow shadow-hard"
        >
          <ArrowUp className="h-6 w-6" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
