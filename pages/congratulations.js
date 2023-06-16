// pages/thank-you.js
import React, { useState, useEffect } from "react";
import Link from "next/link";
// import Confetti from 'react-confetti';
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { RiMailSendLine } from "react-icons/ri";
import { BiLink } from "react-icons/bi";
import Popup from "../component/Popup.js";
import Header from "../component/Header.js";

const Congratulations = () => {
  //   const [showShare, setShowShare] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    // Add the "Subscribe" event when the component is mounted
    window.fbq &&
      window.fbq("track", "Subscribe", {
        value: "0.00",
        currency: "USD",
        predicted_ltv: "0.00",
      });
    // Set a timeout to show the popup after 2 seconds
    const timeoutId = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    // Cleanup function to clear the timeout if the component is unmounted
    return () => {
      clearTimeout(timeoutId);
    };
  }, []); // The empty dependency array ensures this effect runs only once on mount

  return (
    <div className="mx-auto min-h-screen flex flex-col px-4 font-sans bg-gradient-to-r from-black to-black">
      <Link href="/">
        <Header className="-mt-14 px-4 md:lg:flex md:lg:justify-none"></Header>
      </Link>
      {/* <header className="md:lg:max-w-sm scale-50 mb-32 -mt-10 md:lg:mb-0 md:lg:mt-0">
        <Link href="/">
          <img
            src="/explodingideaslogo.png"
            alt="Exploding Ideas"
            className=""
          />
        </Link>
       
      </header> */}
      {showPopup && <Popup onClose={closePopup} />}
      <main className="flex flex-col items-center justify-center flex-grow text-center -mt-72">
        <img
          src="/poweruplogo.png"
          alt="you're subscribed"
          className="max-w-sm scale-50 -mb-40 mt-32 md:lg:mt-44 "
        />
        <h1 className="text-4xl mt-12 text-white font-bold">
          Congratulations!
        </h1>
        <h2 className="text-7xl mt-4 md:lg:text-8xl text-white font-extrabold">
          You're In
        </h2>
        <p className="text-xl mt-4 text-white">
          You’ll see us in your inbox on Sundays.
        </p>
        <div className="mt-12 text-sm text-gray-600 leading-7 p-4 border border-gray-300 rounded-md shadow-sm bg-gray-100">
          <p>
            👉Note: Today be on the lookout for a welcome email from us. If it
            lands in your spam, <strong>move it to your inbox</strong> for
            future deliverabilty.
          </p>
        </div>
      </main>
      {/* <footer className="mt-12 mb-4">
        <Link href="/">
          <span className="text-blue-600 hover:text-blue-800 transition-colors duration-200 mt-6 cursor-pointer">
            Home
          </span>
        </Link>
      </footer> */}
    </div>
  );
};

export default Congratulations;
