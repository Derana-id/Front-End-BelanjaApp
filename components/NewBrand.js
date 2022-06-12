import React from 'react';
import CardProducts from './card/card-products';

export default function NewBrand() {
  return (
    <div className="bg-white mt-12">
      <div className="">
        <h1 className="font-bold text-3xl text-black">New</h1>
        <p className="text-gray-500 font-medium">You’ve never seen it before!</p>
      </div>
      <div
        className="w-content bg-secondary grid-cols-2
                     grid-flow-row gap-4 auto-rows-auto"
      >
        <div
          className="md:grid grid-cols-5
                     grid-flow-row gap-4 auto-rows-auto"
        >
          <CardProducts nameProduct={"Men's formal suit - Black & White"} price="$ 40.0" user="Zalora Cloth" />
          <CardProducts nameProduct={"Men's formal suit - Black & White"} price="$ 40.0" user="Zalora Cloth" />
          <CardProducts nameProduct={"Men's formal suit - Black & White"} price="$ 40.0" user="Zalora Cloth" />
          <CardProducts nameProduct={"Men's formal suit - Black & White"} price="$ 40.0" user="Zalora Cloth" />
          <CardProducts nameProduct={"Men's formal suit - Black & White"} price="$ 40.0" user="Zalora Cloth" />
          <CardProducts nameProduct={"Men's formal suit - Black & White"} price="$ 40.0" user="Zalora Cloth" />
          <CardProducts nameProduct={"Men's formal suit - Black & White"} price="$ 40.0" user="Zalora Cloth" />
          <CardProducts nameProduct={"Men's formal suit - Black & White"} price="$ 40.0" user="Zalora Cloth" />
          <CardProducts nameProduct={"Men's formal suit - Black & White"} price="$ 40.0" user="Zalora Cloth" />
          <CardProducts nameProduct={"Men's formal suit - Black & White"} price="$ 40.0" user="Zalora Cloth" />
        </div>
      </div>
    </div>
  );
}
