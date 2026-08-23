import { motion } from "motion/react";
import { Link } from "react-router-dom";

const legacyBase = "https://raw.githubusercontent.com/Shahzadkhanks19/rbcorp-react/main";
const beyonistLogo = "https://raw.githubusercontent.com/Shahzadkhanks19/beyonist-mern/main/client/public/brand/beyonist-wordmark-black.webp";
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

function HomePage() {
  return (
    <main className="overflow-hidden bg-[#f7f4f0] text-[#151517]">
      <section className="relative isolate overflow-hidden bg-[#0b0b0c] text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_82%_18%,rgba(255,77,80,.18),transparent_28%),radial-gradient(circle_at_70%_72%,rgba(201,168,106,.10),transparent_32%)]" />
        <div className="absolute -right-28 top-16 -z-10 size-[520px] rounded-full border border-[#ff4d50]/20" />
        <div className="absolute -right-4 top-40 -z-10 size-[360px] rounded-full border border-white/7" />
        <div className="absolute right-[12%] top-0 -z-10 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="mx-auto grid min-h-[720px] max-w-[1680px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.06fr_.94fr] lg:px-12 xl:px-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#ff6b6e]"><span className="h-px w-9 bg-[#ff4d50]" />Diversified enterprise group</p>
            <h1 className="mt-7 max-w-4xl font-serif text-[clamp(3.5rem,6.6vw,7.2rem)] leading-[0.96] tracking-[-0.05em]">Building <span className="text-[#ff5b5e]">enduring value.</span><span className="block">Creating a better tomorrow.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">Royalties Beauty Corp is a diversified business group building purposeful companies across beauty, services, finance, hospitality and social impact.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/companies" className="inline-flex items-center gap-3 rounded-md bg-[#ff4d50] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#e83c40]">Explore our businesses <span>→</span></Link>
              <Link to="/about" className="inline-flex items-center rounded-md border border-white/20 bg-white/[0.04] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.06em] text-white transition hover:bg-white/10">About RB Corp</Link>
            </div>
          </motion.div>
          <motion.aside initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.08 }} className="border border-white/12 bg-[#151517]/88 p-7 shadow-2xl shadow-black/30 sm:p-9 lg:justify-self-end lg:max-w-[650px]">
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#c9a86a]"><span className="h-px w-8 bg-[#c9a86a]" />Our purpose</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">Trust. Enterprise. Impact.</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/62 sm:text-base">We build and grow responsible businesses that create long-term value while contributing positively to customers, partners and communities.</p>
            <div className="mt-8 grid gap-6 border-t border-white/10 pt-7 sm:grid-cols-3">{values.map(([title, text], index) => <div key={title}><span className="text-xs font-bold text-[#ff5b5e]">0{index + 1}</span><h3 className="mt-3 font-serif text-xl">{title}</h3><p className="mt-2 text-xs leading-6 text-white/50">{text}</p></div>)}</div>
          </motion.aside>
        </div>
      </section>

      <section className="bg-[#151517] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center"><p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#ff6b6e]">Our businesses</p><h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">A portfolio of strong brands</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/54 sm:text-base">Five distinct businesses. One shared commitment to trust, quality and long-term growth.</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {companies.map((company, index) => <motion.article key={company.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.04 }} className="group overflow-hidden border border-white/10 bg-[#0b0b0c] transition hover:-translate-y-1 hover:border-[#ff4d50]/45"><div className="relative h-52 overflow-hidden bg-[#211f20]"><img src={company.artwork} alt={`${company.name} business`} className="h-full w-full object-cover opacity-72 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-90" /><div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-transparent to-transparent" /><div className="absolute inset-x-5 bottom-5 grid h-16 place-items-center rounded-sm bg-[#f7f4f0] p-2 shadow-lg"><img src={company.logo} alt={`${company.name} logo`} className="max-h-12 max-w-[150px] object-contain" /></div></div><div className={`h-1 ${company.accent}`} /><div className="p-6"><p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#c9a86a]">{company.sector}</p><h3 className="mt-3 font-serif text-2xl">{company.name}</h3><p className="mt-4 min-h-24 text-sm leading-7 text-white/54">{company.statement}</p><Link to={company.href} className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-white transition group-hover:text-[#ff6b6e]">Explore business <span>→</span></Link></div></motion.article>)}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f7f4f0]">
        <div className="mx-auto grid max-w-[1680px] divide-y divide-black/10 px-5 py-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-8 lg:grid-cols-4 lg:px-12 xl:px-16">{[["05", "Operating businesses", "Across five distinct sectors"], ["01", "Connected group", "Shared governance and long-term vision"], ["India", "Growth market", "Built around evolving customer needs"], ["Impact", "Beyond enterprise", "Community value alongside business value"]].map(([value, label, note]) => <div key={label} className="px-4 py-7 sm:px-7 lg:px-9"><strong className="font-serif text-4xl text-[#151517] sm:text-5xl">{value}</strong><p className="mt-2 text-sm font-bold text-[#151517]">{label}</p><p className="mt-1 text-xs leading-6 text-[#777274]">{note}</p></div>)}</div>
      </section>

      <section className="bg-[#fffdfa] py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1680px] gap-12 px-5 sm:px-8 lg:grid-cols-[.92fr_1.08fr] lg:px-12 xl:px-16">
          <div className="relative overflow-hidden bg-[#151517] p-8 text-white sm:p-10 lg:min-h-[560px]">
            <div className="absolute -left-28 -top-28 size-80 rounded-full border border-[#ff4d50]/20" />
            <div className="absolute -bottom-32 -right-20 size-96 rounded-full border border-[#c9a86a]/15" />
            <div className="relative flex h-full flex-col justify-between">
              <div><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#ff6b6e]">One group · five businesses</p><h3 className="mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">Different sectors. One standard of responsibility.</h3><p className="mt-5 max-w-lg text-sm leading-7 text-white/58">RB Corp brings together businesses in beauty, professional services, finance, social impact and hospitality under a shared long-term outlook.</p></div>
              <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-5 lg:grid-cols-2 xl:grid-cols-5">{companies.map((company) => <Link key={company.name} to={company.href} className="grid min-h-24 place-items-center border border-white/10 bg-white/[0.04] p-3 transition hover:border-[#ff4d50]/45 hover:bg-white/[0.07]"><img src={company.logo} alt={`${company.name} logo`} className="max-h-12 max-w-full object-contain" /></Link>)}</div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#b9252d]">The RB Corp approach</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#151517] sm:text-6xl">Growth with purpose. Scale with responsibility.</h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#656163]">Our businesses are different by design, but they share a common operating philosophy: listen closely, execute responsibly, earn trust and keep improving.</p>
            <div className="mt-9 grid gap-4 border-y border-black/10 py-8 sm:grid-cols-3">{values.map(([title], index) => <div key={title} className="border-l-2 border-[#ff4d50] pl-4"><span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#a98550]">0{index + 1}</span><p className="mt-2 font-serif text-xl text-[#151517]">{title}</p></div>)}</div>
            <Link to="/about" className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-[#151517]">Read our story <span className="text-[#ff4d50]">→</span></Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f2eeea] py-20 lg:py-24"><div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16"><div className="grid gap-8 lg:grid-cols-2"><Link to="/impact" className="group relative min-h-[360px] overflow-hidden bg-[#151517] p-8 text-white sm:p-10"><div className="absolute -right-20 -top-20 size-72 rounded-full border border-[#ff4d50]/20" /><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#ff6b6e]">Impact</p><h2 className="mt-5 max-w-xl font-serif text-4xl sm:text-5xl">Enterprise that contributes beyond business.</h2><p className="mt-5 max-w-xl text-sm leading-7 text-white/58">Discover how RB Corp approaches community support, responsibility and social value.</p><span className="absolute bottom-9 left-8 text-sm font-bold uppercase tracking-[0.08em] sm:left-10">Explore impact →</span></Link><Link to="/careers" className="group relative min-h-[360px] overflow-hidden bg-[#c9a86a] p-8 text-[#151517] sm:p-10"><div className="absolute -bottom-24 -right-20 size-80 rounded-full border border-black/15" /><p className="text-[10px] font-bold uppercase tracking-[0.24em]">Careers</p><h2 className="mt-5 max-w-xl font-serif text-4xl sm:text-5xl">Build your next chapter with the group.</h2><p className="mt-5 max-w-xl text-sm leading-7 text-black/64">Explore opportunities to contribute across a growing portfolio of businesses.</p><span className="absolute bottom-9 left-8 text-sm font-bold uppercase tracking-[0.08em] sm:left-10">View opportunities →</span></Link></div></div></section>
    </main>
  );
}

export default HomePage;
