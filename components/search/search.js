import React from 'react';
import { BsSearch } from 'react-icons/bs';

export default function Search() {
  return (
    <div className="relative w-52">
      <input
        type="text"
        className="rounded-full px-l p-1 pl-10 focus:outline-none border-gray border-soli border-2 w-60"
      />
      <BsSearch className="absolute top-[10px] left-3 text-gray text-xl " />
    </div>
  );
}
