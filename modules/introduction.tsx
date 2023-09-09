import { useCallback, useEffect, useRef } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { stats } from "@/data";

export default function Introduction() {
  const sectionRef = useRef<HTMLDivElement>(null);
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
    const target = sectionRef.current;
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
        Quantum Shift is a tech startup that focuses on revolutionizing quantum
        computing. Our team of experts is dedicated to providing the most
        innovative and efficient solutions for businesses that want to take
        advantage of the power of quantum computing. We believe that
        tomorrow&apos;s technology starts with Quantum Shift today. At Quantum
        Shift, we promise to provide our clients with the best possible service
        and support. We are committed to excellence and we strive to exceed your
        expectations. We work closely with our clients to ensure that their
        needs are met and their goals are achieved. With Quantum Shift, you can
        be confident that you are in good hands.
      </p>
      <div className="stats-container" ref={containerRef}>
        {stats.map(mapper)}
      </div>
    </section>
  );
}
