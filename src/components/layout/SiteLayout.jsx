import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function SiteLayout() {
  return (
    <div className="min-h-screen bg-[var(--rb-bg)] text-[var(--rb-text)]">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default SiteLayout;
