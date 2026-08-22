import { motion } from "motion/react";
import { Link } from "react-router-dom";

const companies = [
  { name: "Beyonist", sector: "Beauty & Lifestyle", href: "/companies/beyonist" },
  { name: "RB Service Connect", sector: "Professional Services", href: "/companies/rb-service-connect" },
  { name: "RB Finance", sector: "Financial Services", href: "/companies/rb-finance" },
  { name: "Royalties Charity", sector: "Social Impact", href: "/companies/royalties-charity" },
  { name: "Royalties Buffet", sector: "Hospitality & Dining", href: "/companies/royalties-buffet" },
];

function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(201,168,106,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
        <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.15fr_.85fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a86a]">One group. Multiple industries.</p>
            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-8xl">
              Building brands with purpose, scale, and staying power.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/58 md:text-lg">
              Royalties Beauty Corp is a diversified business group creating and growing ventures across beauty, services, finance, hospitality, and community impact.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/companies" className="rounded-full bg-[#c9a86a] px-6 py-3 text-sm font-semibold text-[#0b0d10] transition hover:scale-[1.02]">Explore our companies</Link>
              <Link to="/about" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/35">About RB Corp</Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.12 }} className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-full border border-[#c9a86a]/20" />
            <div className="absolute inset-[12%] rounded-full border border-white/10" />
            <div className="absolute inset-[27%] grid place-items-center rounded-full border border-[#c9a86a]/40 bg-[#11151a]/90 shadow-2xl shadow-black/40">
              <div className="text-center">
                <div className="text-5xl font-semibold tracking-[-0.06em] text-[#c9a86a]">RB</div>
                <div className="mt-2 text-[10px] font-semibold tracking-[0.28em] text-white/50">CORP</div>
              </div>
            </div>
            {companies.map((company, index) => {
              const angle = (index / companies.length) * Math.PI * 2 - Math.PI / 2;
              const x = 50 + Math.cos(angle) * 43;
              const y = 50 + Math.sin(angle) * 43;
              return (
                <div key={company.name} className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[#11151a] px-3 py-2 text-center text-[10px] font-medium text-white/72 shadow-xl" style={{ left: `${x}%`, top: `${y}%` }}>
                  {company.name}
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c9a86a]">Our portfolio</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">Five businesses. One long-term vision.</h2>
          </div>
          <Link to="/companies" className="text-sm font-semibold text-[#e7cf9f]">View all companies →</Link>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/8 md:grid-cols-2 lg:grid-cols-5">
          {companies.map((company, index) => (
            <motion.div key={company.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.06 }}>
              <Link to={company.href} className="group flex min-h-64 flex-col justify-between bg-[#101318] p-6 transition hover:bg-[#151a20]">
                <span className="text-xs font-medium text-white/35">0{index + 1}</span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#c9a86a]/80">{company.sector}</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-white">{company.name}</h3>
                  <p className="mt-6 text-sm text-white/45 transition group-hover:text-white/70">Discover company →</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;
