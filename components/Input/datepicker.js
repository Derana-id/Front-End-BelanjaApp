import React from 'react';

export default function datepicker(params) {
  return (
    <div className="w-full flex justify-end items-center">
      <label className="w-1/4 flex items-end justify-end pl-2 text-[#9B9B9B]">Date of birth</label>
      <input onChange={params.onChange} className="border text-gray h-10 rounded w-[60%] m-5 mr-10 px-2" defaultValue={params.value} type="date" />
    </div>
  );
}
