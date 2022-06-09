import Image from 'next/image';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function SliderCategory({ deviceType }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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
  }
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
    '/images/Group1245.jpg',
  ]
  
  return (
    <div className="font-sans leading-normal tracking-normal" style={{
      backgroundColor: '#F0F1F9'
    }}>
      <div className="grid grid-cols-12" style={{
        margin: '0 60px'
      }}>
        <div>
          <h1><b>Category</b></h1>
          <p style={{ color: 'gray' }}>What are you currently looking for?</p>
        </div>
        <div className="justify-between col-span-7 p-5" style={{
          margin: '0 50px'
        }}>
          <Carousel
            partialVisible={true}
            deviceType={deviceType}
            itemClass="image-item"
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            showDots={true}
          >
            {images.map((each, index) => {
              return (
                <div key={index} className='flex justify-center w-full h-full'>
                  <Image src={each} className='object-cover w-3/4 rounded-lg shadow-xl' width={206} height={220} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  )
}
