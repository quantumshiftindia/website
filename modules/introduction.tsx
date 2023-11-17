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
      <span className="intro-declaration">We Are QuantumShift</span>
      <p className="intro-para">
      Quantumshift is a deep-tech startup that specializes in transforming quantum solutions. Our team of experts is devoted to delivering the most cutting-edge and effective solutions for industries and government organizations that want to leverage the potential of quantum mechanics. We envision that tomorrow's technology begins with attempts of today. At Quantumshift, we guarantee to provide our clients with the highest quality of service and support. We are dedicated to excellence and we endeavor to surpass your expectations. We collaborate closely with our clients to ensure that their requirements are fulfilled and their objectives are accomplished. With Quantumshift, you can be assured that you are in capable hands.
      </p>
      <div className="stats-container" ref={containerRef}>
        {stats.map(mapper)}
      </div>
    </section>
  );
}

const Introduction = forwardRef(I);
export default Introduction;