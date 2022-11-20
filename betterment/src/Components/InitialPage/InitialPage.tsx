import * as React from "react";
import { MarginContainer } from "../Tailwind/Tailwind";
import NavBar from "../NavBar/NavBar";
import InitialText from "./InitialText/InitialText";
import PartnerImage from "./PartnerImage/PartnerImage";
import PhoneSea from "./PhoneSea/PhoneSea";
import {
  forbesImage,
  cnbcImage,
  businessInsiderImage,
  newYorkTimesImage,
} from "../Images/Images";

function InitialPage() {
  return (
    <>
      <section className="h-sc lg:h-full bg-amber-100">
        <NavBar />
        <div className={"h-full  pt-12 lg:flex"}>
          <div className="relative lg:absolute w-auto lg:w-[34rem] text-center lg:text-left xl:ml-40 ml-0 lg:ml-4 pl-0 lg:pl-8 pt-0 lg:pt-12">
            <InitialText
              title="Investing made better"
              text="Meet the app that gives you the tools, inspiration, and support to
              help you become a better investor."
            />
            <div className="w-full mt-32 h-[50%] flex flex-row justify-center lg:justify-start items-center">
              <PartnerImage
                width="w-32"
                img={newYorkTimesImage}
                alt="new york times image"
              />
              <PartnerImage width="w-8" img={cnbcImage} alt="cnbc image" />
              <PartnerImage
                width="w-16"
                img={businessInsiderImage}
                alt="the business insider image"
              />
              <PartnerImage width="w-16" img={forbesImage} alt="forbes image" />
            </div>
          </div>
          <PhoneSea />
        </div>
      </section>
    </>
  );
}

export default InitialPage;
