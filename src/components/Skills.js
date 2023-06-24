import React from "react";

import {
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiGithub,
  SiHeroku,
  SiJirasoftware,
  SiNodedotjs,
  SiFlask,
  SiHtml5,
  SiCss3,
  SiPython,
  SiReact,
} from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <SiHtml5 />,
  },
  {
    name: "CSS",
    icon: <SiCss3 />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
  },
  {
    name: "Flask",
    icon: <SiFlask />,
  },
  {
    name: "Javascript",
    icon: <SiJavascript />,
  },
  {
    name: "Python",
    icon: <SiPython />,
  },
  {
    name: "Typescript",
    icon: <SiTypescript />,
  },
  {
    name: "React",
    icon: <SiReact />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "Github",
    icon: <SiGithub />,
  },
  {
    name: "Heroku",
    icon: <SiHeroku />,
  },
  {
    name: "Jira",
    icon: <SiJirasoftware />,
  },
];

const Skills = () => {
  return (
    <>
      <div className="bg-white h-full min-h-screen py-12 px-5 sm:px-20 flex flex-col items-center" id="skills">
        <h2 className="py-20 text-3xl font-bold  text-gray-900 sm:text-4xl">
          Skills
        </h2>

        <div className="max-w-2xl lg:my-8 lg:max-w-4xl">
          <dl className="grid grid-cols-2 md:grid-cols-3 gap-y-10 lg:grid-cols-5 lg:gap-y-16 gap-x-1 sm:gap-x-10">
            {skills.map((skill) => (
              <dt
                key={skill.name}
                className="flex align-middle font-semibold leading-7"
              >
                <div class="mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-200 text-2xl text-gray-700">
                  {skill.icon}
                </div>
                <div className="flex items-center text-gray-900 text-xs sm:text-sm">
                  {skill.name}
                </div>
              </dt>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
};

export default Skills;
