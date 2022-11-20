import * as React from "react";
import BenefitsContainer from "./BenefitsContainer/BenefitsContainer";

function BetterFuturePage() {
  return (
    <section className="w-full h-full lg:h-screen flex flex-row justify-center items-center">
      <div
        className={"w-full h-full flex flex-col justify-center items-center"}
      >
        <div className="text-center  text-white bg-[#000b50] pb-32 w-full h-96 lg:mt-0">
          <h2 className="text-4xl mt-28 text-center mx-auto font-semibold w-[20rem]">
            Investing built for a better future.
          </h2>
          <p className="mt-4 text-center mx-auto text-base w-[25rem]">
            Whether you're starting with $10 or $10M, we’re built to help you
            reach your financial goals.
          </p>
        </div>
        <BenefitsContainer />
      </div>
    </section>
  );
}

export default BetterFuturePage;
