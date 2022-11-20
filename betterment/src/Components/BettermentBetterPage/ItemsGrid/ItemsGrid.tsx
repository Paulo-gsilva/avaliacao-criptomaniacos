import * as React from "react";

function ItemGrid({
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
    <div className="w-full h-full text-white">
      <img src={img} alt={alt} className="ml-[-1rem]" />
      <h3 className="font-bold text-xl">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default ItemGrid;
