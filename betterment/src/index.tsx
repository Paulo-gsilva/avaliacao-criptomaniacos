import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/todo" element={<LandingPage />}></Route>
    </Routes>
  </BrowserRouter>
);
