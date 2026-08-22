import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const legacyBase = "https://raw.githubusercontent.com/Shahzadkhanks19/rbcorp-react/main";

const companies = [
  {
    name: "Beyonist",
    sector: "Beauty & Skincare",
    href: "/companies/beyonist",
    logo: `${legacyBase}/src/Pages/About/Images/beyonist%20logo%20file.jpg`,
    artwork: `${legacyBase}/src/Pages/Home/Images/beyonist-acc.webp`,
    statement: "Premium skincare and beauty experiences shaped around confidence, care and holistic wellbeing.",
  },
  {
    name: "RB Finance",
    sector: "Financial Services",
    href: "/companies/rb-finance",
    logo: `${legacyBase}/src/Pages/About/Images/rb%20finance%20logo%20file.jpg`,
    artwork: `${legacyBase}/src/Pages/Home/Images/finance-acc.webp`,
    statement: "Transparent financial solutions designed to support confidence, resilience and long-term value.",
  },
  {
    name: "Royalties Charity",
    sector: "Social Impact",
    href: "/companies/royalties-charity",
    logo: `${legacyBase}/src/Pages/About/Images/charity%20logo%20file.jpg`,
    artwork: `${legacyBase}/src/Pages/Home/Images/charity-acc.webp`,
    statement: "Community-led initiatives focused on food support, essential assistance and practical care.",
  },
  {
    name: "Royalties Buffet",
    sector: "Hospitality & Dining",
    href: "/companies/royalties-buffet",
    logo: `${legacyBase}/src/Pages/About/Images/buffet%20logo%20file.jpg`,
    artwork: `${legacyBase}/src/Pages/Home/Images/buffet-acc.webp`,
    statement: "A hospitality brand centred on generous dining, variety, warmth and memorable guest experiences.",
  },
  {
    name: "RB Service Connect",
    sector: "Professional Services",
    href: "/companies/rb-service-connect",
    logo: `${legacyBase}/src/Pages/About/Images/rb%20service%20connect%20logo%20file.jpg`,
    artwork: `${legacyBase}/src/Pages/Home/Images/home-hero-5.jpg`,
    statement: "A dependable service platform connecting people and businesses with simpler access to trusted support.",
  },
];

const heroSlides = [
  `${legacyBase}/src/Pages/Home/Images/home-hero-1.jpg`,
  `${legacyBase}/src/Pages/Home/Images/home-hero-3.jpg`,
  `${legacyBase}/src/Pages/Home/Images/home-hero-4.jpg`,
];

const ceoImage = `${legacyBase}/src/Pages/Home/Images/ceo.jpg`;
const weCare = `${legacyBase}/src/Pages/Home/Images/we-care.png`;

const focusAreas = [
  ["01", "Consumer", "Brands built around everyday aspirations and trusted experiences."],
  ["02", "Services", "Useful platforms that simplify access, connection and support."],
  ["03", "Financial", "Solutions focused on clarity, accessibility and durable value."],
  ["04", "Hospitality", "Experiences designed around warmth, variety and service."],
  ["05", "Impact", "Growth that also strengthens communities and improves lives."],
];

function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [activeCompany, setActiveCompany] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroSlides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="relative isolate min-h-[calc(100vh-76px)] overflow-hidden bg-[#071a35] text-white">
        {heroSlides.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${heroIndex === index ? "opacity-50" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,18,39,.98)_0%,rgba(3,18,39,.90)_38%,rgba(3,18,39,.58)_70%,rgba(3,18,39,.78)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(58,135,221,.28),transparent_30%)]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-76px)] max-w-[1600px] flex-col justify-between px-5 py-12 sm:px-8 lg:px-14 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-6xl pt-8 lg:pt-14"
          >
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-blue-200/85">
              <span className="h-px w-10 bg-blue-300/70" />
              Royalties Beauty Corp · India
            </p>
            <h1 className="mt-7 max-w-6xl text-[clamp(4rem,8vw,8.8rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
              Building businesses
              <span className="block text-blue-200">that move with India.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/68 sm:text-lg lg:text-xl">
              A diversified group creating and growing businesses across beauty, services, finance, hospitality and social impact — with a long-term commitment to trust, quality and responsible growth.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/companies" className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#071a35] transition hover:-translate-y-0.5 hover:bg-blue-50">
                Explore our businesses <span>↗</span>
              </Link>
              <Link to="/about" className="rounded-full border border-white/25 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/12">
                Discover RB Corp
              </Link>
            </div>
          </motion.div>

          <div className="mt-16 grid gap-6 border-t border-white/18 pt-7 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["05", "Businesses"],
              ["05", "Sectors"],
              ["01", "Group vision"],
              ["India", "Built for growth"],
            ].map(([value, label]) => (
              <div key={label} className="flex items-end gap-4">
                <strong className="text-3xl font-semibold tracking-[-0.055em] text-white sm:text-4xl">{value}</strong>
                <span className="pb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/48">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-14 lg:py-28">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-blue-700">The group</p>
            <img src={weCare} alt="We care" className="mt-10 max-w-48 object-contain opacity-80" />
          </div>
          <div>
            <h2 className="max-w-5xl text-[clamp(3rem,5.8vw,6.3rem)] font-semibold leading-[0.96] tracking-[-0.065em] text-[#0a2342]">
              Different businesses. One standard of trust.
            </h2>
            <div className="mt-10 grid gap-8 border-t border-slate-200 pt-8 md:grid-cols-2">
              <p className="text-base leading-8 text-slate-600">
                RB Corp is built as a long-term enterprise platform. Each company operates with its own identity and customer focus while sharing a common commitment to quality, reliability and responsible growth.
              </p>
              <p className="text-base leading-8 text-slate-600">
                Our ambition is not simply to participate in multiple industries, but to build enduring businesses that remain relevant as India’s consumers, communities and opportunities evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7fb] py-20 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-blue-700">Where we operate</p>
              <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#0a2342] sm:text-6xl">A portfolio shaped around real needs.</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-600 lg:justify-self-end">
              From consumer aspirations to financial confidence, hospitality, services and social impact, our businesses are designed around categories with durable relevance.
            </p>
          </div>

          <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
            {focusAreas.map(([number, title, description]) => (
              <div key={title} className="grid gap-4 py-6 sm:grid-cols-[70px_0.8fr_1.4fr] sm:items-center lg:py-7">
                <span className="text-xs font-bold text-blue-700">{number}</span>
                <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#0a2342]">{title}</h3>
                <p className="max-w-2xl text-sm leading-7 text-slate-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071a35] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
          <div className="mb-12 flex flex-col gap-7 border-b border-white/12 pb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-blue-200">Our businesses</p>
              <h2 className="mt-4 max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] sm:text-7xl">Five companies. One enterprise mindset.</h2>
            </div>
            <Link to="/companies" className="text-sm font-bold text-blue-200 transition hover:text-white">View all businesses ↗</Link>
          </div>

          <div className="flex min-h-[620px] flex-col gap-2 lg:h-[660px] lg:flex-row">
            {companies.map((company, index) => {
              const isActive = activeCompany === index;

              return (
                <article
                  key={company.name}
                  onMouseEnter={() => setActiveCompany(index)}
                  onFocusCapture={() => setActiveCompany(index)}
                  onClick={() => setActiveCompany(index)}
                  className={`group relative isolate overflow-hidden rounded-3xl border border-white/10 bg-[#0b2448] transition-[flex-grow] duration-300 ease-out will-change-[flex-grow] ${isActive ? "lg:flex-grow-[4]" : "lg:flex-grow"}`}
                >
                  <img
                    src={company.artwork}
                    alt=""
                    aria-hidden="true"
                    className={`absolute inset-0 h-full w-full transform-gpu object-cover transition-[opacity,transform] duration-500 ease-out ${isActive ? "scale-100 opacity-58" : "scale-[1.03] opacity-28"}`}
                  />
                  <div className={`absolute inset-0 transition-colors duration-300 ${isActive ? "bg-[linear-gradient(180deg,rgba(2,15,34,.08),rgba(2,15,34,.18)_30%,rgba(2,15,34,.95)_100%)]" : "bg-[#04162d]/58"}`} />

                  <div className="relative flex h-full min-h-[420px] flex-col justify-between p-5 sm:p-6 lg:min-h-0 lg:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">0{index + 1}</span>
                      <div className={`grid place-items-center overflow-hidden rounded-xl bg-white transition-[width,height,opacity] duration-300 ${isActive ? "h-16 w-24 opacity-100" : "h-12 w-16 opacity-85"}`}>
                        <img src={company.logo} alt={`${company.name} logo`} className="max-h-12 max-w-20 object-contain p-2" />
                      </div>
                    </div>

                    <div className="overflow-hidden">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-200">{company.sector}</p>
                      <h3 className={`mt-3 font-semibold tracking-[-0.055em] transition-[font-size,transform] duration-300 ${isActive ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl lg:origin-bottom-left lg:-rotate-90 lg:translate-x-7 lg:-translate-y-3"}`}>
                        {company.name}
                      </h3>

                      <div className={`overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-out ${isActive ? "mt-5 max-h-48 translate-y-0 opacity-100" : "max-h-0 translate-y-3 opacity-0"}`}>
                        <p className="max-w-xl text-sm leading-7 text-white/68 sm:text-base">{company.statement}</p>
                        <Link to={company.href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white">
                          Explore company <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-14">
          <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] bg-slate-100">
            <img src={ceoImage} alt="RB Corp leadership" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071a35]/90 via-[#071a35]/12 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-white sm:p-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-blue-200">Leadership</p>
              <p className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">Entrepreneurial thinking with a long-term view of enterprise building.</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-blue-700">How we think</p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.055em] text-[#0a2342] sm:text-6xl">Scale matters. So does the way you build it.</h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600">
              We believe enduring groups are built through disciplined execution, strong customer relationships, responsible decisions and the patience to invest beyond the next quarter.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                ["Trust", "Earn confidence through consistency."],
                ["Quality", "Raise standards across every business."],
                ["Purpose", "Create value that extends beyond growth."],
              ].map(([title, description]) => (
                <div key={title} className="border-t-2 border-blue-700 pt-5">
                  <h3 className="text-lg font-semibold text-[#0a2342]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="mt-10 inline-flex w-fit items-center gap-2 text-sm font-bold text-blue-700">Read our story →</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#eaf2fb]">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-14 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-blue-700">The next chapter</p>
              <h2 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-[#0a2342] sm:text-7xl lg:text-8xl">Building for relevance. Growing for the long run.</h2>
            </div>
            <div>
              <p className="max-w-xl text-base leading-8 text-slate-600">RB Corp will continue strengthening its existing businesses while pursuing new opportunities with discipline, customer relevance and a clear long-term perspective.</p>
              <Link to="/contact" className="mt-8 inline-flex rounded-full bg-[#071a35] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-900">Connect with RB Corp ↗</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
