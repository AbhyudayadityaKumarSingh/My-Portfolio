import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 mb-[-180px]" id="projects">
      {/* Title */}
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      {/* Grid Layout for Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <ProjectCard
          src="/nile.jpg"
          title="Shop.Co"
          description="Revolutionizing online shopping with a cutting-edge MERN stack e-commerce platform."
          githubLink="https://github.com/AbhyudayadityaKumarSingh/Shop.Co"
        />
        <ProjectCard
          src="/odd.jpg"
          title="Ophthalmic Diseases Detection Model"
          description="A deep learning-based model using ResNet50 for eye disease detection."
          githubLink="https://github.com/AbhyudayadityaKumarSingh/Minor-Project"
        />
        <ProjectCard
          src="/TravelWebsite.jpg"
          title="TravelGo"
          description="A captivating frontend travel website to inspire your next adventure."
          githubLink="https://github.com/AbhyudayadityaKumarSingh/Travel-Website"
        />
        <ProjectCard
          src="/icons/anime.jpg"
          title="Anime Recommendation System"
          description="A machine learning-based system to recommend anime based on user preferences."
          githubLink="https://github.com/your-anime-project-link"
        />
      </div>
    </div>
  );
};

export default Projects;
