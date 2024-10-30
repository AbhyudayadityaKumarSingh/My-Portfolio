import React from "react";
import { RxBriefcase } from "react-icons/rx"; // Ensure you have this package installed

interface ExperienceCardProps {
  role: string;
  company: string;
  duration: string;
  description: string;
}

const ExperienceCard = ({ role, company, duration, description }: ExperienceCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] p-6 bg-[#1A1A2E]">
      {/* Job Role */}
      <h2 className="text-2xl font-semibold text-white">{role}</h2>
      
      {/* Company */}
      <h3 className="text-xl text-purple-500 mt-2">{company}</h3>
      
      {/* Duration */}
      <p className="text-gray-400 mt-1">{duration}</p>
      
      {/* Description */}
      <p className="text-gray-300 mt-4">{description}</p>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="experience">
      {/* Title */}
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Work Experience
      </h1>

      {/* Grid Layout for Experience Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <ExperienceCard
          role="React Developer Intern"
          company="Celebal Technologies"
          duration="May 2024 - July 2024"
          description="Contributed to multiple projects, built responsive and user-friendly interfaces, and participated in sprint planning."
        />
        
      </div>
    </div>
  );
};

export default Experience;
