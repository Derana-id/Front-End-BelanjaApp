import React from 'react';
import Head from 'next/head';
import Slider from '../components/Slider';
import SliderContainer from '../components/SliderCategory';
import NewBrand from '../components/NewBrand';
import PopularBrand from '../components/PopularBrand';

function Home() {
  return (
    <div>
      <Head>
        <title>Belanja | Home</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="text-start pt-16 md:pt-20 pb-16">
        <div className="md:px-28 px-6 bg-white py-12 ">
          <Slider />
        </div>
        <div className="md:px-28 p-6 bg-gray-100">
          <SliderContainer />
        </div>
        <div className="md:px-28 p-6">
          <NewBrand />
          <PopularBrand />
        </div>
      </div>
    </div>
  );
}

Home.layouts = 'ThridLayout';
export default Home;
