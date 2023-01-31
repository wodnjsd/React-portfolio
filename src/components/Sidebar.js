import React, { Fragment } from 'react'
import { Link } from 'react-scroll'
import { AiOutlineClose } from 'react-icons/ai'
import { Transition } from '@headlessui/react'


const links = {
  activeClass: 'active',
  spy: true,
  smooth: true,
  duration: 500,
  offset:-40,
  className: "font-zodiak text-gray-500 hover:text-gray-900 cursor-pointer",

}

const Sidebar = ({ sidebar, toggle }) => {
  return (
    <>
      <Transition show={sidebar} as={Fragment}
        enter="transition duration-300 ease-in-out transform"
        enterFrom="-translate-y-full"
        enterTo="translate-y-0"
        leave="transition duration-300 ease-in-out transform"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-full">
        <div className="grid align-middle fixed w-full h-full bg-orange-200 z-999">
          
        
            <div className=" grid grid-cols-1 grid-rows-5 text-center text-3xl ">
              <button>
              <AiOutlineClose onClick={toggle} className="text-gray-600 cursor-pointer mt-10" />
                </button>
           
              <Link
                {...links}
                to='about'
                onClick={toggle}
              >About</Link>

              <Link
                {...links}
                to='skills'
                onClick={toggle}

              >Skills</Link>

              <Link
                {...links}
                to='projects'
                onClick={toggle}
              >Projects</Link>

            </div>

          </div>
        

      </Transition>

    </>

  )
}

export default Sidebar