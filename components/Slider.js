import Image from 'next/image';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Slider({ deviceType }) {
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
  const images = ['/images/CardPromotion.jpg', '/images/CardPromotion2.jpg']
  
  return (
    <div className="font-sans leading-normal tracking-normal" style={{
      backgroundColor: '#E5E5E5',
      margin: '40px 0'
    }}>
      <Carousel
        partialVisbile
        deviceType={deviceType}
        itemClass="image-item"
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        showDots={true}
      >
        {images.map((each, index) => {
          return (
            <div key={index} className='flex w-full h-full'>
              <Image src={each} className='object-cover w-3/4 rounded-lg shadow-xl' width={456} height={180} />
            </div>
          );
        })}
      </Carousel>
    </div>
  )
}
