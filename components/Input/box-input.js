import React from 'react';
import Image from 'next/image';
import box from '../../assets/icons/box.png';

export default function BoxInput(params) {
  return (
    <div className={`flex flex-col items-center ${params.className} `}>
      <input type="file" id={params.id} hidden onChange={params.onChange} />
      <label
        className="bg-gray-light w-40 h-40 cursor-pointer flex items-center justify-center rounded"
        htmlFor={params.id}
      >
        <Image src={box} />
      </label>
      <p className="mt-2">{params.title}</p>
    </div>
  );
}
