import Image from "next/image";

export default function Home() {
  return (
    <section id="home" aria-label="home">
      <main id="body">
        <div className="img-container">
          <Image
            src="/assets/images/backsoon.jpg"
            alt="backsoon"
            fill
            sizes="100%"
          ></Image>
        </div>
        <div className="back-soon-text">
          <h2>Website under maintainance</h2>
          <div className="span-bank">
            <span>For support and queries, please contact:</span>
            <a href="mailto:contacts@quantumshift.in">
              contact@quantumshift.in
            </a>
            <a href="mailto:ceo@quantumshift.in">ceo@quantumshift.in</a>
          </div>
        </div>
      </main>
    </section>
  );
}
