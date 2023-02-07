import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-orange-100 h-screen" id="about">
        <div className="pl-8 pr-6 mx-auto max-w-2xl py-52 lg:py-56 ">
          <h1 className="font-stardom text-6xl text-gray-900 md:text-7xl">
            Jaewon Han
          </h1>

          <p className="mt-6 text-lg pt-10 sm:leading-8 text-gray-600">
            Dentist and developer based in London
          </p>
          <p className="text-sm pt-5 max-w-lg leading-5 text-gray-600">
            Been working as a dentist for 3.5 years, looking for new
            opportunities as full-stack/ front-end developer!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
