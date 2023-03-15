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
          content="Join 1,000+ entrepreneurs getting curated startup ideas in
          million dollar niches. Launch your empire this weekend."
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/k4nYPFyF/Untitled-design-6.png"
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
