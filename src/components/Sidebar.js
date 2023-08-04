import React, { Fragment } from "react";
import { Link } from "react-scroll";
import { Transition } from "@headlessui/react";

const links = {
  activeClass: "active",
  spy: true,
  smooth: true,
  duration: 500,
  offset: -40,
  className:
    "font-zodiak text-gray-500 hover:text-gray-900 cursor-pointer row-span-1",
};

const Sidebar = ({ sidebar, toggle }) => {
  return (
    <>
      <Transition
        show={sidebar}
        as={Fragment}
        enter="transition duration-300 ease-in-out transform"
        enterFrom="-translate-y-full"
        enterTo="translate-y-0"
        leave="transition duration-300 ease-in-out transform"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-full"
      >
        <div className="grid align-middle fixed w-full h-full bg-gradient-to-b from-orange-100 to-orange-200 z-999">
          <div className="flex flex-col justify-center gap-24 text-center text-3xl ">
            <Link {...links} to="about" onClick={toggle}>
              About
            </Link>
            <Link {...links} to="skills" onClick={toggle}>
              Skills
            </Link>
            <Link {...links} to="projects" onClick={toggle}>
              Projects
            </Link>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Sidebar;
