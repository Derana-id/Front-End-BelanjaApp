import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import shoesOne from '../../assets/img/shoes (1).jpg';
import shoesTwo from '../../assets/img/shoes (2).jpg';
import shoesThree from '../../assets/img/shoes (3).jpg';
import shoesFourth from '../../assets/img/shoes (4).jpg';
import Img from '../../components/img/Img';
import Start from '../../components/star/start';
import Color from '../../components/molecules/color';
import SpinnerAction from '../../components/molecules/spinner';
import FormValueNumber from '../../components/form/form-addvalue';
import ButtonSuccess from '../../components/button/button-success';
import ButtonWarning from '../../components/button/button-warning';
import FormInformation from '../../components/form/form-information';
import CardProducts from '../../components/card/card-products';

const Products = () => {
  return (
    <div>
      <Head>
        <title>Blanja | Products</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="p-6 pt-28 md:p-28 bg-white">
        <div>
          <ul className="flex text-gray text-sm font-bold w-56 justify-between">
            <Link href="/">
              <li className="cursor-pointer">Home</li>
            </Link>
            <li>{'>'} </li>
            <Link href="/category">
              <li className="cursor-pointer">category</li>
            </Link>
            <li>{'>'} </li>
            <li className="cursor-pointer">Shoes</li>
          </ul>
        </div>
        <div className="md:flex mt-12">
          <div
            className="md:w-2/5 bg-secondary grid-cols-2 
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
          <div className="flex-auto md:w-3/5 bg-tertiary md:pl-9 md:pr-7 mt-5 md:mt-0">
            <div>
              <h3 className="text-2xl font-bold">Nike CruzrOne (Bright Crimson)</h3>
              <p className="text-gray text-sm font-semibold">Nike</p>
              <Start valueReview="(10)" />
            </div>
            <div className="mt-5">
              <p className="text-md text-gray font-semibold text-sm">price</p>
              <h3 className="text-dark text-xl font-extrabold">$ 20.0</h3>
            </div>
            <div className="mt-5">
              <p className="font-semibold text-md">Color</p>
              <div className="flex w-44 p-1 justify-between">
                <Color color="bg-primary" />
                <Color color="bg-black" />
                <Color color="bg-special-warning" />
                <Color color="bg-special-success" />
              </div>
            </div>
            <div className="flex justify-between w-full md:w-72 mt-5">
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
                <div className="flex w-28 items-center justify-between">
                  <SpinnerAction action="+" />
                  <FormValueNumber defaultValue="28" />
                  <SpinnerAction action="-" />
                </div>
              </div>
            </div>
            <div className="mt-8 md:mt-5 md:w-80">
              <div className="flex justify-between mt-5">
                <ButtonSuccess onClick={() => alert('hai')} action="Chat" />
                <ButtonSuccess onClick={() => alert('hai')} action="Add bag" />
              </div>
              <div className="mt-5">
                <ButtonWarning action="Buy Now" />
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
            className="md:grid grid-cols-5 
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

Products.layouts = 'ThridLayout';
export default Products;
