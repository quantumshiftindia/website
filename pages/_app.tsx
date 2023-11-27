import {default as Footer} from "@/components/footer";
import {default as Header} from "@/components/header";
import "@/styles/styles.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>QuantumShift</title>
        <meta name="description" content="QuantumShift"></meta>
        <meta name="author" content="Abhas Chatterjee"></meta>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
