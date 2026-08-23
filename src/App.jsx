import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/layout/SiteLayout";
import PageSkeleton from "./components/system/PageSkeleton";

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
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const DisclaimerPage = lazy(() => import("./pages/DisclaimerPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const AdminLoginPage = lazy(() => import("./pages/admin/AdminLoginPage"));
const AdminMessagesPage = lazy(() => import("./pages/admin/AdminMessagesPage"));

function App() {
  return (
    <Suspense fallback={<PageSkeleton />}>
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
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="disclaimer" element={<DisclaimerPage />} />
          <Route path="error" element={<ErrorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="admin/login" element={<AdminLoginPage />} />
        <Route path="admin/messages" element={<AdminMessagesPage />} />
        <Route path="admin" element={<Navigate to="/admin/messages" replace />} />
        <Route path="careers" element={<Navigate to="/companies/rb-service-connect" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
