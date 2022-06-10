import React, { useState } from 'react'

export default function AddAddress() {
    const [showModal, setShowModal] = useState(false)
    const [showAddAddressModal, setAddAddressModal] = useState(false)

    return (
        <div>
          <button
            className="text-gray-500 border border-gray-500 hover:bg-gray-500 hover:text-white active:bg-gray-600 font-bold px-8 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Choose Another Address
          </button>
          {showModal ? (
            <>
              <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="items-start p-5 border-b border-solid border-gray-300 rounded-t">
                      <div className='flex justify-end'>
                        <button
                          className="bg-transparent border-0 text-black float-right"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                            x
                          </span>
                        </button>
                      </div>
                      <div className='flex justify-center'>
                        <h3 className="text-3xl font-semibold justify-center">Choose another address</h3>
                      </div>
                    </div>
                    <div className="relative p-6 flex-auto">
                      <div className="grid grid-cols-12">
                        <button
                          className="text-gray-500 border-dashed border-2 border-gray-500 hover:bg-gray-500 hover:text-white active:bg-gray-600 
                          font-bold px-8 py-3 rounded outline-none focus:outline-none 
                          mr-1 mb-1 ease-linear transition-all duration-150 col-span-12"
                          type="button"
                          onClick={() => setShowModal(true)}
                        >
                          <div className="mr-1 mb-3 mt-3">
                            Add New Address
                          </div>
                        </button>
                      </div>
                      <div className="bg-white-200 shadow-md rounded px-8 py-6 mt-6 w-full">
                        <p className='font-bold'>Andreas Jane</p>
                        <p className='leading-8'>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, 
                        Jawa Tengah, 53181 [Blanja Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                        <button
                          className="text-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold px-0 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(true)}
                        >
                          Change Address
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
    )
}
