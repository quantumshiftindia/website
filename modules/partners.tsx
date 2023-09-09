import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import {
  companyName,
  feedbackCarouselData,
  feedbackResponsive,
  logoResponsive,
  partnerLogos,
} from "@/data";
import "react-multi-carousel/lib/styles.css";

export default function Partners() {
  const mapper = (
    val: {
      src: string;
      alt: string;
    },
    ind: number
  ) => {
    return (
      <Link href="/" className="logo" key={ind}>
        <Image src={val.src} alt={val.alt} fill sizes="100%"></Image>
      </Link>
    );
  };

  const carouselMapper = (
    val: {
      para: string;
      src: string;
      alt: string;
      username: string;
      designation: string;
    },
    ind: number
  ) => {
    return (
      <div className="partner-feedback-container" key={ind}>
        <p className="partner-feedback-para">{val.para}</p>
        <div className="feedback-user">
          <div className="img-container">
            <Image
              src={`/assets/images/${val.src}`}
              alt={val.alt}
              fill
              priority
              sizes="100%"
            />
          </div>
          <span className="feedback-user-name">{val.username}</span>
          <span className="feedback-user-desc">{val.designation}</span>
        </div>
        <div className="icon-right"></div>
      </div>
    );
  };

  return (
    <>
      <div className="img-container back-3">
        <Image
          src="/assets/images/background-grey.webp"
          alt="Background"
          fill
          priority
          sizes="100%"
        />
      </div>
      <section className="partner-main">
        <h3 className="partner-head">
          <span className="partner-heading">OUR COLLABORATORS</span>
          <p className="partner-subheading">
            {companyName} has been collaborating with:
          </p>
        </h3>
        <div className="logo-container">
          <Carousel
            responsive={logoResponsive}
            swipeable={false}
            draggable={false}
            ssr={true}
            infinite={true}
            autoPlay={true}
            showDots={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            removeArrowOnDeviceType={[
              "desktop",
              "mobileLarge",
              "tablet",
              "mobileSmall",
            ]}
            className="logo-carousel"
          >
            {partnerLogos.map(mapper)}
          </Carousel>
        </div>
        <div className="partner-feedback">
          <div className="icon-left"></div>
          <Carousel
            responsive={feedbackResponsive}
            swipeable={false}
            draggable={false}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            removeArrowOnDeviceType={["mobile"]}
            className="partner-carousel"
          >
            {feedbackCarouselData.map(carouselMapper)}
          </Carousel>
        </div>
      </section>
    </>
  );
}
