import React from 'react';
import Image from 'next/image';
import star from '../../assets/img/star.png';

export default function Start() {
  return (
    <div className="relative">
      <div className="flex">
        <div className="mt-2">
          <Image src={star} width={18} height={18} />
          <Image src={star} width={18} height={18} />
          <Image src={star} width={18} height={18} />
          <Image src={star} width={18} height={18} />
          <Image src={star} width={18} height={18} />
        </div>
        <div className="relative">
          <p className="text-gray text-xs ml-3 mb-2 p-5">(10)</p>
        </div>
      </div>
    </div>
  );
}
