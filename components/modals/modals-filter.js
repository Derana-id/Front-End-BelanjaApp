/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import ButtonSuccess from '../Button/button-success';
import ButtonWarning from '../Button/button-warning';
import Category from '../molecules/category';
import Size from '../molecules/size';

export default function ModalsSearch(params) {
  const router = useRouter();

  const [getSize, setSize] = useState('');
  const [getColor, setColor] = useState('');
  const [getCategory, setCategory] = useState('');
  const [getBrand, setBrand] = useState('');
  const [isDropdown, setIsDropdown] = useState(false);

  const onDropdown = () => {
    if (isDropdown) {
      setIsDropdown(false);
    } else {
      setIsDropdown(true);
    }
  };

  const apply = () => {
    router.push(`/?color=${getColor}&size=${getSize}&category=${getCategory}&brand=${getBrand}`);
  };
  return (
    <div className="flex items-center justify-center">
      <div
        className="bg-black h-screen w-full z-40 absolute top-0 opacity-50 overflow-hidden"
        onClick={params.onClick}
      />
      <div className="bg-white shadow-xl w-72 md:w-[380px] opacity-100 absolute top-[50px] rounded z-50">
        <div className="bg-white shadow-md rounded-t p-3 px-4 flex">
          <RiCloseLine className="text-2xl font-bold text-gray cursor-pointer" onClick={params.onClick} />
          <h4 className="ml-2 font-bold">Filter</h4>
        </div>
        <div className="p-4 pb-0">
          <p className="ml-2 font-bold text-sm mt-3">Colors</p>
        </div>
        <div className="flex w-44 justify-between p-4 pt-0">
          <button
            className="border-solid border-2 border-transparant focus:border-primary p-1 rounded-full m-1"
            onClick={() => setColor('Black')}
          >
            <div className="w-9 h-9 bg-black rounded-full focus:border-2 focus:border-solid focus:border-dark cursor-pointer shadow-md" />
          </button>
          <button
            className="border-solid border-2 border-transparant focus:border-primary p-1 rounded-full m-1"
            onClick={() => setColor('White')}
          >
            <div className="w-9 h-9 bg-white rounded-full focus:border-2 focus:border-solid focus:border-dark cursor-pointer shadow-md" />
          </button>
          <button className="border-solid border-2 border-transparant focus:border-primary p-1 rounded-full m-1 shadow-md">
            <div
              className="w-9 h-9 bg-special-success rounded-full focus:border-2 focus:border-solid focus:border-dark cursor-pointer shadow-md"
              onClick={() => setColor('Green')}
            />
          </button>
          <button className="border-solid border-2 border-transparant focus:border-primary p-1 rounded-full m-1 shadow-md">
            <div
              className="w-9 h-9 bg-gray rounded-full focus:border-2 focus:border-solid focus:border-dark cursor-pointer"
              onClick={() => setColor('Gray')}
            />
          </button>
          <button className="border-solid border-2 border-transparant focus:border-primary p-1 rounded-full m-1 shadow-md">
            <div
              className="w-9 h-9 bg-blue rounded-full focus:border-2 focus:border-solid focus:border-dark cursor-pointer"
              onClick={() => setColor('Blue')}
            />
          </button>
        </div>
        <hr className="text-gray-light mt-1 border-2" />
        <div className="p-4">
          <p className="font-bold">Size</p>
          <div className="flex justify-between full py-2">
            <Size title="XS" onClick={() => setSize('XZ')} />
            <Size title="S" onClick={() => setSize('S')} />
            <Size title="M" onClick={() => setSize('M')} />
            <Size title="L" onClick={() => setSize('L')} />
            <Size title="XL" onClick={() => setSize('XL')} />
          </div>
        </div>
        <hr className="text-gray-light mt-1 border-2" />
        <div className="p-4">
          <p className="font-bold">Category</p>
          <div className="justify-between py-2 grid grid-cols-3">
            <Category title="All" onClick={() => setCategory('')} />
            <Category title="Woman" onClick={() => setCategory('Woman')} />
            <Category title="Men" onClick={() => setCategory('Man')} />
            <Category title="Boys" onClick={() => setCategory('Boys')} />
            <Category title="Girls" onClick={() => setCategory('Girls')} />
          </div>
        </div>
        <hr className="text-gray-light border-2" />
        <div className="relative inline-block text-left w-full">
          <div className="w-full">
            <button
              type="button"
              className="inline-flex justify-between px-4 w-full shadow-sm py-2 bg-white text-md text-Black font-semibold"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={() => onDropdown()}
            >
              Brands
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {isDropdown ? (
            <div
              className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 flex justify-center items-center focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <button className="flex justify-center items-center" onClick={() => setBrand('Nike')}>
                  Nike
                </button>
                <button onClick={() => setBrand('Gucci')}>Gucci</button>
              </div>
            </div>
          ) : null}
        </div>
        <div className="bg-white rounded-t p-3 px-5 md:px-10 flex rounded shadow-2xl justify-between">
          <div>
            <ButtonSuccess action="Discard" className="p-0" onClick={params.onDiscard} />
          </div>
          <div className="w-28" onClick={params.onApply}>
            <ButtonWarning action="Apply" className="p-[2px]" onClick={() => apply()} />
          </div>
        </div>
      </div>
    </div>
  );
}
