import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { AiOutlineClose } from 'react-icons/ai'



const Email = ({ toggleMail, mail }) => {


    return (
      <>
        <Dialog open={mail} onClose={toggleMail} className="fixed z-999 overflow:hidden">
          <div className="flex items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-sm rounded bg-white">
              <Dialog.Title>wodnjsd@gmail.com</Dialog.Title>
              <button onClick={AiOutlineClose}>X</button>
            </Dialog.Panel>

          </div>

        </Dialog>
      </>
    )
  }


export default Email
