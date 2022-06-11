/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import SearchNavbar from '../search/search-navbar';
import logo from '../../assets/img/logo.png';
import vector from '../../assets/icons/vector.png';
import user from '../../assets/img/user.jpg';

export default function MainNavbar() {
  return (
    <div className="w-full h-20 px-28 flex flex-row items-center fixed z-10 shadow-lg bg-white">
      <div className="flex w-full items-center">
        <div className="w-1/5 h-12 flex items-center">
          <div className="relative flex items-center">
            <Link href="/">
              <div>
                <Image src={logo} className="w-14 h-4 cursor-pointer" width={110} height={40} />
              </div>
            </Link>
          </div>
        </div>
        <div className="w-3/5 h-12 flex items-center">
          <SearchNavbar />
          <div className="border-solid border-2 border-gray rounded-xl m-3 flex items-center p-2 justify-center">
            <Image src={vector} width={20} height={20} />
          </div>
        </div>
        <div className="w-1/5 h-12 flex items-center">
          <div className="flex justify-end w-full h-full items-center">
            <Link href="/mybag">
              <div>
                <AiOutlineShoppingCart className="text-2xl mr-6 text-gray cursor-pointer" />
              </div>
            </Link>
            <Link href="">
              <div>
                <MdOutlineNotificationsNone className="text-2xl m-4 text-gray cursor-pointer" />
              </div>
            </Link>
            <Link href="/chat">
              <div>
                <HiOutlineMail className="text-2xl m-4 mr-6 text-gray cursor-pointer" />
              </div>
            </Link>
            <div className="flex items-center justify-center">
              <Link href="/profile/customer">
                <div>
                  <Image src={user} className="rounded-full cursor-pointer" objectFit="cover" height={30} width={30} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
