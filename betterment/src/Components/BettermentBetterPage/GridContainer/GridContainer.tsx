import * as React from "react";
import ItemGrid from "../ItemsGrid/ItemsGrid";
import {
  calculatorIcon,
  circleIcon,
  heartIcon,
  moneyIcon,
  pcIcon,
  retangleIcon,
} from "../../Images/Images";

function GridContainer() {
  return (
    <>
      <ItemGrid
        img={circleIcon}
        alt="Circle icon"
        title="Built to make investing easy."
        text="We'll guide you through portfolio options, risk levels, goal setting, and savings features."
      />
      <ItemGrid
        img={retangleIcon}
        alt="retangle icon"
        title="Diversified investing."
        text="We custom-build our portfolios using ETFs or cryptocurrencies to give you better diversification. "
      />
      <ItemGrid
        img={moneyIcon}
        alt="Money icon"
        title="Transparent pricing."
        text="We offer lower cost investing options so everyone can decide what’s best for their money."
      />
      <ItemGrid
        img={heartIcon}
        alt="Heart icon"
        title="Invest with your values."
        text="Socially Responsible Investing can help make an impact while putting your money to work for you."
      />
      <ItemGrid
        img={calculatorIcon}
        alt="calculator icon"
        title="Limit tax impact.."
        text="Consider our tax strategies designed to help you limit the tax impact of your investments."
      />
      <ItemGrid
        img={pcIcon}
        alt="Pc icon"
        title="Track your finances."
        text="Connect outside accounts to better inform our advice in one place."
      />
    </>
  );
}

export default GridContainer;
