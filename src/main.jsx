import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./css/index.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
// import SmoothScroll from "./utils/SmoothScroll";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/coleman">
    {/* <SmoothScroll> */}
      <App />
      <Analytics />
      <SpeedInsights />
    {/* </SmoothScroll> */}
  </BrowserRouter>
);