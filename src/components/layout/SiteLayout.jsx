import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTopButton from "../ui/ScrollToTopButton";
import Navbar from "./Navbar";
import Footer from "./Footer";

function SiteLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#f7f4f0] text-[#151517]">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default SiteLayout;
