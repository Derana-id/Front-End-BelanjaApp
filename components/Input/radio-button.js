import React from 'react';

export default function radioButton() {
  return (
    <div className="flex w-full">
      <div className="flex items-center mr-4">
        <input
          id="inline-radio"
          type="radio"
          value=""
          name="inline-radio-group"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Laki-laki
        </label>
      </div>
      <div className="flex items-center mr-4">
        <input
          id="inline-2-radio"
          type="radio"
          value=""
          name="inline-radio-group"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Perempuan
        </label>
      </div>
    </div>
  );
}
