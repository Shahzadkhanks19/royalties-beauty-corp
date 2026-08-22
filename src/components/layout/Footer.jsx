import { Link } from "react-router-dom";

const rbLogo = "https://raw.githubusercontent.com/Shahzadkhanks19/rbcorp-react/main/src/Components/Footer/Images/Rb%20corp%20for%20coding%20(3).png";

const companies = [
  ["Beyonist", "/companies/beyonist"],
  ["RB Service Connect", "/companies/rb-service-connect"],
  ["RB Finance", "/companies/rb-finance"],
  ["Royalties Charity", "/companies/royalties-charity"],
  ["Royalties Buffet", "/companies/royalties-buffet"],
];

function Footer() {
  return (
    <footer className="bg-[#06172f] text-white">
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-14 lg:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.4fr_.8fr_.8fr]">
          <div>
            <div className="flex items-center gap-4">
              <span className="grid h-16 w-24 place-items-center overflow-hidden rounded-xl bg-white p-2">
                <img src={rbLogo} alt="Royalties Beauty Corp" className="max-h-12 max-w-20 object-contain" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em]">Royalties Beauty Corp</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-200/70">Diversified enterprise group</p>
              </div>
            </div>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/52">
              Building and growing businesses across beauty, services, finance, hospitality and social impact with a long-term commitment to trust, quality and responsible growth.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-200">Businesses</p>
            <div className="mt-5 grid gap-3 text-sm text-white/58">
              {companies.map(([label, to]) => (
                <Link key={to} to={to} className="transition hover:text-white">{label}</Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-200">Corporate</p>
            <div className="mt-5 grid gap-3 text-sm text-white/58">
              <Link to="/about" className="transition hover:text-white">About RB Corp</Link>
              <Link to="/impact" className="transition hover:text-white">Impact</Link>
              <Link to="/insights" className="transition hover:text-white">Insights</Link>
              <Link to="/careers" className="transition hover:text-white">Careers</Link>
              <Link to="/contact" className="transition hover:text-white">Contact</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Royalties Beauty Corp. All rights reserved.</p>
          <p className="uppercase tracking-[0.18em]">Trust · Enterprise · Impact</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
