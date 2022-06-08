import React from 'react';
import Image from 'next/image';

export default function Img(params) {
  return (
    <div>
      <Image src={params.src} className="rounded-sm" />
    </div>
  );
}
