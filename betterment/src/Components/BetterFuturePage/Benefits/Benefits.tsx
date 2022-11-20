import * as React from "react";

function Benefits({
  img,
  title,
  text,
  alt,
  className,
}: {
  img: string;
  title: string;
  text: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={
        className +
        "flex flex-col justify-center items-center xl:w-96 text-center mb-12 lg:mb-0"
      }
    >
      <img src={img} alt={alt}></img>
      <h3 className="font-semibold text-2xl mt-4">{title}</h3>
      <p className="mt-2 text-base">{text}</p>
    </div>
  );
}

export default Benefits;
