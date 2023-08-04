import React from "react";
import { BsArrowRight } from "react-icons/bs";
import projects from "../data/projects.js";

const Projects = () => {
  return (
    <>
      <div
        className="bg-orange-100 h-full px-5 md:px-12 flex flex-col items-center"
        id="projects">
        <h2 className="py-24 text-3xl font-bold  text-gray-900 md:text-center sm:text-4xl">
          Projects
        </h2>
        <div className="flex flex-col gap-20 justify-center items-center max-w-6xl lg:gap-20">
          {projects.map((project) => (
            <div
              key={project.id}
              className="font-zodiak text-gray-600 flex flex-col gap-5 lg:flex-row lg:gap-20"
            >
              <div className="flex flex-col gap-2 lg:gap-5">
                <h3 className="text-4xl lg:text-5xl ">{project.title}</h3>
                <p className="whitespace-pre-line">{project.description}</p>
                <a href={project.url} target="blank">
                  <BsArrowRight className="text-xl lg:text-4xl"/>
                </a>
              </div>
              <img src={project.image} alt={project.name} className="w-full lg:w-2/3" />
            </div>
          ))}
        </div>

        <div className="py-10 font-zodiak md:text-lg text-sm text-gray-600">
          ...More to come soon
        </div>
      </div>
    </>
  );
};

export default Projects;
