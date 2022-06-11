import React, { useState } from 'react';
import Image from 'next/image';
import user from '../../assets/img/user.jpg';
import edit from '../../assets/icons/edit.svg';
import store from '../../assets/icons/store.svg';
import product from '../../assets/icons/product.svg';
import chart from '../../assets/icons/chart.svg';

export default function sidebarSeller(params) {
  const [showNav, setShowNav] = useState();
  const [showNav1, setShowNav1] = useState();
  const [showNav2, setShowNav2] = useState();
  const onSetNav = () => {
    if (showNav === 1) {
      setShowNav(0);
    } else {
      setShowNav(1);
    }
  };
  const onSetNav2 = () => {
    if (showNav1 === 1) {
      setShowNav1(0);
    } else {
      setShowNav1(1);
    }
  };
  const onSetNav3 = () => {
    if (showNav2 === 1) {
      setShowNav2(0);
    } else {
      setShowNav2(1);
    }
  };
  return (
    <div className="w-full flex mx-[25%] flex-col mt-[120px]">
      <div className="flex items-center">
        <Image src={user} width={60} height={60} className="rounded-full" />
        <div className="flex flex-col ml-2">
          <label className="ml-3 mb-2 font-semibold">{params.name}</label>
          <Image className="cursor-pointer" src={edit} />
        </div>
      </div>
      <div className="flex flex-col justify-center mt-10">
        <div className="flex items-center m-2">
          <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
            <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={store} />
          </div>
          <button onClick={onSetNav} className="ml-3 text-base cursor-pointer focus:font-semibold">Store</button>
        </div>
        {showNav === 0 ? (
          <div>
            <button className="text-base ml-14 focus:text-gray cursor-pointer">Store profile</button>
          </div>
        ) : null}
        <div className="flex items-center m-2">
          <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
            <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={product} />
          </div>
          <button onClick={onSetNav2} className="ml-3 text-base cursor-pointer focus:font-semibold">Product</button>
        </div>
        {showNav1 === 0 ? (
          <div className="flex flex-col justify-start items-start">
            <button className="ml-14 text-base mb-3 cursor-pointer ">My products</button>
            <button className="ml-14 text-base cursor-pointer ">Selling products</button>
          </div>
        ) : null}
        <div className="flex items-center m-2">
          <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
            <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={chart} />
          </div>
          <button onClick={onSetNav3} className="ml-3 text-base  cursor-pointer focus:font-semibold">Order</button>
        </div>
        {showNav2 === 0 ? (
          <div className="flex flex-col justify-start items-start">
            <button className="ml-14 text-base mb-3 cursor-pointer ">My order</button>
            <button className="ml-14 text-base cursor-pointer ">Order cancel</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
