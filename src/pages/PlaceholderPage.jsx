import { motion } from "motion/react";

function PlaceholderPage({ title }) {
  return (
    <section className="mx-auto flex min-h-[65vh] max-w-7xl items-center px-5 py-24 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c9a86a]">Royalties Beauty Corp</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/55">This route is now part of the new RB Corp architecture and will be designed in the next implementation pass.</p>
      </motion.div>
    </section>
  );
}

export default PlaceholderPage;
