import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="relative isolate grid min-h-[72vh] place-items-center overflow-hidden bg-[#0b0b0c] px-5 py-20 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_20%,rgba(255,77,80,.18),transparent_27%),radial-gradient(circle_at_24%_80%,rgba(201,168,106,.12),transparent_30%)]" />
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="mx-auto max-w-4xl text-center">
        <p className="text-[10px] font-bold uppercase tracking-[.26em] text-[#ff6b6e]">404 · Page not found</p>
        <h1 className="mt-6 font-serif text-[clamp(4rem,10vw,8rem)] leading-[.9] tracking-[-.06em]">This route doesn’t belong to the <span className="text-[#ff5b5e]">portfolio.</span></h1>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/55">The page may have moved, the link may be outdated, or the address may have been entered incorrectly.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link to="/" className="group inline-flex items-center gap-3 bg-[#ff4d50] px-6 py-4 text-sm font-bold uppercase tracking-[.08em] transition hover:-translate-y-0.5 hover:bg-[#e83c40]">Back to home <span className="transition-transform group-hover:translate-x-1">→</span></Link>
          <Link to="/companies" className="border border-white/15 bg-white/[.04] px-6 py-4 text-sm font-bold uppercase tracking-[.08em] transition hover:-translate-y-0.5 hover:bg-white/[.08]">Explore businesses</Link>
        </div>
      </motion.div>
    </main>
  );
}
