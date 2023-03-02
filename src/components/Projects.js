import React from "react";
import img1 from "../images/cocktail-home.png";
import img2 from "../images/ibyg-home.png";
import img3 from "../images/toothirty-home.png";
import img4 from "../images/fitness.png";
import img5 from "../images/bookmarks.png"
import { BsArrowRight } from "react-icons/bs";

const Projects = () => {
  return (
    <>
      <div className="bg-orange-100 h-full pt-20" id="projects">
        <p className="my-2 text-3xl px-10 font-bold  text-gray-900 md:text-center sm:text-4xl pb-10">
          Projects
        </p>

        <div className="lg:flex flex-row-reverse p-10">
          <div>
            <img
              src={img5}
              alt="toothirty homepage"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-center lg:gap-8 pt-5 text-left pr-5">
            <h1 className="text-3xl lg:text-5xl font-zodiak text-gray-600 ">
              Bookmarks
            </h1>
            <p className="text-sm py-2 lg:text-lg text-gray-600">
              Solo frontend project
              <br />
              Built with React and Typescript
            </p>
            <div className="pr-2 text-xl lg:text-3xl text-gray-500">
              <a href="https://jwbookmark.netlify.app/" target="blank">
                <BsArrowRight />
              </a>    
            </div>
          </div>
        </div>

        <div className="lg:flex p-10">
          <div>
            <img
              src={img4}
              alt="garden homepage"
              className="h-full w-full object-cover object-center"
            />
          </div>         
          <div className="flex flex-col justify-center lg:gap-8 lg:pl-5 pt-5 text-left">
            <h1 className="text-3xl lg:text-5xl font-zodiak text-gray-600 ">
              JW Fitness
            </h1>
            <p className="text-sm py-2 lg:text-lg text-gray-600">
              Solo front-end project
              <br />
              Built with Typescript, React, Tailwind
            </p>
            <div className="pr-2 text-xl lg:text-3xl text-gray-500">
              <a href="https://jwfitness.netlify.app/" target="blank">
                <BsArrowRight />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:flex flex-row-reverse p-10">
          <div>
            <img
              src={img3}
              alt="toothirty homepage"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-center lg:gap-8 pt-5 text-left pr-5">
            <h1 className="text-3xl lg:text-5xl font-zodiak text-gray-600 ">
              Toothirty
            </h1>
            <p className="text-sm py-2 lg:text-lg text-gray-600">
              Solo full-stack project
              <br />
              Built with React, Python, PostgreSQL
            </p>
            <div className="pr-2 text-xl lg:text-3xl text-gray-500">
              <a href="https://toothirty.netlify.app/" target="blank">
                <BsArrowRight />
              </a>
              <p className="text-xs">
                (under reconstruction to become responsive)
              </p>
            </div>
          </div>
        </div>

        <div className="lg:flex p-10">
          <div>
            <img
              src={img2}
              alt="garden homepage"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-center lg:gap-8 lg:pl-5 pt-5 text-left">
            <h1 className="text-3xl lg:text-5xl font-zodiak text-gray-600 ">
              I Beg Your garden
            </h1>
            <p className="text-sm py-2 lg:text-lg text-gray-600">
              Group full-stack project
              <br />
              Built with MERN{" "}
            </p>
            <div className="pr-2 text-xl lg:text-3xl text-gray-500">
              <a
                href="https://isnt-wodnjsd-awesome.netlify.app/"
                target="blank"
              >
                <BsArrowRight />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:flex flex-row-reverse p-10">
          <div>
            <img
              src={img1}
              alt="cocktail party homepage"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-center lg:gap-8 pt-5 text-left pr-5">
            <h1 className="text-3xl lg:text-5xl font-zodiak text-gray-600 ">
              Cocktail Party
            </h1>
            <p className="text-sm py-2 lg:text-lg text-gray-600">
              Group React project
            </p>
            <div className="pr-2 text-xl lg:text-3xl text-gray-500">
              <a
                href="https://main--ephemeral-salmiakki-7db874.netlify.app/"
                target="blank"
              >
                <BsArrowRight />
              </a>
            </div>
          </div>
        </div>

        <div className="py-10 font-zodiak md:text-lg text-sm text-gray-600 text-right mr-5">
          ...More to come soon
        </div>
      </div>
    </>
  );
};

export default Projects;
