import React, { useState, useEffect } from "react";
import { BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../component/Header.js";
import sparkloop from "sparkloop";

const Hero = () => {
  const [formData, setFormData] = useState({});
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const opts = {
    scan_forms: false,
  };

  const router = useRouter();

  useEffect(() => {
    sparkloop("team_31aa1e31f0fd", opts);
    setEmail("");
  }, []);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    try {
      console.log(formData);

      const data = {
        email: email,
      };

      SL.trackSubscriber(emailAddress);

      const response = await axios.post("/api/subscribe", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);
      setEmail("");
      router.push("/congratulations");
    } catch (err) {
      console.error(err);
      alert("Error subscribing. Please try again later.");
    }
  };
  return (
    <div className="container px-2 md:mx-auto md:lg:mx-auto md:lg:h-screen flex flex-col md:flex-row justify-between items-center ">
      {/* {showPopup && <Popup onClose={() => setShowPopup(false)} />} */}
      <div className="flex flex-col gap-5 ">
        <p className="text-md md:lg:text-lg font-medium bg-gray-100 text-black-700 uppercase px-3 flex justify-center rounded-3xl py-2 w-48">
          Newsletter
        </p>
        <p className="text-5xl text-white font-bold sm:w-full md:w-3/6 lg:w-3/6 md:lg:text-6xl">
          Your AI Edge, Every Sunday{" "}
        </p>
        <p className="text-base text-white  md:lg:w-2/5 ">
          Join 500+ readers from Microsoft, Meta and Tesla getting the single
          most productive new AI tool each week straight to their inbox.
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
              // onClick={handleClick}
              className="px-6 py-3 bg-gradient-to-r from-yellow-300 to-yellow-400 text-black rounded-lg hover:scale-95 duration-300 transition  shadow-xl font-medium"
            >
              Subscribe{" "}
            </button>
          </div>
        </form>
        <div className="">
          <p className="body-md text-white   pt-4 -mb-4 lg:body-lg text-center md:text-left opacity-60 md:lg:-mb-6">
            Read by employees from
          </p>
          <img
            src="/startupswhoread.png"
            className="max-w-full lg:max-w-sm -pt-2 opacity-60 "
            alt="startups that read explodingideas"
          />
        </div>
        {/* <div className="flex gap-5"> */}
        {/* <BsTwitter className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer" /> */}
        {/* <RiInstagramFill className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer"/> */}
        {/* <BsYoutube className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer"/> */}
        {/* </div> */}
      </div>
      <img
        src="/poweruplogo.png"
        className="max-w-full md:w-3/5 lg:max-w-sm"
        alt="mascot"
      />
    </div>
  );
};

export default Hero;
