import { motion } from "motion/react";
import { Link } from "react-router-dom";

const beyonistBase = "https://raw.githubusercontent.com/Shahzadkhanks19/beyonist-mern/main/client/public";

const pillars = [
  ["01", "Confidence before complexity", "Focused formulas, clearer routines and a brand experience designed to feel approachable rather than overwhelming."],
  ["02", "Products with a purpose", "Each product earns its place through how it fits naturally into real skincare and self-care rituals."],
  ["03", "Beauty without a template", "Beyonist celebrates individuality instead of asking everyone to chase the same version of beauty."],
];

function BeyonistPage() {
  return (
    <main className="overflow-hidden bg-[#fffaf1] text-[#151517]">
      <section className="relative isolate overflow-hidden bg-[#d13c3c] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_22%,rgba(255,255,255,.12),transparent_28%),radial-gradient(circle_at_60%_80%,rgba(0,0,0,.12),transparent_34%)]" />
        <div className="mx-auto grid min-h-[650px] max-w-[1680px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.82fr_1.18fr] lg:px-12 xl:px-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/80">RB Corp · Beauty & Skincare</p>
            <img src={`${beyonistBase}/brand/beyonist-wordmark-white.webp`} alt="Beyonist" className="mt-8 w-full max-w-[420px] object-contain" />
            <h1 className="mt-8 max-w-3xl font-serif text-[clamp(3.4rem,6vw,6.5rem)] leading-[.94] tracking-[-.05em]">Beauty that feels <span className="text-[#1a1a1a]">more like you.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/88 sm:text-lg">Beyonist is RB Corp’s beauty and skincare business, built around confidence, individuality and intentional care rather than one-size-fits-all beauty standards.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="https://beyonist.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#151517] px-6 py-4 text-sm font-bold uppercase tracking-[.08em] text-white transition hover:bg-black">Visit Beyonist <span>↗</span></a><Link to="/companies" className="inline-flex items-center border border-white/30 px-6 py-4 text-sm font-bold uppercase tracking-[.08em] text-white transition hover:bg-white/10">Back to portfolio</Link></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .08 }} className="relative min-h-[500px] overflow-hidden bg-[#f0d5c2] sm:min-h-[580px]">
            <img src={`${beyonistBase}/images/product-hamper-840.webp`} alt="Beyonist skincare collection" className="absolute inset-0 h-full w-full object-contain p-10 drop-shadow-2xl sm:p-16" />
            <div className="absolute bottom-5 right-5 bg-[#151517] px-5 py-4 text-white"><span className="block text-[9px] uppercase tracking-[.18em] text-white/65">Brand belief</span><strong className="mt-1 block max-w-[260px] font-serif text-2xl font-normal leading-tight">Confidence is part of the ritual.</strong></div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#fffdfa] py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1680px] gap-12 px-5 sm:px-8 lg:grid-cols-[.78fr_1.22fr] lg:px-12 xl:px-16">
          <div><p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#b9252d]">Role in the group</p><h2 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">Consumer beauty with a more human point of view.</h2></div>
          <div className="grid gap-8 text-base leading-8 text-[#656163] md:grid-cols-2"><p>Beyonist gives RB Corp a direct consumer-facing presence in beauty and skincare. Its role is not simply to sell products, but to build a brand experience around confidence, care and everyday wellbeing.</p><p>The business keeps its own distinct visual identity and customer experience while sharing the group’s broader focus on responsibility, quality and long-term value creation.</p></div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f3e3d8] py-20 lg:py-24">
        <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16"><p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#b9252d]">What defines Beyonist</p><div className="mt-10 grid border-y border-black/10 md:grid-cols-3 md:divide-x md:divide-black/10">{pillars.map(([number,title,text], index)=><motion.article key={title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{duration:.4,delay:index*.06}} className="p-7 sm:p-9"><span className="text-xs font-bold text-[#d13c3c]">{number}</span><h3 className="mt-5 font-serif text-3xl leading-tight">{title}</h3><p className="mt-4 text-sm leading-7 text-[#6b6668]">{text}</p></motion.article>)}</div></div>
      </section>

      <section className="bg-[#151517] py-20 text-white lg:py-24">
        <div className="mx-auto grid max-w-[1680px] gap-8 px-5 sm:px-8 lg:grid-cols-3 lg:px-12 xl:px-16">
          {[['Glow', 'ivy-serum-800.webp', 'Focused serum-led care for everyday rituals.'], ['Hydrate', 'milky-coconut-800.webp', 'Moisture and comfort built into daily skincare.'], ['Reset', 'gluta-kojic-800.webp', 'Targeted care designed to fit a considered routine.']].map(([label,image,text])=><article key={label} className="group overflow-hidden border border-white/10 bg-[#0b0b0c]"><div className="grid aspect-square place-items-center overflow-hidden bg-[#ead5c7]"><img src={`${beyonistBase}/images/${image}`} alt="" className="h-full w-full object-contain p-10 transition duration-500 group-hover:scale-105" /></div><div className="p-6"><span className="text-[9px] font-bold uppercase tracking-[.2em] text-[#ff7777]">{label}</span><p className="mt-3 font-serif text-2xl">{text}</p></div></article>)}
        </div>
      </section>

      <section className="bg-[#fffdfa] py-20 lg:py-24"><div className="mx-auto grid max-w-[1680px] gap-10 px-5 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:px-12 xl:px-16"><div><p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#b9252d]">Within RB Corp</p><h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight sm:text-6xl">A distinctive brand. A shared standard for long-term growth.</h2><p className="mt-6 max-w-3xl text-base leading-8 text-[#656163]">Beyonist retains its own personality, customer voice and product language while operating as part of a broader group built around disciplined execution and responsible enterprise.</p></div><div className="flex flex-col justify-end gap-3"><a href="https://beyonist.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-between bg-[#d13c3c] px-6 py-5 text-sm font-bold uppercase tracking-[.08em] text-white transition hover:bg-[#b9252d]">Explore Beyonist <span>↗</span></a><Link to="/companies" className="inline-flex items-center justify-between border border-black/15 px-6 py-5 text-sm font-bold uppercase tracking-[.08em] transition hover:bg-[#151517] hover:text-white">View all businesses <span>→</span></Link></div></div></section>
    </main>
  );
}

export default BeyonistPage;
