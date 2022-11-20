import * as React from "react";
import archSvg from "../Images/img/Arch illustration - mobile .svg";
import { MarginContainer } from "../Tailwind/Tailwind";
import BeInvested from "./BeInvested/BeInvested";
import CardsContainer from "./CardsContainer/CardsContainer";
import GridContainer from "./GridContainer/GridContainer";

function BettermentBetterPage() {
  return (
    <section className="block w-full h-screen mt-24">
      <img className="w-full" src={archSvg} alt="arch illustration" />
      <div
        className={
          "w-full  bg-[#000b50] flex flex-col justify-start items-center"
        }
      >
        <h2 className="text-white text-4xl mb-4 mt-8 text-center mx-auto font-semibold w-[20rem] lg:w-[35rem]">
          What makes Betterment better?
        </h2>
        <div
          className={
            MarginContainer +
            "px-0 gap-4 h-full mb-48 grid grid-cols-1 md:grid-cols-3 "
          }
        >
          <GridContainer />
        </div>
      </div>
      <CardsContainer />
      <BeInvested />
    </section>
  );
}

export default BettermentBetterPage;
