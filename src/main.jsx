import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Calculadora2Grau from "./pages/Calculadora2Grau/Calculadora2Grau.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Calculadora2Grau />
  </StrictMode>,
);
