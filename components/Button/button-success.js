import React from 'react';

export default function ButtonSuccess(params) {
  return (
    <div>
      <button
        className={`border-solid border-2 border-black rounded-full w-28 md:w-36 md:p-2 p-1 text-black font-bold font-lg hover:border-special-success hover:text-special-success ${params.className}`}
        onClick={params.onClick}
      >
        {params.action}
      </button>
    </div>
  );
}
