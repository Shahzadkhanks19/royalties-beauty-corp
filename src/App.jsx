import { Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/layout/SiteLayout";
import AboutPage from "./pages/AboutPage";
import BeyonistPage from "./pages/BeyonistPage";
import BusinessesPage from "./pages/BusinessesPage";
import HomePage from "./pages/HomePage";
import PlaceholderPage from "./pages/PlaceholderPage";
import RBFinancePage from "./pages/RBFinancePage";
import RBServiceConnectPage from "./pages/RBServiceConnectPage";

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
        <Route path="companies/royalties-charity" element={<PlaceholderPage title="Royalties Charity" />} />
        <Route path="companies/royalties-buffet" element={<PlaceholderPage title="Royalties Buffet" />} />
        <Route path="impact" element={<PlaceholderPage title="Impact" />} />
        <Route path="insights" element={<PlaceholderPage title="Insights" />} />
        <Route path="contact" element={<PlaceholderPage title="Contact" />} />
      </Route>
      <Route path="careers" element={<Navigate to="/companies/rb-service-connect" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
