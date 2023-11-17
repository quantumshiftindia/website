import { type RefObject } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { compVisionLanding, companyName, socials } from "@/data";

interface IntroductionProps {
  aboutCallback?: ()=>void,
  contactCallback?: ()=>void,
  imgContainerRef: RefObject<HTMLDivElement>
}

export default function Landing(props : IntroductionProps) {

  const {aboutCallback, imgContainerRef, contactCallback} = props;

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
          <button onClick={aboutCallback} className="main-link _1">
            More about us
          </button>
          <button onClick={contactCallback} className="main-link _2">
            Get in touch
          </button>
        </div>
      </div>
    </main>
  );
}
