/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import logo from '../../assets/img/logo.png';
import SearchNavbar from '../search/search-navbar';
import vector from '../../assets/icons/vector.png';
import ButtonSignup from '../Button/button-signup';
import ButtonLogin from '../Button/button-login';
import ModalsSearch from '../modals/modals-filter';

import { getPopularProducts } from '../../redux/actions/products';

export default function AuthNavbar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isfilter, setIsFilter] = useState(false);
  const [getSearch, setSearch] = useState('');

  const onSearch = () => {
    const search = getSearch;

    dispatch(getPopularProducts(search));
    router.push(`/?search=${getSearch}`);
  };

  return (
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
  );
}
