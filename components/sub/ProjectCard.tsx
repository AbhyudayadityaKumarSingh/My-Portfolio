import Image from "next/image";
import React from "react";
import { RxGithubLogo } from "react-icons/rx"; // Ensure you have this package installed

interface Props {
  src: string;
  title: string;
  description: string;
  githubLink: string; // Added GitHub link
}

const ProjectCard = ({ src, title, description, githubLink }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>

        {/* Button Container */}
        <div className="flex justify-center mt-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-purple-500 hover:bg-purple-500 hover:text-white text-purple-500 px-3 py-1 rounded-lg transition-colors text-sm"
          >
            <RxGithubLogo className="mr-1" /> {/* Add margin for spacing */}
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
