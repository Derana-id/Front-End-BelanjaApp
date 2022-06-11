/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import CardMyorder from '../../components/card/customer/cardMyorder';
import CardShippingAddress from '../../components/card/customer/cardShippingAddress';
import CardMyprofile from '../../components/card/customer/cardMyprofile';
import user from '../../assets/img/user.jpg';
import edit from '../../assets/icons/edit.svg';
import myaccount from '../../assets/icons/myaccount.svg';
import address from '../../assets/icons/address.svg';
import myorder from '../../assets/icons/order.svg';

const Customer = () => {
  const [showSideBar, setFormShowSideBar] = useState(0);

  const setCurrentShow = index => {
    setFormShowSideBar(index);
  };
  return (
    <div>
      <Head>
        <title>Belanja | Profile customer</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="flex grid-cols-2">
        <div className="w-1/4">
          <div className="w-full flex justify-center items-center mr-10 flex-col mt-[120px]">
            <div className="flex items-center">
              <Image src={user} width={60} height={60} className="rounded-full" />
              <div className="flex flex-col ml-2">
                <label className="ml-3 mb-2 font-semibold">Johanes Mikael</label>
                <Image className="cursor-pointer" src={edit} />
              </div>
            </div>
            {/* sidebar */}
            {showSideBar === 0 ? (
              <div className="flex flex-col ml-[47%] w-full mt-10">
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={myaccount} />
                  </div>
                  <button onClick={() => setCurrentShow(0)} className="ml-3 cursor-pointer font-semibold">My account</button>
                </div>
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={address} />
                  </div>
                  <button onClick={() => setCurrentShow(1)} className="ml-3 cursor-pointer ">Shipping Adrress</button>
                </div>
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={myorder} />
                  </div>
                  <button onClick={() => setCurrentShow(2)} className="ml-3 cursor-pointer ">My order</button>
                </div>
              </div>
            ) : showSideBar === 1 ? (
              <div className="flex flex-col ml-[47%] w-full mt-10">
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={myaccount} />
                  </div>
                  <button onClick={() => setCurrentShow(0)} className="ml-3 cursor-pointer ">My account</button>
                </div>
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={address} />
                  </div>
                  <button onClick={() => setCurrentShow(1)} className="ml-3 cursor-pointer font-semibold ">Shipping Adrress</button>
                </div>
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={myorder} />
                  </div>
                  <button onClick={() => setCurrentShow(2)} className="ml-3 cursor-pointer ">My order</button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col ml-[47%] w-full mt-10">
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={myaccount} />
                  </div>
                  <button onClick={() => setCurrentShow(0)} className="ml-3 cursor-pointer ">My account</button>
                </div>
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={address} />
                  </div>
                  <button onClick={() => setCurrentShow(1)} className="ml-3 cursor-pointer">Shipping Adrress</button>
                </div>
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={myorder} />
                  </div>
                  <button onClick={() => setCurrentShow(2)} className="ml-3 cursor-pointer font-semibold ">My order</button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-3/4 bg-[#F5F5F5] min-h-screen">
          {showSideBar === 0
            ? (<CardMyprofile />) : showSideBar === 1
              ? (<CardShippingAddress />) : showSideBar === 2
                ? (<CardMyorder name="My Order" />) : null}
        </div>
      </div>
    </div>
  );
};

Customer.layouts = 'MainLayout';
export default Customer;
