import React from 'react';

export default function RadioInput(params) {
  return (
    <div className="relative mr-7">
      <input type="radio" className="accent-primary" name={params.name} id={params.id} value={params.value} />
      <label className="text-gray ml-3 mb-2" htmlFor={params.id}>
        {params.title}
      </label>
    </div>
  );
}
