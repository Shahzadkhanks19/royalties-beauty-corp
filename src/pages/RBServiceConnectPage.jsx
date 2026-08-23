import { motion } from "motion/react";
import { Link } from "react-router-dom";

const logoUrl = "https://media.githubusercontent.com/media/Shahzadkhanks19/rbserviceconnect/main/images/Royalties-Service-Connect.png";

const pillars = [
  ["01", "Candidate workspace", "Professional profiles, job discovery, applications, interviews, messages, career programmes, billing and account controls in one place."],
  ["02", "Recruiter workspace", "Company verification, job management, applicant review, candidate discovery, interviews, hiring pipelines and team communication."],
  ["03", "Platform operations", "Administrative moderation across users, companies, jobs, placements, payments, promotions, support and platform oversight."],
  ["04", "Trust & access", "Role-aware permissions, verification, moderated opportunities, secure workflows and clear account-level controls."],
];

const flows = [
  ["Candidates", "Discover roles, build a profile, track applications and stay informed through every stage."],
  ["Employers", "Create a verified company presence, publish roles and manage a structured hiring pipeline."],
  ["Operations", "Maintain oversight across approvals, platform activity, payments, support and moderation."],
];

function RBServiceConnectPage() {
  return (
    <main className="overflow-hidden bg-[#f8fafc] text-[#151517]">
      <section className="relative isolate overflow-hidden bg-[#0f172a] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(99,102,241,.28),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(16,185,129,.18),transparent_28%)]" />
        <div className="mx-auto grid min-h-[620px] max-w-[1680px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:px-12 xl:px-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
            <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#a7f3d0]">RB Corp · Recruitment & Career Platform</p>
            <div className="mt-8 inline-flex rounded-2xl bg-[#10b981] p-3 shadow-2xl shadow-black/20"><img src={logoUrl} alt="Royalties Service Connect" className="h-20 w-auto object-contain" /></div>
            <h1 className="mt-8 max-w-3xl font-serif text-[clamp(3.4rem,5.7vw,6.2rem)] leading-[.95] tracking-[-.05em]">Great careers start with the <span className="text-[#a5b4fc]">right connection.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">RB Service Connect is RB Corp’s recruitment, hiring and career-operations platform, connecting candidates, verified employers and administrators through dedicated role-aware workspaces.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Link to="/companies" className="inline-flex items-center bg-white px-6 py-4 text-sm font-bold uppercase tracking-[.08em] text-[#0f172a] transition hover:-translate-y-0.5 hover:bg-[#d1fae5]">Back to portfolio</Link><Link to="/contact" className="inline-flex items-center border border-white/20 px-6 py-4 text-sm font-bold uppercase tracking-[.08em] text-white transition hover:bg-white/10">Connect with RB Corp</Link></div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7, delay: .08 }} className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-indigo-500/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[.06] p-4 shadow-2xl shadow-black/30 backdrop-blur sm:p-6">
              <div className="rounded-[1.6rem] bg-white p-6 text-[#0f172a] sm:p-8"><p className="text-[10px] font-bold uppercase tracking-[.22em] text-indigo-600">Connected recruitment</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">One platform. Three dedicated workspaces.</h2><div className="mt-7 grid gap-3">{flows.map(([title, text], index)=><div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-white hover:shadow-lg"><div className="flex items-start gap-4"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-indigo-50 text-xs font-bold text-indigo-700">0{index+1}</span><div><strong className="text-base">{title}</strong><p className="mt-1.5 text-sm leading-6 text-slate-500">{text}</p></div></div></div>)}</div></div>
              <div className="grid gap-3 pt-4 sm:grid-cols-3">{[["24/7","Candidate access"],["3","Role workspaces"],["1","Unified pipeline"]].map(([value,label])=><div key={label} className="rounded-2xl border border-white/10 bg-white/[.05] p-4"><strong className="block text-xl">{value}</strong><span className="mt-1 block text-xs text-white/50">{label}</span></div>)}</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20"><div className="mx-auto grid max-w-[1680px] gap-12 px-5 sm:px-8 lg:grid-cols-[.78fr_1.22fr] lg:px-12 xl:px-16"><div><p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#b9252d]">Role in the group</p><h2 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">Opportunity infrastructure for people and businesses.</h2></div><div className="grid gap-8 text-base leading-8 text-[#656163] md:grid-cols-2"><p>RB Service Connect gives RB Corp a dedicated platform for careers and recruitment. Candidates gain structured access to opportunities, while employers gain tools to manage hiring with more clarity and control.</p><p>The platform extends beyond job listings into applications, interviews, placements, messaging, billing, verification and operational oversight—creating a connected system instead of isolated hiring steps.</p></div></div></section>

      <section className="border-y border-black/10 bg-[#eef2ff] py-16 lg:py-20"><div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16"><p className="text-[10px] font-bold uppercase tracking-[.24em] text-indigo-700">What defines the platform</p><div className="mt-10 grid border-y border-black/10 md:grid-cols-2 xl:grid-cols-4 xl:divide-x xl:divide-black/10">{pillars.map(([number,title,text], index)=><motion.article key={title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.4,delay:index*.05}} className="p-7 sm:p-9 transition hover:bg-white/65"><span className="text-xs font-bold text-emerald-700">{number}</span><h3 className="mt-5 text-2xl font-semibold tracking-[-.035em]">{title}</h3><p className="mt-4 text-sm leading-7 text-slate-600">{text}</p></motion.article>)}</div></div></section>

      <section className="bg-[#0f172a] py-16 text-white lg:py-20"><div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#a7f3d0]">How it works</p><h2 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">Simple for users. Structured underneath.</h2></div><p className="max-w-3xl text-base leading-8 text-white/62">Candidates, recruiters and administrators each see the tools they need, while shared workflows keep applications, interviews, communications, payments and decisions connected across the platform.</p></div><div className="mt-10 grid gap-4 md:grid-cols-3">{[["Discover","Search and profile-driven opportunity discovery."],["Coordinate","Clear application, interview and communication workflows."],["Operate","Verification, moderation, payments and platform oversight."]].map(([title,text],index)=><motion.div key={title} whileHover={{y:-5}} className="border border-white/10 bg-white/[.04] p-7"><span className="text-xs font-bold text-[#a5b4fc]">0{index+1}</span><h3 className="mt-5 text-2xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-white/52">{text}</p></motion.div>)}</div></div></section>

      <section className="bg-white py-16 lg:py-20"><div className="mx-auto grid max-w-[1680px] gap-10 px-5 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:px-12 xl:px-16"><div><p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#b9252d]">Within RB Corp</p><h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight sm:text-6xl">A dedicated career platform with a wider enterprise role.</h2><p className="mt-6 max-w-3xl text-base leading-8 text-[#656163]">RB Service Connect serves as the group’s dedicated pathway for jobs and hiring, which is why RB Corp does not maintain a separate careers page.</p></div><div className="flex flex-col justify-end gap-3"><Link to="/companies" className="group inline-flex items-center justify-between bg-[#0f172a] px-6 py-5 text-sm font-bold uppercase tracking-[.08em] text-white transition hover:-translate-y-0.5 hover:bg-indigo-600">View all businesses <span className="transition group-hover:translate-x-1">→</span></Link><Link to="/contact" className="group inline-flex items-center justify-between border border-black/15 px-6 py-5 text-sm font-bold uppercase tracking-[.08em] transition hover:-translate-y-0.5 hover:bg-[#ecfdf5]">Connect with RB Corp <span className="transition group-hover:translate-x-1">→</span></Link></div></div></section>
    </main>
  );
}

export default RBServiceConnectPage;
