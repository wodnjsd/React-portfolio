import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-orange-100 h-screen flex justify-center items-center" id="about">
        <div className="px-6 max-w-xl py-52 lg:py-60 ">
          <h1 className="font-stardom text-6xl text-gray-900 md:text-7xl">
            Jaewon Han
          </h1>
          <p className="mt-6 text-lg pt-10 sm:leading-8 text-gray-600">
            Dentist and developer based in London
          </p>
          <p className="text-sm pt-5 max-w-lg leading-5 text-gray-600">
         Full-stack/ front-end developer looking for new opportunities!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
