import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#090b0e]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-[0.22em] text-[#c9a86a]">ROYALTIES BEAUTY CORP</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/55">
            A diversified group building enduring businesses across beauty, services, finance, hospitality, and social impact.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Explore</p>
          <div className="mt-4 grid gap-3 text-sm text-white/55">
            <Link to="/about">About</Link>
            <Link to="/companies">Our Companies</Link>
            <Link to="/careers">Careers</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Connect</p>
          <div className="mt-4 grid gap-3 text-sm text-white/55">
            <Link to="/contact">Contact</Link>
            <Link to="/insights">Insights</Link>
            <Link to="/impact">Impact</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/8 px-5 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Royalties Beauty Corp. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
