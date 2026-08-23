import { Outlet } from "react-router-dom";
import ScrollToTopButton from "../ui/ScrollToTopButton";
import Navbar from "./Navbar";
import Footer from "./Footer";

function SiteLayout() {
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
