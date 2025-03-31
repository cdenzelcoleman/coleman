import React, { useEffect, useState } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Analytics />
    <SpeedInsights />
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AnimatePresence>
    </Router>
  </StrictMode>
);
