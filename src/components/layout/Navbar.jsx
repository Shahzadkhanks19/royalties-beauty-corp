import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link, NavLink } from "react-router-dom";

const links = [
  ["About", "/about"],
  ["Companies", "/companies"],
  ["Impact", "/impact"],
  ["Insights", "/insights"],
  ["Careers", "/careers"],
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#0b0d10]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Royalties Beauty Corp home">
          <span className="grid size-10 place-items-center rounded-full border border-[#c9a86a]/50 text-sm font-bold text-[#c9a86a]">RB</span>
          <span className="text-sm font-semibold tracking-[0.22em] text-white">ROYALTIES BEAUTY CORP</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `text-sm transition ${isActive ? "text-[#c9a86a]" : "text-white/70 hover:text-white"}`}>
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="rounded-full border border-[#c9a86a]/45 px-5 py-2.5 text-sm font-medium text-[#e7cf9f] transition hover:bg-[#c9a86a] hover:text-black">
            Contact
          </Link>
        </nav>

        <button type="button" className="rounded-full border border-white/15 px-4 py-2 text-sm md:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation">
          Menu
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-navigation" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/8 bg-[#0b0d10] md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-5 py-5">
              {[...links, ["Contact", "/contact"]].map(([label, to]) => (
                <Link key={to} to={to} onClick={() => setOpen(false)} className="border-b border-white/8 py-4 text-white/80 last:border-none">
                  {label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
