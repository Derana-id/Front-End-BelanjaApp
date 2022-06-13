/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Slider from '../components/Slider';
import SliderContainer from '../components/SliderCategory';
import { getPopularProducts, getProducts } from '../redux/actions/products';
import CardProducts from '../components/card/card-products';

function Home() {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getPopularProducts());
  }, []);
  const getAllProducts = useSelector(state => {
    return state.getAllProducts;
  });

  const getPopular = useSelector(state => {
    return state.getPopular;
  });

  const onDetail = e => {
    router.push(`/products/${e}`);
  };

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
          <div className="bg-white mt-12">
            <div className="">
              <h1 className="font-bold text-3xl text-black">New</h1>
              <p className="text-gray-500 font-medium">You’ve never seen it before!</p>
            </div>

            <div
              className="w-content bg-secondary grid-cols-2
                     grid-flow-row gap-4 auto-rows-auto"
            >
              <div
                className="md:grid grid-cols-5
                     grid-flow-row gap-4 auto-rows-auto"
              >
                {getAllProducts.isLoading
                  ? null
                  : getAllProducts.data.map((item, index) => (
                      <div key={index}>
                        <CardProducts
                          nameProduct={`${item.product.product_name}`}
                          price={`$ ${item.product.price}`}
                          user={`${item.store[0].store_name}`}
                          onClick={() => onDetail(item.product.id)}
                          img={`${process.env.NEXT_PUBLIC_API_URL}uploads/products/${item.image[0].photo}`}
                        />
                      </div>
                    ))}
              </div>
            </div>
          </div>
          <div className="bg-white mt-12">
            <div className="">
              <h1 className="font-bold text-3xl text-black">Popular</h1>
              <p className="text-gray-500 font-medium">Find clothes that are trending recently</p>
            </div>
            <div
              className="w-content bg-secondary grid-cols-2
                     grid-flow-row gap-4 auto-rows-auto"
            >
              <div
                className="md:grid grid-cols-5
                     grid-flow-row gap-4 auto-rows-auto"
              >
                {getPopular.isLoading
                  ? null
                  : getPopular.data.map((item, index) => (
                      <div key={index}>
                        <CardProducts
                          nameProduct={`${item.product.product_name}`}
                          price={`$ ${item.product.price}`}
                          user={`${item.store[0].store_name}`}
                          href={`/products/${item.product.id}`}
                          img={`${process.env.NEXT_PUBLIC_API_URL}uploads/products/${item.image[0].photo}`}
                        />
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.layouts = 'ThridLayout';
export default Home;
