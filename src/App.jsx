import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/layout/SiteLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const BusinessesPage = lazy(() => import("./pages/BusinessesPage"));
const BeyonistPage = lazy(() => import("./pages/BeyonistPage"));
const RBServiceConnectPage = lazy(() => import("./pages/RBServiceConnectPage"));
const RBFinancePage = lazy(() => import("./pages/RBFinancePage"));
const RBCharityFoundationPage = lazy(() => import("./pages/RBCharityFoundationPage"));
const RoyaltiesBuffetPage = lazy(() => import("./pages/RoyaltiesBuffetPage"));
const ImpactPage = lazy(() => import("./pages/ImpactPage"));
const InsightsPage = lazy(() => import("./pages/InsightsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AdminLoginPage = lazy(() => import("./pages/admin/AdminLoginPage"));
const AdminMessagesPage = lazy(() => import("./pages/admin/AdminMessagesPage"));

function PageLoader() {
  return (
    <div className="flex min-h-[55vh] items-center justify-center bg-[#f7f4f0] px-5" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-5">
        <div className="relative h-11 w-11">
          <span className="absolute inset-0 rounded-full border border-black/10" />
          <span className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#ff4d50]" />
        </div>
        <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#6f696b]">Loading RB Corp</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="companies" element={<BusinessesPage />} />
          <Route path="companies/beyonist" element={<BeyonistPage />} />
          <Route path="companies/rb-service-connect" element={<RBServiceConnectPage />} />
          <Route path="companies/rb-finance" element={<RBFinancePage />} />
          <Route path="companies/royalties-charity" element={<RBCharityFoundationPage />} />
          <Route path="companies/royalties-buffet" element={<RoyaltiesBuffetPage />} />
          <Route path="impact" element={<ImpactPage />} />
          <Route path="insights" element={<InsightsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="admin/login" element={<AdminLoginPage />} />
        <Route path="admin/messages" element={<AdminMessagesPage />} />
        <Route path="admin" element={<Navigate to="/admin/messages" replace />} />
        <Route path="careers" element={<Navigate to="/companies/rb-service-connect" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
