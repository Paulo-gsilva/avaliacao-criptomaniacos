import * as React from "react";
import Benefits from "../Benefits/Benefits";
import { clockImage, compassImage, engineImage } from "../../Images/Images";
import { MarginContainer } from "../../Tailwind/Tailwind";

function BenefitsContainer() {
  return (
    <div
      className={
        MarginContainer +
        "flex flex-col md:flex-row justify-evenly items-center w-full pt-8 mt-[-5rem]"
      }
    >
      <Benefits
        img={clockImage}
        alt="Clock image"
        title="Easy"
        text="Get started with as little as $10 and use our top-rated mobile app to invest on the go."
      />

      <Benefits
        img={engineImage}
        alt="Engine image"
        title="Optimized"
        text="We put the robots to work for you, with automated tools and strategies that can help unlock your money’s potential."
        className="mt-[0rem] lg:mt-0 "
      />

      <Benefits
        img={compassImage}
        alt="Compass image"
        title="Personalized"
        text="Customize your account, either as hands on as you want, or with our guidance along the way."
      />
    </div>
  );
}

export default BenefitsContainer;
