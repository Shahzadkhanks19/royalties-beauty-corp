import { motion } from "motion/react";
import { Link } from "react-router-dom";

const legacyBase = "https://raw.githubusercontent.com/Shahzadkhanks19/rbcorp-react/main";
const beyonistLogo = "https://raw.githubusercontent.com/Shahzadkhanks19/beyonist-mern/main/client/public/brand/beyonist-wordmark-white.webp";
const charityLogo = "https://media.githubusercontent.com/media/Shahzadkhanks19/rbserviceconnect/main/images/Charity-Logo-sample-1%20(1).png";

const businesses = [
  { name: "Beyonist", sector: "Beauty & Skincare", href: "/companies/beyonist", logo: beyonistLogo },
  { name: "RB Service Connect", sector: "Professional Services", href: "/companies/rb-service-connect", logo: `${legacyBase}/src/Pages/About/Images/rb%20service%20connect%20logo%20file.jpg` },
  { name: "RB Finance", sector: "Financial Services", href: "/companies/rb-finance", logo: `${legacyBase}/src/Pages/About/Images/rb%20finance%20logo%20file.jpg` },
  { name: "Royalties Charity", sector: "Social Impact", href: "/companies/royalties-charity", logo: charityLogo },
  { name: "Royalties Buffet", sector: "Hospitality & Dining", href: "/companies/royalties-buffet", logo: `${legacyBase}/src/Pages/About/Images/buffet%20logo%20file.jpg` },
];

const principles = [
  { number: "01", title: "Mission", text: "Empower people, foster growth and build businesses that contribute to a brighter tomorrow." },
  { number: "02", title: "Vision", text: "Create a diversified group where progress, responsibility and compassion move forward together." },
  { number: "03", title: "Values", text: "Unity, empathy, integrity and continual improvement guide how the group builds long-term value." },
];

const operatingModel = [
  ["Diversify with discipline", "Build across distinct sectors while maintaining a clear group-level standard for trust and execution."],
  ["Operate for the long term", "Prioritise resilient businesses, enduring relationships and sustainable value over short-term momentum."],
  ["Keep people at the centre", "Design products, services and initiatives around meaningful outcomes for customers and communities."],
  ["Create positive impact", "Treat responsibility as part of the business model rather than something separate from enterprise."],
];

function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#f7f4f0] text-[#151517]">
      <section className="relative isolate overflow-hidden bg-[#0b0b0c] text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_85%_20%,rgba(255,77,80,.18),transparent_27%),radial-gradient(circle_at_70%_78%,rgba(201,168,106,.10),transparent_34%)]" />
        <div className="absolute -right-40 -top-24 -z-10 size-[620px] rounded-full border border-[#ff4d50]/20" />
        <div className="mx-auto grid min-h-[650px] max-w-[1680px] items-end gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:px-12 lg:py-24 xl:px-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#ff6b6e]"><span className="h-px w-9 bg-[#ff4d50]" />About RB Corp</p>
            <h1 className="mt-7 max-w-5xl font-serif text-[clamp(3.8rem,7vw,7.6rem)] leading-[0.94] tracking-[-0.055em]">Built to grow.<span className="block text-[#ff5b5e]">Built to endure.</span></h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/66 sm:text-lg">Royalties Beauty Corp brings together businesses across beauty, professional services, finance, hospitality and social impact under one long-term enterprise vision.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.08 }} className="border-l border-white/12 pl-6 sm:pl-9">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#c9a86a]">The group</p>
            <p className="mt-5 font-serif text-3xl leading-tight sm:text-4xl">One connected group. Five distinct businesses. A shared commitment to trust, responsibility and meaningful growth.</p>
            <div className="mt-8 grid grid-cols-5 gap-2">
              {businesses.map((business) => <Link key={business.name} to={business.href} aria-label={business.name} className="grid aspect-square place-items-center border border-white/10 bg-white/[0.04] p-2 transition hover:border-[#ff4d50]/50 hover:bg-white/[0.07]"><img src={business.logo} alt="" className="max-h-9 max-w-full object-contain" /></Link>)}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#fffdfa] py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1680px] gap-12 px-5 sm:px-8 lg:grid-cols-[.78fr_1.22fr] lg:px-12 xl:px-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#b9252d]">Who we are</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">Royalties Beauty Corp.</h2>
          </div>
          <div className="grid gap-8 text-base leading-8 text-[#656163] md:grid-cols-2">
            <p>RB Corporation Holding Pvt. Ltd. is a diversified enterprise group built around the belief that strong businesses can operate in different sectors while sharing one standard of responsibility, quality and long-term thinking.</p>
            <p>Through its portfolio, the group serves different needs—from beauty and skincare to professional services, finance, hospitality and community-focused initiatives—while keeping people, trust and sustainable value at the centre of how it grows.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f2eeea] py-20 lg:py-24">
        <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-6 lg:grid-cols-3">
            {principles.map((item, index) => <motion.article key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.4, delay: index * 0.06 }} className="group border-t border-black/15 py-8 lg:px-8 lg:first:pl-0 lg:last:pr-0"><span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b9252d]">{item.number}</span><h3 className="mt-5 font-serif text-4xl transition group-hover:text-[#b9252d]">Our {item.title}</h3><p className="mt-5 max-w-md text-sm leading-7 text-[#6b6668]">{item.text}</p></motion.article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#151517] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#ff6b6e]">How we build</p>
              <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">Different businesses. One operating philosophy.</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/56">RB Corp’s strength comes from giving each business room to serve its own market while maintaining shared expectations around integrity, execution, adaptability and impact.</p>
          </div>
          <div className="mt-14 grid border-y border-white/10 md:grid-cols-2 xl:grid-cols-4 xl:divide-x xl:divide-white/10">
            {operatingModel.map(([title, text], index) => <div key={title} className="border-b border-white/10 py-8 md:px-6 xl:border-b-0 xl:px-8 xl:first:pl-0 xl:last:pr-0"><span className="font-serif text-5xl text-white/12">0{index + 1}</span><h3 className="mt-5 font-serif text-2xl">{title}</h3><p className="mt-4 text-sm leading-7 text-white/50">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#fffdfa] py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1680px] gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12 xl:px-16">
          <div className="relative min-h-[460px] overflow-hidden bg-[#151517] p-8 text-white sm:p-10">
            <div className="absolute -left-24 -top-24 size-72 rounded-full border border-[#ff4d50]/20" />
            <div className="absolute -bottom-32 -right-28 size-96 rounded-full border border-[#c9a86a]/15" />
            <div className="relative flex h-full flex-col justify-between">
              <div><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#ff6b6e]">Leadership</p><h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">A long-term view from the top.</h2></div>
              <div><p className="text-sm font-bold uppercase tracking-[0.14em]">Gladys Kumar</p><p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#c9a86a]">CEO & Managing Director · RB Corp</p></div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#b9252d]">Leadership perspective</p>
            <blockquote className="mt-6 max-w-4xl font-serif text-3xl leading-tight text-[#151517] sm:text-4xl lg:text-5xl">“We believe in the power of innovation, collaboration and compassion to create meaningful impact and a brighter tomorrow.”</blockquote>
            <p className="mt-7 max-w-3xl text-base leading-8 text-[#656163]">RB Corp’s leadership philosophy is rooted in resilience, responsibility and positive change. The group aims to build businesses that remain commercially disciplined while contributing meaningfully to customers, partners and communities.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f7f4f0] py-20 lg:py-24">
        <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#b9252d]">Our businesses</p><h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">Five businesses. One group.</h2></div><Link to="/companies" className="inline-flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] transition hover:text-[#b9252d]">Explore the portfolio <span>→</span></Link></div>
          <div className="mt-12 grid gap-px bg-black/10 md:grid-cols-2 xl:grid-cols-5">{businesses.map((business) => <Link key={business.name} to={business.href} className="group bg-[#fffdfa] p-7 transition hover:bg-[#151517] hover:text-white"><div className="grid h-20 place-items-center bg-[#151517] p-3"><img src={business.logo} alt={`${business.name} logo`} className="max-h-12 max-w-[150px] object-contain" /></div><p className="mt-6 text-[9px] font-bold uppercase tracking-[0.2em] text-[#a98550]">{business.sector}</p><h3 className="mt-3 font-serif text-2xl">{business.name}</h3><span className="mt-7 inline-block text-lg text-[#ff4d50] transition group-hover:translate-x-1">→</span></Link>)}</div>
        </div>
      </section>

      <section className="bg-[#151517] py-20 text-white lg:py-24">
        <div className="mx-auto flex max-w-[1680px] flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 xl:px-16">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#ff6b6e]">Looking ahead</p><h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight sm:text-6xl">Building the next chapter with responsibility at the core.</h2></div>
          <Link to="/contact" className="inline-flex w-fit items-center gap-3 bg-[#ff4d50] px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#e83c40]">Connect with RB Corp <span>→</span></Link>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
