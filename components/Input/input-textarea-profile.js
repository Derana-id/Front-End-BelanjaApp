import React from 'react';

export default function inputTextarea(params) {
  return (
    <div className="flex justify-end w-full items-center">
      <label className="w-1/4 flex items-end sm:justify-end pl-2 text-base text-[#9B9B9B]">{params.name}</label>
      <textarea onChange={params.onChange} defaultValue={params.value} className="border text-gray h-10 rounded w-[60%] mx-5 my-3 mr-10 px-2" />
    </div>
  );
}
