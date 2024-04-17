import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Here are some of my projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        
        <ProjectCard
          src="/DjangoWebsite.png" 
          title="Django Website"
          description="The purpose of my code is to demonstrate how Django can be used to create web applications by creating my personal portfolio website."
        />
  
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Next.js"
          description="The purpose is to create a portfolio using next, react and vercel to deply website." 
        />
        <ProjectCard
          src="/DjangoWebsite.png" 
          title="Django Website"
          description="The purpose of my code is to demonstrate how Django can be used to create web applications by creating my personal portfolio website"
        />

      </div>
    </div>
  );
};

export default Projects;
