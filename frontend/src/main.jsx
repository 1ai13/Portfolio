import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { LanguageManager } from "./components/LanguageManager.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageManager>
      <App />
    </LanguageManager>
  </StrictMode>
);
