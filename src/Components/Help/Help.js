/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const Help = ({ open, setOpen }) => {
  const handleMessage = e => {
    e.preventDefault();
    const data = {
      data: {
        messages: e.target.messages.value
      }
    }
    axios
      .post('https://techxes.herokuapp.com/api/supports', data)
      .then(res => {
        swal('Done!', 'We received your message! We will contact you in the shortest possible time.', 'success');
        setOpen(false);
        e.target.reset();
      })
      .catch(err => {
        console.log(err);
      });
  };
  const cancelButtonRef = useRef(null)
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center mt-26 md:min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel style={{ background: "#F5F5F7" }} className="relative rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className='p-10'>
                  <div className='text-center text-2xl font-bold mb-4'>
                    Help
                  </div>
                  <form onSubmit={handleMessage} action="">
                    <div className='flex justify-center'>
                      <textarea className='rounded-lg px-2 pt-2' placeholder='Type your message here...' name="messages" id="" cols="30" rows="8"></textarea>
                    </div>
                    <div className='flex justify-center'>
                      <button className='bg-indigo-600 text-white px-4 py-2 rounded-lg my-4' type="submit">Submit</button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
export default Help;
