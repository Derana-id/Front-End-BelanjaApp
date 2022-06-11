import React from 'react';

export default function ButtonSignup(params) {
  return (
    <div>
      <button
        className="w-full rounded-full p-[5px] px-6 text-gray border-2 border-solid border-gray font-bold font-lg hover:bg-white hover:border-2 hover:border-solid hover:border-primary hover:text-primary"
        onClick={params.onClick}
      >
        Signup
      </button>
    </div>
  );
}
