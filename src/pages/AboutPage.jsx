import { motion } from "motion/react";
import { Link } from "react-router-dom";

const legacyBase = "https://raw.githubusercontent.com/Shahzadkhanks19/rbcorp-react/main";
const beyonistLogo = "https://raw.githubusercontent.com/Shahzadkhanks19/beyonist-mern/main/client/public/brand/beyonist-wordmark-white.webp";
const charityLogo = "https://media.githubusercontent.com/media/Shahzadkhanks19/rbserviceconnect/main/images/Charity-Logo-sample-1%20(1).png";
const leadershipImage = `${legacyBase}/src/Pages/About/Images/ceo-banner.jpg`;

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

const storySteps = [
  ["Independent ideas", "RB Corp began by building ventures around distinct customer needs rather than forcing every opportunity into one business model."],
  ["A connected portfolio", "As the portfolio expanded, the group brought different sectors together under a shared expectation for quality, responsibility and long-term thinking."],
  ["One enterprise direction", "Today, five businesses operate with their own identities while contributing to one broader group philosophy centred on trust, adaptability and meaningful growth."],
];

function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#f7f4f0] text-[#151517]">
      <section className="relative isolate overflow-hidden bg-[#0b0b0c] text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_85%_20%,rgba(255,77,80,.18),transparent_27%),radial-gradient(circle_at_70%_78%,rgba(201,168,106,.10),transparent_34%)]" />
        <div className="absolute -right-40 -top-24 -z-10 size-[620px] rounded-full border border-[#ff4d50]/20" />
        <div className="mx-auto grid min-h-[590px] max-w-[1680px] items-end gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:px-12 lg:py-20 xl:px-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#ff6b6e]"><span className="h-px w-9 bg-[#ff4d50]" />About RB Corp</p>
            <h1 className="mt-7 max-w-5xl font-serif text-[clamp(3.8rem,7vw,7.3rem)] leading-[0.94] tracking-[-0.055em]">Built to grow.<span className="block text-[#ff5b5e]">Built to endure.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/66 sm:text-lg">Royalties Beauty Corp brings together businesses across beauty, professional services, finance, hospitality and social impact under one long-term enterprise vision.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.08 }} className="border-l border-white/12 pl-6 sm:pl-9">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#c9a86a]">The group</p>
            <p className="mt-5 font-serif text-3xl leading-tight sm:text-4xl">One connected group. Five distinct businesses. A shared commitment to trust, responsibility and meaningful growth.</p>
            <div className="mt-7 grid grid-cols-5 gap-2">
              {businesses.map((business) => <Link key={business.name} to={business.href} aria-label={business.name} className="grid aspect-square place-items-center border border-white/10 bg-white/[0.04] p-2 transition duration-300 hover:-translate-y-1 hover:border-[#ff4d50]/50 hover:bg-white/[0.07]"><img src={business.logo} alt="" className="max-h-10 max-w-full object-contain" /></Link>)}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#fffdfa] py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1680px] gap-10 px-5 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:px-12 xl:px-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#b9252d]">Who we are</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">Royalties Beauty Corp.</h2>
          </div>
          <div className="grid gap-7 text-base leading-8 text-[#656163] md:grid-cols-2">
            <p>RB Corporation Holding Pvt. Ltd. is a diversified enterprise group built around the belief that strong businesses can operate in different sectors while sharing one standard of responsibility, quality and long-term thinking.</p>
            <p>Through its portfolio, the group serves different needs—from beauty and skincare to professional services, finance, hospitality and community-focused initiatives—while keeping people, trust and sustainable value at the centre of how it grows.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f2eeea] py-16 lg:py-20">
        <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-6 lg:grid-cols-3">
            {principles.map((item, index) => <motion.article key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.4, delay: index * 0.06 }} className="group border-t border-black/15 py-7 lg:px-8 lg:first:pl-0 lg:last:pr-0"><span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b9252d]">{item.number}</span><h3 className="mt-5 font-serif text-4xl transition group-hover:text-[#b9252d]">Our {item.title}</h3><p className="mt-4 max-w-md text-sm leading-7 text-[#6b6668]">{item.text}</p></motion.article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#fffdfa] py-16 lg:py-20">
        <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
            <div><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#b9252d]">Our story</p><h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">From individual ventures to one diversified group.</h2></div>
            <p className="max-w-3xl text-base leading-8 text-[#656163]">RB Corp’s story is one of expansion through complementary ideas. The group did not grow by making every business look the same; it grew by connecting distinct ventures through a common standard for how they should operate.</p>
          </div>
          <div className="mt-10 grid gap-px bg-black/10 lg:grid-cols-3">
            {storySteps.map(([title, text], index) => <motion.article key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.4, delay: index * 0.06 }} className="bg-[#f7f4f0] p-7 sm:p-8"><span className="font-serif text-5xl text-[#ff4d50]/20">0{index + 1}</span><h3 className="mt-5 font-serif text-3xl">{title}</h3><p className="mt-4 text-sm leading-7 text-[#6b6668]">{text}</p></motion.article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#151517] py-16 text-white lg:py-20">
        <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#ff6b6e]">How we build</p><h2 className="mt-5 max-w-2xl font-serif text-4xl leading-[1.02] sm:text-5xl lg:text-[3.8rem]">Different businesses. One operating philosophy.</h2></div>
            <p className="max-w-2xl text-base leading-8 text-white/56">RB Corp’s strength comes from giving each business room to serve its own market while maintaining shared expectations around integrity, execution, adaptability and impact.</p>
          </div>
          <div className="mt-10 grid border-y border-white/10 md:grid-cols-2 xl:grid-cols-4 xl:divide-x xl:divide-white/10">
            {operatingModel.map(([title, text], index) => <div key={title} className="border-b border-white/10 py-7 md:px-6 xl:border-b-0 xl:px-8 xl:first:pl-0 xl:last:pr-0"><span className="font-serif text-5xl text-white/12">0{index + 1}</span><h3 className="mt-4 font-serif text-2xl">{title}</h3><p className="mt-4 text-sm leading-7 text-white/50">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#fffdfa] py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1680px] gap-10 px-5 sm:px-8 lg:grid-cols-[.82fr_1.18fr] lg:px-12 xl:px-16">
          <div className="relative min-h-[430px] overflow-hidden bg-[#151517] text-white">
            <img src={leadershipImage} alt="RB Corp leadership" className="absolute inset-0 h-full w-full object-cover object-center opacity-75" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/15" />
            <div className="absolute -left-24 -top-24 size-72 rounded-full border border-[#ff4d50]/20" />
            <div className="relative flex h-full min-h-[430px] flex-col justify-between p-8 sm:p-10">
              <div><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#ff6b6e]">Leadership</p><h2 className="mt-5 max-w-md font-serif text-4xl leading-tight sm:text-5xl">A long-term view from the top.</h2></div>
              <div><p className="text-sm font-bold uppercase tracking-[0.14em]">Gladys Kumar</p><p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#d9bd82]">CEO & Managing Director · RB Corp</p></div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#b9252d]">Leadership perspective</p>
            <blockquote className="mt-6 max-w-4xl font-serif text-3xl leading-[1.08] text-[#151517] sm:text-4xl lg:text-[3.25rem]">“We believe in the power of innovation, collaboration and compassion to create meaningful impact and a brighter tomorrow.”</blockquote>
            <p className="mt-7 max-w-3xl text-base leading-8 text-[#656163]">RB Corp’s leadership philosophy is rooted in resilience, responsibility and positive change. The group aims to build businesses that remain commercially disciplined while contributing meaningfully to customers, partners and communities.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f7f4f0] py-16 lg:py-20">
        <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#b9252d]">Our businesses</p><h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">Five businesses. One group.</h2></div><Link to="/companies" className="inline-flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] transition hover:text-[#b9252d]">Explore the portfolio <span>→</span></Link></div>
          <div className="mt-9 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-5">{businesses.map((business) => <Link key={business.name} to={business.href} className="group bg-[#fffdfa] p-5 transition duration-300 hover:bg-[#151517] hover:text-white"><div className="grid h-16 place-items-center bg-[#151517] p-2.5"><img src={business.logo} alt={`${business.name} logo`} className="max-h-11 max-w-[160px] object-contain" /></div><p className="mt-5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#a98550]">{business.sector}</p><h3 className="mt-2 font-serif text-xl leading-tight">{business.name}</h3><span className="mt-5 inline-block text-lg text-[#ff4d50] transition group-hover:translate-x-1">→</span></Link>)}</div>
        </div>
      </section>

      <section className="bg-[#151517] py-16 text-white lg:py-20">
        <div className="mx-auto flex max-w-[1680px] flex-col gap-7 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 xl:px-16">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#ff6b6e]">Looking ahead</p><h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">Building the next chapter with responsibility at the core.</h2></div>
          <Link to="/contact" className="inline-flex w-fit items-center gap-3 bg-[#ff4d50] px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#e83c40]">Connect with RB Corp <span>→</span></Link>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
