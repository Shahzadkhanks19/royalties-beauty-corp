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
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f2e9]/95 text-[#17120e] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1540px] items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Royalties Beauty Corp home">
          <span className="grid h-14 w-20 shrink-0 place-items-center overflow-hidden rounded-xl border border-black/8 bg-white p-2 shadow-sm">
            <img src={rbLogo} alt="Royalties Beauty Corp logo" className="h-full w-full object-contain" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[11px] font-extrabold tracking-[0.19em] text-[#17120e]">ROYALTIES BEAUTY CORP</span>
            <span className="mt-0.5 hidden text-[9px] font-bold uppercase tracking-[0.23em] text-[#9a7132] sm:block">Corporation Holding Private Limited</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `text-[13px] font-semibold transition ${isActive ? "text-[#9a7132]" : "text-black/58 hover:text-black"}`}>
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="rounded-full bg-[#17120e] px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#9a7132]">
            Contact us ↗
          </Link>
        </nav>

        <button type="button" className="rounded-full border border-black/15 px-4 py-2 text-xs font-bold md:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation">
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-navigation" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-black/10 bg-[#f7f2e9] md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-5 py-4">
              {[...links, ["Contact", "/contact"]].map(([label, to]) => (
                <Link key={to} to={to} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-black/8 py-4 text-sm font-semibold text-black/70 last:border-none">
                  {label}<span className="text-[#9a7132]">↗</span>
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
