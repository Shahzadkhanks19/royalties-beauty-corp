import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link, NavLink } from "react-router-dom";

const rbCorpLogo = "https://raw.githubusercontent.com/Shahzadkhanks19/rbcorp-react/main/src/Components/Navbar/Images/Rb%20corp%20for%20coding%20(3).png";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Businesses", "/companies"],
  ["Impact", "/impact"],
  ["Insights", "/insights"],
  ["Careers", "/careers"],
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[84px] max-w-[1680px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
        <Link to="/" className="flex items-center gap-4" aria-label="Royalties Beauty Corp home">
          <img src={rbCorpLogo} alt="RB Corp" className="h-16 w-[86px] object-contain" />
          <span className="hidden border-l border-slate-300 pl-4 sm:block">
            <span className="block text-[13px] font-bold uppercase tracking-[0.16em] text-[#071a35]">Royalties Beauty Corp</span>
            <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#b4842f]">Diversified enterprise group</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary navigation">
          {links.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `relative py-8 text-[12px] font-bold uppercase tracking-[0.08em] transition ${isActive ? "text-[#b4842f] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-[#b4842f]" : "text-slate-700 hover:text-[#071a35]"}`}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="ml-2 inline-flex items-center gap-2 rounded-md bg-[#071a35] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#0d2e5d]">
            Connect with us <span aria-hidden="true">→</span>
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-md border border-slate-300 px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#071a35] xl:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-slate-200 bg-white xl:hidden"
          >
            <div className="mx-auto flex max-w-[1680px] flex-col px-5 py-3 sm:px-8">
              {[...links, ["Contact", "/contact"]].map(([label, to]) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-slate-100 py-4 text-sm font-semibold text-slate-700 last:border-none"
                >
                  {label}<span className="text-[#b4842f]">→</span>
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
