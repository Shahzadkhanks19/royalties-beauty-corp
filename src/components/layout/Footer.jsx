import { Link } from "react-router-dom";

const companies = [
  ["Beyonist", "/companies/beyonist"],
  ["RB Service Connect", "/companies/rb-service-connect"],
  ["RB Finance", "/companies/rb-finance"],
  ["Royalties Charity", "/companies/royalties-charity"],
  ["Royalties Buffet", "/companies/royalties-buffet"],
];

const rbCorpLogo = "https://raw.githubusercontent.com/Shahzadkhanks19/rbcorp-react/main/public/android-chrome-512x512.png";

function Footer() {
  return (
    <footer className="bg-[#0b0b0c] text-white">
      <div className="mx-auto max-w-[1680px] px-5 py-16 sm:px-8 lg:px-12 xl:px-16 lg:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.35fr_.75fr_.75fr_.75fr]">
          <div>
            <div className="flex items-center gap-4">
              <img src={rbCorpLogo} alt="RB Corp" className="h-24 w-28 object-contain" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em]">Royalties Beauty Corp</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-[#ff6b6e]">Diversified enterprise group</p>
              </div>
            </div>
            <p className="mt-7 max-w-xl text-sm leading-7 text-white/52">
              Building and growing responsible businesses across beauty, services, finance, hospitality and social impact with a long-term commitment to trust, quality and sustainable value.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c9a86a]">Businesses</p>
            <div className="mt-5 grid gap-3 text-sm text-white/58">
              {companies.map(([label, to]) => <Link key={to} to={to} className="transition hover:text-[#ff6b6e]">{label}</Link>)}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c9a86a]">Corporate</p>
            <div className="mt-5 grid gap-3 text-sm text-white/58">
              <Link to="/about" className="transition hover:text-[#ff6b6e]">About RB Corp</Link>
              <Link to="/impact" className="transition hover:text-[#ff6b6e]">Impact</Link>
              <Link to="/insights" className="transition hover:text-[#ff6b6e]">Insights</Link>
              <Link to="/careers" className="transition hover:text-[#ff6b6e]">Careers</Link>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c9a86a]">Connect</p>
            <div className="mt-5 grid gap-3 text-sm text-white/58">
              <Link to="/contact" className="transition hover:text-[#ff6b6e]">Contact us</Link>
              <Link to="/companies" className="transition hover:text-[#ff6b6e]">Our businesses</Link>
              <Link to="/" className="transition hover:text-[#ff6b6e]">Home</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs text-white/34 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Royalties Beauty Corp. All rights reserved.</p>
          <p className="uppercase tracking-[0.18em]">Trust · Enterprise · Impact</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
