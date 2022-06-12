import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import jas from '../../assets/img/jas.jpg';
import Start from '../star/start';

export default function CardProducts(params) {
  return (
    <Link href={`${params.href}`}>
      <div className="bg-white shadow-md rounded-lg mt-5">
        <Image src={jas} className="rounded-t-lg" alt="product" />
        <div className="p-2 pl-3 pr-3 pt-1">
          <h4 className="text-lg font-semibold">{params.nameProduct}</h4>
          <h6 className="text-primary mt-1 font-semibold">{params.price}</h6>
          <p className="text-gray text-xs font-bold">{params.user}</p>
          <Start valueReview="(10)" />
        </div>
      </div>
    </Link>
  );
}
