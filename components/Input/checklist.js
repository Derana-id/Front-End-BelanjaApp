import React from 'react';

export default function Checklist(params) {
  return (
    <>
      <div className="flex items-center mr-4">
        <input
          type="checkbox"
          className="accent-primary cursor-pointer h-5 w-5"
          id={params.id}
          onChange={params.onChange}
          onClick={params.onClick}
          checked={params.checked}
        />
      </div>
    </>
  );
}
