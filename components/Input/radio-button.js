import React from 'react';

export default function radioButton(params) {
  return (
    <div className="flex flex-col mr-[80px]  sm:flex sm:flex-col md:flex md:flex-row md:mr-2 lg:flex lg:flex-row lg:mr-2 w-full">
      <div className="flex items-center mr-4">
        <input
          onChange={params.onChange}
          id="inline-radio"
          type="radio"
          value="Male"
          name="inline-radio-group"
          defaultChecked={params.value === 'Male'}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Laki-laki
        </label>
      </div>
      <div className="flex items-center mr-4">
        <input
          onChange={params.onChange}
          id="inline-2-radio"
          type="radio"
          value="Female"
          name="inline-radio-group"
          defaultChecked={params.value === 'Female'}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label htmlFor="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Perempuan
        </label>
      </div>
    </div>
  );
}
