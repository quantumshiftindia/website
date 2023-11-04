import {default as Footer} from "@/components/footer";
import {default as Header} from "@/components/header";
import "@/styles/styles.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
