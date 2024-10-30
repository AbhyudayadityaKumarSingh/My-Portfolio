"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

// Profile data for LeetCode, CodeForces, GeeksforGeeks, and Coding Ninjas
const codingProfiles = [
  {
    name: "LeetCode",
    icon: "/icons/leetcode1.png", // Correct relative path
    link: "https://leetcode.com/u/abhyuday31/",
    description: "Solve coding challenges and improve problem-solving skills.",
  },
  {
    name: "CodeForces",
    icon: "/icons/codeforces.webp", // Correct relative path
    link: "https://codeforces.com/profile/your-profile",
    description: "Compete in programming contests and enhance your coding ability.",
  },
  {
    name: "GeeksforGeeks",
    icon: "/icons/gfg1.png", // Correct relative path
    link: "https://www.geeksforgeeks.org/user/abhyudayadityakumarsingh/",
    description: "Explore data structures and algorithms with tutorials and challenges.",
  },
  {
    name: "Coding Ninjas",
    icon: "/icons/coding-ninjas.jpeg", // Correct relative path
    link: "https://www.codingninjas.com/",
    description: "Learn coding and programming with online courses and coding bootcamps.",
  },
];

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full mb-[-180px]">
      {/* Title */}
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200 "  // Adjusted margin
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Coding Profiles{" "}
          </span>
        </motion.div>
      </div>

      {/* Profile Cards */}
      <div className="flex flex-col items-center justify-center translate-y-[-20px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-row gap-10">
          {codingProfiles.map((profile) => (
            <motion.div
              key={profile.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-[300px] h-[350px] bg-[#1A1A2E] rounded-lg shadow-lg flex flex-col items-center p-5 cursor-pointer transition-transform transform hover:scale-105"
            >
              {/* Profile Icon */}
              <Image
                src={profile.icon}
                alt={profile.name}
                width={100}
                height={100}
                className="rounded-full mb-5"
              />
              
              {/* Profile Name */}
              <h2 className="text-[25px] font-semibold text-white mb-3">
                {profile.name}
              </h2>
              
              {/* Description */}
              <p className="text-gray-300 text-center mb-5">
                {profile.description}
              </p>
              
              {/* Visit Profile Button */}
              <a
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border border-purple-500 hover:bg-purple-500 hover:text-white text-purple-500 px-3 py-1 rounded-lg transition-colors text-sm"
              >
                Visit {profile.name} Profile
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Encryption;
