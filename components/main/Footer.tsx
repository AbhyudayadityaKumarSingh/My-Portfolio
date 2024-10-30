import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        {/* Heading */}
        <div className="font-bold text-[24px] mb-[20px] text-center">Let's Connect</div>

        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {/* GitHub */}
          <a
            href="https://github.com/AbhyudayadityaKumarSingh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-start my-[15px] cursor-pointer"
          >
            <FaGithub className="text-[30px]" />
            <span className="text-[15px] ml-[6px]">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/abhyudayadityakumarsingh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-start my-[15px] cursor-pointer"
          >
            <FaLinkedin className="text-[30px]" />
            <span className="text-[15px] ml-[6px]">LinkedIn</span>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/your-twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-start my-[15px] cursor-pointer"
          >
            <FaTwitter className="text-[30px]" />
            <span className="text-[15px] ml-[6px]">Twitter</span>
          </a>

          {/* Phone */}
          <div className="flex flex-col items-center justify-start my-[15px] cursor-pointer">
            <FaPhoneAlt className="text-[30px]" />
            <span className="text-[15px] ml-[6px]">+91-8840635108</span>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center justify-start my-[15px] cursor-pointer">
            <FaEnvelope className="text-[30px]" />
            <span className="text-[15px] ml-[6px]">abhyuday3108@gmail.com</span>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-[20px] text-[15px] text-center">
          &copy; Abhyudayaditya Kumar Singh {currentYear}
        </div>
      </div>
    </div>
  );
};

export default Footer;
