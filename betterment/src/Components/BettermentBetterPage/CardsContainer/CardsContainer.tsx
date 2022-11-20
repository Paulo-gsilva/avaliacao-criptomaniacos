import * as React from "react";
import { MarginContainer } from "../../Tailwind/Tailwind";
import Card from "../Cards/Cards";
import badgeIcon from "../../Images/img/Badge icon .svg";
import heartIcon from "../../Images/img/Heart icon.svg";
import assetsIcon from "../../Images/img/Assets icon .svg";

function CardsContainer() {
  return (
    <div
      className={
        MarginContainer +
        "px-0 flex  flex-col lg:flex-row justify-between items-center mt-[-3rem] z-20"
      }
    >
      <Card
        img={badgeIcon}
        title="Five Starts"
        text="4.7 rating - 35,000 reviews§"
        alt="badge icon"
      />
      <Card
        img={heartIcon}
        title="730,000+"
        text="Customers"
        alt="heart icon"
      />
      <Card
        img={assetsIcon}
        title="$30.7 Billion"
        text="Assets under management"
        alt="assets icon"
      />
    </div>
  );
}

export default CardsContainer;
