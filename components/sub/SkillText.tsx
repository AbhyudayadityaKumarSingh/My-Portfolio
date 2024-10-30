"use client";
import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const skills = [
  "JavaScript",
  "React.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "C++",
  "C",
  "Java",
  "HTML",
  "CSS",
  "Python",
  "Machine Learning",
  "Deep Learning",

  "TensorFlow",
  "TailwindCSS",
  "Next.js",
  "Git",
  "GitHub",
  "MySQL",
  "Cyber Security",
  
];

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center px-4 sm:px-0">
      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
       
      >
      
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-[60px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Skills{" "}
          </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="cursive text-[30px] text-gray-200 mb-10 mt-[10px] text-center"
      >

      </motion.div>

      {/* Scrolling Skills Section */}
      <div className="relative w-full overflow-hidden py-5">
        {/* <motion.div
          className="flex justify-around items-center whitespace-nowrap will-change-transform"
          initial={{ x: "100%" }}
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          {skills.map((skill, index) => (
            <span
              key={index}
              className="text-white mx-10 text-[18px] font-semibold"
            >
              {skill}
            </span>
          ))}
        </motion.div> */}
      </div>
    </div>
  );
};

export default SkillText;
