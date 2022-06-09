import React from 'react';
import Head from 'next/head';
import BtnAction from '../../components/button/button-choose';
import CardCheckout from '../../components/card/card-checkout';
import jas from '../../assets/img/jas.jpg';
import CardTotalPrice from '../../components/card/card-total-price';
import Checklist from '../../components/checklist/checklist';
import CardCart from '../../components/card/card-cart';
import ButtonBuyyer from '../../components/button/button-buyer';

const MyBag = () => {
  return (
    <div>
      <Head>
        <title>Blanja | My Bag</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="p-28 bg-white">
        <h1 className="mt-8 text-black text-3xl font-extrabold">My Bag</h1>
        <div className="flex ">
          <div className="flex-auto w-2/5">
            <div className="bg-white p-6 rounded-md shadow-lg">
              <div className="flex items-cente justify-between">
                <div className="flex">
                  <Checklist />
                  <p className="text-black font-medium">Select all items</p>
                  <p className="text-gray ml-2">(2 items selected)</p>
                </div>
                <button className="flex text-primary font-semibold">Delete</button>
              </div>
            </div>
            <CardCart
              image={jas}
              productName="Men's formal suit - Black"
              store="Zalora Cloth"
              price="$ 20.0"
              defaultValue="28"
            />
            <CardCart
              image={jas}
              productName="Men's formal suit - Black"
              store="Zalora Cloth"
              price="$ 20.0"
              defaultValue="7"
            />
            <CardCart
              image={jas}
              productName="Men's formal suit - Black"
              store="Zalora Cloth"
              price="$ 20.0"
              defaultValue="2"
            />
          </div>
          <div className="flex-1 w-32 ml-8">
            <div className="bg-white w-full rounded-md shadow-lg p-5">
              <p className="text-black font-bold">Shopping summary</p>
              <div className="flex justify-between mt-3">
                <p className="text-gray text-md">Total Price</p>
                <p className="font-bold text-black text-lg">$ 40.0</p>
              </div>
              <div className="mt-8">
                <ButtonBuyyer action="Buy" onClick={() => alert('Hallo')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MyBag.layouts = 'MainLayout';
export default MyBag;
