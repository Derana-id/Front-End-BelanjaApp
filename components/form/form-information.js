import React from 'react';
import StartReview from '../star/start-review';

export default function FormInformation(params) {
  return (
    <div className="mt-10">
      <h5 className="text-black font-extrabold text-xl bg-green">Informasi Produk</h5>
      <p className="mt-6 font-semibold">Condition</p>
      <p className="text-primary font-semibold text-sm">{params.condition}</p>
      <h6 className="mt-8 font-semibold text-lg">Description</h6>
      <p className="text-black text-sm font-medium mt-3 whitespace-pre-wrap break-words">{params.description}</p>

      <h5 className="text-black font-extrabold text-xl mt-8">Product review</h5>
      <StartReview />
    </div>
  );
}
