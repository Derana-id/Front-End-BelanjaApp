import React from 'react';
import Image from 'next/image';

export default function FormPayment(params) {
  return (
    <div className="flex mt-3">
      <div className="flex-auto w-64 items-start flex">
        <label className="flex p-1 h-8" htmlFor={params.id}>
          <Image src={params.img} width={30} />
        </label>
      </div>
      <div className="flex-auto w-64">
        <label className="text-black font-semibold" htmlFor={params.id}>
          {params.title}
        </label>
      </div>
      <div className="flex items-center">
        <input type="checkbox" name="payment" className="accent-primary cursor-pointer h-5 w-5" id={params.id} />
      </div>
    </div>
  );
}
