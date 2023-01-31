import React, { Fragment } from 'react'
import { FaBars } from 'react-icons/fa'
import { SiGithub } from 'react-icons/si'
import { BsLinkedin } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
// import { AiOutlineClose } from 'react-icons/ai'
import { Popover } from '@headlessui/react'
import { Link } from 'react-scroll'
// import Email from './Email'
// import Sidebar from './Sidebar'



const links = {
  activeClass: 'active',
  spy: true,
  smooth: true,
  duration: 500,
  className: "font-bespoke text-gray-600 text-lg hover:text-gray-900 cursor-pointer px-5 py-2 rounded-md text-md"

}

const Navbar = ({ toggle, toggleMail }) => {



  return (
    <>

      <div className="bg-orange-100 flex w-full fixed h-20 px-2 sm:px-6 lg:px-8 z-10 items-center justify-between">

        <div class="sm:items-stretch sm:justify-start">
          <button type="button" onClick={toggle} className="sm:hidden cursor-pointer rounded-md p-2 text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <FaBars />
          </button>
          <div class="hidden sm:ml-6 sm:block">
            <div>

              <Link
                {...links}
                to='about'
              >About</Link>
              <Link
                {...links}
                to='skills'
              >Skills</Link>
              <Link
                {...links}
                to='projects'
              >Projects</Link>

            </div>
          </div>


        </div>
        <div className="absolute inset space-x-4 right-0 flex items-center pr-2 text-lg lg:text-2xl text-gray-500 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <a href="https://github.com/wodnjsd" target="blank"><SiGithub /></a>
          <a href="https://www.linkedin.com/in/jaewon-han-4900521a5/" target="blank"><BsLinkedin /></a>
          <Popover>
              <Popover.Button className="flex"><HiOutlineMail /></Popover.Button>
              <Popover.Panel className="absolute right-2 z-10 mt-3 w-100 max-w-md  transform px-4 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden p-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">

                <p className="text-sm">wodnjsd@gmail.com</p>
                </div>
              </Popover.Panel>


          </Popover>
        
          
        </div>
      </div>

    </>
  )
}

export default Navbar