import * as React from "react";
import BetterFuturePage from "../BetterFuturePage/BetterFuturePage";
import BettermentBetterPage from "../BettermentBetterPage/BettermentBetterPage";
import InitialPage from "../InitialPage/InitialPage";

function LandingPage() {
  return (
    <>
      <InitialPage />
      <BetterFuturePage />
      <BettermentBetterPage />
    </>
  );
}

export default LandingPage;
