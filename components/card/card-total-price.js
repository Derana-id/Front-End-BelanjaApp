import React from 'react';
import ButtonWarning from '../Button/button-warning';

export default function CardTotalPrice(params) {
  return (
    <div className="bg-white w-full rounded-md shadow-lg p-5">
      <p className="text-black font-bold">Shopping summary</p>
      <div className="flex justify-between mt-3">
        <p className="text-gray text-sm font-semibold">Order</p>
        <p className="font-bold text-black text-lg">{params.order}</p>
      </div>
      <div className="flex justify-between mt-1">
        <p className="text-gray font-semibold text-sm">Delivery</p>
        <p className="font-bold text-black text-lg">{params.delivery}</p>
      </div>
      <hr className="text-gray mt-2" />
      <div className="flex justify-between mt-3">
        <p className="text-black font-bold text-md">Shopping summary</p>
        <p className="font-bold text-primary text-lg">{params.totalPrice}</p>
      </div>
      <div className="mt-6 mb-2">
        <ButtonWarning action="Select Payment" onClick={params.onClick} />
      </div>
    </div>
  );
}
