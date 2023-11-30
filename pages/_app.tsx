import {default as Footer} from "@/components/footer";
import {default as Header} from "@/components/header";
import "@/styles/styles.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {

  // Schema.org JSON-LD
  const schemaOrgWebPage = {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "Quantum Shift India",
    "url": "https://quantumshiftindia.in",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-(512)-355-9446",
        "contactType": "contact"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>QuantumShift</title>
        
        <meta name="description" content="QuantumShift"/>
        <meta name="author" content="Abhas Chatterjee"/>
        <meta name="keywords" content="quantum, shift, website, development,Quantum Shift India, Quantum technology India, Quantum computing India, Quantum mechanics in India, Quantum research India, Quantum technology advancements, India's quantum initiatives, Quantum computing solutions India, Quantum information science, Quantum applications in India, Quantum technology development, Indian quantum research organizations, Quantum education in India, Quantum software solutions, Quantum hardware in India"/>
        <meta name="robots" content="index, follow"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>

        {/* Custom OpenGraph meta tags */}
        <meta property="og:title" content="QuantumShift" />
        <meta property="og:description" content="QuantumShift" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quantumshiftindia.in" />

        <link rel="canonical" href="https://www.yourwebsite.com/your-page-url"/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgWebPage) }}
        />

      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
