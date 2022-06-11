/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import FormPayment from '../form/form-payment';
import gopay from '../../assets/img/gopay.png';
import pos from '../../assets/img/posindonesia.png';
import mastercard from '../../assets/img/mastercard.png';
import ButtonWarning from '../Button/button-warning';

export default function ModalsPayment(params) {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-black h-full w-full z-40 absolute top-0 opacity-50 overflow-hidden" onClick={params.onClick} />
      <div className="bg-white shadow-xl w-[380px] opacity-100 absolute top-[100px] rounded z-50">
        <div className="bg-white shadow-md rounded-t p-3 px-4 flex">
          <RiCloseLine className="text-2xl font-bold text-gray cursor-pointer" onClick={params.onClick} />
          <h4 className="ml-2 font-bold">Payment</h4>
        </div>
        <div className="p-4">
          <p className="ml-2 font-bold text-sm mt-3">Payment method</p>
          <FormPayment title="Gopay" id="gopay" img={gopay} />
          <FormPayment title="Pos Indonesia" id="pos" img={pos} />
          <FormPayment title="Mastercard" id="mastercard" img={mastercard} />
        </div>
        <hr className="text-gray mt-8" />
        <div className="p-4">
          <p className="font-bold">Shopping summary</p>
          <div className="flex justify-between">
            <p className="text-gray font-semibold text-sm">Order</p>
            <p className="text-black font-bold text-sm">$ 40.0</p>
          </div>
          <div className="flex justify-between h-24">
            <p className="text-gray font-semibold">Delivery</p>
            <p className="text-black font-black">$ 5.0</p>
          </div>
        </div>
        <div className="bg-white rounded-t p-3 px-4 flex rounded shadow-2xl justify-between">
          <div>
            <h4 className="ml-2 font-bold">Shopping summary</h4>
            <p className="text-primary font-bold ml-2">$ 45.0</p>
          </div>
          <div className="w-28">
            <ButtonWarning action="Buy" className="p-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
