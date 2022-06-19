import React from 'react';
// import Image from 'next/image';
import Checklist from '../Input/checklist';
import SpinnerAction from '../molecules/spinner';
import FormValueNumber from '../form/form-addvalue';

export default function CardCart(params) {
  return (
    <div className="bg-white p-6 shadow-xl mt-5 md:flex items-center rounded-xl">
      <div className="flex py-2 md:py-0">
        <Checklist onChange={params.onChange} onClick={params.onClick} />
        <p className="md:hidden font-bold">Select</p>
      </div>
      <div className="md:w-24 hidden md:h-24 md:flex items-center">
        <img src={params.image} alt="" width={74} height={74} objectFit="cover" className="rounded-md" />
      </div>
      <div className="md:w-24 md:h-24 md:hidden flex items-center">
        <img src={params.image} alt="" objectFit="cover" className="rounded-md" />
      </div>
      <div
        className="relative w-96 p-3
      "
      >
        <p className="text-black text-base font-bold">{params.productName}</p>
        <p className="text-gray text-sm">{params.store}</p>
      </div>
      <div className="flex">
        <div className="flex w-40 items-center justify-between">
          <div className="flex items-center">
            <SpinnerAction action="+" onClick={params.onPlus} />
            <FormValueNumber defaultValue={params.defaultValue} value={params.value} />
            <SpinnerAction action="-" onClick={params.onMin} />
          </div>
        </div>
        <div className="flex justify-end items-end w-28 font-bold text-black text-md">
          <h6>{params.price}</h6>
        </div>
      </div>
    </div>
  );
}
