import React from 'react'
import Head from 'next/head'
import Slider from '../../components/Slider'
import SliderContainer from '../../components/SliderCategory'
import NewBrand from '../../components/NewBrand'
import PopularBrand from '../../components/PopularBrand'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Belanja | Home</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="container break-normal text-start bg-slate-200">
        <div className="px-28 bg-white">
          <Slider />
        </div>
        <div className="px-28" style={{ backgroundColor: '#F0F1F9' }}>
          <SliderContainer />
        </div>
        <div className="px-28 bg-white">
          <NewBrand />
          <PopularBrand />
        </div>
      </div>
    </div>
  )
}
