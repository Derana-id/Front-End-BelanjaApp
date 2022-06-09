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
import SecondNavbar from '../../components/navbar/navbar-second';

const Products = () => {
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
            <li>category</li>
            <li>{'>'} </li>
            <li>Shoes</li>
          </ul>
        </div>
        <div className="flex mt-12">
          <div
            className="w-2/5 bg-secondary grid-cols-2 
                     grid-flow-row gap-4 auto-rows-auto"
          >
            <div
              className="grid grid-cols-2 
                     grid-flow-row gap-4 auto-rows-auto"
            >
              <Img src={shoesOne} />
              <Img src={shoesTwo} />
              <Img src={shoesThree} />
              <Img src={shoesFourth} />
            </div>
          </div>
          <div className="flex-auto w-3/5 bg-tertiary pl-9 pr-7">
            <div>
              <h3 className="text-2xl font-bold">Nike CruzrOne (Bright Crimson)</h3>
              <p className="text-gray">Nike</p>
              <Start valueReview="(10)" />
            </div>
            <div className="mt-5">
              <p className="text-md text-gray">price</p>
              <h3 className="text-dark text-xl font-extrabold">$ 20.0</h3>
            </div>
            <div className="mt-5">
              <p>Color</p>
              <div className="flex w-44 p-1 justify-between">
                <Color color="bg-primary" />
                <Color color="bg-black" />
                <Color color="bg-special-warning" />
                <Color color="bg-special-success" />
              </div>
            </div>
            <div className="flex justify-between w-72 mt-5">
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
            <div className="mt-5 w-80">
              <div className="flex justify-between mt-5">
                <BtnActionProducts onClick={() => alert('hai')} action="Chat" />
                <BtnActionProducts onClick={() => alert('hai')} action="Add bag" />
              </div>
              <div className="mt-5">
                <ButtonBuyyer action="Buy Now" />
              </div>
            </div>
          </div>
        </div>
        <FormInformation />
        <hr className="text-gray mt-7" />
        <h1 className="mt-8 text-black text-3xl font-extrabold">You can also like this</h1>
        <p className="text-gray">You’ve never seen it before!</p>
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
};

Products.layouts = 'MainLayout';
export default Products;
