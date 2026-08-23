import { motion } from "motion/react";
import { Link } from "react-router-dom";

const charitySite = "https://rbcharityfoundation.vercel.app";
const mediaRoot = "https://media.githubusercontent.com/media/Shahzadkhanks19/rbserviceconnect/main/images";
const logo = `${mediaRoot}/Charity-Logo-sample-1%20(1).png`;
const images = {
  hero: `${mediaRoot}/charity-2/DSC00947.JPG`,
  field: `${mediaRoot}/charity-1/DSC00037.JPG`,
  community: `${mediaRoot}/charity-1/DSC00095.JPG`,
  action: `${mediaRoot}/charity-2/DSC00948.JPG`,
};

const pillars = [
  ["01", "Verified participation", "Support is connected to causes, campaigns and operational records so participation can be followed with greater clarity."],
  ["02", "Dignity in action", "Community work is approached around people and practical needs rather than one-day visibility."],
  ["03", "Long-term responsibility", "The foundation connects business-backed support with public participation and repeatable systems for social impact."],
];

function RBCharityFoundationPage() {
  return (
    <main className="overflow-hidden bg-[#f7fafc] text-slate-900">
      <section className="relative isolate overflow-hidden bg-[#081a2d] text-white">
        <img src={images.hero} alt="RB Charity Foundation community initiative" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#081a2d] via-[#081a2d]/90 to-[#081a2d]/35" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(242,162,58,.22),transparent_28%)]" />
        <div className="mx-auto grid min-h-[650px] max-w-[1680px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_.55fr] lg:px-12 xl:px-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="max-w-4xl">
            <p className="text-[10px] font-black uppercase tracking-[.24em] text-[#f2a23a]">RB Corp · Social Impact</p>
            <div className="mt-6 w-fit rounded-xl bg-white/95 p-4 shadow-2xl"><img src={logo} alt="RB Charity Foundation" className="max-h-24 max-w-[300px] object-contain" /></div>
            <h1 className="mt-7 font-serif text-[clamp(3.3rem,6vw,6.6rem)] leading-[.94] tracking-[-.05em]">Turning success into <span className="text-[#f2a23a]">human impact.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">RB Charity Foundation is the group’s social-impact arm, connecting business-backed support and public participation with verified causes, campaigns and community work.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href={charitySite} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 rounded-full bg-[#f2a23a] px-6 py-4 text-sm font-black uppercase tracking-[.07em] text-[#081a2d] transition hover:-translate-y-0.5 hover:bg-[#ffb44d]">Visit foundation <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></a><Link to="/companies" className="rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-black uppercase tracking-[.07em] transition hover:-translate-y-0.5 hover:bg-white/15">Back to portfolio</Link></div>
          </motion.div>
          <motion.aside initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .65, delay: .08 }} className="border border-white/15 bg-white/10 p-7 backdrop-blur-xl sm:p-8"><p className="text-[10px] font-black uppercase tracking-[.2em] text-[#f2a23a]">Participation model</p><h2 className="mt-4 font-serif text-3xl">Responsibility made visible.</h2><div className="mt-6 space-y-4 text-sm leading-7 text-white/70"><p>Verified payments can update the donation ledger.</p><p>Campaign totals can reconcile from successful donations.</p><p>Stories, gallery media and reports document field progress.</p></div></motion.aside>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20"><div className="mx-auto grid max-w-[1680px] gap-10 px-5 sm:px-8 lg:grid-cols-[.78fr_1.22fr] lg:px-12 xl:px-16"><div><p className="text-[10px] font-black uppercase tracking-[.24em] text-[#1f567f]">Role in the group</p><h2 className="mt-4 font-serif text-4xl leading-tight text-[#081a2d] sm:text-5xl lg:text-[3.5rem]">A social-impact arm built around responsibility, dignity and action.</h2></div><div className="grid gap-7 text-base leading-8 text-slate-600 md:grid-cols-2"><p>The foundation connects RB Corp’s commercial growth with social responsibility, creating a dedicated platform for causes, campaigns, donations, volunteering and field stories.</p><p>Its role within the group is distinct from commercial businesses: it creates structured ways for the group, individuals and institutions to participate in community-focused work.</p></div></div></section>

      <section className="bg-[#081a2d] py-16 text-white lg:py-20"><div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16"><div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end"><div><p className="text-[10px] font-black uppercase tracking-[.24em] text-[#f2a23a]">What defines the foundation</p><h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Support designed to create lasting change.</h2></div><p className="max-w-3xl text-base leading-8 text-white/62">The latest foundation platform is built around transparent participation: published causes, active campaigns, verified donation records, volunteers, impact reporting and stories from the field.</p></div><div className="mt-10 grid border-y border-white/10 md:grid-cols-3 md:divide-x md:divide-white/10">{pillars.map(([number,title,text],index)=><motion.article key={title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{duration:.4,delay:index*.06}} className="group p-7 transition hover:bg-white/[.04] sm:p-9"><span className="text-xs font-black text-[#f2a23a]">{number}</span><h3 className="mt-5 font-serif text-3xl leading-tight transition group-hover:-translate-y-1">{title}</h3><p className="mt-4 text-sm leading-7 text-white/55">{text}</p></motion.article>)}</div></div></section>

      <section className="bg-[#fff4df] py-16 lg:py-20"><div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16"><div className="mb-9 grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-[10px] font-black uppercase tracking-[.24em] text-[#1f567f]">Impact in practice</p><h2 className="mt-4 font-serif text-4xl leading-tight text-[#081a2d] sm:text-5xl">People and field work stay at the centre.</h2></div><p className="max-w-2xl text-base leading-8 text-slate-600">The foundation’s own platform pairs operational records with real community imagery and published stories so impact is not reduced to numbers alone.</p></div><div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr_.8fr]">{[[images.field,"Community field work"],[images.community,"Foundation initiative"],[images.action,"Community participation"]].map(([src,alt],index)=><motion.figure key={src} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.45,delay:index*.05}} className="group overflow-hidden bg-[#081a2d]"><img src={src} alt={alt} className="aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-105" /></motion.figure>)}</div></div></section>

      <section className="bg-white py-16 lg:py-20"><div className="mx-auto grid max-w-[1680px] gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:px-12 xl:px-16"><div><p className="text-[10px] font-black uppercase tracking-[.24em] text-[#1f567f]">Within RB Corp</p><h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight text-[#081a2d] sm:text-5xl lg:text-[3.5rem]">Enterprise and responsibility, connected by action.</h2><p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">RB Charity Foundation gives the group a dedicated social-impact platform while retaining its own public participation, campaign and reporting experience.</p></div><div className="flex flex-col gap-3"><a href={charitySite} target="_blank" rel="noreferrer" className="group inline-flex items-center justify-between rounded-full bg-[#f2a23a] px-6 py-5 text-sm font-black uppercase tracking-[.07em] text-[#081a2d] transition hover:-translate-y-0.5 hover:bg-[#ffb44d]">Explore RB Charity Foundation <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></a><Link to="/companies" className="group inline-flex items-center justify-between rounded-full border border-slate-200 px-6 py-5 text-sm font-black uppercase tracking-[.07em] text-[#081a2d] transition hover:-translate-y-0.5 hover:bg-[#081a2d] hover:text-white">View all businesses <span className="transition-transform group-hover:translate-x-1">→</span></Link></div></div></section>
    </main>
  );
}

export default RBCharityFoundationPage;
