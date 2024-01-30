import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/nile.jpg"
          title="The Nile Project"
          description="NILE: Revolutionizing online shopping with a cutting-edge MERN stack e-commerce platform."
        />
        <ProjectCard
          src="/reactsocialmedia1.png"
          title="Social Media App"
          description="Elevate your social experience with our innovative MERN-based social media app project."
        />
        <ProjectCard
          src="/TravelWebsite.jpg"
          title="Travel Website"
          description="Embark on your next adventure with our captivating frontend travel website, designed to inspire and guide your wanderlust."
        />
      </div>
    </div>
  );
};

export default Projects;
