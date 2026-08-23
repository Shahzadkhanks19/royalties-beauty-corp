import { motion } from "motion/react";

function PlaceholderPage({ title }) {
  return (
    <section className="bg-[#f7f4f0]">
      <div className="mx-auto flex min-h-[65vh] max-w-7xl items-center px-5 py-24 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b9252d]">Royalties Beauty Corp</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl tracking-[-0.04em] text-[#151517] md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#6f696b]">This route is part of the new RB Corp architecture and will be designed in the next implementation pass.</p>
          <div className="mt-8 h-1 w-20 bg-[#ff4d50]" />
        </motion.div>
      </div>
    </section>
  );
}

export default PlaceholderPage;
