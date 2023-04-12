import "../styles/globals.css";
import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
// import * as fbq from "../lib/fpixel";

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      {/* Global Site Code Pixel - Facebook Pixel */}

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
