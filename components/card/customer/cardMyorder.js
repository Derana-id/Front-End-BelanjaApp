/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Image from 'next/image';
import shoes from '../../../assets/img/shoes (1).jpg';
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
        <div className="flex justify-start min-h-[200px] p-4">
          {showNav === 0 ? (
            <div className="flex w-full border rounded min-h-[120px] relative">
              <div className="w-0 sm:w-0 md:w-[120px] md:h-[120px] lg:w-[120px] h-auto">
                <Image src={shoes} width={120} height={165} />
              </div>
              <div className="ml-2 flex flex-col">
                <label className="font-semibold mb-10 sm:mb-10 md:mb-2 lg:mb-2">Invoice №1947034</label>
                <div className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row">
                  <label className="text-[#9B9B9B]">Product name :</label>
                  <label className="font-semibold ">Mens formal suit</label>
                </div>
                <div className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row">
                  <label className="text-[#9B9B9B]">Quantity: :</label>
                  <label className="font-semibold ">15</label>
                </div>
                <div className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row">
                  <label className="text-[#9B9B9B]">Total Amount: :</label>
                  <label className="font-semibold ">112$</label>
                </div>
              </div>
              <label className="absolute top-8 sm:top-8 md:top- lg:top-0 right-2 font-semibold text-gray-600">05-12-2019</label>
              <label className="absolute right-2 bottom-0 text-special-success font-bold">New</label>
            </div>
          ) : showNav === 1 ? (
            <div className="flex w-full border rounded min-h-[120px] relative">
              <div className="w-0 sm:w-0 md:w-[120px] md:h-[120px] lg:w-[120px] h-auto">
                <Image src={shoes} width={120} height={165} />
              </div>
              <div className="ml-2 flex flex-col">
                <label className="font-semibold mb-10 sm:mb-10 md:mb-2 lg:mb-2">Invoice №1947034</label>
                <div className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row">
                  <label className="text-[#9B9B9B]">Product name :</label>
                  <label className="font-semibold ">Mens formal suit</label>
                </div>
                <div className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row">
                  <label className="text-[#9B9B9B]">Quantity: :</label>
                  <label className="font-semibold ">15</label>
                </div>
                <div className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row">
                  <label className="text-[#9B9B9B]">Total Amount: :</label>
                  <label className="font-semibold ">112$</label>
                </div>
              </div>
              <label className="absolute top-8 sm:top-8 md:top- lg:top-0 right-2 font-semibold text-gray-600">05-12-2019</label>
              <label className="absolute right-2 bottom-0 text-special-success font-bold">Packed</label>
            </div>
          ) : showNav === 2 ? (
            <div className="flex w-full border rounded min-h-[120px] relative">
              <div className="w-0 sm:w-0 md:w-[120px] md:h-[120px] lg:w-[120px] h-auto">
                <Image src={shoes} width={120} height={165} />
              </div>
              <div className="ml-2 flex flex-col">
                <label className="font-semibold mb-10 sm:mb-10 md:mb-2 lg:mb-2">Invoice №1947034</label>
                <div className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row">
                  <label className="text-[#9B9B9B]">Product name :</label>
                  <label className="font-semibold ">Mens formal suit</label>
                </div>
                <div className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row">
                  <label className="text-[#9B9B9B]">Quantity: :</label>
                  <label className="font-semibold ">15</label>
                </div>
                <div className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row">
                  <label className="text-[#9B9B9B]">Total Amount: :</label>
                  <label className="font-semibold ">112$</label>
                </div>
              </div>
              <label className="absolute top-8 sm:top-8 md:top- lg:top-0 right-2 font-semibold text-gray-600">05-12-2019</label>
              <label className="absolute right-2 bottom-0 text-special-success font-bold">Sent</label>
            </div>
          ) : showNav === 3 ? (
            <div className="flex w-full border rounded min-h-[120px] relative">
              <div className="w-0 sm:w-0 md:w-[120px] md:h-[120px] lg:w-[120px] h-auto">
                <Image src={shoes} width={120} height={165} />
              </div>
              <div className="ml-2 flex flex-col">
                <label className="font-semibold mb-10 sm:mb-10 md:mb-2 lg:mb-2">Invoice №1947034</label>
                <div className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row">
                  <label className="text-[#9B9B9B]">Product name :</label>
                  <label className="font-semibold ">Mens formal suit</label>
                </div>
                <div className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row">
                  <label className="text-[#9B9B9B]">Quantity: :</label>
                  <label className="font-semibold ">15</label>
                </div>
                <div className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row">
                  <label className="text-[#9B9B9B]">Total Amount: :</label>
                  <label className="font-semibold ">112$</label>
                </div>
              </div>
              <label className="absolute top-8 sm:top-8 md:top- lg:top-0 right-2 font-semibold text-gray-600">05-12-2019</label>
              <label className="absolute right-2 bottom-0 text-special-success font-bold">Complete</label>
            </div>
          ) : (
            <div className="flex w-full border rounded min-h-[120px] relative">
              <div className="w-0 sm:w-0 md:w-[120px] md:h-[120px] lg:w-[120px] h-auto">
                <Image src={shoes} width={120} height={165} />
              </div>
              <div className="ml-2 flex flex-col">
                <label className="font-semibold mb-10 sm:mb-10 md:mb-2 lg:mb-2">Invoice №1947034</label>
                <div className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row">
                  <label className="text-[#9B9B9B]">Product name :</label>
                  <label className="font-semibold ">Mens formal suit</label>
                </div>
                <div className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row">
                  <label className="text-[#9B9B9B]">Quantity: :</label>
                  <label className="font-semibold ">15</label>
                </div>
                <div className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row">
                  <label className="text-[#9B9B9B]">Total Amount: :</label>
                  <label className="font-semibold ">112$</label>
                </div>
              </div>
              <label className="absolute top-8 sm:top-8 md:top- lg:top-0 right-2 font-semibold text-gray-600">05-12-2019</label>
              <label className="absolute right-2 bottom-0 text-primary font-bold">Cancel</label>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
