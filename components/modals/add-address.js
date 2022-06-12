import React, { useState } from 'react';
import Image from 'next/image';
import Close from '../../assets/icons/close.svg';
import CardShippingAddress from '../card/customer/cardShippingAddress';

export default function AddAddress() {
  const [showModal, setShowModal] = useState(false);

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
                    <h3 className="text-3xl font-semibold">Choose another address</h3>
                  </div>
                </div>
                <CardShippingAddress />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
