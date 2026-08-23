import { Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/layout/SiteLayout";
import HomePage from "./pages/HomePage";
import PlaceholderPage from "./pages/PlaceholderPage";

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<PlaceholderPage title="About RB Corp" />} />
        <Route path="companies" element={<PlaceholderPage title="Our Companies" />} />
        <Route path="companies/beyonist" element={<PlaceholderPage title="Beyonist" />} />
        <Route path="companies/rb-service-connect" element={<PlaceholderPage title="RB Service Connect" />} />
        <Route path="companies/rb-finance" element={<PlaceholderPage title="RB Finance" />} />
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
