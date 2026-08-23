import { motion } from "motion/react";
import { Link } from "react-router-dom";

const legacyBase = "https://raw.githubusercontent.com/Shahzadkhanks19/rbcorp-react/main";
const beyonistLogo = "https://raw.githubusercontent.com/Shahzadkhanks19/beyonist-mern/main/client/public/brand/beyonist-wordmark-white.webp";
const charityLogo = "https://media.githubusercontent.com/media/Shahzadkhanks19/rbserviceconnect/main/images/Charity-Logo-sample-1%20(1).png";

const businesses = [
  { number: "01", name: "Beyonist", sector: "Beauty & Skincare", href: "/companies/beyonist", logo: beyonistLogo, artwork: `${legacyBase}/src/Pages/Home/Images/beyonist-acc.webp`, statement: "Beauty and skincare experiences shaped around confidence, care and a more thoughtful relationship with personal wellbeing.", role: "Consumer beauty", emphasis: "Care · Confidence · Experience", accent: "#ff7f91" },
  { number: "02", name: "RB Service Connect", sector: "Professional Services", href: "/companies/rb-service-connect", logo: `${legacyBase}/src/Pages/About/Images/rb%20service%20connect%20logo%20file.jpg`, artwork: `${legacyBase}/src/Pages/Home/Images/home-hero-5.jpg`, statement: "A professional services and opportunity platform designed to connect people with dependable support, services and pathways to work.", role: "Services & opportunities", emphasis: "Access · Connection · Support", accent: "#c9a86a" },
  { number: "03", name: "RB Finance", sector: "Financial Services", href: "/companies/rb-finance", logo: `${legacyBase}/src/Pages/About/Images/rb%20finance%20logo%20file.jpg`, artwork: `${legacyBase}/src/Pages/Home/Images/finance-acc.webp`, statement: "Financial solutions built around clarity, confidence and responsible decision-making for people navigating important financial needs.", role: "Financial solutions", emphasis: "Clarity · Confidence · Value", accent: "#a98550" },
  { number: "04", name: "Royalties Charity", sector: "Social Impact", href: "/companies/royalties-charity", logo: charityLogo, artwork: `${legacyBase}/src/Pages/Home/Images/charity-acc.webp`, statement: "Community-focused initiatives that turn care into practical support through food assistance, essential help and meaningful action.", role: "Community initiatives", emphasis: "Care · Dignity · Action", accent: "#ff4d50" },
  { number: "05", name: "Royalties Buffet", sector: "Hospitality & Dining", href: "/companies/royalties-buffet", logo: `${legacyBase}/src/Pages/About/Images/buffet%20logo%20file.jpg`, artwork: `${legacyBase}/src/Pages/Home/Images/buffet-acc.webp`, statement: "A hospitality and dining concept built around generous choice, warm service and memorable shared experiences around food.", role: "Hospitality & dining", emphasis: "Variety · Warmth · Experience", accent: "#d76b42" },
];

const anchorFor = (name) => name.toLowerCase().replaceAll(" ", "-");

function BusinessesPage() {
  return (
    <main className="overflow-hidden bg-[#fffdfa] text-[#151517]">
      <section className="relative isolate overflow-hidden bg-[#0b0b0c] text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_82%_18%,rgba(255,77,80,.18),transparent_30%),radial-gradient(circle_at_66%_82%,rgba(201,168,106,.10),transparent_34%)]" />
        <div className="absolute -right-44 -top-24 -z-10 size-[620px] rounded-full border border-[#ff4d50]/20" />
        <div className="mx-auto grid min-h-[620px] max-w-[1680px] items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:px-12 lg:py-20 xl:px-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#ff6b6e]"><span className="h-px w-9 bg-[#ff4d50]" />Our businesses</p>
            <h1 className="mt-7 max-w-5xl font-serif text-[clamp(3.8rem,7vw,7.4rem)] leading-[0.94] tracking-[-0.055em]">Different sectors.<span className="block text-[#ff5b5e]">One enterprise vision.</span></h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/66 sm:text-lg">RB Corp brings together five businesses serving different needs while sharing a common commitment to responsible growth, quality execution and long-term value.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.08 }} className="border-l border-white/12 pl-6 sm:pl-9">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#c9a86a]">Portfolio at a glance</p>
            <div className="mt-7 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
              {businesses.map((business) => <a key={business.name} href={`#${anchorFor(business.name)}`} className="group relative flex min-h-28 items-center justify-between overflow-hidden bg-[#151517]/95 p-5 transition duration-300 hover:bg-[#201e1f]"><span className="absolute inset-y-0 left-0 w-[2px] origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100" style={{ backgroundColor: business.accent }} /><div><span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#ff6b6e]">{business.number}</span><p className="mt-2 font-serif text-xl">{business.name}</p></div><span className="text-lg text-white/35 transition duration-300 group-hover:translate-y-1 group-hover:text-[#ff5b5e]">↓</span></a>)}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#fffdfa] py-14 lg:py-16">
        <div className="mx-auto grid max-w-[1680px] gap-9 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12 xl:px-16">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#b9252d]">A diversified portfolio</p><h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">Built across needs,<br />connected by standards.</h2></div>
          <div className="grid gap-8 text-base leading-8 text-[#656163] md:grid-cols-2"><p>Each RB Corp business is designed around a distinct customer or community need. The group does not force every company into the same model; each one keeps its own market identity and operating focus.</p><p>What connects them is a shared expectation around trust, responsibility, service quality and the discipline to build for the long term rather than chase short-term momentum.</p></div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f2eeea]">
        <div className="mx-auto grid max-w-[1680px] sm:grid-cols-2 lg:grid-cols-5">
          {businesses.map((business) => <a href={`#${anchorFor(business.name)}`} key={business.sector} className="group relative min-h-36 border-b border-black/10 p-7 transition hover:bg-[#fffdfa] sm:border-r lg:border-b-0"><span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#b9252d]">{business.number}</span><p className="mt-4 max-w-[190px] font-serif text-xl leading-tight">{business.sector}</p><span className="absolute bottom-6 right-6 opacity-0 transition group-hover:translate-y-1 group-hover:opacity-100">↓</span></a>)}
        </div>
      </section>

      <section className="bg-[#fffdfa]">
        {businesses.map((business, index) => {
          const reversed = index % 2 === 1;
          return (
            <motion.article id={anchorFor(business.name)} key={business.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.55 }} className="scroll-mt-28 border-b border-black/10">
              <div className={`mx-auto grid max-w-[1680px] px-5 py-10 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-14 xl:px-16 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="group relative min-h-[430px] overflow-hidden bg-[#151517] lg:min-h-[590px]">
                  <img src={business.artwork} alt={`${business.name} business`} className="absolute inset-0 h-full w-full object-cover opacity-82 transition duration-1000 group-hover:scale-[1.035] group-hover:opacity-95" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c]/95 via-transparent to-black/10" />
                  <div className="absolute left-7 top-7 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/75"><span className="h-px w-7" style={{ backgroundColor: business.accent }} />RB Corp · {business.number}</div>
                  <div className="absolute bottom-7 left-7 right-7 flex min-h-28 items-center justify-center border border-white/12 bg-[#111113]/94 px-7 py-5 backdrop-blur-md sm:left-9 sm:right-auto sm:w-[330px]">
                    <img src={business.logo} alt={`${business.name} logo`} className="max-h-[72px] max-w-[250px] object-contain" />
                  </div>
                </div>
                <div className="relative flex flex-col justify-center bg-[#f7f4f0] p-8 sm:p-10 lg:p-14 xl:p-16">
                  <span className="absolute right-8 top-7 font-serif text-6xl text-black/[.055] lg:right-12 lg:top-10">{business.number}</span>
                  <p className="relative z-10 text-[10px] font-bold uppercase tracking-[0.24em] text-[#b9252d]">{business.sector}</p>
                  <h2 className="mt-7 font-serif text-4xl leading-tight sm:text-5xl xl:text-6xl">{business.name}</h2>
                  <p className="mt-7 max-w-xl text-base leading-8 text-[#656163]">{business.statement}</p>
                  <div className="mt-9 grid gap-5 border-y border-black/10 py-7 sm:grid-cols-2"><div><p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#a98550]">Role in the group</p><p className="mt-2 font-serif text-xl">{business.role}</p></div><div><p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#a98550]">Focus</p><p className="mt-2 font-serif text-xl">{business.emphasis}</p></div></div>
                  <Link to={business.href} className="group/link mt-8 inline-flex w-fit items-center gap-3 text-sm font-bold uppercase tracking-[0.08em] transition hover:text-[#b9252d]">Explore {business.name}<span className="text-[#ff4d50] transition-transform group-hover/link:translate-x-1">→</span></Link>
                </div>
              </div>
            </motion.article>
          );
        })}
      </section>

      <section className="bg-[#151517] py-16 text-white lg:py-20">
        <div className="mx-auto grid max-w-[1680px] gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12 xl:px-16"><div><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#ff6b6e]">One group</p><h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight sm:text-6xl">Five different ways to create meaningful value.</h2><p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">Explore the individual businesses or connect with RB Corp to learn more about the group and its direction.</p></div><Link to="/contact" className="group inline-flex w-fit items-center gap-3 bg-[#ff4d50] px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#e83c40]">Connect with RB Corp <span className="transition-transform group-hover:translate-x-1">→</span></Link></div>
      </section>
    </main>
  );
}

export default BusinessesPage;
