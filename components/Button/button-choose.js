import React from 'react';

export default function BtnAction(params) {
  return (
    <div>
      <button
        className="border-solid border-2 border-gray rounded-full w-60 p-[8px] text-gray font-bold font-lg hover:border-special-success hover:text-special-success"
        onClick={params.onClick}
      >
        {params.action}
      </button>
    </div>
  );
}
