import { useEffect, useState } from "react";

function Preloader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = setTimeout(() => setLeaving(true), 450);
    const removeTimer = setTimeout(() => setVisible(false), 760);
    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] grid place-items-center bg-[#0b0b0c] px-5 text-white transition duration-300 ${leaving ? "pointer-events-none opacity-0" : "opacity-100"}`}
      role="status"
      aria-live="polite"
      aria-label="Loading RB Corp"
    >
      <div className="text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center border border-white/12 bg-white/[.04]">
          <span className="font-serif text-3xl tracking-[-.08em] text-[#ff5b5e]">RB</span>
        </div>
        <div className="mx-auto mt-6 h-px w-40 overflow-hidden bg-white/10">
          <div className="h-full w-full origin-left animate-pulse bg-[#ff4d50]" />
        </div>
        <p className="mt-4 text-[10px] font-bold uppercase tracking-[.26em] text-white/45">RB Corporation</p>
      </div>
    </div>
  );
}

export default Preloader;
