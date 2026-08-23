import { Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/layout/SiteLayout";
import AboutPage from "./pages/AboutPage";
import BeyonistPage from "./pages/BeyonistPage";
import BusinessesPage from "./pages/BusinessesPage";
import HomePage from "./pages/HomePage";
import ImpactPage from "./pages/ImpactPage";
import PlaceholderPage from "./pages/PlaceholderPage";
import RBCharityFoundationPage from "./pages/RBCharityFoundationPage";
import RBFinancePage from "./pages/RBFinancePage";
import RBServiceConnectPage from "./pages/RBServiceConnectPage";
import RoyaltiesBuffetPage from "./pages/RoyaltiesBuffetPage";

function App() {
  return (
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
        <Route path="insights" element={<PlaceholderPage title="Insights" />} />
        <Route path="contact" element={<PlaceholderPage title="Contact" />} />
      </Route>
      <Route path="careers" element={<Navigate to="/companies/rb-service-connect" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
