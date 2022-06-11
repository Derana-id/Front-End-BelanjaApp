import React from 'react';
import Image from 'next/image';

export default function CardContact(params) {
  return (
    <div className="flex my-3">
      <div>
        <Image src={params.img} width={40} height={40} className="object-cover rounded-full" />
      </div>
      <div className="ml-4">
        <p className="text-black font-semibold text-[15px] max-w-sm">{params.username}</p>
        <p className="text-gray font-medium text-xs overflow-hidden text-ellipsis whitespace-nowrap max-w-[182px] inline-block float-right">
          {params.message}
        </p>
      </div>
    </div>
  );
}
