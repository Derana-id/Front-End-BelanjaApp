import React from 'react';
import Head from 'next/head';
import shoesOne from '../../assets/img/shoes (1).jpg';
import shoesTwo from '../../assets/img/shoes (2).jpg';
import shoesThree from '../../assets/img/shoes (3).jpg';
import shoesFourth from '../../assets/img/shoes (4).jpg';
import Img from '../../components/img/Img';
import Start from '../../components/star/start';
import Color from '../../components/molecules/color';
import SpinnerAction from '../../components/molecules/spinner';
import FormValueNumber from '../../components/form/form-addvalue';
import BtnActionProducts from '../../components/button/button-products';
import ButtonBuyyer from '../../components/button/button-buyer';
import FormInformation from '../../components/form/form-information';
import CardProducts from '../../components/card/card-products';

export default function Category() {
  return (
    <div>
      <Head>
        <title>Blanja | Category</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="p-28 bg-white">
        <div>
          <ul className="flex text-gray tex-sm w-56 justify-between">
            <li>Home</li>
            <li>{'>'} </li>
            <li>category</li>
            <li>{'>'} </li>
            <li>T-Shirt</li>
          </ul>
        </div>

        <h1 className="mt-8 text-black text-3xl font-extrabold">T-Shirt</h1>
        <div
          className="w-content bg-secondary grid-cols-2 
                     grid-flow-row gap-4 auto-rows-auto"
        >
          <div
            className="grid grid-cols-5 
                     grid-flow-row gap-4 auto-rows-auto"
          >
            <CardProducts nameProduct={`Men's formal suit - Black & White`} price="$ 40.0" user="Zalora Cloth" />
            <CardProducts nameProduct={`Men's formal suit - Black & White`} price="$ 40.0" user="Zalora Cloth" />
            <CardProducts nameProduct={`Men's formal suit - Black & White`} price="$ 40.0" user="Zalora Cloth" />
            <CardProducts nameProduct={`Men's formal suit - Black & White`} price="$ 40.0" user="Zalora Cloth" />
            <CardProducts nameProduct={`Men's formal suit - Black & White`} price="$ 40.0" user="Zalora Cloth" />
            <CardProducts nameProduct={`Men's formal suit - Black & White`} price="$ 40.0" user="Zalora Cloth" />
            <CardProducts nameProduct={`Men's formal suit - Black & White`} price="$ 40.0" user="Zalora Cloth" />
            <CardProducts nameProduct={`Men's formal suit - Black & White`} price="$ 40.0" user="Zalora Cloth" />
            <CardProducts nameProduct={`Men's formal suit - Black & White`} price="$ 40.0" user="Zalora Cloth" />
            <CardProducts nameProduct={`Men's formal suit - Black & White`} price="$ 40.0" user="Zalora Cloth" />
          </div>
        </div>
      </div>
    </div>
  );
}
