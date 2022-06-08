import React from 'react';
import Image from 'next/image';
import jas from '../../assets/img/jas.jpg';

export default function CardProducts(params) {
  return (
    <div className="bg-white shadow-md rounded-lg mt-5">
      <Image src={jas} className="rounded-t-lg" alt="product" />
      <div className="p-2 pl-3 pr-3 pt-1">
        <h4 className="text-lg">{params.nameProduct}</h4>
        <h6 className="text-primary mt-1">{params.price}</h6>
        <p className="text-gray text-sm">{params.user}</p>
      </div>
    </div>
  );
}
