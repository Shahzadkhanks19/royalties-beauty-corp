import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalErrorBoundary from "./components/system/GlobalErrorBoundary";
import Preloader from "./components/system/Preloader";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalErrorBoundary>
      <BrowserRouter>
        <Preloader />
        <App />
      </BrowserRouter>
    </GlobalErrorBoundary>
  </React.StrictMode>,
);
