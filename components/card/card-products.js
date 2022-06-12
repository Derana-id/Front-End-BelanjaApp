import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Start from '../star/start';

export default function CardProducts(params) {
  return (
    <Link href={`${params.href}`}>
      <div className="bg-white p-2 max-h-50 shadow-md rounded-lg mt-5 cursor-pointer">
        <div
          className="flex
         justify-center"
        >
          <Image
            src={`${params.img}`}
            width={100}
            height={80}
            className="rounded-t-lg"
            objectFit="cover"
            alt="product"
          />
        </div>

        <div className="pl-3 pr-3 pt-1">
          <h4 className="text-base font-semibold ">{params.nameProduct}</h4>
          <h6 className="text-primary font-semibold">{params.price}</h6>
          <p className="text-gray text-xs font-bold">{params.user}</p>
          <Start valueReview="(10)" />
        </div>
      </div>
    </Link>
  );
}
