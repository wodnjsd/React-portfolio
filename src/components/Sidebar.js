import React, { Fragment } from 'react'
import { Link } from 'react-scroll'
import { AiOutlineClose } from 'react-icons/ai'
import { Transition } from '@headlessui/react'


const links = {
  activeClass: 'active',
  spy: true,
  smooth: true,
  duration: 500,
  offset: -40,
  className: "font-zodiak text-gray-500 hover:text-gray-900 cursor-pointe row-span-1",

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
        {/* <button>
              <AiOutlineClose onClick={toggle} className="text-lg text-gray-600 cursor-pointer" />
            </button> */}


          <div className="mt-20 pt-20 grid grid-cols-1 grid-rows-4 text-center text-3xl ">
          

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