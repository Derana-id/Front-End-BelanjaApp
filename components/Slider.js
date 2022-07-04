import Image from 'next/image';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import promotion from '../assets/img/CardPromotion.jpg';
import promotionSecond from '../assets/img/CardPromotion2.jpg';
import promotionThrid from '../assets/img/CardPromotion3.jpg';
import promotionFourth from '../assets/img/CardPromotion4.jpg';

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
  };
  const images = [promotion, promotionSecond, promotionThrid, promotionFourth];

  return (
    <div className="font-sans">
      <Carousel
        partialVisbile
        deviceType={deviceType}
        itemClass="image-item"
        responsive={responsive}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        showDots
      >
        {images.map((each, index) => {
          return (
            <div key={index} className="">
              <Image src={each} className="object-cover rounded-lg shadow-xl" width={456} height={180} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
