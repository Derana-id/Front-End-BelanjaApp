import React from 'react';
import { BsSearch } from 'react-icons/bs';

export default function SearchNavbar() {
  return (
    <div className="w-full flex relative">
      <input
        type="text"
        className="w-full px-4 h-10 rounded-full focus:outline-none border-2 border-solid border-gray text-base font-medium"
        placeholder="Search"
      />
      <BsSearch className="absolute top-[10px] right-5 text-gray text-xl " />
    </div>
  );
}
