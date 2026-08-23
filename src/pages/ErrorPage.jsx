import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <main className="grid min-h-[72vh] place-items-center bg-[#0b0b0c] px-5 py-16 text-white">
      <div className="mx-auto w-full max-w-4xl text-center">
        <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#ff6b6e]">System state</p>
        <h1 className="mt-6 font-serif text-[clamp(3.5rem,9vw,7.5rem)] leading-[.92] tracking-[-.055em]">Something interrupted the <span className="text-[#ff5b5e]">experience.</span></h1>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/55">The page could not complete normally. You can return to the main site or continue browsing the RB Corp portfolio.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link to="/" className="group inline-flex items-center gap-3 bg-[#ff4d50] px-6 py-4 text-sm font-bold uppercase tracking-[.08em] transition hover:-translate-y-0.5 hover:bg-[#e83c40]">Return home <span className="transition-transform group-hover:translate-x-1">→</span></Link>
          <Link to="/companies" className="inline-flex items-center border border-white/15 px-6 py-4 text-sm font-bold uppercase tracking-[.08em] transition hover:-translate-y-0.5 hover:bg-white/[.06]">Our businesses</Link>
        </div>
      </div>
    </main>
  );
}

export default ErrorPage;
