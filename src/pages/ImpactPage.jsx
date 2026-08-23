import { motion } from "motion/react";
import { Link } from "react-router-dom";

const charitySite = "https://rbcharityfoundation.vercel.app";
const mediaRoot = "https://media.githubusercontent.com/media/Shahzadkhanks19/rbserviceconnect/main/images";

const images = {
  hero: `${mediaRoot}/charity-1/DSC00057.JPG`,
  field: `${mediaRoot}/charity-1/DSC00095.JPG`,
  community: `${mediaRoot}/charity-2/DSC00948.JPG`,
  initiative: `${mediaRoot}/charity-1/DSC00171.JPG`,
};

const principles = [
  ["01", "Responsible enterprise", "Growth matters most when it is built on trust, disciplined execution and decisions that consider long-term consequences."],
  ["02", "Opportunity & access", "The group creates value through businesses that improve access to products, services, employment, hospitality and support."],
  ["03", "Dedicated social impact", "RB Charity Foundation gives community work a distinct platform with causes, campaigns, participation, stories and reporting."],
  ["04", "Evidence over claims", "Where impact can be verified, the underlying records, field activity and published evidence should support the story."],
];

const pathway = [
  ["Build responsibly", "Operate each business with a long-term view of trust, quality and accountability."],
  ["Create access", "Use each company to solve a practical need for customers, candidates, partners or communities."],
  ["Channel support", "Move dedicated social-impact activity through RB Charity Foundation rather than mixing it into commercial messaging."],
  ["Document progress", "Use campaigns, field stories, imagery and reports to make social-impact work more transparent."],
];

const businesses = [
  ["Beyonist", "Confidence, individuality and intentional care in consumer beauty.", "/companies/beyonist"],
  ["RB Service Connect", "Structured access to jobs, hiring and career opportunities.", "/companies/rb-service-connect"],
  ["RB Finance", "Clarity, responsible access and disciplined financial decision-making.", "/companies/rb-finance"],
  ["RB Charity Foundation", "A dedicated platform for community participation and documented impact.", "/companies/royalties-charity"],
  ["Royalties Buffet", "Hospitality built around generous experiences, service and celebration.", "/companies/royalties-buffet"],
];

function ImpactPage() {
  return (
    <main className="overflow-hidden bg-[#f7f4f0] text-[#151517]">
      <section className="relative isolate overflow-hidden bg-[#0b0b0c] text-white">
        <img src={images.hero} alt="Community impact initiative" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b0b0c] via-[#0b0b0c]/90 to-[#0b0b0c]/35" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_18%,rgba(255,77,80,.2),transparent_28%),radial-gradient(circle_at_62%_80%,rgba(201,168,106,.14),transparent_30%)]" />
        <div className="mx-auto grid min-h-[650px] max-w-[1680px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_.58fr] lg:px-12 xl:px-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="max-w-4xl">
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.24em] text-[#ff6b6e]"><span className="h-px w-8 bg-[#ff4d50]" />Impact at RB Corp</p>
            <h1 className="mt-6 font-serif text-[clamp(3.5rem,6.4vw,7rem)] leading-[.94] tracking-[-.05em]">Enterprise with a <span className="text-[#ff5b5e]">wider responsibility.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">RB Corp approaches impact in two connected ways: build responsible businesses that create practical value, and support dedicated community work through RB Charity Foundation.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href={charitySite} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 bg-[#ff4d50] px-6 py-4 text-sm font-bold uppercase tracking-[.08em] text-white transition hover:-translate-y-0.5 hover:bg-[#e83c40]">Explore the foundation <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></a><Link to="/companies" className="inline-flex items-center border border-white/20 bg-white/[.05] px-6 py-4 text-sm font-bold uppercase tracking-[.08em] transition hover:-translate-y-0.5 hover:bg-white/10">Our businesses</Link></div>
          </motion.div>
          <motion.aside initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .65, delay: .08 }} className="border border-white/12 bg-[#151517]/82 p-7 backdrop-blur-xl sm:p-8"><p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#c9a86a]">Our view</p><h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">Impact should be designed into how a group operates—not added as decoration.</h2><p className="mt-5 text-sm leading-7 text-white/58">Commercial businesses and social-impact work have different roles. RB Corp keeps that distinction clear while connecting both through a shared standard of responsibility.</p></motion.aside>
        </div>
      </section>

      <section className="bg-[#fffdfa] py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1680px] gap-10 px-5 sm:px-8 lg:grid-cols-[.78fr_1.22fr] lg:px-12 xl:px-16">
          <div><p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#b9252d]">How we think about impact</p><h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-[3.5rem]">Value for customers. Opportunity for people. Responsibility beyond business.</h2></div>
          <div className="grid gap-7 text-base leading-8 text-[#656163] md:grid-cols-2"><p>RB Corp’s commercial companies are expected to create value through useful products, trusted services, career access, financial clarity and hospitality experiences. That day-to-day value is one part of impact.</p><p>Community-focused work has its own dedicated home in RB Charity Foundation, where campaigns, donations, volunteering, field stories and reporting can be managed and communicated with greater transparency.</p></div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f0ebe5] py-16 lg:py-20">
        <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#b9252d]">Four principles</p><h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">A practical framework for responsible growth.</h2></div><p className="max-w-3xl text-base leading-8 text-[#656163]">We avoid inflated impact claims. The group’s approach is built around responsible operations, useful access, dedicated social-impact work and evidence where verification exists.</p></div>
          <div className="mt-10 grid border-y border-black/10 md:grid-cols-2 xl:grid-cols-4 xl:divide-x xl:divide-black/10">{principles.map(([number,title,text], index)=><motion.article key={title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.4,delay:index*.05}} className="group p-7 transition hover:bg-white/45 sm:p-9"><span className="text-xs font-bold text-[#ff4d50]">{number}</span><h3 className="mt-5 font-serif text-2xl leading-tight transition group-hover:-translate-y-1">{title}</h3><p className="mt-4 text-sm leading-7 text-[#6b6668]">{text}</p></motion.article>)}</div>
        </div>
      </section>

      <section className="bg-[#151517] py-16 text-white lg:py-20">
        <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-10 lg:grid-cols-[.86fr_1.14fr] lg:items-center">
            <div><p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#ff6b6e]">From intent to evidence</p><h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-[3.5rem]">Evidence should travel with the story.</h2><p className="mt-5 max-w-2xl text-base leading-8 text-white/58">For community initiatives, the foundation combines operational records with campaigns, field imagery, stories and reporting. That is more useful than publishing decorative counters without a verifiable source.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{pathway.map(([title,text],index)=><div key={title} className="border border-white/10 bg-white/[.04] p-5 transition hover:border-[#ff4d50]/40 hover:bg-white/[.06]"><span className="text-xs font-bold text-[#c9a86a]">0{index+1}</span><h3 className="mt-3 font-serif text-xl">{title}</h3><p className="mt-2 text-xs leading-6 text-white/50">{text}</p></div>)}</div></div>
            <div className="grid grid-cols-2 gap-3"><motion.figure whileHover={{y:-4}} className="col-span-2 overflow-hidden"><img src={images.field} alt="Community initiative in the field" className="aspect-[16/8] w-full object-cover transition duration-700 hover:scale-[1.03]" /></motion.figure><motion.figure whileHover={{y:-4}} className="overflow-hidden"><img src={images.community} alt="Community participation" className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-[1.03]" /></motion.figure><motion.figure whileHover={{y:-4}} className="overflow-hidden"><img src={images.initiative} alt="Foundation community work" className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-[1.03]" /></motion.figure></div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffdfa] py-16 lg:py-20">
        <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-7 lg:grid-cols-[.72fr_1.28fr] lg:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#b9252d]">Impact across the portfolio</p><h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Different businesses. Different forms of value.</h2></div><p className="max-w-3xl text-base leading-8 text-[#656163]">RB Corp does not force one impact narrative across every company. Each business contributes through the practical role it was built to serve.</p></div>
          <div className="mt-10 grid gap-px overflow-hidden border border-black/10 bg-black/10 lg:grid-cols-5">{businesses.map(([name,text,to])=><Link key={name} to={to} className="group bg-white p-6 transition hover:bg-[#f7f1eb]"><span className="text-[9px] font-bold uppercase tracking-[.18em] text-[#b9252d]">RB Corp company</span><h3 className="mt-4 font-serif text-2xl">{name}</h3><p className="mt-3 min-h-24 text-sm leading-7 text-[#6b6668]">{text}</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.08em]">Explore <span className="text-[#ff4d50] transition-transform group-hover:translate-x-1">→</span></span></Link>)}</div>
        </div>
      </section>

      <section className="bg-[#efe8e1] py-16 lg:py-20"><div className="mx-auto grid max-w-[1680px] gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:px-12 xl:px-16"><div><p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#b9252d]">Dedicated social impact</p><h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl lg:text-[3.5rem]">For causes, campaigns, donations and field reporting, go directly to RB Charity Foundation.</h2><p className="mt-5 max-w-3xl text-base leading-8 text-[#656163]">The foundation is the group’s dedicated platform for public participation and documented community work, keeping social-impact activity focused and transparent.</p></div><div className="flex flex-col gap-3"><a href={charitySite} target="_blank" rel="noreferrer" className="group inline-flex items-center justify-between bg-[#ff4d50] px-6 py-5 text-sm font-bold uppercase tracking-[.08em] text-white transition hover:-translate-y-0.5 hover:bg-[#e83c40]">Visit RB Charity Foundation <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></a><Link to="/about" className="group inline-flex items-center justify-between border border-black/15 bg-white px-6 py-5 text-sm font-bold uppercase tracking-[.08em] transition hover:-translate-y-0.5 hover:bg-[#151517] hover:text-white">About RB Corp <span className="transition-transform group-hover:translate-x-1">→</span></Link></div></div></section>
    </main>
  );
}

export default ImpactPage;
