import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link, NavLink } from "react-router-dom";

const rbLogo = "https://raw.githubusercontent.com/Shahzadkhanks19/rbcorp-react/main/src/Components/Navbar/Images/Rb%20corp%20for%20coding%20(3).png";

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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#15110d]/92 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1480px] items-center justify-between px-5 py-3.5 sm:px-8 lg:px-12">
        <Link to="/" className="flex items-center gap-3" aria-label="Royalties Beauty Corp home">
          <span className="grid h-12 w-14 place-items-center overflow-hidden rounded-xl bg-white p-1.5 shadow-lg shadow-black/20">
            <img src={rbLogo} alt="Royalties Beauty Corp" className="h-full w-full object-contain" />
          </span>
          <span className="hidden sm:block">
            <span className="block text-[11px] font-bold tracking-[0.2em] text-white">ROYALTIES BEAUTY CORP</span>
            <span className="mt-0.5 block text-[9px] uppercase tracking-[0.26em] text-[#d9b973]">Building enduring businesses</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `text-[13px] font-medium transition ${isActive ? "text-[#e0b866]" : "text-white/66 hover:text-white"}`}>
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="rounded-full bg-[#e0b866] px-5 py-2.5 text-[13px] font-semibold text-[#17120f] transition hover:bg-[#edca82]">
            Contact us ↗
          </Link>
        </nav>

        <button type="button" className="rounded-full border border-white/18 px-4 py-2 text-xs font-semibold md:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation">
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-navigation" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/10 bg-[#15110d] md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-5 py-4">
              {[...links, ["Contact", "/contact"]].map(([label, to]) => (
                <Link key={to} to={to} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-white/8 py-4 text-sm text-white/78 last:border-none">
                  {label}<span className="text-[#d9b973]">↗</span>
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
