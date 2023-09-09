import { type RefObject } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { compVisionLanding, companyName, socials } from "@/data";

export default function Landing({
  imgContainerRef,
}: {
  imgContainerRef: RefObject<HTMLDivElement>;
}) {
  const mapper = (Value: IconType, key: number) => {
    return (
      <Link href="/" key={key}>
        <Value />
      </Link>
    );
  };

  const backgroundImage =
    "https://live.staticflickr.com/4710/40645906341_d6c6f6d003_k.jpg";

  return (
    <main className="main-landing">
      <div className="img-container back-0" ref={imgContainerRef}>
        <Image
          src={backgroundImage}
          alt="Quantum computers and accelerated discovery | by IBM Research"
          fill
          priority
          sizes="100%"
        />
      </div>
      <div className="main-landing-container">
        <h1 className="main-heading">WELCOME TO {companyName}</h1>
        <div className="main-container">
          <p className="main-para">{compVisionLanding}</p>
          <div className="main-socials">{socials.map(mapper)}</div>
        </div>
        <div className="main-btn-container">
          <Link href="/" className="main-link _1">
            More about us
          </Link>
          <Link href="/" className="main-link _2">
            Get in touch
          </Link>
        </div>
      </div>
    </main>
  );
}
