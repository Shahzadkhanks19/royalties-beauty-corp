import { motion } from "motion/react";
import { Link } from "react-router-dom";

const legacyBase = "https://raw.githubusercontent.com/Shahzadkhanks19/rbcorp-react/main";
const beyonistLogo = "https://raw.githubusercontent.com/Shahzadkhanks19/beyonist-mern/main/client/public/brand/beyonist-wordmark-black.webp";
const charityLogo = "https://media.githubusercontent.com/media/Shahzadkhanks19/rbserviceconnect/main/images/Charity-Logo-sample-1%20(1).png";

const companies = [
  {
    name: "Beyonist",
    sector: "Beauty & Skincare",
    href: "/companies/beyonist",
    logo: beyonistLogo,
    artwork: `${legacyBase}/src/Pages/Home/Images/beyonist-acc.webp`,
    statement: "Premium skincare and beauty experiences shaped around confidence, care and holistic wellbeing.",
    accent: "bg-rose-500",
  },
  {
    name: "RB Service Connect",
    sector: "Professional Services",
    href: "/companies/rb-service-connect",
    logo: `${legacyBase}/src/Pages/About/Images/rb%20service%20connect%20logo%20file.jpg`,
    artwork: `${legacyBase}/src/Pages/Home/Images/home-hero-5.jpg`,
    statement: "Dependable service solutions that make access, connection and support simpler.",
    accent: "bg-sky-500",
  },
  {
    name: "RB Finance",
    sector: "Financial Services",
    href: "/companies/rb-finance",
    logo: `${legacyBase}/src/Pages/About/Images/rb%20finance%20logo%20file.jpg`,
    artwork: `${legacyBase}/src/Pages/Home/Images/finance-acc.webp`,
    statement: "Financial solutions built around clarity, confidence and long-term value creation.",
    accent: "bg-emerald-500",
  },
  {
    name: "Royalties Charity",
    sector: "Social Impact",
    href: "/companies/royalties-charity",
    logo: charityLogo,
    artwork: `${legacyBase}/src/Pages/Home/Images/charity-acc.webp`,
    statement: "Community-led initiatives focused on food support, essential assistance and practical care.",
    accent: "bg-amber-400",
  },
  {
    name: "Royalties Buffet",
    sector: "Hospitality & Dining",
    href: "/companies/royalties-buffet",
    logo: `${legacyBase}/src/Pages/About/Images/buffet%20logo%20file.jpg`,
    artwork: `${legacyBase}/src/Pages/Home/Images/buffet-acc.webp`,
    statement: "Generous dining experiences built around variety, warmth and memorable hospitality.",
    accent: "bg-orange-500",
  },
];

const heroImage = `${legacyBase}/src/Pages/Home/Images/home-hero-2.jpg`;
const ceoImage = `${legacyBase}/src/Pages/Home/Images/ceo.jpg`;
const weCare = `${legacyBase}/src/Pages/Home/Images/we-care.png`;

const values = [
  ["Integrity", "We build trust through responsible decisions and transparent relationships."],
  ["Excellence", "We pursue quality, consistency and disciplined execution across every business."],
  ["Impact", "We believe enterprise should create meaningful value for people and communities."],
];

function HomePage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="relative isolate min-h-[720px] overflow-hidden bg-[#071a35] text-white lg:min-h-[760px]">
        <img src={heroImage} alt="RB Corp enterprise" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,16,34,.96)_0%,rgba(3,16,34,.82)_45%,rgba(3,16,34,.50)_100%)]" />

        <div className="mx-auto grid min-h-[720px] max-w-[1680px] items-center gap-12 px-5 py-16 sm:px-8 lg:min-h-[760px] lg:grid-cols-[1.04fr_.96fr] lg:px-12 xl:px-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#d5aa59]">
              <span className="h-px w-9 bg-[#d5aa59]" />
              Diversified enterprise group
            </p>
            <h1 className="mt-7 max-w-4xl font-serif text-[clamp(3.5rem,6.6vw,7.4rem)] leading-[0.96] tracking-[-0.05em]">
              Building <span className="text-[#d5aa59]">enduring value.</span>
              <span className="block">Creating a better tomorrow.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              Royalties Beauty Corp is a diversified business group building purposeful companies across beauty, services, finance, hospitality and social impact.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/companies" className="inline-flex items-center gap-3 rounded-md bg-[#d5aa59] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.06em] text-[#071a35] transition hover:bg-[#e6bd6c]">
                Explore our businesses <span>→</span>
              </Link>
              <Link to="/about" className="inline-flex items-center rounded-md border border-white/30 bg-white/[0.06] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.06em] text-white backdrop-blur-sm transition hover:bg-white/12">
                About RB Corp
              </Link>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="border border-white/15 bg-[#06172f]/80 p-7 shadow-2xl shadow-black/20 backdrop-blur-md sm:p-9 lg:justify-self-end lg:max-w-[650px]"
          >
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#d5aa59]"><span className="h-px w-8 bg-[#d5aa59]" />Our purpose</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">Trust. Enterprise. Impact.</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/66 sm:text-base">
              We build and grow responsible businesses that create long-term value while contributing positively to customers, partners and communities.
            </p>
            <div className="mt-8 grid gap-6 border-t border-white/12 pt-7 sm:grid-cols-3">
              {values.map(([title, text], index) => (
                <div key={title}>
                  <span className="text-xs font-bold text-[#d5aa59]">0{index + 1}</span>
                  <h3 className="mt-3 font-serif text-xl">{title}</h3>
                  <p className="mt-2 text-xs leading-6 text-white/54">{text}</p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="bg-[#06172f] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#d5aa59]">Our businesses</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">A portfolio of strong brands</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/56 sm:text-base">Five distinct businesses. One shared commitment to trust, quality and long-term growth.</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {companies.map((company, index) => (
              <motion.article key={company.name} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.05 }} className="group overflow-hidden border border-white/12 bg-[#081d3a] transition hover:-translate-y-1 hover:border-white/25">
                <div className="relative h-52 overflow-hidden">
                  <img src={company.artwork} alt="" className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-85" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081d3a] via-transparent to-transparent" />
                  <div className="absolute inset-x-5 bottom-5 grid h-16 place-items-center rounded-sm bg-white/95 p-2 shadow-lg">
                    <img src={company.logo} alt={`${company.name} logo`} className="max-h-12 max-w-[150px] object-contain" />
                  </div>
                </div>
                <div className={`h-1 ${company.accent}`} />
                <div className="p-6">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#d5aa59]">{company.sector}</p>
                  <h3 className="mt-3 font-serif text-2xl">{company.name}</h3>
                  <p className="mt-4 min-h-24 text-sm leading-7 text-white/56">{company.statement}</p>
                  <Link to={company.href} className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-white transition group-hover:text-[#d5aa59]">Explore business <span>→</span></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#f7f5f0]">
        <div className="mx-auto grid max-w-[1680px] divide-y divide-slate-200 px-5 py-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-8 lg:grid-cols-4 lg:px-12 xl:px-16">
          {[
            ["05", "Operating businesses", "Across five distinct sectors"],
            ["01", "Connected group", "Shared governance and long-term vision"],
            ["India", "Growth market", "Built around evolving customer needs"],
            ["Impact", "Beyond enterprise", "Community value alongside business value"],
          ].map(([value, label, note]) => (
            <div key={label} className="px-4 py-7 sm:px-7 lg:px-9">
              <strong className="font-serif text-4xl text-[#071a35] sm:text-5xl">{value}</strong>
              <p className="mt-2 text-sm font-bold text-[#071a35]">{label}</p>
              <p className="mt-1 text-xs leading-6 text-slate-500">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1680px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-12 xl:px-16">
          <div className="relative min-h-[560px] overflow-hidden bg-slate-100">
            <img src={ceoImage} alt="RB Corp leadership" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06172f]/88 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-white sm:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#d5aa59]">Leadership</p>
              <p className="mt-4 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">Building businesses with an entrepreneurial mindset and a long-term view.</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#b4842f]">The RB Corp approach</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#071a35] sm:text-6xl">Growth with purpose. Scale with responsibility.</h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600">Our businesses are different by design, but they share a common operating philosophy: listen closely, execute responsibly, earn trust and keep improving.</p>
            <div className="mt-9 border-y border-slate-200 py-8">
              <img src={weCare} alt="We care" className="max-w-64 object-contain" />
            </div>
            <Link to="/about" className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-[#071a35]">Read our story <span className="text-[#b4842f]">→</span></Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7fb] py-20 lg:py-24">
        <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <Link to="/impact" className="group relative min-h-[360px] overflow-hidden bg-[#071a35] p-8 text-white sm:p-10">
              <div className="absolute -right-20 -top-20 size-72 rounded-full border border-white/10" />
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#d5aa59]">Impact</p>
              <h2 className="mt-5 max-w-xl font-serif text-4xl sm:text-5xl">Enterprise that contributes beyond business.</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/58">Discover how RB Corp approaches community support, responsibility and social value.</p>
              <span className="absolute bottom-9 left-8 text-sm font-bold uppercase tracking-[0.08em] sm:left-10">Explore impact →</span>
            </Link>
            <Link to="/careers" className="group relative min-h-[360px] overflow-hidden bg-[#d5aa59] p-8 text-[#071a35] sm:p-10">
              <div className="absolute -bottom-24 -right-20 size-80 rounded-full border border-[#071a35]/15" />
              <p className="text-[10px] font-bold uppercase tracking-[0.24em]">Careers</p>
              <h2 className="mt-5 max-w-xl font-serif text-4xl sm:text-5xl">Build your next chapter with the group.</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#071a35]/68">Explore opportunities to contribute across a growing portfolio of businesses.</p>
              <span className="absolute bottom-9 left-8 text-sm font-bold uppercase tracking-[0.08em] sm:left-10">View opportunities →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
