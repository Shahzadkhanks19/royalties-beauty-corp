import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link, NavLink } from "react-router-dom";

const rbLogo = "https://raw.githubusercontent.com/Shahzadkhanks19/rbcorp-react/main/src/Components/Navbar/Images/Rb%20corp%20for%20coding%20(3).png";

const links = [
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
      <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-14">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Royalties Beauty Corp home">
          <span className="grid h-12 w-20 shrink-0 place-items-center overflow-hidden bg-white">
            <img src={rbLogo} alt="Royalties Beauty Corp" className="max-h-11 max-w-[72px] object-contain" />
          </span>
          <span className="hidden min-w-0 border-l border-slate-200 pl-4 sm:block">
            <span className="block truncate text-[11px] font-bold uppercase tracking-[0.18em] text-[#0a2342]">Royalties Beauty Corp</span>
            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">Diversified enterprise group</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {links.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `text-[13px] font-semibold transition ${isActive ? "text-blue-700" : "text-slate-600 hover:text-[#0a2342]"}`}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="rounded-full bg-[#071a35] px-5 py-2.5 text-[13px] font-bold text-white transition hover:bg-blue-900">
            Contact us ↗
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-full border border-slate-300 px-4 py-2 text-xs font-bold text-[#0a2342] lg:hidden"
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
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <div className="mx-auto flex max-w-[1600px] flex-col px-5 py-3 sm:px-8">
              {[...links, ["Contact", "/contact"]].map(([label, to]) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-slate-100 py-4 text-sm font-semibold text-slate-700 last:border-none"
                >
                  {label}<span className="text-blue-700">↗</span>
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
