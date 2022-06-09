import React from 'react'
import ProductCard from '../components/ProductCard'

export default function PopularBrand() {
  return (
    <div className="bg-white">
      <div className="p-5">
        <h1><b>Popular</b></h1>
        <p style={{ color: 'gray' }}>Find clothes that are trending recently</p>
      </div>
      <div className="grid-flow-row grid-cols-2 gap-4 w-content bg-secondary auto-rows-auto">
        <div className='grid grid-flow-row grid-cols-5 gap-4 auto-rows-auto'>
          <ProductCard productName={`Men's formal suit - Black & White`} productPrice="$ 40.0" productOwner="Zalora Cloth" />
          <ProductCard productName={`Men's formal suit - Black & White`} productPrice="$ 40.0" productOwner="Zalora Cloth" />
          <ProductCard productName={`Men's formal suit - Black & White`} productPrice="$ 40.0" productOwner="Zalora Cloth" />
          <ProductCard productName={`Men's formal suit - Black & White`} productPrice="$ 40.0" productOwner="Zalora Cloth" />
          <ProductCard productName={`Men's formal suit - Black & White`} productPrice="$ 40.0" productOwner="Zalora Cloth" />
          <ProductCard productName={`Men's formal suit - Black & White`} productPrice="$ 40.0" productOwner="Zalora Cloth" />
          <ProductCard productName={`Men's formal suit - Black & White`} productPrice="$ 40.0" productOwner="Zalora Cloth" />
          <ProductCard productName={`Men's formal suit - Black & White`} productPrice="$ 40.0" productOwner="Zalora Cloth" />
          <ProductCard productName={`Men's formal suit - Black & White`} productPrice="$ 40.0" productOwner="Zalora Cloth" />
          <ProductCard productName={`Men's formal suit - Black & White`} productPrice="$ 40.0" productOwner="Zalora Cloth" />
        </div>
      </div>
    </div>
  )
}
