import { useRef, useCallback, useEffect } from "react";
import Introduction from "./introduction";
import Landing from "./landing";
import Portfolio from "./portfolio";
import Partners from "./partners";
import ContactUs from "./contact-us";
import Description from "@/modules/description";
import Word_Cloud from "./word-cloud";

export default function Landingpage() {
  const heroImgRef = useRef<HTMLDivElement>(null);
  const contactImgRef = useRef<HTMLDivElement>(null);
  const contactUs = useRef<HTMLDivElement>(null);
  const aboutUs = useRef<HTMLDivElement>(null);

  const aboutButtonCallback = ()=>{
    aboutUs.current?.scrollIntoView({
      behavior:"smooth"
    })
  }

  const contactButtonCallback = ()=>{
    contactUs.current?.scrollIntoView({
      behavior:"smooth"
    })
  }

  const scrollCallback = useCallback(() => {
    const scrollPos = window.scrollY;
    if (heroImgRef.current && contactImgRef.current) {
      heroImgRef.current.style.transform = `translateY(-${scrollPos / 4}px)`;
      const posFromTop =
        window.scrollY + contactImgRef.current.getBoundingClientRect().top;
      contactImgRef.current.style.transform = `translateY(-${Math.abs(
        (scrollPos - posFromTop) / 6
      )}px)`;
    }
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", scrollCallback, { passive: true });
    return () => {
      document.removeEventListener("scroll", scrollCallback);
    };
  }, [scrollCallback]);
  return (
    <>
      <Landing imgContainerRef={heroImgRef} aboutCallback={aboutButtonCallback} contactCallback={contactButtonCallback}/>
      <Introduction ref={aboutUs}/>
      <Description  />
      <Word_Cloud />
      <Portfolio />
      <Partners />
      <ContactUs imgContainerRef={contactImgRef} ref={contactUs}/>
    </>
  );
}
