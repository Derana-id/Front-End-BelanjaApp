import React from 'react';
import Image from 'next/image';
import logo from '../../assets/img/logo.png';
import SearchNavbar from '../search/search-navbar';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import vector from '../../assets/icons/vector.png';

export default function MainNavbar() {
  return (
    <div className="w-full h-20 px-28 flex flex-row items-center fixed z-10 shadow-lg bg-white">
      <div class="flex w-full items-center">
        <div class="w-1/5 h-12 flex items-center">
          <div className="relative flex items-center">
            <Image src={logo} className="w-14 h-4" width={110} height={40} />
          </div>
        </div>
        <div class="w-3/5 h-12 flex items-center">
          <SearchNavbar />
          <div className="border-solid border-2 border-gray rounded-xl m-3 flex items-center p-2 justify-center">
            <Image src={vector} width={20} height={20} />
          </div>
        </div>
        <div class="w-1/5 h-12 flex items-center">
          <div className="flex justify-end w-full h-full items-center">
            <AiOutlineShoppingCart className="text-2xl m-4 text-gray cursor-pointer" />
            <MdOutlineNotificationsNone className="text-2xl m-4 text-gray cursor-pointer" />
            <HiOutlineMail className="text-2xl ml-4 text-gray cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
