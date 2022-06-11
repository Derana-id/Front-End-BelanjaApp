/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import CardForm from '../../components/card/card-form';
import Search from '../../components/search/search';
import caricatur from '../../assets/img/caricatur.png';

const MyOrder = () => {
  return (
    <div>
      <Head>
        <title>Blanja | My Order</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="p-28 bg-white">
        <div className="flex">
          <div className="flex w-1/5 bg-primary">02</div>
          <div className="flex-1 w-32 bg-special-success p-12 ">
            <CardForm>
              <h5 className="text-black relative ml-10 text-lg font-bold">Description</h5>
              <div className="px-10 pt-2">
                <ul className="flex w-full justify-between text-gray text-lg">
                  <li className="focus:text-primary border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
                    <a href="#">All items</a>
                  </li>
                  <li className="focus:text-primary border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
                    <a href="#">Get paid</a>
                  </li>
                  <li className="focus:text-primary border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
                    <a href="#">Processed</a>
                  </li>
                  <li className="focus:text-primary border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
                    <a href="#">Sent</a>
                  </li>
                  <li className="focus:text-primary border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
                    <a href="#">Sent</a>
                  </li>
                  <li className="focus:text-primary border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
                    <a href="#">completed</a>
                  </li>
                  <li className="focus:text-primary border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
                    <a href="#">Order cancel</a>
                  </li>
                </ul>
                <div className="mt-8">
                  <Search />
                </div>
                <div className="flex justify-center items-center p-16">
                  <div className="w-2/5 h-2/5">
                    <Image src={caricatur} />
                  </div>
                </div>
              </div>
            </CardForm>
          </div>
        </div>
      </div>
    </div>
  );
};

MyOrder.layouts = 'SecondLayout';
export default MyOrder;
