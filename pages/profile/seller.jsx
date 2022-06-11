/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import CardStore from '../../components/card/seller/cardStore';
import CardMyorder from '../../components/card/seller/cardMyorder';
import CardProduct from '../../components/card/seller/myProduct';
import SellingProduct from '../../components/card/seller/sellingProduct';
import user from '../../assets/img/user.jpg';
import edit from '../../assets/icons/edit.svg';
import store from '../../assets/icons/store.svg';
import product from '../../assets/icons/product.svg';
import chart from '../../assets/icons/chart.svg';

const Seller = () => {
  const [showNav, setShowNav] = useState();
  const [showNav1, setShowNav1] = useState();
  const [showNav2, setShowNav2] = useState();
  const [showSideBar, setFormShowSideBar] = useState(0);

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

  const setCurrentShow = index => {
    setFormShowSideBar(index);
  };
  return (
    <div>
      <Head>
        <title>Belanja | Profile Seller</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="flex grid-cols-2">
        <div className="w-1/4">
          <div className="w-full flex mx-[25%] flex-col mt-[120px]">
            <div className="flex items-center">
              <Image src={user} width={60} height={60} className="rounded-full" />
              <div className="flex flex-col ml-2">
                <label className="ml-3 mb-2 font-semibold">Johanes Mikael</label>
                <Image className="cursor-pointer" src={edit} />
              </div>
            </div>
            {/* sidebar */}
            {showSideBar === 0 ? (
              <div className="flex flex-col justify-center mt-10">
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={store} />
                  </div>
                  <button onClick={onSetNav} className="ml-3 text-base cursor-pointer font-semibold">Store</button>
                </div>
                {showNav === 0 ? (
                  <div>
                    <button onClick={() => setCurrentShow(0)} className="text-base ml-14 font-semibold cursor-pointer">Store profile</button>
                  </div>
                ) : null}
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={product} />
                  </div>
                  <button onClick={onSetNav2} className="ml-3 text-base cursor-pointer">Product</button>
                </div>
                {showNav1 === 0 ? (
                  <div className="flex flex-col justify-start items-start">
                    <button onClick={() => setCurrentShow(1)} className="ml-14 text-base mb-3 cursor-pointer ">My products</button>
                    <button onClick={() => setCurrentShow(2)} className="ml-14 text-base cursor-pointer ">Selling products</button>
                  </div>
                ) : null}
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={chart} />
                  </div>
                  <button onClick={onSetNav3} className="ml-3 text-base  cursor-pointer">Order</button>
                </div>
                {showNav2 === 0 ? (
                  <div className="flex flex-col justify-start items-start">
                    <button onClick={() => setCurrentShow(3)} className="ml-14 text-base mb-3 cursor-pointer ">My order</button>
                    <button onClick={() => setCurrentShow(3)} className="ml-14 text-base cursor-pointer ">Order cancel</button>
                  </div>
                ) : null}
              </div>
            ) : showSideBar === 1 ? (
              <div className="flex flex-col justify-center mt-10">
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={store} />
                  </div>
                  <button onClick={onSetNav} className="ml-3 text-base cursor-pointer">Store</button>
                </div>
                {showNav === 0 ? (
                  <div>
                    <button onClick={() => setCurrentShow(0)} className="text-base ml-14 focus:text-gray cursor-pointer">Store profile</button>
                  </div>
                ) : null}
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={product} />
                  </div>
                  <button onClick={onSetNav2} className="ml-3 text-base cursor-pointer font-semibold">Product</button>
                </div>
                {showNav1 === 0 ? (
                  <div className="flex flex-col justify-start items-start">
                    <button onClick={() => setCurrentShow(1)} className="ml-14 text-base mb-3 cursor-pointer font-semibold">My products</button>
                    <button onClick={() => setCurrentShow(2)} className="ml-14 text-base cursor-pointer ">Selling products</button>
                  </div>
                ) : null}
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={chart} />
                  </div>
                  <button onClick={onSetNav3} className="ml-3 text-base  cursor-pointer">Order</button>
                </div>
                {showNav2 === 0 ? (
                  <div className="flex flex-col justify-start items-start">
                    <button onClick={() => setCurrentShow(3)} className="ml-14 text-base mb-3 cursor-pointer ">My order</button>
                    <button onClick={() => setCurrentShow(3)} className="ml-14 text-base cursor-pointer ">Order cancel</button>
                  </div>
                ) : null}
              </div>
            ) : showSideBar === 2 ? (
              <div className="flex flex-col justify-center mt-10">
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={store} />
                  </div>
                  <button onClick={onSetNav} className="ml-3 text-base cursor-pointer">Store</button>
                </div>
                {showNav === 0 ? (
                  <div>
                    <button onClick={() => setCurrentShow(0)} className="text-base ml-14 focus:text-gray cursor-pointer">Store profile</button>
                  </div>
                ) : null}
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={product} />
                  </div>
                  <button onClick={onSetNav2} className="ml-3 text-base cursor-pointer font-semibold">Product</button>
                </div>
                {showNav1 === 0 ? (
                  <div className="flex flex-col justify-start items-start">
                    <button onClick={() => setCurrentShow(1)} className="ml-14 text-base mb-3 cursor-pointer">My products</button>
                    <button onClick={() => setCurrentShow(2)} className="ml-14 text-base cursor-pointer font-semibold">Selling products</button>
                  </div>
                ) : null}
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={chart} />
                  </div>
                  <button onClick={onSetNav3} className="ml-3 text-base  cursor-pointer">Order</button>
                </div>
                {showNav2 === 0 ? (
                  <div className="flex flex-col justify-start items-start">
                    <button onClick={() => setCurrentShow(3)} className="ml-14 text-base mb-3 cursor-pointer ">My order</button>
                    <button onClick={() => setCurrentShow(3)} className="ml-14 text-base cursor-pointer ">Order cancel</button>
                  </div>
                ) : null}
              </div>
            ) : showSideBar === 3 ? (
              <div className="flex flex-col justify-center mt-10">
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={store} />
                  </div>
                  <button onClick={onSetNav} className="ml-3 text-base cursor-pointer">Store</button>
                </div>
                {showNav === 0 ? (
                  <div>
                    <button onClick={() => setCurrentShow(0)} className="text-base ml-14 focus:text-gray cursor-pointer">Store profile</button>
                  </div>
                ) : null}
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={product} />
                  </div>
                  <button onClick={onSetNav2} className="ml-3 text-base cursor-pointer">Product</button>
                </div>
                {showNav1 === 0 ? (
                  <div className="flex flex-col justify-start items-start">
                    <button onClick={() => setCurrentShow(1)} className="ml-14 text-base mb-3 cursor-pointer">My products</button>
                    <button onClick={() => setCurrentShow(2)} className="ml-14 text-base cursor-pointer">Selling products</button>
                  </div>
                ) : null}
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={chart} />
                  </div>
                  <button onClick={onSetNav3} className="ml-3 text-base font-semibold cursor-pointer">Order</button>
                </div>
                {showNav2 === 0 ? (
                  <div className="flex flex-col justify-start items-start">
                    <button onClick={() => setCurrentShow(3)} className="ml-14 text-base mb-3 cursor-pointer font-semibold">My order</button>
                    <button onClick={() => setCurrentShow(4)} className="ml-14 text-base cursor-pointer ">Order cancel</button>
                  </div>
                ) : null}
              </div>
            ) : (
              <div className="flex flex-col justify-center mt-10">
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={store} />
                  </div>
                  <button onClick={onSetNav} className="ml-3 text-base cursor-pointer">Store</button>
                </div>
                {showNav === 0 ? (
                  <div>
                    <button onClick={() => setCurrentShow(0)} className="text-base ml-14 focus:text-gray cursor-pointer">Store profile</button>
                  </div>
                ) : null}
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={product} />
                  </div>
                  <button onClick={onSetNav2} className="ml-3 text-base cursor-pointer">Product</button>
                </div>
                {showNav1 === 0 ? (
                  <div className="flex flex-col justify-start items-start">
                    <button onClick={() => setCurrentShow(1)} className="ml-14 text-base mb-3 cursor-pointer">My products</button>
                    <button onClick={() => setCurrentShow(2)} className="ml-14 text-base cursor-pointer">Selling products</button>
                  </div>
                ) : null}
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={chart} />
                  </div>
                  <button onClick={onSetNav3} className="ml-3 text-base font-semibold cursor-pointer">Order</button>
                </div>
                {showNav2 === 0 ? (
                  <div className="flex flex-col justify-start items-start">
                    <button onClick={() => setCurrentShow(3)} className="ml-14 text-base mb-3 cursor-pointer">My order</button>
                    <button onClick={() => setCurrentShow(3)} className="ml-14 text-base cursor-pointer  font-semibold">Order cancel</button>
                  </div>
                ) : null}
              </div>
            )}

          </div>
        </div>
        <div className="w-3/4 bg-[#F5F5F5] min-h-screen">
          {showSideBar === 0 ? (
            <CardStore />
          ) : showSideBar === 1 ? (
            <CardProduct name="My Product" />
          ) : showSideBar === 2 ? (
            <SellingProduct />
          ) : (
            <CardMyorder name="My order" />
          )}
        </div>
      </div>
    </div>
  );
};

Seller.layouts = 'MainLayout';
export default Seller;
