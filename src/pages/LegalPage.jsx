import { Link } from "react-router-dom";

function LegalPage({ eyebrow, title, intro, sections }) {
  return (
    <main className="bg-[#f7f4f0] text-[#151517]">
      <section className="bg-[#0b0b0c] text-white">
        <div className="mx-auto max-w-[1680px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
          <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.24em] text-[#ff6b6e]"><span className="h-px w-8 bg-[#ff4d50]" />{eyebrow}</p>
          <h1 className="mt-6 max-w-5xl font-serif text-[clamp(3.4rem,6vw,6.5rem)] leading-[.94] tracking-[-.05em]">{title}</h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-white/62 sm:text-lg">{intro}</p>
        </div>
      </section>

      <section className="bg-[#fffdfa] py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-5 sm:px-8 lg:grid-cols-[.32fr_.68fr] lg:px-12 xl:px-16">
          <aside className="h-fit border-l-2 border-[#ff4d50] pl-5 lg:sticky lg:top-28">
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#b9252d]">RB Corp legal</p>
            <p className="mt-4 text-sm leading-7 text-[#6b6668]">These terms apply to the RB Corp corporate website. Individual operating companies may maintain their own policies for their separate platforms and services.</p>
            <div className="mt-6 grid gap-3 text-xs font-bold uppercase tracking-[.07em]">
              <Link to="/privacy" className="transition hover:translate-x-1 hover:text-[#b9252d]">Privacy Policy →</Link>
              <Link to="/terms" className="transition hover:translate-x-1 hover:text-[#b9252d]">Terms of Use →</Link>
              <Link to="/disclaimer" className="transition hover:translate-x-1 hover:text-[#b9252d]">Disclaimer →</Link>
              <Link to="/contact" className="transition hover:translate-x-1 hover:text-[#b9252d]">Contact RB Corp →</Link>
            </div>
          </aside>

          <div className="space-y-10">
            {sections.map(([heading, body]) => (
              <article key={heading} className="border-b border-black/10 pb-10 last:border-b-0">
                <h2 className="font-serif text-3xl leading-tight sm:text-4xl">{heading}</h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-[#625d5f] sm:text-base sm:leading-8">
                  {Array.isArray(body) ? body.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : <p>{body}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default LegalPage;
