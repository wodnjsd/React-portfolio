import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";

const Home = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggle = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <Sidebar sidebar={sidebar} toggle={toggle} />
      <Navbar sidebar={sidebar} toggle={toggle} />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Footer />
    </>
  );
};

export default Home;
