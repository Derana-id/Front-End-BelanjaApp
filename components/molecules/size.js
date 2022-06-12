/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

export default function Size(params) {
  return (
    <div
      className={`flex items-center justify-center border-solid border-[1px] border-gray rounded-lg w-11 h-11 cursor-pointer ${params.color}`}
      onClick={params.onClick}
    >
      <p className={`font-semibold ${params.fontColor}`}>{params.title}</p>
    </div>
  );
}
