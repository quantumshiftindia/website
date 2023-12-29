import { Ref, RefObject, forwardRef, useCallback, useEffect, useRef } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { stats } from "@/data";



function I(_:unknown, sectionRef:Ref<HTMLDivElement>) {


  const containerRef = useRef<HTMLDivElement>(null);

  const observerOptions = useRef<IntersectionObserverInit>({
    threshold: 0.9,
  });

  const observerCallback = useCallback<IntersectionObserverCallback>(
    (entries, obv) => {
      function forEachCallback(elem: IntersectionObserverEntry) {
        if (elem.isIntersecting) {
          const numElems =
            containerRef.current?.querySelectorAll(".stat-value");
          numElems?.forEach((numElem, index) => {
            const targetVal = stats[index]?.value;
            const interval = setInterval(() => {
              let prevVal = +(numElem?.textContent ?? "");
              if (prevVal + 1 > (targetVal ?? Infinity)) {
                clearInterval(interval);
                return;
              }
              numElem.textContent = ++prevVal + "";
            }, 1500 / (targetVal ?? 1));
          });
          obv.disconnect();
        }
      }
      entries.forEach(forEachCallback);
    },
    []
  );

  useEffect(() => {
    const numberObserver: IntersectionObserver = new IntersectionObserver(
      observerCallback,
      observerOptions.current
    );
    if (containerRef.current) {
      numberObserver.observe(containerRef.current);
      return () => {
        numberObserver.disconnect();
      };
    }
    return;
  }, [observerCallback]);

  const mapper = (val: { value: number; desc: string }, ind: number) => {
    return (
      <div className="stat-container" key={ind}>
        <span className="stat-value">0</span>
        <span className="stat-desc">{val.desc}</span>
      </div>
    );
  };

  const clickHandler = () => {
    const target = (sectionRef as RefObject<HTMLDivElement>)?.current;
    const scrollElem = target?.scrollIntoView({ behavior: "smooth" });
    return scrollElem;
  };

  return (
    <section className="intro-main" id="intro-main" ref={sectionRef}>
      <button className="scroll-down-text" onClick={clickHandler}>
        <AiOutlineDown />
        <span>Scroll Down</span>
      </button>
      <h2 className="intro-heading">HELLO THERE</h2>
      <span className="intro-declaration">We Are QuantumShift<sup className="intro-declaration-sup">TM</sup></span>
      <p className="intro-para">
      Quantumshift<sup className="intro-para-sup">TM</sup> is an Indian cybersecurity company focused in Quantum Technologies, Al and Semiconductors. We are a team comprising of experts from various scientific domains, united and devoted to deliver the most cutting-edge and effective solutions for the defence industries and the government organizations. We envision that tomorrow's digital sovereignity begins with attempts of today.
      </p>
      <div className="stats-container" ref={containerRef}>
        {stats.map(mapper)}
      </div>
    </section>
  );
}

const Introduction = forwardRef(I);
export default Introduction;