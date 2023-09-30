import { useRef } from "react";
import { useEasyGoogleForm } from "@hymns-of-web/use-easy-google-form";

export default function MyCustomGForm() {
  const ref = useRef(null);
  const onSubmit = useEasyGoogleForm({
    formRef: ref,
    gFormId: "1_TWwiIp02lni5ExbwUpiMsA9ubWDoxhemPFaQs1XLXk",
    links: [
      {
        entryId: "628574603",
        formId: "Ty_Mz",
        type: "text",
      },
      {
        entryId: "1189247497",
        formId: "I_CYW",
        type: "text",
      },
      {
        entryId: "1485660614",
        formId: "eoQWc",
        type: "text",
      },
      {
        entryId: "1046578917",
        formId: "ikUEz",
        type: "textarea",
      },
    ],
  });
  return (
    <form onSubmit={onSubmit} ref={ref} className="cu-form">
      <label htmlFor="Ty_Mz">Name</label>

      <input
        type="text"
        id="Ty_Mz"
        className="cu-form-el name"
        placeholder="Your Name"
      />
      <label htmlFor="I_CYW">Email</label>

      <input
        type="text"
        id="I_CYW"
        className="cu-form-el email"
        placeholder="Your Email"
      />
      <label htmlFor="eoQWc">Subject</label>

      <input
        type="text"
        id="eoQWc"
        className="cu-form-el subject"
        placeholder="Subject"
      />

      <label htmlFor="ikUEz" />

      <textarea
        id="ikUEz"
        className="cu-form-el message"
        rows={10}
        placeholder="Your message"
      />
      <button type="submit" className="cu-submit">
        SUBMIT
      </button>
    </form>
  );
}
