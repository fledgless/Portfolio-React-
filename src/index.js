import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./component/pages/accueil.jsx";
import Apropos from "./component/pages/a-propos.jsx";
import Contact from "./component/pages/contact.jsx";
import Projets from "./component/pages/projets.jsx";
import Experiences from "./component/pages/experiences.jsx";
import Maintenance from "./maintenance.jsx";
import "../src/styles/global.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          {/* <Route path="/accueil" element={<Accueil />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projets" element={<Projets />} /> */}
          <Route path="/maintenance" element={<Maintenance />} />
        </Routes>
        {/* <App /> */}
      </BrowserRouter>

  </React.StrictMode>
);

