import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.92 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="group fixed bottom-5 right-5 z-40 grid size-12 place-items-center rounded-full border border-white/15 bg-[#151517] text-white shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-[#ff4d50]/60 hover:bg-[#b9252d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4d50] focus-visible:ring-offset-2 sm:bottom-7 sm:right-7"
        >
          <span aria-hidden="true" className="text-xl leading-none transition-transform duration-300 group-hover:-translate-y-0.5">↑</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTopButton;
