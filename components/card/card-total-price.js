import React from 'react';
import ButtonBuyyer from '../button/button-buyer';

export default function CardTotalPrice(params) {
  return (
    <div className="bg-white w-full rounded-md shadow-lg p-5">
      <p className="text-black font-bold">Shopping summary</p>
      <div className="flex justify-between mt-3">
        <p className="text-gray text-md">Order</p>
        <p className="font-bold text-black text-lg">{params.order}</p>
      </div>
      <div className="flex justify-between mt-1">
        <p className="text-gray text-md">Delivery</p>
        <p className="font-bold text-black text-lg">{params.delivery}</p>
      </div>
      <hr className="text-gray mt-2" />
      <div className="flex justify-between mt-3">
        <p className="text-black font-bold text-md">Shopping summary</p>
        <p className="font-bold text-primary text-lg">{params.totalPrice}</p>
      </div>
      <div className="mt-6 mb-2">
        <ButtonBuyyer action="Select Payment" />
      </div>
    </div>
  );
}
