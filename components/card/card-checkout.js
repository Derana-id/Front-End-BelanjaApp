import React from 'react';
import Image from 'next/image';

export default function CardCheckout(params) {
  return (
    <div className="bg-white p-3 md:p-6 shadow-xl mt-5 flex items-center rounded-xl">
      <div className="w-24 h-24 flex items-center">
        <Image src={params.image} width={74} height={74} objectFit="cover" className="rounded-md" />
      </div>
      <div
        className="relative w-full p-3
      "
      >
        <p className="text-black text-base font-semibold">{params.productName}</p>
        <p className="text-gray text-sm font-semibold">{params.store}</p>
      </div>
      <div className="flex justify-end items-end w-28 font-bold text-black md:text-xl text-base">
        <h6>{params.price}</h6>
      </div>
    </div>
  );
}
