import React from 'react';
import Image from 'next/image';
import Search from '../../search/search';
import caricatur from '../../../assets/img/caricatur.png';

export default function cardMyorder(params) {
  return (
    <div className="flex flex-col bg-white rounded w-3/4 h-auto mt-[120px] mx-12">
      <h5 className="text-black relative mt-10 ml-10 text-lg font-bold">{params.name}</h5>
      <div className="px-10 pt-2">
        <ul className="flex w-full justify-between text-gray text-lg">
          <li className="focus:text-primary border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
            <a href="#">All items</a>
          </li>
          <li className="focus:text-primary border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
            <a href="#">Get paid</a>
          </li>
          <li className="focus:text-primary border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
            <a href="#">Processed</a>
          </li>
          <li className="focus:text-primary border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
            <a href="#">Sent</a>
          </li>
          <li className="focus:text-primary border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
            <a href="#">Sent</a>
          </li>
          <li className="focus:text-primary border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
            <a href="#">completed</a>
          </li>
          <li className="focus:text-primary border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
            <a href="#">Order cancel</a>
          </li>
        </ul>
        <div className="mt-8">
          <Search />
        </div>
        <div className="flex justify-center items-center p-16">
          <div className="w-2/5 h-2/5">
            <Image src={caricatur} />
          </div>
        </div>
      </div>
    </div>
  );
}
