import React from 'react';
import Image from 'next/image';
import star from '../../assets/img/star.png';

export default function Start() {
  return (
    <div className="relative">
      <div className="flex">
        <div className="mt-2">
          <Image src={star} width={20} height={18} />
          <Image src={star} width={20} height={18} />
          <Image src={star} width={20} height={18} />
          <Image src={star} width={20} height={18} />
          <Image src={star} width={20} height={18} />
        </div>
        <div className="relative mt-2">
          <p className="text-gray text-sm ml-2">(10)</p>
        </div>
      </div>
    </div>
  );
}
