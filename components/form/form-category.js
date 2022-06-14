/* eslint-disable no-console */
import React from 'react';

export default function FormAddCategory(params) {
  // console.log(params.category);
  return (
    <div className="flex flex-col mt-5">
      <label htmlFor={params.id} className="text-gray max-w-[150px] text-sm mb-1 cursor-pointer">
        {params.title}
      </label>
      <select onChange={params.onChange} className="w-52 sm:w-52 md:w-80 lg:w-80 xl:w-80 border-gray border-2 border-solid h-10 rounded focus:outline-none px-3" name="cars" id="cars">
        {params.category.data.map((items, index) => (
          <option key={index} value={items.id}>{ items.category_name}</option>
        ))}
      </select>
    </div>
  );
}
