import React from 'react';

export default function BubblessSender(params) {
  return (
    <div className="p-3 w-full relative">
      <div className="flex justify-end">
        <div className="border-[1px] border-solid border-primary max-w-sm px-4 p-2 font-medium rounded-[35px] rounded-br-xl ml-3 relative">
          <p className="text-primary font-medium">{params.message}</p>
        </div>
      </div>
    </div>
  );
}
