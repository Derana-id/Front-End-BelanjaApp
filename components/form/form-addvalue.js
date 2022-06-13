import React from 'react';

export default function FormValueNumber(params) {
  return (
    <div>
      <input
        maxLength={2}
        className="font-bold text-base focus:outline-none w-5"
        defaultValue={params.defaultValue}
        id={params.id}
        value={params.value}
        // onChange={params.onChange}
        type="number"
        readOnly
      />
    </div>
  );
}
