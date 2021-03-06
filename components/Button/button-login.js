import React from 'react';

export default function ButtonLogin(params) {
  return (
    <div>
      <button
        className="bg-primary md:w-full rounded-full p-1 md:p-[7px] px-2 md:px-9 text-white font-bold font-lg hover:bg-white hover:border-2 hover:border-solid hover:border-primary hover:text-primary hover:py-[5px]"
        onClick={params.onClick}
      >
        Login
      </button>
    </div>
  );
}
