import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import LandingPage from "../LandingPage/LandingPage";

function Routes() {
  return (
    <BrowserRouter>
      <Route element={<LandingPage />} path="/todo" />
    </BrowserRouter>
  );
}

export default Routes;
