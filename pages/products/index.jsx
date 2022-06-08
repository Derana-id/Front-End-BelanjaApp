import React from 'react';
import Image from 'next/image';
import products from '../../assets/img/products.jpg';
import Img from '../../components/img/Img';
import star from '../../assets/img/star.png';
import Start from '../../components/img/start';
import Color from '../../components/molecules/color';
import SpinnerAction from '../../components/molecules/spinner';

export default function Products() {
  return (
    <div className="p-28 bg-primary">
      <div>
        <ul className="flex text-gray tex-sm w-56 justify-between">
          <li>Home</li>
          <li>{'>'} </li>
          <li>Category</li>
          <li>{'>'} </li>
          <li>T-shirt</li>
        </ul>
      </div>
      <div class="flex mt-12">
        <div class="flex w-2/5 bg-secondary">
          <div>
            <Image src={products} className="rounded-lg" />
            <div className="flex justify-between">
              <Img src={products} />
              <Img src={products} />
              <Img src={products} />
              <Img src={products} />
              <Img src={products} />
            </div>
          </div>
        </div>
        <div class="flex-auto w-3/5 bg-tertiary pl-7 py-7 pr-7">
          <div>
            <h3 className="text-2xl font-bold">Baju muslim pira</h3>
            <p className="text-gray">Zalora Cloth</p>
            <Start />
          </div>
          <div className="mt-8">
            <p className="text-md text-gray">price</p>
            <h3 className="text-dark text-xl font-extrabold">$ 20.0</h3>
          </div>
          <div>
            <p>Color</p>
            <div className="flex w-44 p-1 justify-between">
              <Color />
              <Color />
              <Color />
              <Color />
            </div>
          </div>
          <div className="flex justify-between w-24">
            <div className="ralative">
              <p>Size</p>
              <div className="bg-secondary">
                <SpinnerAction />
              </div>
            </div>
            <div>
              <div></div>
              <p>Jumlah</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
