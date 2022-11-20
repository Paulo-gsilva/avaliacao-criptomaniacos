import * as React from "react";
import BetterFuturePage from "../BetterFuturePage/BetterFuturePage";
import BettermentBetterPage from "../BettermentBetterPage/BettermentBetterPage";
import InitialPage from "../InitialPage/InitialPage";
import TodoList from "../TodoList/TodoPage";

function LandingPage() {
  return (
    <>
      <InitialPage />
      <BetterFuturePage />
      <BettermentBetterPage />
      <TodoList />
    </>
  );
}

export default LandingPage;
