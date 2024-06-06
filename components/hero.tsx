import type { StaticImageData } from 'next/image';
import Image from 'next/image';

interface Props {
  imgData: StaticImageData;
  imgAlt: string;
}

export default function Hero(props: Props) {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image
          src={props.imgData}
          alt={props.imgAlt}
          fill
          className="bg-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
      </div>
    </div>
  );
}
