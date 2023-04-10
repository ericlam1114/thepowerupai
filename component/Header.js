import React from "react";
import Head from "next/head";
import Link from "next/link";

function Header() {
  return (
    <div>
      <Head>
        <title>Startup Ideas, Sent Weekly</title>

        <meta
          name="description"
          content="Startup Ideas, Sent Weekly. Join 1,000+ entrepreneurs getting curated startup ideas in million dollar niches."
          key="desc"
        />
        <meta property="og:title" content="Startup Ideas, Sent Weekly" />
        <meta
          property="og:description"
          content="Join 1,000+ entrepreneurs getting curated startup ideas in
          million dollar niches. Launch your empire this weekend."
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/pTcnnb6p/Exploding-Ideas.png"
        />
        <link rel="icon" href="/favicon.ico" />

        {/* <Link href="/">
          <img
            src="/explodingideaslogo.png"
            alt="Exploding Ideas"
            className="md:lg:max-w-sm scale-50 mb-32 -mt-10 md:lg:mb-0 md:lg:mt-0"
          />
        </Link> */}
      </Head>

      <div class="flex flex-col justify-center -mt-8 items-center md:items-baseline -mb-10 md:-mb-56">
        <img
          src="/explodingideaslogo.png"
          className="max-w-sm scale-50 -mt-20 -mb-10"
          alt="Startup Ideas, Sent Weekly"
        />
      </div>
    </div>
  );
}

export default Header;
