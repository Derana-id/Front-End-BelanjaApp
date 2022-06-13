import React from 'react';
import { BsSearch } from 'react-icons/bs';

export default function SearchNavbar(params) {
  return (
    <div className="w-32 md:w-full flex relative">
      <input
        type="text"
        className="w-28 md:w-full h-7 pr-6 md:pr-0 px-4 md:h-10 rounded-full ml-3 md:ml-0 focus:outline-none border-2 border-solid border-gray text-base font-medium"
        placeholder="Search"
        onChange={params.onChange}
      />
      <BsSearch
        className="absolute top-[7px] right-3 md:right-5 text-gray text-sm md:text-xl cursor-pointer"
        onClick={params.onSearch}
      />
    </div>
  );
}
