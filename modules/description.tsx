"use client"
import { IconType } from "react-icons";
import { servicesStats } from "@/data";
import { forwardRef, useState } from "react";
import ReactCardFlip from 'react-card-flip';
import Tilt from 'react-parallax-tilt';

function D() {

  const [isFlipped, setIsFlipped] = useState(Array(6).fill(false))

  const flip = (key: number) => {
    let newIsFlipped = [...isFlipped]
    newIsFlipped[key] = !newIsFlipped[key]
    setIsFlipped(newIsFlipped)
  }

  const mapper = (
    val: { Icon: IconType; title: string; content: string },
    ind: number
  ) => {
    const { Icon, title, content } = val;
    return (
      <div className="dec-point" key={ind}>
        <Tilt
          glareEnable={true}
          glareColor="#ffffff"
          glarePosition="all"
          glareMaxOpacity={0.2}
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          glareBorderRadius="20px"
        >
        <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped[ind]}>
          <div className="dec-text" onClick={() => flip(ind)}>
            <Icon />
            <span className="dec-point-head">{title}</span>
          </div>
          <div className="dec-text" onClick={() => flip(ind)}>
            <span className="dec-point-head">{title}</span>
            <p className="dec-point-para">{content}</p>
          </div>
        </ReactCardFlip></Tilt>
      </div>
    );
  };
  return (
    <section className="des-main">
      <h3 className="des-heading">WHAT WE DO</h3>
      {/* <span className="des-declaration">
        {
          "We are an innovative cybersecurity company that specializes in quantum technologies and semiconductor designs. Our vision is to foster a sustainable & secure future by harnessing the potential of 'deep-tech' technologies to mitigate emerging threats."
        }
      </span> */}
      <div className="dec-points">{servicesStats.map(mapper)}</div>
    </section>
  );
}

const Description = forwardRef(D);
export default Description