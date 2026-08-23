import { motion } from "motion/react";
import { Link } from "react-router-dom";

const legacyBase = "https://raw.githubusercontent.com/Shahzadkhanks19/rbcorp-react/main";
const financeArtwork = `${legacyBase}/src/Pages/Home/Images/finance-acc.webp`;
const financeLogo = `${legacyBase}/src/Pages/About/Images/rb%20finance%20logo%20file.jpg`;

const principles = [
  ["01", "Clarity first", "Financial decisions should be understandable, transparent and grounded in the needs of the person or business making them."],
  ["02", "Responsible access", "The focus is on creating useful financial pathways without turning complexity into a barrier."],
  ["03", "Long-term thinking", "The business is positioned around durable value and disciplined decision-making rather than short-term noise."],
  ["04", "Trust by design", "Clear communication, careful processes and responsible conduct sit at the centre of the experience."],
];

const focusAreas = [
  ["Understand", "Start with context, needs and priorities before deciding on the right financial direction."],
  ["Structure", "Turn financial complexity into clearer choices, steps and expectations."],
  ["Support", "Build confidence through communication, consistency and responsible follow-through."],
];

function RBFinancePage() {
  return (
    <main className="overflow-hidden bg-[#f7f4ef] text-[#151517]">
      <section className="relative isolate overflow-hidden bg-[#111214] text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_18%,rgba(201,168,106,.18),transparent_28%),radial-gradient(circle_at_14%_82%,rgba(255,77,80,.09),transparent_30%)]" />
        <div className="absolute right-[8%] top-0 -z-10 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="mx-auto grid min-h-[610px] max-w-[1680px] items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:px-12 xl:px-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
            <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#d8bd86]">RB Corp · Financial Services</p>
            <div className="mt-7 inline-flex border border-white/10 bg-white px-5 py-4 shadow-xl shadow-black/20">
              <img src={financeLogo} alt="RB Finance" className="h-20 w-auto max-w-[280px] object-contain" />
            </div>
            <h1 className="mt-8 max-w-4xl font-serif text-[clamp(3.2rem,5.7vw,6.1rem)] leading-[.95] tracking-[-.05em]">Financial thinking built around <span className="text-[#c9a86a]">clarity and confidence.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">RB Finance represents the group’s financial-services direction: a business built around responsible access, clearer decision-making and long-term value.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/companies" className="inline-flex items-center bg-[#c9a86a] px-6 py-4 text-sm font-bold uppercase tracking-[.08em] text-[#151517] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d7bd8b]">Back to portfolio</Link>
              <Link to="/contact" className="inline-flex items-center border border-white/20 px-6 py-4 text-sm font-bold uppercase tracking-[.08em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10">Connect with RB Corp</Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7, delay: .08 }} className="relative min-h-[470px] overflow-hidden border border-white/10 bg-[#1b1c1f] shadow-2xl shadow-black/30 sm:min-h-[520px]">
            <img src={financeArtwork} alt="RB Finance visual" className="absolute inset-0 h-full w-full object-cover opacity-82" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111214] via-[#111214]/20 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 border border-white/10 bg-[#111214]/90 p-6 backdrop-blur sm:inset-x-7 sm:bottom-7">
              <span className="text-[9px] font-bold uppercase tracking-[.2em] text-[#d8bd86]">Operating idea</span>
              <strong className="mt-2 block max-w-xl font-serif text-3xl font-normal leading-tight">Make financial decisions easier to understand and more responsible to act on.</strong>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#fffdfa] py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1680px] gap-10 px-5 sm:px-8 lg:grid-cols-[.78fr_1.22fr] lg:px-12 xl:px-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#9a743c]">Role in the group</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-[3.5rem]">A financial-services arm shaped around trust and discipline.</h2>
          </div>
          <div className="grid gap-7 text-base leading-8 text-[#656163] md:grid-cols-2">
            <p>RB Finance gives the group a dedicated presence in financial services, extending RB Corp’s broader approach to responsible enterprise into a sector where clarity and trust matter deeply.</p>
            <p>Because the business does not yet have a standalone public website, this RB Corp profile remains intentionally high-level and avoids presenting unverified products, rates, returns or regulatory claims.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#efe8dd] py-16 lg:py-20">
        <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[.68fr_1.32fr] lg:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#9a743c]">What defines RB Finance</p>
              <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">Financial access without unnecessary complexity.</h2>
            </div>
            <p className="max-w-3xl text-base leading-8 text-[#615d5e]">The intended direction is straightforward: understand the need, explain the path clearly, act responsibly and keep the relationship grounded in long-term confidence.</p>
          </div>

          <div className="mt-10 grid border-y border-black/10 md:grid-cols-2 xl:grid-cols-4 xl:divide-x xl:divide-black/10">
            {principles.map(([number, title, text], index) => (
              <motion.article key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .4, delay: index * .05 }} className="group p-7 transition duration-300 hover:bg-white/55 sm:p-9">
                <span className="text-xs font-bold text-[#b9252d]">{number}</span>
                <h3 className="mt-5 font-serif text-2xl leading-tight transition duration-300 group-hover:-translate-y-1 group-hover:text-[#9a743c]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#6c6668]">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#151517] py-16 text-white lg:py-20">
        <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#d8bd86]">The approach</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">Simple in principle. Disciplined in execution.</h2>
            </div>
            <p className="max-w-3xl text-base leading-8 text-white/58">Rather than overstate what is not yet publicly documented, the page focuses on the operating philosophy RB Finance is expected to carry inside the wider group.</p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {focusAreas.map(([title, text], index) => (
              <motion.article key={title} whileHover={{ y: -5 }} className="border border-white/10 bg-white/[.04] p-7 transition hover:border-[#c9a86a]/40 hover:bg-white/[.06]">
                <span className="text-xs font-bold text-[#c9a86a]">0{index + 1}</span>
                <h3 className="mt-5 font-serif text-3xl">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/52">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffdfa] py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1680px] gap-10 px-5 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:px-12 xl:px-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#9a743c]">Within RB Corp</p>
            <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl lg:text-[3.5rem]">A developing financial-services business within a diversified group.</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[#656163]">RB Finance broadens the group’s portfolio while following the same shared standards around responsibility, trust and long-term value creation.</p>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/contact" className="group inline-flex items-center justify-between bg-[#151517] px-6 py-5 text-sm font-bold uppercase tracking-[.08em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#9a743c]">Connect with RB Corp <span className="transition-transform group-hover:translate-x-1">→</span></Link>
            <Link to="/companies" className="group inline-flex items-center justify-between border border-black/15 px-6 py-5 text-sm font-bold uppercase tracking-[.08em] transition duration-300 hover:-translate-y-0.5 hover:bg-[#efe8dd]">View all businesses <span className="transition-transform group-hover:translate-x-1">→</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RBFinancePage;
