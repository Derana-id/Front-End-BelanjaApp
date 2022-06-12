/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
// import Image from 'next/image';
import Search from '../../search/search';
// import caricatur from '../../../assets/img/caricatur.png';

export default function cardMyorder() {
  const [showNav, setFormShowNav] = useState(0);

  const setCurrentShow = index => {
    setFormShowNav(index);
  };
  return (
    <div className="flex flex-col bg-white rounded w-3/4 h-auto mt-[120px] mx-12">
      <h5 className="text-black relative mt-10 ml-10 text-lg font-bold">My Order</h5>
      <div className="px-10 pt-2">
        <ul className="flex w-full justify-between text-gray text-lg nav nav-tabs flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4">
          <li className="focus:text-primary border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
            <button onClick={() => setCurrentShow(0)}>New</button>
          </li>
          <li className="focus:text-primary border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
            <button onClick={() => setCurrentShow(1)}>Packed</button>
          </li>
          <li className="focus:text-primary border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
            <button onClick={() => setCurrentShow(2)}>Sent</button>
          </li>
          <li className="focus:text-primary border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
            <button onClick={() => setCurrentShow(3)}>Completed</button>
          </li>
          <li className="focus:text-primary border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
            <button onClick={() => setCurrentShow(4)}>Cancel order</button>
          </li>
        </ul>
        <div className="mt-8">
          <Search />
        </div>
        <div className="flex justify-center items-center p-16">
          {showNav === 0 ? (
            <div className="w-2/5 h-2/5">
              {/* <Image src={caricatur} /> */}
              new
            </div>
          ) : showNav === 1 ? (
            <div className="w-2/5 h-2/5">
              {/* <Image src={caricatur} /> */}
              Packed
            </div>
          ) : showNav === 2 ? (
            <div className="w-2/5 h-2/5">
              {/* <Image src={caricatur} /> */}
              Sent
            </div>
          ) : showNav === 3 ? (
            <div className="w-2/5 h-2/5">
              {/* <Image src={caricatur} /> */}
              Completed
            </div>
          ) : (
            <div className="w-2/5 h-2/5">
              {/* <Image src={caricatur} /> */}
              Cancel order
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
