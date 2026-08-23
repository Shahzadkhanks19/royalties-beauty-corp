import { motion } from "motion/react";
import { Link } from "react-router-dom";

const buffetSite = "https://royaltiesbuffet.vercel.app";

const images = {
  hero: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2200&q=90",
  buffet: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85",
  celebration: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1400&q=85",
  restaurant: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85",
};

const pillars = [
  ["01", "Abundant dining", "A broad buffet experience brings global favourites, Indian delicacies, live grills, desserts and beverages together under one destination."],
  ["02", "Royal hospitality", "The brand pairs food with attentive service and a premium ambience designed to make everyday dining and celebrations feel more considered."],
  ["03", "Celebration-led experiences", "Family dinners, birthdays, gatherings, corporate occasions and catered events extend the experience beyond a conventional restaurant visit."],
];

function RoyaltiesBuffetPage() {
  return (
    <main className="overflow-hidden bg-[#f3ecdf] text-[#17130e]">
      <section className="relative isolate overflow-hidden bg-[#080706] text-white">
        <img src={images.hero} alt="Royalties Buffet live grill dining experience" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/88 to-black/30" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(216,171,77,.22),transparent_30%)]" />
        <div className="mx-auto grid min-h-[650px] max-w-[1680px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_.55fr] lg:px-12 xl:px-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="max-w-4xl">
            <p className="text-[10px] font-black uppercase tracking-[.24em] text-[#d8ab4d]">RB Corp · Hospitality & Dining</p>
            <h1 className="mt-7 font-serif text-[clamp(3.6rem,6.5vw,7rem)] leading-[.9] tracking-[-.05em]">Royalty on <span className="text-[#d8ab4d]">every table.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">Royalties Buffet brings global flavours, live grills, generous buffet dining and celebration-ready hospitality together in one premium restaurant experience.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href={buffetSite} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 rounded-full bg-[#d8ab4d] px-6 py-4 text-sm font-black uppercase tracking-[.07em] text-black transition hover:-translate-y-0.5 hover:bg-[#e6bc63]">Visit Royalties Buffet <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></a><Link to="/companies" className="rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-black uppercase tracking-[.07em] transition hover:-translate-y-0.5 hover:bg-white/15">Back to portfolio</Link></div>
          </motion.div>
          <motion.aside initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .65, delay: .08 }} className="border border-[#d8ab4d]/25 bg-black/55 p-7 backdrop-blur-xl sm:p-8"><p className="text-[10px] font-black uppercase tracking-[.2em] text-[#d8ab4d]">The experience</p><h2 className="mt-4 font-serif text-3xl">A feast built around choice.</h2><div className="mt-6 space-y-4 text-sm leading-7 text-white/68"><p>Live grill and freshly served highlights.</p><p>Global and Indian buffet favourites.</p><p>Celebrations, catering and hospitality beyond the table.</p></div></motion.aside>
        </div>
      </section>

      <section className="bg-[#fffaf2] py-16 lg:py-20"><div className="mx-auto grid max-w-[1680px] gap-10 px-5 sm:px-8 lg:grid-cols-[.78fr_1.22fr] lg:px-12 xl:px-16"><div><p className="text-[10px] font-black uppercase tracking-[.24em] text-[#9d7328]">Role in the group</p><h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-[3.5rem]">The hospitality expression of the RB Corp portfolio.</h2></div><div className="grid gap-7 text-base leading-8 text-[#6e665b] md:grid-cols-2"><p>Royalties Buffet extends the group into experience-led hospitality, where food, service, ambience and occasions come together as one consumer-facing destination.</p><p>Its proposition is broader than a meal alone: the standalone brand also supports reservations, menu discovery, catering, celebrations, locations and franchise interest.</p></div></div></section>

      <section className="bg-[#0b0b0b] py-16 text-white lg:py-20"><div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16"><div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end"><div><p className="text-[10px] font-black uppercase tracking-[.24em] text-[#d8ab4d]">What defines Royalties</p><h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Dining designed to feel generous, social and memorable.</h2></div><p className="max-w-3xl text-base leading-8 text-white/58">The latest Royalties Buffet experience is built around live grills, a grand buffet, premium service, royal ambience and a hygiene-first approach—supported by celebration, catering and growth pathways.</p></div><div className="mt-10 grid border-y border-white/10 md:grid-cols-3 md:divide-x md:divide-white/10">{pillars.map(([number,title,text],index)=><motion.article key={title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{duration:.4,delay:index*.06}} className="group p-7 transition hover:bg-[#d8ab4d]/[.06] sm:p-9"><span className="text-xs font-black text-[#d8ab4d]">{number}</span><h3 className="mt-5 font-serif text-3xl leading-tight transition group-hover:-translate-y-1">{title}</h3><p className="mt-4 text-sm leading-7 text-white/52">{text}</p></motion.article>)}</div></div></section>

      <section className="bg-[#f3ecdf] py-16 lg:py-20"><div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16"><div className="mb-9 grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-[10px] font-black uppercase tracking-[.24em] text-[#9d7328]">The Royalties experience</p><h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Food, occasions and hospitality in one brand world.</h2></div><p className="max-w-2xl text-base leading-8 text-[#6e665b]">The profile stays focused on the business at group level while the dedicated Royalties Buffet website handles the full dining journey, including menu, reservations and event-led offerings.</p></div><div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr_.8fr]">{[[images.buffet,"Premium buffet dining"],[images.celebration,"Celebration dining"],[images.restaurant,"Restaurant ambience"]].map(([src,alt],index)=><motion.figure key={src} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.45,delay:index*.05}} className="group overflow-hidden bg-black"><img src={src} alt={alt} className="aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-105" /></motion.figure>)}</div></div></section>

      <section className="bg-[#fffaf2] py-16 lg:py-20"><div className="mx-auto grid max-w-[1680px] gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:px-12 xl:px-16"><div><p className="text-[10px] font-black uppercase tracking-[.24em] text-[#9d7328]">Within RB Corp</p><h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl lg:text-[3.5rem]">A consumer experience built around hospitality and occasion.</h2><p className="mt-5 max-w-3xl text-base leading-8 text-[#6e665b]">Royalties Buffet gives RB Corp a distinct hospitality platform with its own dining identity, customer journey and avenues for catering and expansion.</p></div><div className="flex flex-col gap-3"><a href={buffetSite} target="_blank" rel="noreferrer" className="group inline-flex items-center justify-between rounded-full bg-[#d8ab4d] px-6 py-5 text-sm font-black uppercase tracking-[.07em] text-black transition hover:-translate-y-0.5 hover:bg-[#e6bc63]">Explore Royalties Buffet <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></a><Link to="/companies" className="group inline-flex items-center justify-between rounded-full border border-black/15 px-6 py-5 text-sm font-black uppercase tracking-[.07em] transition hover:-translate-y-0.5 hover:bg-black hover:text-white">View all businesses <span className="transition-transform group-hover:translate-x-1">→</span></Link></div></div></section>
    </main>
  );
}

export default RoyaltiesBuffetPage;
