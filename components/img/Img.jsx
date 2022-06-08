import React from 'react';
import Image from 'next/image';

export default function Img(params) {
  return (
    <div className="flex-auto relative p-1">
      <Image src={params.src} className="rounded-md" />
    </div>
  );
}
