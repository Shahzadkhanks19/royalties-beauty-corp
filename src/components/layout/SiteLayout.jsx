import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import RouteSeo from "../seo/RouteSeo";
import ScrollToTopButton from "../ui/ScrollToTopButton";
import Navbar from "./Navbar";
import Footer from "./Footer";

function SiteLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#f7f4f0] text-[#151517]">
      <RouteSeo />
      <a href="#main-content" className="fixed left-4 top-4 z-[200] -translate-y-24 bg-[#151517] px-4 py-3 text-xs font-bold uppercase tracking-[.08em] text-white transition focus:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4d50]">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default SiteLayout;
