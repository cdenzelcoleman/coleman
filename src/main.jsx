import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./css/index.css"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import SmoothScroll from "./utils/SmoothScroll"

import { HashRouter } from "react-router-dom" 

createRoot(document.getElementById("root")).render(
  <HashRouter>
  <App />
  <Analytics />
  <SpeedInsights />
</HashRouter>
)