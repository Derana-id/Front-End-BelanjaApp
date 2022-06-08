import React from 'react';
import Head from 'next/head';
import products from '../../assets/img/products.jpg';
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

export default function Products() {
  return (
    <div>
      <Head>
        <title>Blanja | Products</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="p-28 bg-white">
        <div>
          <ul className="flex text-gray tex-sm w-56 justify-between">
            <li>Home</li>
            <li>{'>'} </li>
            <li>Category</li>
            <li>{'>'} </li>
            <li>Shoes</li>
          </ul>
        </div>
        <div class="flex mt-12">
          <div
            class="w-2/5 bg-secondary grid-cols-2 
                     grid-flow-row gap-4 auto-rows-auto"
          >
            <div
              class="grid grid-cols-2 
                     grid-flow-row gap-4 auto-rows-auto"
            >
              <Img src={shoesOne} />
              <Img src={shoesTwo} />
              <Img src={shoesThree} />
              <Img src={shoesFourth} />
            </div>
          </div>
          <div class="flex-auto w-3/5 bg-tertiary pl-9 pr-7">
            <div>
              <h3 className="text-2xl font-bold">Nike CruzrOne (Bright Crimson)</h3>
              <p className="text-gray">Nike</p>
              <Start valueReview="(10)" />
            </div>
            <div className="mt-8">
              <p className="text-md text-gray">price</p>
              <h3 className="text-dark text-xl font-extrabold">$ 20.0</h3>
            </div>
            <div className="mt-8">
              <p>Color</p>
              <div className="flex w-44 p-1 justify-between">
                <Color color="bg-primary" />
                <Color color="bg-black" />
                <Color color="bg-special-warning" />
                <Color color="bg-special-success" />
              </div>
            </div>
            <div className="flex justify-between w-72 mt-9">
              <div className="ralative">
                <p className="font-bold text-base">Size</p>
                <div className=" flex w-28 items-center justify-between">
                  <SpinnerAction action="+" />
                  <FormValueNumber defaultValue="28" />
                  <SpinnerAction action="-" />
                </div>
              </div>
              <div className="ralative">
                <p className="font-bold text-base">Jumlah</p>
                <div className=" flex w-28 items-center justify-between">
                  <SpinnerAction action="+" />
                  <FormValueNumber defaultValue="28" />
                  <SpinnerAction action="-" />
                </div>
              </div>
            </div>
            <div className="mt-10 w-80">
              <div className="flex justify-between mt-10">
                <BtnActionProducts onClick="" action="Chat" />
                <BtnActionProducts onClick="" action="Add bag" />
              </div>
              <div className="mt-5">
                <ButtonBuyyer action="Buy Now" />
              </div>
            </div>
          </div>
        </div>
        <FormInformation />
      </div>
    </div>
  );
}
