import { motion } from "motion/react";
import { Link } from "react-router-dom";

const legacyBase = "https://raw.githubusercontent.com/Shahzadkhanks19/rbcorp-react/main";

const companies = [
  {
    name: "Beyonist",
    sector: "Beauty & Lifestyle",
    href: "/companies/beyonist",
    logo: `${legacyBase}/src/Pages/About/Images/beyonist%20logo%20file.jpg`,
    artwork: `${legacyBase}/src/Pages/Home/Images/beyonist-acc.webp`,
    statement: "Modern beauty experiences built around confidence, care, and individuality.",
  },
  {
    name: "RB Service Connect",
    sector: "Professional Services",
    href: "/companies/rb-service-connect",
    logo: `${legacyBase}/src/Pages/About/Images/rb%20service%20connect%20logo%20file.jpg`,
    artwork: `${legacyBase}/src/Pages/Home/Images/home-hero-3.jpg`,
    statement: "Connecting customers with dependable services through a simpler, smarter experience.",
  },
  {
    name: "RB Finance",
    sector: "Financial Services",
    href: "/companies/rb-finance",
    logo: `${legacyBase}/src/Pages/About/Images/rb%20finance%20logo%20file.jpg`,
    artwork: `${legacyBase}/src/Pages/Home/Images/finance-acc.webp`,
    statement: "Financial solutions designed around accessibility, clarity, and long-term relationships.",
  },
  {
    name: "Royalties Charity",
    sector: "Social Impact",
    href: "/companies/royalties-charity",
    logo: `${legacyBase}/src/Pages/About/Images/charity%20logo%20file.jpg`,
    artwork: `${legacyBase}/src/Pages/Home/Images/charity-acc.webp`,
    statement: "Turning business growth into meaningful community impact and practical support.",
  },
  {
    name: "Royalties Buffet",
    sector: "Hospitality & Dining",
    href: "/companies/royalties-buffet",
    logo: `${legacyBase}/src/Pages/About/Images/buffet%20logo%20file.jpg`,
    artwork: `${legacyBase}/src/Pages/Home/Images/buffet-acc.webp`,
    statement: "A hospitality brand shaped around generous experiences, warmth, and memorable dining.",
  },
];

const heroImages = [
  `${legacyBase}/src/Pages/Home/Images/home-hero-1.jpg`,
  `${legacyBase}/src/Pages/Home/Images/home-hero-3.jpg`,
  `${legacyBase}/src/Pages/Home/Images/ceo.jpg`,
];

const stats = [
  ["05", "Operating brands"],
  ["05", "Distinct sectors"],
  ["01", "Connected vision"],
  ["∞", "Long-term ambition"],
];

const principles = [
  ["Build with purpose", "We create businesses around real needs, useful experiences, and meaningful outcomes."],
  ["Think beyond today", "Our decisions are designed for durability, responsible growth, and long-term relevance."],
  ["Stay human", "Every company in the group is built around trust, service, and genuine relationships."],
];

function HomePage() {
  return (
    <div className="overflow-hidden bg-[#f4efe6] text-[#15110d]">
      <section className="relative min-h-[92vh] overflow-hidden bg-[#17120f] text-white">
        <div className="absolute inset-0">
          <img src={heroImages[0]} alt="RB Corp business portfolio" className="h-full w-full object-cover opacity-48" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,13,10,.96)_0%,rgba(18,13,10,.80)_42%,rgba(18,13,10,.35)_72%,rgba(18,13,10,.58)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_25%,rgba(204,159,85,.22),transparent_28%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[92vh] max-w-[1480px] flex-col justify-between px-5 pb-10 pt-24 sm:px-8 lg:px-12 lg:pb-12 lg:pt-32">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-5xl">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e3c27e]">
              <span className="h-px w-10 bg-[#e3c27e]" />
              A diversified business group
            </div>
            <h1 className="max-w-5xl text-[clamp(4.2rem,9vw,9.5rem)] font-semibold leading-[0.82] tracking-[-0.072em]">
              Building the next
              <span className="block font-serif italic font-normal text-[#e7c98c]">chapter of value.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              Royalties Beauty Corp brings together businesses across beauty, services, finance, social impact, and hospitality — united by one belief: meaningful brands are built for people first.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/companies" className="group inline-flex items-center gap-3 rounded-full bg-[#e0b866] px-6 py-3.5 text-sm font-semibold text-[#17120f] transition hover:-translate-y-0.5 hover:bg-[#edca82]">
                Explore the group <span className="transition group-hover:translate-x-1">↗</span>
              </Link>
              <Link to="/about" className="rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
                Our story
              </Link>
            </div>
          </motion.div>

          <div className="mt-16 grid gap-4 border-t border-white/18 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([number, label], index) => (
              <motion.div key={label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 + index * 0.08 }} className="flex items-end gap-4">
                <strong className="text-3xl font-semibold tracking-[-0.05em] text-[#e7c98c]">{number}</strong>
                <span className="pb-1 text-xs uppercase tracking-[0.18em] text-white/48">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f4efe6]">
        <div className="mx-auto grid max-w-[1480px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:px-12 lg:py-28">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#9d7737]">The group</p>
          </div>
          <div>
            <h2 className="max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Different industries. Shared standards. One group built to grow with intention.
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <p className="text-base leading-8 text-black/62">
                RB Corp is not a collection of look-alike businesses. Each company has its own purpose, customer, identity, and ambition. What connects them is a disciplined approach to service, trust, and sustainable value creation.
              </p>
              <p className="text-base leading-8 text-black/62">
                From personal care and everyday services to finance, community initiatives, and hospitality, the portfolio is designed to meet real needs while building enduring brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#15110d] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-7 border-b border-white/12 pb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e0b866]">Our companies</p>
              <h2 className="mt-4 text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">One portfolio. Five identities.</h2>
            </div>
            <Link to="/companies" className="text-sm font-semibold text-[#e7c98c] transition hover:text-white">View portfolio ↗</Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-12">
            {companies.map((company, index) => (
              <motion.article
                key={company.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                className={`${index < 2 ? "lg:col-span-6" : "lg:col-span-4"} group relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#211a15]`}
              >
                <img src={company.artwork} alt="" className="absolute inset-0 h-full w-full object-cover opacity-48 transition duration-700 group-hover:scale-105 group-hover:opacity-60" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,10,7,.08)_0%,rgba(15,10,7,.30)_35%,rgba(15,10,7,.96)_100%)]" />
                <div className="relative flex h-full min-h-[420px] flex-col justify-between p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <div className="grid h-20 min-w-24 place-items-center overflow-hidden rounded-2xl bg-white p-3 shadow-2xl shadow-black/20">
                      <img src={company.logo} alt={`${company.name} logo`} className="max-h-14 max-w-28 object-contain" />
                    </div>
                    <span className="rounded-full border border-white/16 bg-black/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 backdrop-blur">
                      0{index + 1}
                    </span>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e0b866]">{company.sector}</p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">{company.name}</h3>
                    <p className="mt-4 max-w-md text-sm leading-7 text-white/62">{company.statement}</p>
                    <Link to={company.href} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white">
                      Discover company <span className="transition group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4efe6] py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1480px] gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_.92fr] lg:px-12">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative min-h-[580px] overflow-hidden rounded-[2.2rem]">
            <img src={heroImages[2]} alt="Leadership at Royalties Beauty Corp" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-white sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e7c98c]">Leadership</p>
              <p className="mt-3 max-w-lg text-2xl font-semibold leading-tight tracking-[-0.035em]">A group shaped by entrepreneurial thinking and a hands-on approach to building businesses.</p>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#9d7737]">How we build</p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl">Growth is only valuable when it creates something worth keeping.</h2>
            <div className="mt-10 divide-y divide-black/12 border-y border-black/12">
              {principles.map(([title, description], index) => (
                <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="grid gap-3 py-7 sm:grid-cols-[48px_1fr]">
                  <span className="text-xs font-semibold text-[#9d7737]">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em]">{title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-black/58">{description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <Link to="/about" className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#7f5e2d]">Read our story →</Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#a97f3e] px-5 py-24 text-[#17120f] sm:px-8 lg:px-12 lg:py-32">
        <div className="absolute -right-24 -top-24 size-96 rounded-full border border-black/12" />
        <div className="absolute -right-4 top-10 size-64 rounded-full border border-black/12" />
        <div className="relative mx-auto max-w-[1480px]">
          <p className="text-xs font-bold uppercase tracking-[0.28em]">What comes next</p>
          <div className="mt-7 grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <h2 className="max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
              We are building businesses for the long run.
            </h2>
            <div>
              <p className="max-w-lg text-base leading-8 text-black/68">RB Corp continues to grow by strengthening its existing companies, entering new opportunities thoughtfully, and creating value that extends beyond the balance sheet.</p>
              <Link to="/contact" className="mt-8 inline-flex rounded-full bg-[#17120f] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5">Start a conversation ↗</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
