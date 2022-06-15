import React from 'react';
import CardAddress from './cardAddress';

export default function cardShippingAddress()
{
  return (
    <div>
      <div className="flex flex-col bg-white rounded w-3/4 pb-8 h-auto mt-[120px] mx-12">
        <div className="flex flex-col m-5 border-b-2 border-[#9B9B9B] pb-5">
          <label className="mb-2 text-lg font-semibold">Choose another address</label>
          <label className="text-[#9B9B9B]">Manage your profile information</label>
        </div>
        <CardAddress />
      </div>
    </div>
  );
}
