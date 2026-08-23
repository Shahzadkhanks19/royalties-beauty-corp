import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const inquiryTypes = ["Group inquiry", "Partnership", "Media & insights", "Business opportunity", "Other"];

const businessRoutes = [
  ["Beyonist", "Beauty & skincare", "https://beyonist.vercel.app"],
  ["RB Service Connect", "Jobs & recruitment", "https://rbserviceconnect.vercel.app"],
  ["RB Finance", "Financial services", "/companies/rb-finance"],
  ["RB Charity Foundation", "Social impact", "https://rbcharityfoundation.vercel.app"],
  ["Royalties Buffet", "Hospitality & dining", "https://royaltiesbuffet.vercel.app"],
];

const destinationCards = [
  ["RB Corp", "Group, partnership, media or enterprise enquiries", "Use the group form below", "group"],
  ["Beyonist", "Products, beauty and brand-specific support", "Visit Beyonist", "https://beyonist.vercel.app"],
  ["RB Service Connect", "Jobs, candidates, recruiters and hiring", "Visit Service Connect", "https://rbserviceconnect.vercel.app"],
  ["RB Finance", "Finance-related group enquiries", "View RB Finance", "/companies/rb-finance"],
  ["RB Charity Foundation", "Causes, donations and volunteering", "Visit Foundation", "https://rbcharityfoundation.vercel.app"],
  ["Royalties Buffet", "Dining, reservations and hospitality", "Visit Royalties Buffet", "https://royaltiesbuffet.vercel.app"],
];

const nextSteps = [
  ["01", "Inquiry received", "Your message is captured with the context you provide, without browser-default popups or interruptive dialogs."],
  ["02", "Routed appropriately", "Group-level enquiries can be directed internally to the relevant RB Corp business or function."],
  ["03", "Follow-up continues", "The relevant team can continue the conversation through the most appropriate contact channel."],
];

const initialForm = { name: "", email: "", phone: "", organization: "", inquiryType: "Group inquiry", message: "" };

function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());

    if (form.name.trim().length < 2) return setStatus({ type: "error", message: "Please enter your name." });
    if (!emailValid) return setStatus({ type: "error", message: "Please enter a valid email address." });
    if (form.message.trim().length < 10) return setStatus({ type: "error", message: "Please tell us a little more about your inquiry." });

    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok || !data.ok) throw new Error(data.message || "Unable to submit your inquiry.");
      setForm(initialForm);
      setStatus({ type: "success", message: data.message || "Your inquiry has been received." });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Unable to submit your inquiry right now." });
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full appearance-none border border-black/12 bg-white px-4 py-4 text-sm text-[#151517] outline-none transition placeholder:text-[#9b9597] focus:border-[#ff4d50] focus:ring-2 focus:ring-[#ff4d50]/10";

  return (
    <main className="overflow-hidden bg-[#f7f4f0] text-[#151517]">
      <section className="relative isolate overflow-hidden bg-[#0b0b0c] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_20%,rgba(255,77,80,.2),transparent_28%),radial-gradient(circle_at_62%_80%,rgba(201,168,106,.11),transparent_32%)]" />
        <div className="mx-auto grid min-h-[560px] max-w-[1680px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_.62fr] lg:px-12 xl:px-16">
          <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.6}}>
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.24em] text-[#ff6b6e]"><span className="h-px w-8 bg-[#ff4d50]" />Contact RB Corp</p>
            <h1 className="mt-6 max-w-5xl font-serif text-[clamp(3.6rem,6.6vw,7rem)] leading-[.94] tracking-[-.05em]">Start the right <span className="text-[#ff5b5e]">conversation.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">For group-level enquiries, partnerships, media, business opportunities or general questions, reach RB Corp here. Brand-specific needs can go directly to the relevant company.</p>
          </motion.div>
          <motion.aside initial={{opacity:0,x:24}} animate={{opacity:1,x:0}} transition={{duration:.65,delay:.08}} className="border border-white/12 bg-[#151517]/88 p-7 sm:p-8"><p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#c9a86a]">Route it correctly</p><h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">One group. Different points of contact.</h2><p className="mt-5 text-sm leading-7 text-white/56">Use the group form for RB Corp matters. For jobs, dining, beauty or charity participation, go directly to the relevant operating company below.</p></motion.aside>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#eee7e0] py-16 lg:py-20">
        <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-7 lg:grid-cols-[.72fr_1.28fr] lg:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#b9252d]">Choose the right destination</p><h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Get to the right team faster.</h2></div><p className="max-w-3xl text-base leading-8 text-[#656163]">Use RB Corp for group matters. For brand-specific support, jobs, dining or community participation, go directly to the relevant operating company.</p></div>
          <div className="mt-10 grid gap-px border border-black/10 bg-black/10 md:grid-cols-2 xl:grid-cols-3">{destinationCards.map(([name,copy,label,href],index)=>{const card=<motion.div initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{duration:.35,delay:(index%3)*.04}} className="group h-full bg-white p-6 transition hover:bg-[#f8f1ec] sm:p-7"><span className="text-[9px] font-bold uppercase tracking-[.18em] text-[#b9252d]">Destination {String(index+1).padStart(2,"0")}</span><h3 className="mt-4 font-serif text-2xl">{name}</h3><p className="mt-3 text-sm leading-7 text-[#6b6668]">{copy}</p><span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.08em]">{label}<span className="text-[#ff4d50] transition-transform group-hover:translate-x-1">{href.startsWith("http")?"↗":"→"}</span></span></motion.div>;if(href==="group")return <a key={name} href="#group-inquiry" className="block">{card}</a>;if(href.startsWith("http"))return <a key={name} href={href} target="_blank" rel="noreferrer" className="block">{card}</a>;return <Link key={name} to={href} className="block">{card}</Link>})}</div>
        </div>
      </section>

      <section id="group-inquiry" className="scroll-mt-28 bg-[#fffdfa] py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1680px] gap-10 px-5 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:px-12 xl:px-16">
          <div><p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#b9252d]">Group inquiry</p><h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Tell us what you want to discuss.</h2><p className="mt-5 max-w-xl text-base leading-8 text-[#656163]">This form is for RB Corp-level conversations. We only ask for the information needed to understand and route your message.</p></div>

          <form onSubmit={handleSubmit} noValidate className="border border-black/10 bg-[#f2ece6] p-5 sm:p-7 lg:p-9">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block"><span className="mb-2 block text-[10px] font-bold uppercase tracking-[.16em] text-[#6f696b]">Name *</span><input value={form.name} onChange={(e)=>updateField("name",e.target.value)} className={inputClass} placeholder="Your name" autoComplete="name" /></label>
              <label className="block"><span className="mb-2 block text-[10px] font-bold uppercase tracking-[.16em] text-[#6f696b]">Email *</span><input value={form.email} onChange={(e)=>updateField("email",e.target.value)} className={inputClass} placeholder="you@example.com" inputMode="email" autoComplete="email" /></label>
              <label className="block"><span className="mb-2 block text-[10px] font-bold uppercase tracking-[.16em] text-[#6f696b]">Phone</span><input value={form.phone} onChange={(e)=>updateField("phone",e.target.value)} className={inputClass} placeholder="Optional" inputMode="tel" autoComplete="tel" /></label>
              <label className="block"><span className="mb-2 block text-[10px] font-bold uppercase tracking-[.16em] text-[#6f696b]">Organization</span><input value={form.organization} onChange={(e)=>updateField("organization",e.target.value)} className={inputClass} placeholder="Company or organization" autoComplete="organization" /></label>
            </div>

            <div className="mt-4 relative"><span className="mb-2 block text-[10px] font-bold uppercase tracking-[.16em] text-[#6f696b]">Inquiry type</span><button type="button" onClick={()=>setDropdownOpen((open)=>!open)} aria-expanded={dropdownOpen} className="flex w-full items-center justify-between border border-black/12 bg-white px-4 py-4 text-left text-sm transition hover:border-[#ff4d50]/60 focus:outline-none focus:ring-2 focus:ring-[#ff4d50]/10"><span>{form.inquiryType}</span><span className={`text-[#ff4d50] transition-transform ${dropdownOpen?"rotate-180":""}`}>⌄</span></button>{dropdownOpen && <div className="absolute z-30 mt-2 w-full border border-black/10 bg-white p-2 shadow-2xl shadow-black/10">{inquiryTypes.map((type)=><button key={type} type="button" onClick={()=>{updateField("inquiryType",type);setDropdownOpen(false)}} className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition hover:bg-[#f5efea] ${form.inquiryType===type?"bg-[#f8ecec] text-[#b9252d]":""}`}><span>{type}</span>{form.inquiryType===type && <span className="text-[#ff4d50]">✓</span>}</button>)}</div>}</div>

            <label className="mt-4 block"><span className="mb-2 block text-[10px] font-bold uppercase tracking-[.16em] text-[#6f696b]">Message *</span><textarea value={form.message} onChange={(e)=>updateField("message",e.target.value)} className={`${inputClass} min-h-40 resize-none`} placeholder="Tell us about your inquiry" /></label>
            {status.message && <div role="status" className={`mt-5 border px-4 py-3 text-sm leading-6 ${status.type==="success"?"border-emerald-300 bg-emerald-50 text-emerald-800":"border-red-200 bg-red-50 text-red-700"}`}>{status.message}</div>}
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-md text-xs leading-6 text-[#777174]">Your message is handled as a group-level inquiry and may be routed internally to the relevant business.</p><button type="submit" disabled={submitting} className="group inline-flex min-w-44 items-center justify-center gap-3 bg-[#ff4d50] px-6 py-4 text-sm font-bold uppercase tracking-[.08em] text-white transition hover:-translate-y-0.5 hover:bg-[#e83c40] disabled:cursor-not-allowed disabled:opacity-55">{submitting?"Sending...":"Send inquiry"}<span className="transition-transform group-hover:translate-x-1">→</span></button></div>
          </form>
        </div>
      </section>

      <section className="bg-[#151517] py-16 text-white lg:py-20"><div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16"><div className="grid gap-7 lg:grid-cols-[.72fr_1.28fr] lg:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#ff6b6e]">What happens next</p><h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">A clear path after you reach out.</h2></div><p className="max-w-3xl text-base leading-8 text-white/56">We do not publish a response-time promise until one is formally established. The important part is that the inquiry reaches the right destination with enough context to continue the conversation.</p></div><div className="mt-10 grid gap-px border border-white/10 bg-white/10 lg:grid-cols-3">{nextSteps.map(([number,title,copy],index)=><motion.article key={title} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{duration:.4,delay:index*.06}} className="bg-[#151517] p-7 transition hover:bg-white/[.04] sm:p-9"><span className="text-xs font-bold text-[#c9a86a]">{number}</span><h3 className="mt-5 font-serif text-3xl">{title}</h3><p className="mt-4 text-sm leading-7 text-white/52">{copy}</p></motion.article>)}</div></div></section>

      <section className="border-y border-black/10 bg-[#eee7e0] py-16 lg:py-20"><div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16"><div className="grid gap-7 lg:grid-cols-[.72fr_1.28fr] lg:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#b9252d]">Contact a business</p><h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Go directly to the company you need.</h2></div><p className="max-w-3xl text-base leading-8 text-[#656163]">For customer service, jobs, bookings, donations or brand-specific conversations, the operating company is usually the fastest route.</p></div><div className="mt-10 grid gap-px border border-black/10 bg-black/10 md:grid-cols-2 xl:grid-cols-5">{businessRoutes.map(([name,sector,href])=>{const external=href.startsWith("http");const classes="group bg-white p-6 transition hover:bg-[#f7f1eb]";return external?<a key={name} href={href} target="_blank" rel="noreferrer" className={classes}><span className="text-[9px] font-bold uppercase tracking-[.18em] text-[#b9252d]">{sector}</span><h3 className="mt-4 font-serif text-2xl">{name}</h3><span className="mt-7 inline-flex text-xs font-bold uppercase tracking-[.08em]">Visit business <span className="ml-2 text-[#ff4d50] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></span></a>:<Link key={name} to={href} className={classes}><span className="text-[9px] font-bold uppercase tracking-[.18em] text-[#b9252d]">{sector}</span><h3 className="mt-4 font-serif text-2xl">{name}</h3><span className="mt-7 inline-flex text-xs font-bold uppercase tracking-[.08em]">View profile <span className="ml-2 text-[#ff4d50] transition-transform group-hover:translate-x-1">→</span></span></Link>})}</div></div></section>
    </main>
  );
}

export default ContactPage;
