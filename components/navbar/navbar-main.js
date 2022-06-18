/* eslint-disable no-constant-condition */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';
import { getPopularProducts } from '../../redux/actions/products';

import SearchNavbar from '../search/search-navbar';
import ButtonSignup from '../Button/button-signup';
import ButtonLogin from '../Button/button-login';

import logo from '../../assets/img/logo.png';
import notification from '../../assets/img/notification.png';
import vector from '../../assets/icons/vector.png';
import user from '../../assets/img/user.jpg';
import ModalsSearch from '../modals/modals-filter';
import { getDetailUser } from '../../redux/actions/userProfile';

export default function MainNavbar(req) {
  const token = Cookies.get('token');

  let getId;
  if (token) {
    const { id } = jwtDecode(token);
    getId = id;
  }

  const dispatch = useDispatch();
  const router = useRouter();
  const [isActive, setActive] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isfilter, setIsFilter] = useState(false);
  const [getSearch, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

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

  useEffect(() => {
    dispatch(getDetailUser(getId));
  }, []);

  const getProfile = useSelector(state => {
    return state.detailCustomer;
  });

  const onSearch = () => {
    const search = getSearch;

    dispatch(getPopularProducts(search));
    router.push(`/?search=${getSearch}`);
  };

  return (
    <div>
      {isLoading ? (
        <></>
      ) : (
        <div>
          {token ? (
            <div className="w-full h-16 md:h-20 md:px-28 flex flex-row items-center fixed shadow-lg bg-white p-5 py-3 z-[1200]">
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
                  <SearchNavbar onChange={e => setSearch(e.target.value)} onSearch={() => onSearch()} />
                  <div
                    className="border-solid border-2 border-gray rounded-xl m-2 md:m-3 flex items-center p-1 w-8 md:w-11 md:p-2 justify-center cursor-pointer"
                    onClick={() => setIsFilter(true)}
                  >
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
                          {getProfile.isLoading ? null : (
                            <Image
                              src={
                                getProfile.data.length >= 0
                                  ? `https://drive.google.com/uc?export=view&id=${getProfile.data[0].profile.photo}`
                                  : `${process.env.NEXT_PUBLIC_API_URL}public/uploads/users/default.png`
                              }
                              className="rounded-full cursor-pointer"
                              objectFit="cover"
                              height={50}
                              width={50}
                            />
                          )}
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
                      <Image
                        src={user}
                        className="rounded-full cursor-pointer"
                        objectFit="cover"
                        height={50}
                        width={50}
                      />
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
              {isfilter ? (
                <div className="w-full absolute top-0 bottom-0 right-0 left-0">
                  <div>
                    <ModalsSearch
                      onClick={() => setIsFilter(false)}
                      onDiscard={() => setIsFilter(false)}
                      onApply={() => setIsFilter(false)}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          ) : (
            <div className="w-full h-16 md:h-20 md:px-28 py-3 p-3 flex flex-row items-center fixed z-[1200] shadow-lg bg-white">
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
                <div className="w-2/5 h-12 flex items-center">
                  <SearchNavbar onChange={e => setSearch(e.target.value)} onSearch={() => onSearch()} />
                  <div
                    className="border-solid border-2 border-gray rounded-xl m-3 flex items-center p-2 justify-center cursor-pointer"
                    onClick={() => setIsFilter(true)}
                  >
                    <Image src={vector} width={20} height={20} />
                  </div>
                </div>
                <div className="w-2/5 h-12 flex items-center">
                  <div className="flex justify-end w-full h-full items-center">
                    <Link href="/mybag">
                      <div className="hidden md:flex">
                        <AiOutlineShoppingCart className="text-2xl mr-6 text-gray cursor-pointer" />
                      </div>
                    </Link>
                    <div className="flex w-32 md:w-60 justify-between">
                      <ButtonLogin onClick={() => router.push('/auth/login')} />
                      <ButtonSignup onClick={() => router.push('/auth/register')} />
                    </div>
                  </div>
                </div>
                {isfilter ? (
                  <div className="w-full absolute top-0 bottom-0 right-0 left-0">
                    <div>
                      <ModalsSearch
                        onClick={() => setIsFilter(false)}
                        onDiscard={() => setIsFilter(false)}
                        onApply={() => setIsFilter(false)}
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
