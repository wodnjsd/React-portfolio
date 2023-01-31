import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import About from './About'
import Projects from './Projects'
import Email from './Email'
import Skills from './Skills'

const Home = () => {


  const [sidebar, setSidebar] = useState(false)
  const [mail, setMail] = useState(false)


  const toggle = () => {
    setSidebar(!sidebar)
  }

  const toggleMail = () => {
    setMail(!mail)
  }


  return (
    <>
      <Sidebar sidebar={sidebar} toggle={toggle} />
      <Navbar toggleMail={toggleMail} toggle={toggle} />
      {/* <Email toggleMail={toggleMail} /> */}
      <About
        id="about" />
      <Skills
        id="skills" />
      <Projects
        id="projects" />
      {/* <Contact
        id="contact" /> */}
      {/* <HeroSection />
      <InfoSection {...homeObjOne} />
   */}
    </>
  )

}

export default Home