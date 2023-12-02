import Landingpage from "@/modules/landing-page";
import Head from "next/head";

export default function Home() {
  return (
    <section id="home" aria-label="home">
      <Head>
        <meta property="og:title" content="QuantumShift" />
        <meta property="og:description" content="QuantumShift home page" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quantumshiftindia.in" />
        <link rel="canonical" href="https://www.quantumshift.in/"/>
      </Head>
      <Landingpage />
    </section>
  );
}
