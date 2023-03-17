import React, { useState, useEffect, useRef } from "react";
import { BsFacebook, BsTwitter, BsEnvelope, BsLink45Deg } from "react-icons/bs";

const Popup = ({ onClose }) => {
  const [copied, setCopied] = useState(false);
  const overlayRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
  };

  const handleClickOutside = (event) => {
    if (overlayRef.current && !overlayRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });


  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50"
   >
     
         <div className="bg-white rounded-lg p-6 max-w-md text-center" ref={overlayRef}>
        <h2 className="text-2xl font-bold mb-4">Share with friends!</h2>
        <div className="flex justify-center gap-6">
          <button
            onClick={() => {
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  window.location.href
                )}`,
                "popup",
                "width=600,height=500"
              );
            }}
            className="text-blue-700 hover:text-blue-900"
          >
            <BsFacebook size={32} />
          </button>
          <button
            onClick={() => {
              window.open(
                `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  "Check out this website!"
                )}&url=${encodeURIComponent(window.location.href)}`,
                "popup",
                "width=600,height=500"
              );
            }}
            className="text-blue-400 hover:text-blue-600"
          >
            <BsTwitter size={32} />
          </button>
          <a
            href={`mailto:?subject=${encodeURIComponent(
              "Check out this website!"
            )}&body=${encodeURIComponent(window.location.href)}`}
            className="text-red-600 hover:text-red-800"
          >
            <BsEnvelope size={32} />
          </a>
          <button
            onClick={handleCopy}
            className="text-gray-700 hover:text-gray-900"
          >
            {copied ? "Copied!" : <BsLink45Deg size={32} />}
          </button>
        </div>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M10 8.586L6.707 5.293a1 1 0 10-1.414 1.414L8.586 10l-3.293 3.293a1 1 0 001.414 1.414L10 11.414l3.293 3.293a1 1 0 001.414-1.414L11.414 10l3.293-3.293a1 1 0 00-1.414-1.414L10 8.586z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Popup;
