import React from "react";
import Head from "next/head";

function Header() {
  return (
    <div>
      <Head>
        <title>Startup Ideas, Fresh Weekly</title>

        <meta name="description" content="Startup Ideas, Fresh Weekly" key="desc" />
        <meta property="og:title" content="Startup Ideas, Fresh Weekly" />
        <meta
          property="og:description"
          content="Join over one hundred podcasters signed up to monetize
          their podcasts with branded in-stream ads, the easy way."
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/T1Zv1ZY5/poderly.png"
        />
      </Head>
   

      <div class="flex flex-col justify-center -mt-8 items-center md:items-baseline -mb-10 md:-mb-56">
        <img
          src="/explodingideaslogo.png"
          className="max-w-sm scale-50 -mt-20 -mb-10"
          alt="explodingideas logo"
        />
      </div>
    </div>
  );
}

export default Header;
