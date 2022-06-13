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

  // console.log(router.query.search);

  const { search } = router.query;

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getPopularProducts(search));
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
          <div className="bg-white mt-12 h-screen">
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
                     grid-flow-row gap-4 auto-rows-auto md:h-[78vh] "
              >
                {getPopular.isLoading
                  ? null
                  : getPopular.data.map((item, index) => (
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

            <div className="flex items-center justify-center py-11">
              <nav aria-label="Page">
                <ul className="inline-flex items-center -space-x-px">
                  <li>
                    <p
                      href="#"
                      className="block py-2 px-3 ml-0 bg-white rounded-l-lg text-primary border border-primary hover:bg-primary cursor-pointer hover:text-white"
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </p>
                  </li>
                  <li>
                    <p
                      href="#"
                      className="py-2 px-3 leading-tight text-primary bg-white border border-primary hover:bg-primary hover:text-white cursor-pointer font-semibold"
                    >
                      1
                    </p>
                  </li>
                  <li>
                    <p
                      href="#"
                      className="block py-2 px-3 leading-tight text-primary bg-white rounded-r-lg border border-gray-300 hover:bg-primary hover:text-white cursor-pointer"
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </p>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.layouts = 'ThridLayout';
export default Home;
