import React from 'react';

export default function FormValueNumber(params) {
  return (
    <div>
      <input
        maxLength={2}
        className="font-bold text-base focus:outline-none md:ml-4 w-5 md:w-10 flex items-center justify-center "
        // defaultValue={params.defaultValue}
        id={params.id}
        value={params.value}
        // onChange={params.onChange}
        type="number"
        readOnly
      />
    </div>
  );
}
