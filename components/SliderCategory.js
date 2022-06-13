/* eslint-disable react/jsx-boolean-value */
import Image from 'next/image';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function SliderCategory({ deviceType }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      paritialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 40
    }
  };
  const images = [
    '/images/Group1229.jpg',
    '/images/Group1230.jpg',
    '/images/Group1231.jpg',
    '/images/Group1232.jpg',
    '/images/Group1233.jpg',
    '/images/Group1235.jpg',
    '/images/Group1236.jpg',
    '/images/Group1237.jpg',
    '/images/Group1238.jpg',
    '/images/Group1239.jpg',
    '/images/Group1240.jpg',
    '/images/Group1241.jpg',
    '/images/Group1242.jpg',
    '/images/Group1243.jpg',
    '/images/Group1244.jpg',
    '/images/Group1245.jpg'
  ];

  return (
    <div className="font-sans leading-normal tracking-normal text-gray-100">
      <div className="md:grid md:grid-cols-12 py-7">
        <div className="col-span-2">
          <h1 className="text-black font-bold text-3xl">Category</h1>
          <p className="text-black font-medium">What are you currently looking for?</p>
        </div>
        <div className="md:col-span-10 md:p-5">
          <Carousel
            partialVisible={true}
            deviceType={deviceType}
            itemClass="image-item"
            responsive={responsive}
            removeArrowOnDeviceType={['tablet', 'mobile']}
            showDots={true}
            className="py-5"
          >
            {images.map((each, index) => {
              return (
                <div key={index} className="w-full h-full p-2">
                  <Image src={each} className="rounded-lg shadow-xl" width={206} height={220} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
