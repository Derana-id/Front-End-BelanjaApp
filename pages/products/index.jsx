import React from 'react';

export default function Products() {
  return (
    <div className="p-28">
      <div>
        <ul className="flex">
          <li>Home</li>
          <li>{'>'} </li>
          <li>Category</li>
          <li>{'>'} </li>
          <li>T-shirt</li>
        </ul>
      </div>
      <div class="flex">
        <div class="flex-none ...">01</div>
        <div class="flex-1 w-64 ...">02</div>
        <div class="flex-1 w-32 ...">03</div>
      </div>
    </div>
  );
}
