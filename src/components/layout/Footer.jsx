import { Link } from "react-router-dom";

const companies = [
  ["Beyonist", "/companies/beyonist"],
  ["RB Service Connect", "/companies/rb-service-connect"],
  ["RB Finance", "/companies/rb-finance"],
  ["Royalties Charity", "/companies/royalties-charity"],
  ["Royalties Buffet", "/companies/royalties-buffet"],
];

const rbCorpLogo = "/brand/rb-corp-red.svg";

function FooterLink({ to, children }) {
  return (
    <Link to={to} className="group inline-flex w-fit items-center gap-2 transition duration-300 hover:translate-x-1 hover:text-[#ff6b6e]">
      <span className="h-px w-0 bg-[#ff4d50] transition-all duration-300 group-hover:w-4" />
      {children}
    </Link>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0b0b0c] text-white">
      <div className="mx-auto max-w-[1680px] px-5 py-16 sm:px-8 lg:px-12 xl:px-16 lg:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.35fr_.75fr_.75fr_.75fr]">
          <div>
            <Link to="/" className="group flex w-fit items-center gap-4">
              <img src={rbCorpLogo} alt="Royalties Beauty Corp" loading="lazy" decoding="async" className="h-24 w-28 object-contain transition duration-300 group-hover:scale-[1.04]" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] transition group-hover:text-[#ff6b6e]">Royalties Beauty Corp</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-[#ff6b6e]">Diversified enterprise group</p>
              </div>
            </Link>
            <p className="mt-7 max-w-xl text-sm leading-7 text-white/52">Building and growing responsible businesses across beauty, services, finance, hospitality and social impact with a long-term commitment to trust, quality and sustainable value.</p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c9a86a]">Businesses</p>
            <div className="mt-5 grid gap-3 text-sm text-white/58">{companies.map(([label, to]) => <FooterLink key={to} to={to}>{label}</FooterLink>)}</div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c9a86a]">Corporate</p>
            <div className="mt-5 grid gap-3 text-sm text-white/58">
              <FooterLink to="/about">About RB Corp</FooterLink>
              <FooterLink to="/impact">Impact</FooterLink>
              <FooterLink to="/insights">Insights</FooterLink>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c9a86a]">Connect</p>
            <div className="mt-5 grid gap-3 text-sm text-white/58">
              <FooterLink to="/contact">Contact us</FooterLink>
              <FooterLink to="/companies">Our businesses</FooterLink>
              <FooterLink to="/companies/rb-service-connect">Jobs via RB Service Connect</FooterLink>
              <FooterLink to="/">Home</FooterLink>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-6 text-xs text-white/34 lg:flex-row lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} Royalties Beauty Corp. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/privacy" className="transition hover:text-[#ff6b6e]">Privacy</Link>
            <Link to="/terms" className="transition hover:text-[#ff6b6e]">Terms</Link>
            <Link to="/disclaimer" className="transition hover:text-[#ff6b6e]">Disclaimer</Link>
          </div>
          <p className="uppercase tracking-[0.18em]">Trust · Enterprise · Impact</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
