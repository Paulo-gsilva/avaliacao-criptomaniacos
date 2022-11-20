import * as React from "react";
import { phoneImg } from "../../Images/Images";
import seaImg from "../../Images/img/svgexport-1.svg";

function PhoneSea() {
  return (
    <>
      <div className="relative overflow-hidden w-full h-screen flex items-start justify-end">
        <img
          className="w-[911px] absolute lg:relative 2xl:right-[-4rem] max-lg:right-[-18rem] right-[-13rem]"
          src={phoneImg}
          alt="betterment app mobile screenshot"
        />
      </div>
      <div className="absolute bottom-0 w-full">
        <img src={seaImg} alt="sea image" />
      </div>
    </>
  );
}

export default PhoneSea;
