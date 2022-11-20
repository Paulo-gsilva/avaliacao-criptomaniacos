import * as React from "react";

function InitialText({ title, text }: { title: string; text: string }) {
  return (
    <>
      <h1 className="w-[20rem] mx-auto lg:mx-0 lg:w-[30rem] text-5xl lg:text-7xl">
        {title}
      </h1>
      <p className="mt-4  text-lg w-11/12">{text}</p>
    </>
  );
}

export default InitialText;
