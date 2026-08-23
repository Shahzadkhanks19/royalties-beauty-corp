import { motion } from "motion/react";
import { Link } from "react-router-dom";

const legacyBase = "https://raw.githubusercontent.com/Shahzadkhanks19/rbcorp-react/main";
const beyonistLogo = "https://raw.githubusercontent.com/Shahzadkhanks19/beyonist-mern/main/client/public/brand/beyonist-wordmark-white.webp";
const charityLogo = "https://media.githubusercontent.com/media/Shahzadkhanks19/rbserviceconnect/main/images/Charity-Logo-sample-1%20(1).png";

const companies = [
  { name: "Beyonist", sector: "Beauty & Skincare", href: "/companies/beyonist", logo: beyonistLogo, artwork: `${legacyBase}/src/Pages/Home/Images/beyonist-acc.webp`, statement: "Premium skincare and beauty experiences shaped around confidence, care and holistic wellbeing.", accent: "bg-[#ff7f91]" },
  { name: "RB Service Connect", sector: "Professional Services", href: "/companies/rb-service-connect", logo: `${legacyBase}/src/Pages/About/Images/rb%20service%20connect%20logo%20file.jpg`, artwork: `${legacyBase}/src/Pages/Home/Images/home-hero-5.jpg`, statement: "Dependable service solutions that make access, connection and support simpler.", accent: "bg-[#c9a86a]" },
  { name: "RB Finance", sector: "Financial Services", href: "/companies/rb-finance", logo: `${legacyBase}/src/Pages/About/Images/rb%20finance%20logo%20file.jpg`, artwork: `${legacyBase}/src/Pages/Home/Images/finance-acc.webp`, statement: "Financial solutions built around clarity, confidence and long-term value creation.", accent: "bg-[#a98550]" },
  { name: "Royalties Charity", sector: "Social Impact", href: "/companies/royalties-charity", logo: charityLogo, artwork: `${legacyBase}/src/Pages/Home/Images/charity-acc.webp`, statement: "Community-led initiatives focused on food support, essential assistance and practical care.", accent: "bg-[#ff4d50]" },
  { name: "Royalties Buffet", sector: "Hospitality & Dining", href: "/companies/royalties-buffet", logo: `${legacyBase}/src/Pages/About/Images/buffet%20logo%20file.jpg`, artwork: `${legacyBase}/src/Pages/Home/Images/buffet-acc.webp`, statement: "Generous dining experiences built around variety, warmth and memorable hospitality.", accent: "bg-[#d76b42]" },
];

const values = [
  ["Integrity", "We build trust through responsible decisions and transparent relationships."],
  ["Excellence", "We pursue quality, consistency and disciplined execution across every business."],
  ["Impact", "We believe enterprise should create meaningful value for people and communities."],
];

const insightCards = [
  ["Group perspective", "Building a diversified group around long-term value", "How RB Corp approaches growth across distinct sectors without losing a shared operating philosophy."],
  ["Business spotlight", "Five businesses. Five different ways to create value.", "A closer look at how beauty, services, finance, hospitality and social impact fit within one connected group."],
  ["Impact note", "Why responsibility belongs inside the business model", "RB Corp's approach to combining commercial discipline with meaningful value for customers and communities."],
];

function HomePage() {
  return (
    <main className="overflow-hidden bg-[#f7f4f0] text-[#151517]">
      <section className="relative isolate overflow-hidden bg-[#0b0b0c] text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_80%_12%,rgba(255,77,80,.16),transparent_28%),radial-gradient(circle_at_68%_76%,rgba(201,168,106,.08),transparent_30%)]" />
        <div className="absolute -left-44 bottom-[-22rem] -z-10 size-[680px] rounded-full border border-[#ff4d50]/10" />

        <div className="mx-auto grid min-h-[760px] max-w-[1680px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[.96fr_1.04fr] lg:px-12 lg:py-20 xl:px-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="relative z-10">
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#ff6b6e]"><span className="h-px w-9 bg-[#ff4d50]" />Diversified enterprise group</p>
            <h1 className="mt-7 max-w-4xl font-serif text-[clamp(3.4rem,6vw,6.8rem)] leading-[0.96] tracking-[-0.05em]">Building <span className="text-[#ff5b5e]">enduring value.</span><span className="block">Creating a better tomorrow.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">Royalties Beauty Corp is a diversified business group building purposeful companies across beauty, services, finance, hospitality and social impact.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Link to="/companies" className="inline-flex items-center gap-3 rounded-md bg-[#ff4d50] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.06em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#e83c40]">Explore our businesses <span>→</span></Link><Link to="/about" className="inline-flex items-center rounded-md border border-white/20 bg-white/[0.04] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.06em] text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10">About RB Corp</Link></div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.08 }} className="relative lg:pl-4">
            <div className="grid min-h-[540px] grid-cols-2 grid-rows-[1.35fr_.85fr] gap-2 overflow-hidden border border-white/10 bg-[#151517] p-2 shadow-2xl shadow-black/35 sm:min-h-[620px] sm:grid-cols-6">
              <Link to={companies[0].href} className="group relative col-span-1 overflow-hidden sm:col-span-4"><img src={companies[0].artwork} alt="Beyonist, an RB Corp business" className="h-full w-full object-cover opacity-78 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-95" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" /><span className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">Beauty & skincare</span></Link>
              <Link to={companies[1].href} className="group relative col-span-1 overflow-hidden sm:col-span-2"><img src={companies[1].artwork} alt="RB Service Connect, an RB Corp business" className="h-full w-full object-cover opacity-74 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-95" /><div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" /><span className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">Services</span></Link>
              {companies.slice(2).map((company) => <Link key={company.name} to={company.href} className="group relative col-span-1 overflow-hidden sm:col-span-2"><img src={company.artwork} alt={`${company.name}, an RB Corp business`} className="h-full w-full object-cover opacity-72 transition duration-700 group-hover:scale-[1.05] group-hover:opacity-95" /><div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-transparent" /><span className="absolute bottom-3 left-3 text-[9px] font-bold uppercase tracking-[0.16em] text-white/80">{company.sector}</span></Link>)}
            </div>

            <div className="relative -mt-20 ml-4 border border-white/12 bg-[#0b0b0c]/95 p-5 shadow-2xl backdrop-blur-md sm:ml-10 sm:max-w-[560px] sm:p-6 lg:ml-[-3rem]">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div><p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#c9a86a]">Our purpose</p><h2 className="mt-2 font-serif text-2xl sm:text-3xl">Trust. Enterprise. Impact.</h2></div>
                <Link to="/about" className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#ff6b6e] transition hover:text-white">Discover RB Corp →</Link>
              </div>
              <div className="mt-5 grid grid-cols-3 border-t border-white/10 pt-4">{values.map(([title], index) => <div key={title} className={index ? "border-l border-white/10 pl-4" : "pr-4"}><span className="text-[9px] font-bold text-[#ff5b5e]">0{index + 1}</span><p className="mt-1 font-serif text-sm sm:text-base">{title}</p></div>)}</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#151517] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center"><p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#ff6b6e]">Our businesses</p><h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">A portfolio of strong brands</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/54 sm:text-base">Five distinct businesses. One shared commitment to trust, quality and long-term growth.</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">{companies.map((company, index) => <motion.article key={company.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.04 }} className="group overflow-hidden border border-white/10 bg-[#0b0b0c] transition hover:-translate-y-1 hover:border-[#ff4d50]/45"><div className="relative h-52 overflow-hidden bg-[#211f20]"><img src={company.artwork} alt={`${company.name} business`} className="h-full w-full object-cover opacity-72 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-90" /><div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-transparent to-transparent" /><div className="absolute inset-x-5 bottom-5 grid h-16 place-items-center rounded-sm bg-[#151517]/92 p-2 shadow-lg ring-1 ring-white/10"><img src={company.logo} alt={`${company.name} logo`} className="max-h-12 max-w-[150px] object-contain" /></div></div><div className={`h-1 ${company.accent}`} /><div className="p-6"><p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#c9a86a]">{company.sector}</p><h3 className="mt-3 font-serif text-2xl">{company.name}</h3><p className="mt-4 min-h-24 text-sm leading-7 text-white/54">{company.statement}</p><Link to={company.href} className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-white transition group-hover:text-[#ff6b6e]">Explore business <span>→</span></Link></div></motion.article>)}</div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f7f4f0]"><div className="mx-auto grid max-w-[1680px] divide-y divide-black/10 px-5 py-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-8 lg:grid-cols-4 lg:px-12 xl:px-16">{[["05", "Operating businesses", "Across five distinct sectors"], ["01", "Connected group", "Shared governance and long-term vision"], ["India", "Growth market", "Built around evolving customer needs"], ["Impact", "Beyond enterprise", "Community value alongside business value"]].map(([value, label, note]) => <div key={label} className="px-4 py-7 sm:px-7 lg:px-9"><strong className="font-serif text-4xl text-[#151517] sm:text-5xl">{value}</strong><p className="mt-2 text-sm font-bold text-[#151517]">{label}</p><p className="mt-1 text-xs leading-6 text-[#777274]">{note}</p></div>)}</div></section>

      <section className="bg-[#fffdfa] py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1680px] gap-12 px-5 sm:px-8 lg:grid-cols-[.92fr_1.08fr] lg:px-12 xl:px-16">
          <div className="relative overflow-hidden bg-[#151517] p-8 text-white sm:p-10 lg:min-h-[560px]"><div className="absolute -left-28 -top-28 size-80 rounded-full border border-[#ff4d50]/20" /><div className="absolute -bottom-32 -right-20 size-96 rounded-full border border-[#c9a86a]/15" /><div className="relative flex h-full flex-col justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#ff6b6e]">One group · five businesses</p><h3 className="mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">Different sectors. One standard of responsibility.</h3><p className="mt-5 max-w-lg text-sm leading-7 text-white/58">RB Corp brings together businesses in beauty, professional services, finance, social impact and hospitality under a shared long-term outlook.</p></div><div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-5 lg:grid-cols-2 xl:grid-cols-5">{companies.map((company) => <Link key={company.name} to={company.href} className="grid min-h-24 place-items-center border border-white/10 bg-white/[0.04] p-3 transition hover:border-[#ff4d50]/45 hover:bg-white/[0.07]"><img src={company.logo} alt={`${company.name} logo`} className="max-h-12 max-w-full object-contain" /></Link>)}</div></div></div>
          <div className="flex flex-col justify-center"><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#b9252d]">The RB Corp approach</p><h2 className="mt-5 font-serif text-4xl leading-tight text-[#151517] sm:text-6xl">Growth with purpose. Scale with responsibility.</h2><p className="mt-7 max-w-2xl text-base leading-8 text-[#656163]">Our businesses are different by design, but they share a common operating philosophy: listen closely, execute responsibly, earn trust and keep improving.</p><div className="mt-9 grid gap-4 border-y border-black/10 py-8 sm:grid-cols-3">{values.map(([title], index) => <div key={title} className="border-l-2 border-[#ff4d50] pl-4"><span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#a98550]">0{index + 1}</span><p className="mt-2 font-serif text-xl text-[#151517]">{title}</p></div>)}</div><Link to="/about" className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-[#151517]">Read our story <span className="text-[#ff4d50]">→</span></Link></div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f7f4f0] py-20 lg:py-24">
        <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#b9252d]">Latest insights</p><h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">Perspectives from across the group.</h2></div><Link to="/insights" className="inline-flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-[#151517] transition hover:text-[#b9252d]">View all insights <span>→</span></Link></div>
          <div className="mt-12 grid border-y border-black/10 lg:grid-cols-3 lg:divide-x lg:divide-black/10">{insightCards.map(([type, title, text], index) => <Link key={title} to="/insights" className="group relative border-b border-black/10 px-1 py-9 transition last:border-b-0 sm:px-6 lg:border-b-0 lg:px-8"><span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b9252d]">{type}</span><div className="mt-8 flex items-start justify-between gap-5"><span className="font-serif text-5xl text-black/10">0{index + 1}</span><span className="mt-2 text-xl text-[#ff4d50] transition duration-300 group-hover:translate-x-1">→</span></div><h3 className="mt-5 max-w-md font-serif text-3xl leading-tight transition group-hover:text-[#b9252d]">{title}</h3><p className="mt-4 max-w-md text-sm leading-7 text-[#6b6668]">{text}</p></Link>)}</div>
        </div>
      </section>

      <section className="bg-[#f2eeea] py-20 lg:py-24"><div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16"><div className="grid gap-8 lg:grid-cols-2"><Link to="/impact" className="group relative min-h-[360px] overflow-hidden bg-[#151517] p-8 text-white transition duration-300 hover:-translate-y-1 sm:p-10"><div className="absolute -right-20 -top-20 size-72 rounded-full border border-[#ff4d50]/20" /><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#ff6b6e]">Impact</p><h2 className="mt-5 max-w-xl font-serif text-4xl sm:text-5xl">Enterprise that contributes beyond business.</h2><p className="mt-5 max-w-xl text-sm leading-7 text-white/58">Discover how RB Corp approaches community support, responsibility and social value.</p><span className="absolute bottom-9 left-8 text-sm font-bold uppercase tracking-[0.08em] transition group-hover:text-[#ff6b6e] sm:left-10">Explore impact →</span></Link><Link to="/companies/rb-service-connect" className="group relative min-h-[360px] overflow-hidden bg-[#c9a86a] p-8 text-[#151517] transition duration-300 hover:-translate-y-1 hover:bg-[#d4b77e] sm:p-10"><div className="absolute -bottom-24 -right-20 size-80 rounded-full border border-black/15" /><p className="text-[10px] font-bold uppercase tracking-[0.24em]">Jobs & opportunities</p><h2 className="mt-5 max-w-xl font-serif text-4xl sm:text-5xl">Find your next opportunity through RB Service Connect.</h2><p className="mt-5 max-w-xl text-sm leading-7 text-black/64">RB Service Connect is the group platform for discovering jobs, professional opportunities and career pathways.</p><span className="absolute bottom-9 left-8 text-sm font-bold uppercase tracking-[0.08em] transition group-hover:text-[#b9252d] sm:left-10">Explore RB Service Connect →</span></Link></div></div></section>
    </main>
  );
}

export default HomePage;
