/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

export default function Category(params) {
  return (
    <div
      className={`flex items-center justify-center border-solid border-[1px] border-gray rounded-lg cursor-pointer mr-4 mb-2 px-4 py-1 ${params.color}`}
      onClick={params.onClick}
    >
      <p className={`font-semibold ${params.fontColor}`}>{params.title}</p>
    </div>
  );
}
