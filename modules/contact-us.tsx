import { useRef, type RefObject, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { contactSocials } from "@/data";
import MyCustomGForm from "@/components/google-form";

export default function ContactUs({
  imgContainerRef,
}: {
  imgContainerRef: RefObject<HTMLDivElement>;
}) {
  const formRef = useRef<HTMLDivElement>(null);

  const observerOptions = useRef<IntersectionObserverInit>({
    threshold: 0.5,
  });

  const observerCallback = useCallback<IntersectionObserverCallback>(
    (entries) => {
      const isIntersecting = entries[0]?.isIntersecting ?? false;
      if (isIntersecting) {
        formRef.current?.classList.add("active");
      } else {
        formRef.current?.classList.remove("active");
      }
    },
    []
  );

  useEffect(() => {
    const contactObserver: IntersectionObserver = new IntersectionObserver(
      observerCallback,
      observerOptions.current
    );
    if (formRef.current) {
      contactObserver.observe(formRef.current);
      return () => contactObserver.disconnect();
    }
    return;
  }, [observerCallback]);

  const mapper = (Value: IconType, key: number) => {
    return (
      <Link href="/" key={key} className="cu-social-icon">
        <Value />
      </Link>
    );
  };
  return (
    <section className="contact-us-main">
      <div className="img-container back-5" ref={imgContainerRef}>
        <Image
          src="https://live.staticflickr.com/65535/51331567650_d5bd7df39f_b.jpg"
          alt="IBM Quantum System One in Japan for the University of Tokyo and QIIC | by IBM Research"
          fill
          sizes="100%"
        />
      </div>
      <h3 className="contact-us-head">
        <span className="contact-us-heading">CONTACT US</span>
        <p className="contact-us-subheading">
          Reach out for a new project or just say hello
        </p>
      </h3>
      <div className="contact-us-container">
        <div className="contact-us-form" ref={formRef}>
          <span className="cu-form-header">WRITE TO US</span>
          <MyCustomGForm />
        </div>
        <div className="contact-us-info">
          <span className="cu-contact-info-header">CONTACT INFO</span>
          <div className="cu-contact-info">
            <div className="cu-find-us">
              <span className="cu-fu-header">Where to Find Us</span>
              <p className="cu-fu-para">
                Commercial Building No. 88, O Block, Kidwai Nagar, Kanpur, Uttar
                Pradesh, India 208011
              </p>
            </div>
            <div className="cu-email-us">
              <span className="cu-eu-header">Email Us At</span>
              <a href="mailto:contact@quantumshift.in" className="cu-eu-email1">
                contact@quantumshift.in
              </a>
              <a href="mailto:ceo@quantumshift.in" className="cu-eu-email2">
                ceo@quantumshift.in
              </a>
            </div>
            <div className="cu-call-us">
              <span className="cu-cu-header">Call us at</span>
              <a href="tel:5123559446" className="cu-cu-phone">
                Office: +91 (512) 355 9446
              </a>
              {/* <span className="cu-cu-mobile">Mobile: (+63) 555 0100</span>
              <span className="cu-cu-fax">Fax: (+63) 555 0101</span> */}
            </div>
            <div className="cu-socials">{contactSocials.map(mapper)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
