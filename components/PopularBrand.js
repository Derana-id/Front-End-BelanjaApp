import React from 'react';
import CardProducts from './card/card-products';

export default function PopularBrand() {
  return (
    <div className="bg-white mt-12">
      <div className="">
        <h1 className="font-bold text-3xl text-black">Popular</h1>
        <p style={{ color: 'gray' }}>Find clothes that are trending recently</p>
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
