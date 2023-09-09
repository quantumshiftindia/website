import { MdOutlineEmail } from "react-icons/md";
import { compVisionFooter, companyName } from "@/data";

export default function Footer() {
  return (
    <section className="footer-main">
      <h3 className="footer-message">
        <span className="ft-message-header">{companyName}.</span>
        <p className="ft-message-para">{compVisionFooter}</p>
      </h3>
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
