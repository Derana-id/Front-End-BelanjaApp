import React, { useState } from 'react';
import Image from 'next/image';
import Close from '../../assets/icons/close.svg';
import CardAddress from '../card/customer/cardAddress';

export default function AddAddress() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        className="px-8 py-3 mb-1 mr-1 font-bold transition-all duration-150 ease-linear border rounded-full outline-none text text-gr text-gray border-gray hover:bg-gray hover:text-white active:bg-gray focus:outline-none"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Choose Another Address
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-scroll outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div className="flex flex-col items-start justify-between p-5 rounded-t">
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none bg-transparent border-0 outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 text-2xl bg-transparent outline-none focus:outline-none">
                      <Image src={Close} />
                    </span>
                  </button>
                  <div className="mx-auto mt-6">
                    <h3 className="text-3xl font-semibold">Choose another address</h3>
                  </div>
                </div>
                <CardAddress />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
