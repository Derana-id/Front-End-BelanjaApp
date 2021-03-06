import React from 'react';
import Image from 'next/image';

export default function Img(params) {
  return (
    // <div>
    <Image
      src={`${params.src}`}
      className="rounded-sm h-4"
      width={300}
      height={350}
      objectFit="contain"
      alt="product"
    />
    // </div>
  );
}
