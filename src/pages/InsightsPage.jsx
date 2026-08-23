import { motion } from "motion/react";
import { Link } from "react-router-dom";

const legacyBase = "https://raw.githubusercontent.com/Shahzadkhanks19/rbcorp-react/main";
const charityMedia = "https://media.githubusercontent.com/media/Shahzadkhanks19/rbserviceconnect/main/images";
const beyonistBase = "https://raw.githubusercontent.com/Shahzadkhanks19/beyonist-mern/main/client/public";

const features = [
  {
    category: "Group Perspective",
    title: "Why diversified groups need one standard of responsibility.",
    copy: "Different businesses create value in different ways, but trust, accountability and long-term thinking should remain consistent across the group.",
    href: "/impact",
    image: `${charityMedia}/charity-1/DSC00095.JPG`,
    label: "Explore impact",
  },
  {
    category: "Beauty & Consumer",
    title: "Building beauty around confidence rather than a template.",
    copy: "Beyonist’s positioning reflects a wider shift toward more personal, approachable and intentional consumer experiences.",
    href: "/companies/beyonist",
    image: `${beyonistBase}/images/product-hamper-840.webp`,
    label: "Explore Beyonist",
  },
  {
    category: "Work & Opportunity",
    title: "Career platforms work best when access and structure move together.",
    copy: "RB Service Connect brings candidate discovery, recruiter workflows and opportunity access into one connected employment platform.",
    href: "/companies/rb-service-connect",
    image: `${legacyBase}/src/Pages/Home/Images/home-hero-5.jpg`,
    label: "Explore Service Connect",
  },
  {
    category: "Finance",
    title: "Clarity is a financial service in itself.",
    copy: "RB Finance is positioned around disciplined decision-making, responsible access and communication that makes financial choices easier to understand.",
    href: "/companies/rb-finance",
    image: `${legacyBase}/src/Pages/Home/Images/finance-acc.webp`,
    label: "Explore RB Finance",
  },
  {
    category: "Hospitality",
    title: "Hospitality becomes memorable when abundance still feels considered.",
    copy: "Royalties Buffet combines generous dining, live experiences and celebration-focused service under a premium hospitality format.",
    href: "/companies/royalties-buffet",
    image: `${legacyBase}/src/Pages/Home/Images/buffet-acc.webp`,
    label: "Explore Royalties Buffet",
  },
  {
    category: "Social Impact",
    title: "Evidence should travel with the story.",
    copy: "RB Charity Foundation connects causes and participation with operational records, field imagery, stories and reporting rather than decorative impact claims.",
    href: "/companies/royalties-charity",
    image: `${charityMedia}/charity-2/DSC00948.JPG`,
    label: "Explore the foundation",
  },
];

const themes = [
  ["Enterprise", "How RB Corp thinks about growth, governance and long-term value."],
  ["Consumers", "Brand building, customer experience and changing expectations."],
  ["Opportunity", "Work, hiring, access and the systems that connect people to possibilities."],
  ["Responsibility", "Impact, transparency and the role businesses play beyond transactions."],
];

function InsightsPage() {
  return (
    <main className="overflow-hidden bg-[#f7f4f0] text-[#151517]">
      <section className="relative isolate overflow-hidden bg-[#0b0b0c] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_84%_18%,rgba(255,77,80,.18),transparent_28%),radial-gradient(circle_at_65%_78%,rgba(201,168,106,.11),transparent_30%)]" />
        <div className="absolute right-[14%] top-0 -z-10 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="mx-auto grid min-h-[590px] max-w-[1680px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_.62fr] lg:px-12 xl:px-16">
          <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.6}}>
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.24em] text-[#ff6b6e]"><span className="h-px w-8 bg-[#ff4d50]" />RB Corp Insights</p>
            <h1 className="mt-6 max-w-5xl font-serif text-[clamp(3.6rem,6.6vw,7rem)] leading-[.94] tracking-[-.05em]">Ideas from across a <span className="text-[#ff5b5e]">diversified group.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">Perspectives on enterprise, consumers, opportunity, hospitality and responsibility—grounded in the businesses RB Corp is actually building.</p>
          </motion.div>
          <motion.aside initial={{opacity:0,x:24}} animate={{opacity:1,x:0}} transition={{duration:.65,delay:.08}} className="border border-white/12 bg-[#151517]/86 p-7 sm:p-8"><p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#c9a86a]">Editorial approach</p><h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">Useful thinking over manufactured news.</h2><p className="mt-5 text-sm leading-7 text-white/56">Until RB Corp has a dedicated publishing workflow, Insights focuses on credible perspectives tied directly to the group and its operating companies.</p></motion.aside>
        </div>
      </section>

      <section className="bg-[#fffdfa] py-16 lg:py-20">
        <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-7 lg:grid-cols-[.72fr_1.28fr] lg:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#b9252d]">What we explore</p><h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Four themes. One connected point of view.</h2></div><p className="max-w-3xl text-base leading-8 text-[#656163]">The group operates across very different sectors, so the most useful insights are often found where customer needs, opportunity, operating discipline and responsibility intersect.</p></div>
          <div className="mt-10 grid gap-px border border-black/10 bg-black/10 md:grid-cols-2 xl:grid-cols-4">{themes.map(([title,text],index)=><motion.article key={title} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{duration:.4,delay:index*.05}} className="group bg-white p-7 transition hover:bg-[#f7f1eb] sm:p-9"><span className="text-xs font-bold text-[#c9a86a]">0{index+1}</span><h3 className="mt-5 font-serif text-3xl">{title}</h3><p className="mt-4 text-sm leading-7 text-[#6b6668]">{text}</p></motion.article>)}</div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#eee7e0] py-16 lg:py-20">
        <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="mb-10 grid gap-6 lg:grid-cols-[.74fr_1.26fr] lg:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#b9252d]">Featured perspectives</p><h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Thinking shaped by what we build.</h2></div><p className="max-w-3xl text-base leading-8 text-[#656163]">These features are not press releases or fabricated news stories. They are editorial entry points into the ideas already visible across RB Corp and its businesses.</p></div>
          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">{features.map((item,index)=><motion.article key={item.title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.16}} transition={{duration:.45,delay:(index%3)*.05}} className="group overflow-hidden border border-black/10 bg-[#fffdfa] transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"><div className="relative aspect-[16/10] overflow-hidden bg-[#ddd5cc]"><img src={item.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" /><div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" /><span className="absolute bottom-4 left-4 text-[9px] font-bold uppercase tracking-[.2em] text-white">{item.category}</span></div><div className="p-6 sm:p-7"><h3 className="font-serif text-3xl leading-tight">{item.title}</h3><p className="mt-4 text-sm leading-7 text-[#6b6668]">{item.copy}</p><Link to={item.href} className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.08em] text-[#151517]">{item.label} <span className="text-[#ff4d50] transition-transform group-hover:translate-x-1">→</span></Link></div></motion.article>)}</div>
        </div>
      </section>

      <section className="bg-[#151517] py-16 text-white lg:py-20"><div className="mx-auto grid max-w-[1680px] gap-10 px-5 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:items-end lg:px-12 xl:px-16"><div><p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#ff6b6e]">From perspective to practice</p><h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl lg:text-[3.5rem]">The strongest ideas should be visible in how the businesses actually operate.</h2><p className="mt-5 max-w-3xl text-base leading-8 text-white/56">That is why each insight here connects back to a company, the group’s operating philosophy, or its impact approach instead of existing as isolated corporate commentary.</p></div><div className="flex flex-col gap-3"><Link to="/companies" className="group inline-flex items-center justify-between bg-[#ff4d50] px-6 py-5 text-sm font-bold uppercase tracking-[.08em] transition hover:-translate-y-0.5 hover:bg-[#e83c40]">Explore our businesses <span className="transition-transform group-hover:translate-x-1">→</span></Link><Link to="/impact" className="group inline-flex items-center justify-between border border-white/15 px-6 py-5 text-sm font-bold uppercase tracking-[.08em] transition hover:-translate-y-0.5 hover:bg-white/[.06]">Read our impact approach <span className="transition-transform group-hover:translate-x-1">→</span></Link></div></div></section>
    </main>
  );
}

export default InsightsPage;
