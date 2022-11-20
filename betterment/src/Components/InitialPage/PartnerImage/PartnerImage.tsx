import * as React from "react";

function PartnerImage({
  img,
  alt,
  width,
}: {
  img: string;
  alt: string;
  width: string;
}) {
  return <img className={width + " h-full mr-8"} src={img} alt={alt}></img>;
}

export default PartnerImage;
