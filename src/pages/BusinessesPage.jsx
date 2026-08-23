import { motion } from "motion/react";
import { Link } from "react-router-dom";

const legacyBase = "https://raw.githubusercontent.com/Shahzadkhanks19/rbcorp-react/main";
const beyonistLogo = "https://raw.githubusercontent.com/Shahzadkhanks19/beyonist-mern/main/client/public/brand/beyonist-wordmark-white.webp";
const charityLogo = "https://media.githubusercontent.com/media/Shahzadkhanks19/rbserviceconnect/main/images/Charity-Logo-sample-1%20(1).png";

const businesses = [
  {
    number: "01",
    name: "Beyonist",
    sector: "Beauty & Skincare",
    href: "/companies/beyonist",
    logo: beyonistLogo,
    artwork: `${legacyBase}/src/Pages/Home/Images/beyonist-acc.webp`,
    statement: "Beauty and skincare experiences shaped around confidence, care and a more thoughtful relationship with personal wellbeing.",
    role: "Consumer beauty",
    emphasis: "Care · Confidence · Experience",
    accent: "#ff7f91",
  },
  {
    number: "02",
    name: "RB Service Connect",
    sector: "Professional Services",
    href: "/companies/rb-service-connect",
    logo: `${legacyBase}/src/Pages/About/Images/rb%20service%20connect%20logo%20file.jpg`,
    artwork: `${legacyBase}/src/Pages/Home/Images/home-hero-5.jpg`,
    statement: "A professional services and opportunity platform designed to connect people with dependable support, services and pathways to work.",
    role: "Services & opportunities",
    emphasis: "Access · Connection · Support",
    accent: "#c9a86a",
  },
  {
    number: "03",
    name: "RB Finance",
    sector: "Financial Services",
    href: "/companies/rb-finance",
    logo: `${legacyBase}/src/Pages/About/Images/rb%20finance%20logo%20file.jpg`,
    artwork: `${legacyBase}/src/Pages/Home/Images/finance-acc.webp`,
    statement: "Financial solutions built around clarity, confidence and responsible decision-making for people navigating important financial needs.",
    role: "Financial solutions",
    emphasis: "Clarity · Confidence · Value",
    accent: "#a98550",
  },
  {
    number: "04",
    name: "Royalties Charity",
    sector: "Social Impact",
    href: "/companies/royalties-charity",
    logo: charityLogo,
    artwork: `${legacyBase}/src/Pages/Home/Images/charity-acc.webp`,
    statement: "Community-focused initiatives that turn care into practical support through food assistance, essential help and meaningful action.",
    role: "Community initiatives",
    emphasis: "Care · Dignity · Action",
    accent: "#ff4d50",
  },
  {
    number: "05",
    name: "Royalties Buffet",
    sector: "Hospitality & Dining",
    href: "/companies/royalties-buffet",
    logo: `${legacyBase}/src/Pages/About/Images/buffet%20logo%20file.jpg`,
    artwork: `${legacyBase}/src/Pages/Home/Images/buffet-acc.webp`,
    statement: "A hospitality and dining concept built around generous choice, warm service and memorable shared experiences around food.",
    role: "Hospitality & dining",
    emphasis: "Variety · Warmth · Experience",
    accent: "#d76b42",
  },
];

function BusinessesPage() {
  return (
    <main className="overflow-hidden bg-[#f7f4f0] text-[#151517]">
      <section className="relative isolate overflow-hidden bg-[#0b0b0c] text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_82%_18%,rgba(255,77,80,.18),transparent_30%),radial-gradient(circle_at_66%_82%,rgba(201,168,106,.10),transparent_34%)]" />
        <div className="absolute -right-44 -top-24 -z-10 size-[620px] rounded-full border border-[#ff4d50]/20" />
        <div className="mx-auto grid min-h-[640px] max-w-[1680px] items-end gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.06fr_.94fr] lg:px-12 lg:py-24 xl:px-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#ff6b6e]"><span className="h-px w-9 bg-[#ff4d50]" />Our businesses</p>
            <h1 className="mt-7 max-w-5xl font-serif text-[clamp(3.8rem,7vw,7.4rem)] leading-[0.94] tracking-[-0.055em]">Different sectors.<span className="block text-[#ff5b5e]">One enterprise vision.</span></h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/66 sm:text-lg">RB Corp brings together five businesses serving different needs while sharing a common commitment to responsible growth, quality execution and long-term value.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.08 }} className="border-l border-white/12 pl-6 sm:pl-9">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#c9a86a]">Portfolio at a glance</p>
            <div className="mt-7 grid gap-px bg-white/10 sm:grid-cols-2">
              {businesses.map((business) => (
                <a key={business.name} href={`#${business.name.toLowerCase().replaceAll(" ", "-")}`} className="group flex min-h-28 items-center justify-between bg-[#151517]/90 p-5 transition hover:bg-[#1c1b1c]">
                  <div><span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#ff6b6e]">{business.number}</span><p className="mt-2 font-serif text-xl">{business.name}</p></div>
                  <span className="text-lg text-white/35 transition group-hover:translate-x-1 group-hover:text-[#ff5b5e]">↓</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#fffdfa] py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1680px] gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12 xl:px-16">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#b9252d]">A diversified portfolio</p><h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">Built across needs, connected by standards.</h2></div>
          <div className="grid gap-8 text-base leading-8 text-[#656163] md:grid-cols-2"><p>Each RB Corp business is designed around a distinct customer or community need. The group does not force every company into the same model; each one keeps its own market identity and operating focus.</p><p>What connects them is a shared expectation around trust, responsibility, service quality and the discipline to build for the long term rather than chase short-term momentum.</p></div>
        </div>
      </section>

      <section className="bg-[#f2eeea] py-12 lg:py-16">
        <div className="mx-auto grid max-w-[1680px] gap-px bg-black/10 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-5 lg:px-12 xl:px-16">
          {businesses.map((business) => <div key={business.sector} className="bg-[#f2eeea] p-6"><span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#b9252d]">{business.number}</span><p className="mt-3 font-serif text-xl">{business.sector}</p></div>)}
        </div>
      </section>

      <section className="bg-[#fffdfa]">
        {businesses.map((business, index) => {
          const reversed = index % 2 === 1;
          const anchor = business.name.toLowerCase().replaceAll(" ", "-");
          return (
            <motion.article
              id={anchor}
              key={business.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 border-t border-black/10"
            >
              <div className={`mx-auto grid max-w-[1680px] gap-0 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-20 xl:px-16 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative min-h-[420px] overflow-hidden bg-[#151517] lg:min-h-[560px]">
                  <img src={business.artwork} alt={`${business.name} business`} className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 hover:scale-[1.025] hover:opacity-95" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-transparent to-black/10" />
                  <div className="absolute bottom-7 left-7 right-7 grid min-h-24 place-items-center border border-white/10 bg-[#151517]/92 p-5 backdrop-blur-sm sm:left-9 sm:right-auto sm:w-[280px]">
                    <img src={business.logo} alt={`${business.name} logo`} className="max-h-14 max-w-[220px] object-contain" />
                  </div>
                </div>

                <div className="flex flex-col justify-center bg-[#f7f4f0] p-8 sm:p-10 lg:p-14 xl:p-16">
                  <div className="flex items-center justify-between gap-5"><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#b9252d]">{business.sector}</p><span className="font-serif text-5xl text-black/8">{business.number}</span></div>
                  <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl xl:text-6xl">{business.name}</h2>
                  <p className="mt-7 max-w-xl text-base leading-8 text-[#656163]">{business.statement}</p>
                  <div className="mt-9 grid gap-5 border-y border-black/10 py-7 sm:grid-cols-2"><div><p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#a98550]">Role in the group</p><p className="mt-2 font-serif text-xl">{business.role}</p></div><div><p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#a98550]">Focus</p><p className="mt-2 font-serif text-xl">{business.emphasis}</p></div></div>
                  <Link to={business.href} className="mt-8 inline-flex w-fit items-center gap-3 text-sm font-bold uppercase tracking-[0.08em] transition hover:text-[#b9252d]">Explore {business.name} <span className="text-[#ff4d50]">→</span></Link>
                </div>
              </div>
            </motion.article>
          );
        })}
      </section>

      <section className="bg-[#151517] py-20 text-white lg:py-24">
        <div className="mx-auto grid max-w-[1680px] gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12 xl:px-16">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#ff6b6e]">One group</p><h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight sm:text-6xl">Five different ways to create meaningful value.</h2><p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">Explore the individual businesses or connect with RB Corp to learn more about the group and its direction.</p></div>
          <Link to="/contact" className="inline-flex w-fit items-center gap-3 bg-[#ff4d50] px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#e83c40]">Connect with RB Corp <span>→</span></Link>
        </div>
      </section>
    </main>
  );
}

export default BusinessesPage;
