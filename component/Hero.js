import React from "react";
import { useState } from "react";
import { BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import axios from "axios";
// import Popup from "./Popup";
import { useRouter } from "next/router"; // Import useRouter
import Header from "../component/Header.js";

const mailchimp = require("@mailchimp/mailchimp_marketing");

// handle click
const handleClick = () => {
  const eventData = {
    content_name: "Newsletter Subscribe",
    content_category: "Button Interactions",
  };


};

const Hero = () => {
  const [formData, setFormData] = useState({});
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // const [showPopup, setShowPopup] = useState(false);

  const router = useRouter(); // Initialize useRouter

  const handleInputChange = (event) => {
    setEmail(event.target.value);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    try {
      console.log(formData);
      // appendSpreadsheet(formData)
      // setEmail('');
      // console.log(email);

      const data = {
        Email: email,
      };

      axios
        .post(
          "https://sheet.best/api/sheets/bab566a2-d238-4430-a4f6-77c8bd90f773",
          data
        )
        .then((response) => console.log(response));
      // alert('email submitted successfully')
      setEmail("");
      router.push("/congratulations");
    } catch (err) {
      console.error(err);
      alert("Error subscribing. Please try again later.");
    }
  };
  return (
    <div className="container mx-auto md:lg:h-screen flex flex-col md:flex-row justify-between items-center ">
      {/* {showPopup && <Popup onClose={() => setShowPopup(false)} />} */}
      <div className="flex flex-col gap-5">
        <p className="text-md md:lg:text-lg font-medium bg-yellow-100 text-yellow-700 uppercase px-3 flex justify-center rounded-3xl py-2 w-48">
          Newsletter
        </p>
        <p className="text-5xl font-bold sm:w-full md:lg:w-4/6 md:lg:text-6xl">
          Startup Ideas, Sent Weekly{" "}
        </p>
        <p className="text-base md:lg:w-1/2">
          Join 1,000+ elite entrepreneurs getting curated startup ideas in million
          dollar niches. Launch your empire this weekend.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex gap-5">
            <input
              placeholder="Enter your email..."
              type="email"
              value={email}
              onChange={handleInputChange}
              className="border border-gray-200 rounded-xl focus:outline-none focus:shadow-xl shadow-sm px-4"
            />

            <button
              onClick={handleClick}
              className="px-6 py-3 bg-gradient-to-r from-[#181918] to-[#262927] rounded-2xl hover:scale-95 duration-300 transition text-white shadow-xl font-medium"
            >
              Subscribe{" "}
            </button>
          </div>
        </form>
        <div className="">
          <p className="body-md  pt-4 -mb-4 lg:body-lg text-center md:text-left opacity-60 md:lg:-mb-6">
            Read by ex-employees from
          </p>
          <img
            src="/startupswhoread.png"
            className="max-w-sm lg:max-w-sm -pt-2 opacity-60 "
            alt=""
          />
        </div>
        {/* <div className="flex gap-5"> */}
        {/* <BsTwitter className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer" /> */}
        {/* <RiInstagramFill className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer"/> */}
        {/* <BsYoutube className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer"/> */}
        {/* </div> */}
      </div>
      <img src="/startupideas.png" className="w-3/5 lg:max-w-sm" alt="" />
    </div>
  );
};

export default Hero;
