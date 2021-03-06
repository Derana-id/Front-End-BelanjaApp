import React from 'react';

export default function SpinnerAction(params) {
  return (
    <div>
      <button
        className="bg-white flex justify-center items-center drop-shadow-md h-9 w-9 rounded-full text-black font-semibold text-2xl"
        onClick={params.onClick}
      >
        {params.action}
      </button>
    </div>
  );
}
