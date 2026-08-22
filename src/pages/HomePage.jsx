import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router-dom";

const legacyBase = "https://raw.githubusercontent.com/Shahzadkhanks19/rbcorp-react/main";

const companies = [
  {
    name: "Beyonist",
    short: "BEAUTY",
    sector: "Beauty & Skincare",
    href: "/companies/beyonist",
    external: "https://beyonist.com/",
    logo: `${legacyBase}/src/Pages/About/Images/beyonist%20logo%20file.jpg`,
    artwork: `${legacyBase}/src/Pages/Home/Images/beyonist-acc.webp`,
    hero: `${legacyBase}/src/Pages/Home/Images/home-hero-1.jpg`,
    statement: "Premium skincare and beauty experiences created around confidence, care and holistic wellbeing.",
  },
  {
    name: "RB Finance",
    short: "FINANCE",
    sector: "Financial Services",
    href: "/companies/rb-finance",
    external: "https://rbfinanceapp.com/",
    logo: `${legacyBase}/src/Pages/About/Images/rb%20finance%20logo%20file.jpg`,
    artwork: `${legacyBase}/src/Pages/Home/Images/finance-acc.webp`,
    hero: `${legacyBase}/src/Pages/Home/Images/home-hero-2.jpg`,
    statement: "Transparent, tailored financial solutions designed to help people build confidence and long-term value.",
  },
  {
    name: "Royalties Charity",
    short: "IMPACT",
    sector: "Social Impact",
    href: "/companies/royalties-charity",
    external: "https://rbcharityfoundation.org/charity.html",
    logo: `${legacyBase}/src/Pages/About/Images/charity%20logo%20file.jpg`,
    artwork: `${legacyBase}/src/Pages/Home/Images/charity-acc.webp`,
    hero: `${legacyBase}/src/Pages/Home/Images/home-hero-3.jpg`,
    statement: "Community-led initiatives focused on food support, essential assistance and practical care for people in need.",
  },
  {
    name: "Royalties Buffet",
    short: "HOSPITALITY",
    sector: "Hospitality & Dining",
    href: "/companies/royalties-buffet",
    external: "https://royalties-buffet-client.vercel.app/",
    logo: `${legacyBase}/src/Pages/About/Images/buffet%20logo%20file.jpg`,
    artwork: `${legacyBase}/src/Pages/Home/Images/buffet-acc.webp`,
    hero: `${legacyBase}/src/Pages/Home/Images/home-hero-4.jpg`,
    statement: "A generous buffet experience bringing variety, flavour and memorable hospitality together under one roof.",
  },
  {
    name: "RB Service Connect",
    short: "SERVICES",
    sector: "Professional Services",
    href: "/companies/rb-service-connect",
    external: null,
    logo: `${legacyBase}/src/Pages/About/Images/rb%20service%20connect%20logo%20file.jpg`,
    artwork: `${legacyBase}/src/Pages/Home/Images/home-hero-5.jpg`,
    hero: `${legacyBase}/src/Pages/Home/Images/home-hero-5.jpg`,
    statement: "A smarter way to connect people and businesses with dependable, useful and accessible services.",
  },
];

const rbLogo = `${legacyBase}/src/Components/Navbar/Images/Rb%20corp%20for%20coding%20(3).png`;
const ceoImage = `${legacyBase}/src/Pages/Home/Images/ceo.jpg`;
const weCare = `${legacyBase}/src/Pages/Home/Images/we-care.png`;

function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [activeCompany, setActiveCompany] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroIndex((index) => (index + 1) % companies.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const heroCompany = companies[heroIndex];

  return (
    <main className="overflow-hidden bg-[#f6f1e8] text-[#17120e]">
      <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-[#100d0b] text-white">
        <AnimatePresence mode="wait">
          <motion.img
            key={heroCompany.hero}
            src={heroCompany.hero}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.58, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,9,7,.98)_0%,rgba(12,9,7,.88)_34%,rgba(12,9,7,.48)_66%,rgba(12,9,7,.70)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(216,174,88,.24),transparent_26%)]" />

        <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-[1540px] items-end gap-12 px-5 pb-10 pt-16 sm:px-8 lg:grid-cols-[1.18fr_.82fr] lg:px-12 lg:pb-14 lg:pt-24">
          <div className="self-center">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/14 bg-white/[0.06] px-4 py-2 backdrop-blur-xl">
              <span className="size-2 rounded-full bg-[#e2b85f] shadow-[0_0_18px_rgba(226,184,95,.85)]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/70">Royalties Beauty Corp · India</span>
            </motion.div>

            <h1 className="max-w-[1000px] text-[clamp(4rem,8.7vw,9.2rem)] font-semibold leading-[0.83] tracking-[-0.075em]">
              We build
              <span className="block text-[#e6c475]">businesses people</span>
              <span className="block font-serif italic font-normal text-white/88">choose to trust.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/64 sm:text-lg">
              A diversified Indian group growing brands across beauty, finance, professional services, hospitality and social impact — each with its own identity, united by a customer-first mindset.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/companies" className="group inline-flex items-center gap-3 rounded-full bg-[#e2b85f] px-6 py-3.5 text-sm font-bold text-[#17120e] transition hover:-translate-y-0.5 hover:bg-[#f0cd80]">
                Explore our companies <span className="transition group-hover:translate-x-1">↗</span>
              </Link>
              <Link to="/about" className="rounded-full border border-white/22 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/10">
                Discover RB Corp
              </Link>
            </div>
          </div>

          <div className="self-end">
            <div className="mb-4 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.24em] text-white/45">
              <span>Inside the group</span>
              <span>0{heroIndex + 1} / 05</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/14 bg-black/35 backdrop-blur-xl">
              <div className="flex items-center gap-4 border-b border-white/10 p-5 sm:p-6">
                <div className="grid h-16 w-24 shrink-0 place-items-center overflow-hidden rounded-xl bg-white p-2.5">
                  <img src={heroCompany.logo} alt={`${heroCompany.name} logo`} className="max-h-12 max-w-20 object-contain" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#e2b85f]">{heroCompany.sector}</p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-[-0.04em]">{heroCompany.name}</h2>
                </div>
              </div>
              <p className="p-5 text-sm leading-7 text-white/60 sm:p-6">{heroCompany.statement}</p>
            </div>

            <div className="mt-4 grid grid-cols-5 gap-2">
              {companies.map((company, index) => (
                <button
                  type="button"
                  key={company.name}
                  onClick={() => setHeroIndex(index)}
                  aria-label={`Show ${company.name}`}
                  className={`h-1.5 rounded-full transition ${heroIndex === index ? "bg-[#e2b85f]" : "bg-white/18 hover:bg-white/35"}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 hidden h-[1px] w-full bg-gradient-to-r from-transparent via-[#e2b85f]/35 to-transparent lg:block" />
      </section>

      <section className="border-b border-black/8 bg-[#f6f1e8]">
        <div className="mx-auto grid max-w-[1540px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:px-12 lg:py-28">
          <div className="flex items-start justify-between lg:block">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#956c2d]">Who we are</p>
              <p className="mt-4 max-w-xs text-sm leading-7 text-black/45">One holding group. Multiple customer worlds. A shared standard for how business should feel.</p>
            </div>
            <div className="hidden lg:mt-14 lg:block">
              <img src={weCare} alt="We care" className="max-w-48 object-contain opacity-75" />
            </div>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(2.8rem,5.7vw,6.2rem)] font-semibold leading-[0.95] tracking-[-0.065em]">
              Not one industry. Not one audience. <span className="font-serif italic font-normal text-[#a37834]">One philosophy.</span>
            </h2>
            <div className="mt-10 grid gap-8 border-t border-black/10 pt-8 md:grid-cols-2">
              <p className="text-base leading-8 text-black/58">
                RB Corp grows companies around real human needs — looking better, living more securely, finding trusted services, sharing a meal, and supporting communities that need help.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <strong className="block text-4xl font-semibold tracking-[-0.06em]">05</strong>
                  <span className="mt-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-black/42">Companies</span>
                </div>
                <div>
                  <strong className="block text-4xl font-semibold tracking-[-0.06em]">05</strong>
                  <span className="mt-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-black/42">Sectors</span>
                </div>
                <div>
                  <strong className="block text-4xl font-semibold tracking-[-0.06em]">01</strong>
                  <span className="mt-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-black/42">Vision</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#120f0c] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#d9ad52]">The portfolio</p>
              <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] sm:text-7xl">Five companies. Five different worlds.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/48">Move across the portfolio to explore how each business contributes to the wider RB Corp story.</p>
          </div>

          <div className="flex min-h-[680px] flex-col gap-2 lg:h-[690px] lg:flex-row">
            {companies.map((company, index) => {
              const isActive = activeCompany === index;
              return (
                <motion.article
                  key={company.name}
                  layout
                  onMouseEnter={() => setActiveCompany(index)}
                  onFocusCapture={() => setActiveCompany(index)}
                  className={`group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#1a1511] transition-[flex] duration-700 ${isActive ? "lg:flex-[3.6]" : "lg:flex-[1]"}`}
                >
                  <img src={company.artwork} alt="" className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${isActive ? "scale-100 opacity-62" : "scale-105 opacity-32"}`} />
                  <div className={`absolute inset-0 transition duration-500 ${isActive ? "bg-[linear-gradient(180deg,rgba(8,6,5,.12),rgba(8,6,5,.18)_28%,rgba(8,6,5,.94)_100%)]" : "bg-black/50"}`} />

                  <div className="relative flex h-full min-h-[430px] flex-col justify-between p-5 sm:p-6 lg:min-h-0">
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">0{index + 1}</span>
                      <div className={`grid overflow-hidden rounded-xl bg-white p-2.5 shadow-2xl transition-all duration-500 ${isActive ? "h-16 w-24 opacity-100" : "h-11 w-14 opacity-80"}`}>
                        <img src={company.logo} alt={`${company.name} logo`} className="h-full w-full object-contain" />
                      </div>
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#e0b760]">{company.sector}</p>
                      <h3 className={`mt-3 font-semibold tracking-[-0.055em] transition-all duration-500 ${isActive ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl lg:-rotate-90 lg:origin-bottom-left lg:translate-x-8 lg:-translate-y-6"}`}>{company.name}</h3>
                      <AnimatePresence>
                        {isActive && (
                          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-5 max-w-xl">
                            <p className="text-sm leading-7 text-white/64 sm:text-base">{company.statement}</p>
                            <div className="mt-6 flex flex-wrap gap-4">
                              <Link to={company.href} className="text-sm font-bold text-white">View company →</Link>
                              {company.external && <a href={company.external} target="_blank" rel="noreferrer" className="text-sm font-semibold text-[#e6c475]">Visit website ↗</a>}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#e6d6b7]">
        <div className="mx-auto grid max-w-[1540px] lg:grid-cols-2">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative min-h-[560px] overflow-hidden lg:min-h-[720px]">
            <img src={ceoImage} alt="RB Corp leadership" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10 lg:p-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#ecd08f]">Leadership</p>
              <p className="mt-4 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.035em] sm:text-3xl">Entrepreneurial thinking, close customer understanding and the patience to build for the long term.</p>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-14 lg:py-24 xl:px-20">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#805d26]">How we think</p>
            <h2 className="mt-5 text-5xl font-semibold leading-[0.97] tracking-[-0.06em] sm:text-6xl">Growth means more when people can feel the difference.</h2>

            <div className="mt-10 divide-y divide-black/12 border-y border-black/12">
              {[
                ["01", "Customer first", "Every business begins with a clear understanding of the person it exists to serve."],
                ["02", "Independent identity", "Each company is free to be distinctive rather than forced into one corporate mould."],
                ["03", "Responsible scale", "We value repeatable quality, strong relationships and sustainable long-term growth."],
              ].map(([number, title, text]) => (
                <div key={number} className="grid gap-3 py-7 sm:grid-cols-[54px_1fr]">
                  <span className="text-xs font-bold text-[#805d26]">{number}</span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em]">{title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-black/58">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/about" className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#72501f]">Read the RB Corp story →</Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#c99a46] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <img src={rbLogo} alt="" className="pointer-events-none absolute -right-20 top-1/2 w-[520px] -translate-y-1/2 opacity-[0.07] mix-blend-multiply" />
        <div className="relative mx-auto max-w-[1540px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-black/55">Built for what comes next</p>
          <div className="mt-7 grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <h2 className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.07em] sm:text-7xl lg:text-8xl">One group. More possibilities ahead.</h2>
            <div>
              <p className="max-w-md text-base leading-8 text-black/62">We continue to strengthen our existing businesses while staying open to new ideas, partnerships and opportunities that fit the RB Corp way of building.</p>
              <Link to="/contact" className="mt-8 inline-flex rounded-full bg-[#17120e] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5">Start a conversation ↗</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
