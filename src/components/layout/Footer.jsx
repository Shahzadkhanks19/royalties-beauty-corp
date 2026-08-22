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
    <footer className="bg-[#100d0b] text-white">
      <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.25fr_.75fr_.75fr]">
          <div>
            <div className="flex items-center gap-4">
              <span className="grid h-16 w-20 place-items-center overflow-hidden rounded-2xl bg-white p-2">
                <img src={rbLogo} alt="Royalties Beauty Corp" className="h-full w-full object-contain" />
              </span>
              <div>
                <p className="text-xs font-bold tracking-[0.22em]">ROYALTIES BEAUTY CORP</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-[#d8b46b]">One group. Multiple industries.</p>
              </div>
            </div>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/52">
              A diversified business group building purposeful brands across beauty, services, finance, hospitality, and social impact.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d8b46b]">Companies</p>
            <div className="mt-5 grid gap-3 text-sm text-white/58">
              {companies.map(([label, to]) => <Link key={to} to={to} className="transition hover:text-white">{label}</Link>)}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d8b46b]">RB Corp</p>
            <div className="mt-5 grid gap-3 text-sm text-white/58">
              <Link to="/about" className="transition hover:text-white">About the group</Link>
              <Link to="/impact" className="transition hover:text-white">Impact</Link>
              <Link to="/insights" className="transition hover:text-white">Insights</Link>
              <Link to="/careers" className="transition hover:text-white">Careers</Link>
              <Link to="/contact" className="transition hover:text-white">Contact</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs text-white/34 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Royalties Beauty Corp. All rights reserved.</p>
          <p className="uppercase tracking-[0.18em]">Purpose · Enterprise · Impact</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
