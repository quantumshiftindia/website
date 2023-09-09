import { IconType } from "react-icons";
import { servicesStats } from "@/data";

export default function Description() {
  const mapper = (
    val: { Icon: IconType; title: string; content: string },
    ind: number
  ) => {
    const { Icon, title, content } = val;
    return (
      <div className="dec-point" key={ind}>
        <Icon />
        <div className="dec-text">
          <span className="dec-point-head">{title}</span>
          <p className="dec-point-para">{content}</p>
        </div>
      </div>
    );
  };
  return (
    <section className="des-main">
      <h3 className="des-heading">WHAT WE DO</h3>
      <span className="des-declaration">
        {
          "We are a Tech startup focusing on Quantum solutions and\
   related services. Our mission is to pave the path to a \
  sustainable future using quantum technology."
        }
      </span>
      <div className="dec-points">{servicesStats.map(mapper)}</div>
    </section>
  );
}
