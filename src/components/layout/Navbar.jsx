import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link, NavLink } from "react-router-dom";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Businesses", "/companies"],
  ["Impact", "/impact"],
  ["Insights", "/insights"],
];

const rbCorpLogo = "https://raw.githubusercontent.com/Shahzadkhanks19/rbcorp-react/main/public/android-chrome-512x512.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f4f0]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[84px] max-w-[1680px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
        <Link to="/" className="group flex items-center gap-4" aria-label="Royalties Beauty Corp home">
          <img src={rbCorpLogo} alt="RB Corp" className="h-16 w-[86px] object-contain transition duration-300 group-hover:scale-[1.04]" />
          <span className="hidden border-l border-black/15 pl-4 sm:block">
            <span className="block text-[13px] font-bold uppercase tracking-[0.16em] text-[#151517] transition group-hover:text-[#b9252d]">Royalties Beauty Corp</span>
            <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#b9252d]">Diversified enterprise group</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 xl:flex" aria-label="Primary navigation">
          {links.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `group relative rounded-sm px-4 py-8 text-[12px] font-bold uppercase tracking-[0.08em] transition duration-300 ${
                  isActive
                    ? "text-[#b9252d] after:absolute after:inset-x-4 after:bottom-0 after:h-0.5 after:bg-[#ff4d50]"
                    : "text-[#4e4e50] hover:bg-black/[0.035] hover:text-[#b9252d] after:absolute after:inset-x-4 after:bottom-0 after:h-0.5 after:origin-center after:scale-x-0 after:bg-[#ff4d50] after:transition-transform after:duration-300 hover:after:scale-x-100"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="ml-3 inline-flex items-center gap-3 rounded-md bg-[#151517] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#b9252d] hover:shadow-lg hover:shadow-[#b9252d]/15">
            Connect with us <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </nav>

        <button type="button" className="rounded-md border border-black/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#151517] transition hover:border-[#ff4d50] hover:text-[#b9252d] xl:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation">
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav id="mobile-navigation" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden border-t border-black/10 bg-[#f7f4f0] xl:hidden">
            <div className="mx-auto flex max-w-[1680px] flex-col px-5 py-3 sm:px-8">
              {[...links, ["Contact", "/contact"]].map(([label, to]) => (
                <NavLink key={to} to={to} end={to === "/"} onClick={() => setOpen(false)} className={({ isActive }) => `flex items-center justify-between border-b border-black/8 py-4 text-sm font-semibold transition last:border-none ${isActive ? "text-[#b9252d]" : "text-[#4e4e50] hover:pl-1 hover:text-[#b9252d]"}`}>
                  {label}<span className="text-[#ff4d50]">→</span>
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
