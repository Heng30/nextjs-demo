import type { StaticImageData } from "next/image";
import Image from "next/image";

interface Props {
  imgData: StaticImageData;
  imgAlt: string;
}

export default function Hero(props: Props) {
  return (
    <div className="w-full h-full absolute inset-0 -z-10">
      <Image src={props.imgData} alt={props.imgAlt} fill className="cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
    </div>
  );
}
