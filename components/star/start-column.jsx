import React from 'react';
import StartValue from './start.value';

export default function StartColumn(params) {
  return (
    <div className="relative">
      <div className="flex">
        <div className="mt-2">
          <StartValue startValue="5" endValue="0" isTrue="true" />
          <StartValue startValue="4" endValue="0" />
          <StartValue startValue="3" endValue="0" />
          <StartValue startValue="2" endValue="0" />
          <StartValue startValue="1" endValue="0" />
        </div>
        <div className="relative mt-2">
          <p className="text-gray text-sm ml-2">{params.valueReview}</p>
        </div>
      </div>
    </div>
  );
}
