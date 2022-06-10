import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/img/logo.png';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import user from '../../assets/img/user.jpg';

export default function SecondNavbar() {
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
        <div className="w-3/5 h-12 flex items-center"></div>
        <div className="w-1/5 h-12 flex items-center">
          <div className="flex justify-end w-full h-full items-center">
            <Link href="/mybag">
              <div>
                <AiOutlineShoppingCart className="text-2xl m-4 text-gray cursor-pointer" />
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
              <Image src={user} className="rounded-full" objectFit="cover" height={30} width={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
