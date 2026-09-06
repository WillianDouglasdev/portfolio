import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/components.css";
import "./styles/sections.css";
import "./styles/motion.css";
import App from "./App";

// Os estilos ficam centralizados aqui para manter a ordem da cascata previsível.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
