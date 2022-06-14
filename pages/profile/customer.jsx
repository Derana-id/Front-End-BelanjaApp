/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';
import Drawer from 'react-modern-drawer';
import CardMyorder from '../../components/card/customer/cardMyorder';
import CardShippingAddress from '../../components/card/customer/cardShippingAddressProfile';
import CardMyprofile from '../../components/card/customer/cardMyprofile';
import user from '../../assets/img/user.jpg';
import edit from '../../assets/icons/edit.svg';
import myaccount from '../../assets/icons/myaccount.svg';
import address from '../../assets/icons/address.svg';
import myorder from '../../assets/icons/order.svg';
import 'react-modern-drawer/dist/index.css';

const Customer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
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
        <div className="w-0 sm:w-0 md:w-1/4 lg:w-1/4 xl:w-1/4">
          <div className="w-full flex justify-center items-center mr-10 flex-col mt-[120px]">
            <div className="flex items-center">
              <Image src={user} width={60} height={60} className="rounded-full" />
              <div className="flex flex-col ml-2">
                <label className="mb-2 ml-3 font-semibold">Johanes Mikael</label>
                <Image className="hidden cursor-pointer" src={edit} />
              </div>
            </div>
            {/* sidebar */}
            {showSideBar === 0 ? (
              <div className="flex flex-col ml-[47%] w-full mt-10">
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={myaccount} />
                  </div>
                  <button onClick={() => setCurrentShow(0)} className="ml-3 font-semibold cursor-pointer">My account</button>
                </div>
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={address} />
                  </div>
                  <button onClick={() => setCurrentShow(1)} className="ml-3 cursor-pointer ">Shipping Adrress</button>
                </div>
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={myorder} />
                  </div>
                  <button onClick={() => setCurrentShow(2)} className="ml-3 cursor-pointer ">My order</button>
                </div>
              </div>
            ) : showSideBar === 1 ? (
              <div className="flex flex-col ml-[47%] w-full mt-10">
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={myaccount} />
                  </div>
                  <button onClick={() => setCurrentShow(0)} className="ml-3 cursor-pointer ">My account</button>
                </div>
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={address} />
                  </div>
                  <button onClick={() => setCurrentShow(1)} className="ml-3 font-semibold cursor-pointer ">Shipping Adrress</button>
                </div>
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={myorder} />
                  </div>
                  <button onClick={() => setCurrentShow(2)} className="ml-3 cursor-pointer ">My order</button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col ml-[47%] w-full mt-10">
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={myaccount} />
                  </div>
                  <button onClick={() => setCurrentShow(0)} className="ml-3 cursor-pointer ">My account</button>
                </div>
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={address} />
                  </div>
                  <button onClick={() => setCurrentShow(1)} className="ml-3 cursor-pointer">Shipping Adrress</button>
                </div>
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={myorder} />
                  </div>
                  <button onClick={() => setCurrentShow(2)} className="ml-3 font-semibold cursor-pointer ">My order</button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 bg-[#F5F5F5] min-h-screen relative">
          <div className="w-full sm:w-full md:hidden lg:hidden xl:hidden mt-[80px] ml-[15px] absolute">
            <AiOutlineMenu onClick={toggleDrawer} />
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="left"
              style={{ width: '170px' }}
            >
              <div className="">
                {/* sidebar */}
                {showSideBar === 0 ? (
                  <div className="flex flex-col w-full mt-10">
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={myaccount} />
                      </div>
                      <button onClick={() => setCurrentShow(0)} className="ml-3 font-semibold cursor-pointer">My account</button>
                    </div>
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={address} />
                      </div>
                      <button onClick={() => setCurrentShow(1)} className="ml-3 cursor-pointer ">Shipping Adrress</button>
                    </div>
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={myorder} />
                      </div>
                      <button onClick={() => setCurrentShow(2)} className="ml-3 cursor-pointer ">My order</button>
                    </div>
                  </div>
                ) : showSideBar === 1 ? (
                  <div className="flex flex-col w-full mt-10">
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={myaccount} />
                      </div>
                      <button onClick={() => setCurrentShow(0)} className="ml-3 cursor-pointer ">My account</button>
                    </div>
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={address} />
                      </div>
                      <button onClick={() => setCurrentShow(1)} className="ml-3 font-semibold cursor-pointer ">Shipping Adrress</button>
                    </div>
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={myorder} />
                      </div>
                      <button onClick={() => setCurrentShow(2)} className="ml-3 cursor-pointer ">My order</button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col w-full mt-10">
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={myaccount} />
                      </div>
                      <button onClick={() => setCurrentShow(0)} className="ml-3 cursor-pointer ">My account</button>
                    </div>
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={address} />
                      </div>
                      <button onClick={() => setCurrentShow(1)} className="ml-3 cursor-pointer">Shipping Adrress</button>
                    </div>
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={myorder} />
                      </div>
                      <button onClick={() => setCurrentShow(2)} className="ml-3 font-semibold cursor-pointer ">My order</button>
                    </div>
                  </div>
                )}
              </div>

            </Drawer>
          </div>
          {showSideBar === 0
            ? (<CardMyprofile />) : showSideBar === 1
              ? (<CardShippingAddress />) : showSideBar === 2
                ? (<CardMyorder />) : null}
        </div>
      </div>
    </div>
  );
};

Customer.layouts = 'MainLayout';
export default Customer;
