import * as React from "react";

function Card({
  img,
  title,
  text,
  alt,
}: {
  img: string;
  title: string;
  text: string;
  alt: string;
}) {
  return (
    <div className="flex flex-row justify-start items-center w-full lg:w-[22rem] z-40 mb-8 border-b-4 border-[#6d6d6d] rounded-lg  bg-white p-2">
      <img src={img} alt={alt}></img>
      <div className="ml-4 justify-self-start">
        <h4 className="font-semibold text-2xl">{title}</h4>
        <p className="text-gray-400">{text}</p>
      </div>
    </div>
  );
}

export default Card;
