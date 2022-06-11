import React from 'react';
import Image from 'next/image';

export default function BubblessReciver(params) {
  return (
    <div className="flex relative w-9/12 m-4">
      <div className="bg-primary max-w-sm px-4 p-2 font-medium rounded-[35px] rounded-bl-xl relative">
        <p className="text-white">{params.message}</p>
      </div>
    </div>
  );
}
