import { MdOutlineEmail } from "react-icons/md";
import { compVisionFooter, companyName } from "@/data";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="footer-main">
      <div className="footer-message">
        <div className="ft-head">
          <div className="img-container">
            <Image src="/assets/images/qs_logo_lgbt_zoom.jpg" alt="company logo" sizes="100%" fill></Image>
          </div>
          <h3 className="ft-message-header">{companyName}.<sup className="ft-trade-mark">TM</sup></h3>
        </div>
        <p className="ft-message-para">{compVisionFooter}</p>
      </div>
      <div className="footer-notify">
        <span className="ft-notify-header">Get Notified</span>
        <p className="ft-notify-para">
          Get an update whenever something new is constructed or some
          revolutionary idea is born.
        </p>
        <form className="ft-notify-email">
          <MdOutlineEmail />
          <input
            type="email"
            placeholder="Email Address"
            className="ft-notify-input"
          ></input>
          <button type="submit" className="ft-notify-button">
            SUBSCRIBE
          </button>
        </form>
      </div>
      {/* <span>Made by Hymns of Web</span> */}
    </section>
  );
}
