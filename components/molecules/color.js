import React from 'react';

export default function Color(params) {
  return (
    <button
      className="border-solid border-2 border-transparant focus:border-primary p-1 rounded-full m-1"
      onClick={params.onClick}
    >
      <div
        className={`w-9 h-9 bg-[${params.color}] rounded-full focus:border-2 focus:border-solid focus:border-dark cursor-pointer`}
      />
    </button>
  );
}
