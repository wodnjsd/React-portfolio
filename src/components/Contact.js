import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

const Contact = () => {
  return (
    <>
      <div class="bg-white py-24 sm:py-32" id="contact">
        <div class="mx-auto max-w-2xl lg:text-center">
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact</p>

        </div>

        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-gray-900">
     
                LinkedIn
              </dt>
              <BsLinkedin />
              
            </div>

            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-gray-900">
    
                Email
              </dt>
              <HiOutlineMail />
             
            </div>
          </dl>

        </div>

      </div>



    </>

  )
}

export default Contact