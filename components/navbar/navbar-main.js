import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import notification from '../../assets/img/notification.png';
import logo from '../../assets/img/logo.png';
import SearchNavbar from '../search/search-navbar';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import vector from '../../assets/icons/vector.png';
import user from '../../assets/img/user.jpg';

export default function MainNavbar() {
  const [isActive, setActive] = useState(false);
  const [isProfile, setIsProfile] = useState(false);

  const getActive = e => {
    if (isActive) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  const onProfile = e => {
    if (isProfile) {
      setIsProfile(false);
    } else {
      setIsProfile(true);
    }
  };

  return (
    <div className="w-full h-16 md:h-20 md:px-28 flex flex-row items-center fixed z-10 shadow-lg bg-white p-5 py-3 ">
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
        <div className="w-4/5 md:3/5 h-12 flex items-center">
          <SearchNavbar />
          <div className="border-solid border-2 border-gray rounded-xl m-2 md:m-3 flex items-center p-1 w-8 md:w-11 md:p-2 justify-center">
            <Image src={vector} />
          </div>
        </div>
        <div className="w-1/5 hidden md:ml-10 md:flex h-12 items-center">
          <div className="flex justify-end w-full h-full items-center">
            <Link href="/mybag">
              <div>
                <AiOutlineShoppingCart className="text-2xl mr-6 text-gray cursor-pointer" />
              </div>
            </Link>
            <Link href="">
              <div>
                <MdOutlineNotificationsNone
                  className="text-2xl m-4 text-gray cursor-pointer"
                  onClick={() => getActive()}
                />
              </div>
            </Link>
            <Link href="/chat">
              <div>
                <HiOutlineMail className="text-2xl m-4 mr-6 text-gray cursor-pointer" />
              </div>
            </Link>
            <div className="flex items-center justify-center">
              <Link href="/profile/customer">
                <div className="relative h-8 w-8">
                  <Image src={user} className="rounded-full cursor-pointer" objectFit="cover" height={50} width={50} />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex">
          <Link href="">
            <div>
              <MdOutlineNotificationsNone
                className="text-2xl m-4 text-gray cursor-pointer md:hidden"
                onClick={() => getActive()}
              />
            </div>
          </Link>
          <div className="flex items-center justify-center md:hidden">
            <div className="relative h-7 w-7" onClick={() => onProfile()}>
              <Image src={user} className="rounded-full cursor-pointer" objectFit="cover" height={50} width={50} />
            </div>
          </div>
        </div>
      </div>
      {isActive ? (
        <div className="absolute h-80 w-56 bg-white z-40 top-16 md:top-14 p-5 rounded-b-xl rounded-tl-xl shadow-lg right-12 md:right-60 flex justify-center items-center">
          <Image src={notification} width={170} height={150} />
        </div>
      ) : null}

      {isProfile ? (
        <div className="absolute h-28 w-28 bg-white z-40 top-14 p-5 rounded-b-md rounded-tl-md shadow-lg right-12 md:right-60 flex justify-center items-center">
          <div>
            <Link href="/profile/customer">
              <div className="flex p-1" onClick={() => setIsProfile(false)}>
                <BiUserCircle className="text-2xl mr-2 text-gray cursor-pointer" />
                <p className="cursor-pointer">Profile</p>
              </div>
            </Link>
            <Link href="/chat">
              <div className="flex p-1" onClick={() => setIsProfile(false)}>
                <HiOutlineMail className="text-2xl mr-2  font-bold text-gray cursor-pointer" />
                <p className="cursor-pointer">Chat</p>
              </div>
            </Link>
            <Link href="/mybag">
              <div className="flex p-1" onClick={() => setIsProfile(false)}>
                <AiOutlineShoppingCart className="text-2xl mr-2 text-gray cursor-pointer" />
                <p className="cursor-pointer">Cart</p>
              </div>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
