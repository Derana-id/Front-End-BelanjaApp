import React, { useState } from 'react';
import Image from 'next/image';
import Close from '../../assets/icons/close.svg';

export default function AddAddress() {
  const [showModal, setShowModal] = useState(false);
  const [showAddAddressModal, setShowAddAddressModal] = useState(false);

  return (
    <div>
      <button
        className="text-gray-500 border border-gray-500 hover:bg-gray-500 hover:text-white active:bg-gray-600 font-bold px-8 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowAddAddressModal(true)}
      >
        Choose Another Address
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="items-start p-5 border-b border-solid border-gray-300 rounded-t">
                  <div className="flex justify-end">
                    <button
                      className="bg-transparent border-0 text-black float-right"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                        x
                      </span>
                    </button>
                  </div>
                  <div className="flex justify-center">
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
                      onClick={() => setShowAddAddressModal(true)}
                    >
                      <div className="mr-1 mb-3 mt-3">
                        Add New Address
                      </div>
                    </button>
                  </div>
                  <div className="bg-white-200 shadow-md rounded px-8 py-6 mt-6 w-full">
                    <p className="font-bold">Andreas Jane</p>
                    <p className="leading-8">Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, 
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
      { showAddAddressModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-4xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex flex-col items-start justify-between p-5 rounded-t">
                    <button
                      className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={setShowModal(false)}
                    >
                      <span className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none">
                        <Image src={Close} />
                      </span>
                    </button>
                    <div className="mt-6 mx-auto">
                      <h3 className="text-3xl font-semibold">Add new address</h3>
                    </div>
                  </div>
                  {/*body*/}
                  <div className="w-[900px] flex flex-col relative p-6">
                    <div className="w-full mb-2 flex flex-col">
                                  <label className="text-[#9B9B9B]">Save address as (ex : home address, office address)</label>
                                  <input type="text" className="border h-11 px-3 rounded mt-2" />
                    </div>
                    <div className="flex mb-2 w-full">
                      <div className="flex flex-col mr-4 w-1/2">
                        <label className="text-[#9B9B9B]">Recipient’s name</label>
                        <input type="text" className="border h-11 px-3 rounded mt-2" />
                      </div>
                      <div className="flex flex-col ml-4 w-1/2">
                        <label className="flex text-[#9B9B9B] flex-col">Recipient&apos;s telephone number</label>
                        <input type="text" className="border h-11 px-3 rounded mt-2" />
                      </div>
                    </div>
                    <div className="flex mb-2 w-full">
                      <div className="flex flex-col mr-4 w-1/2">
                        <label className="text-[#9B9B9B]">Address</label>
                        <input type="text" className="border h-11 px-3 rounded mt-2" />
                      </div>
                      <div className="flex flex-col ml-4 w-1/2">
                        <label className="flex flex-col text-[#9B9B9B]">Postal code</label>
                        <input type="number" className="border h-11 px-3 rounded mt-2" />
                      </div>
                    </div>
                    <div className="w-1/2 mb-2 flex flex-col">
                      <label className="text-[#9B9B9B]">City or Subdistrict</label>
                      <input type="text" className="border mr-4 h-11 px-3 rounded mt-2" />
                    </div>
                                <div className="mb-2">
                                  <input type="checkbox" className="mr-4 mt-8" />
                                  <label className="text-[#9B9B9B]">Make it the primary address</label>
                                </div>
                    </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-4 mr-5 rounded-b">
                        <button
                          className="text-gray-500 hover:bg-gray-500 hover:text-white active:bg-gray-600 px-20 py-2 rounded-full outline outline-2 focus:outline mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Cancel
                        </button>
                        <button
                          className="text-white bg-red-500 active:bg-red-600 px-20 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="submit"
                          onClick={() => setShowModal(false)}
                        >
                         Save
                        </button>
                      </div>
                 </div>
                </div>
              </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" /> 
        </>
      ) : null}
      {/*showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-4xl">
              {/*content}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header}
                <div className="flex flex-col items-start justify-between p-5 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <Image src={Close} />
                    </span>
                  </button>
                  <div className="mt-6 mx-auto">
                    <h3 className="text-3xl font-semibold">Add new address</h3>
                  </div>
                </div>
                {/*body}
                <div className="w-[900px] flex flex-col relative p-6">
                  <div className="w-full mb-2 flex flex-col">
                    <label className="text-[#9B9B9B]">Save address as (ex : home address, office address)</label>
                    <input type="text" className="border h-11 px-3 rounded mt-2" />
                  </div>
                  <div className="flex mb-2 w-full">
                    <div className="flex flex-col mr-4 w-1/2">
                      <label className="text-[#9B9B9B]">Recipient’s name</label>
                      <input type="text" className="border h-11 px-3 rounded mt-2" />
                    </div>
                    <div className="flex flex-col ml-4 w-1/2">
                      <label className="flex text-[#9B9B9B] flex-col">Recipient&apos;s telephone number</label>
                      <input type="text" className="border h-11 px-3 rounded mt-2" />
                    </div>
                  </div>
                  <div className="flex mb-2 w-full">
                    <div className="flex flex-col mr-4 w-1/2">
                      <label className="text-[#9B9B9B]">Address</label>
                      <input type="text" className="border h-11 px-3 rounded mt-2" />
                    </div>
                    <div className="flex flex-col ml-4 w-1/2">
                      <label className="flex flex-col text-[#9B9B9B]">Postal code</label>
                      <input type="number" className="border h-11 px-3 rounded mt-2" />
                    </div>
                  </div>
                  <div className="w-1/2 mb-2 flex flex-col">
                    <label className="text-[#9B9B9B]">City or Subdistrict</label>
                    <input type="text" className="border mr-4 h-11 px-3 rounded mt-2" />
                  </div>
                  <div className="mb-2">
                    <input type="checkbox" className="mr-4 mt-8" />
                    <label className="text-[#9B9B9B]">Make it the primary address</label>
                  </div>
                </div>
                {/*footer}
                <div className="flex items-center justify-end p-4 mr-5 rounded-b">
                  <button
                    className="text-gray-500 hover:bg-gray-500 hover:text-white active:bg-gray-600 px-20 py-2 rounded-full outline outline-2 focus:outline mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-white bg-red-500 active:bg-red-600 px-20 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={() => setShowModal(false)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null*/}
    </div>
  );
}
