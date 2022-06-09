import React from 'react';
import Start from './start';
import StartColumn from './start-column';

export default function StartReview() {
  return (
    <div className="mt-10 flex">
      <div className="flex items-center">
        <div>
          <div className="flex">
            <h1 className="text-6xl font-black">5.0</h1>
            <h3 className="flex items-end text-gray">/10</h3>
          </div>
          <Start />
        </div>
      </div>
      <div className="flex ml-10">
        <StartColumn />
      </div>
    </div>
  );
}
