import React from 'react';
import Image from 'next/image';
import star from '../../assets/img/star.png';

export default function StartValue(params) {
  return (
    <div className="flex h-5">
      <div>
        <Image src={star} width={17} height={15} />
      </div>
      <div className="mt-[-2px] w-7">
        <p className="text-gray font-semibold text-center mb-2 ml-3">{params.startValue}</p>
      </div>
      {params.isTrue ? (
        <div className="mt-[6px] relative ml-5">
          <div className="w-16 md:w-28 bg-primary h-[5px] rounded-full"></div>
        </div>
      ) : (
        <div className="mt-[6px] relative ml-5">
          <div className="w-16 md:w-28 h-[5px] rounded-full"></div>
        </div>
      )}

      <div className="mt-[-2px] w-7">
        <p className="text-gray font-semibold text-center mb-2 ml-3">{params.endValue}</p>
      </div>
    </div>
  );
}
