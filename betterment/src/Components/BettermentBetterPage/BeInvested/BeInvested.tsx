import * as React from "react";
import cloudImage from "../../Images/img/Landscape-Clouds-Day-01_desktop.svg";

function BeInvested() {
  return (
    <div className="w-full relative mt-[-20rem] lg:mt-[-5rem] z-0 text-center ">
      <img className="w-full" src={cloudImage} alt="cloud image"></img>
      <h2 className="text-black font-bold text-2xl absolute top-1/2 w-full mx-auto mt-[20rem] p-8 lg:mt-0">
        Be Invested.
      </h2>
    </div>
  );
}

export default BeInvested;
