import React from 'react';

export default function BtnActionProducts(params) {
  return (
    <div>
      <button
        className="border-solid border-2 border-black rounded-full w-36 p-2 text-black font-bold font-lg hover:border-special-success hover:text-special-success"
        onClick={params.onClick}
      >
        {params.action}
      </button>
    </div>
  );
}