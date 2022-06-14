/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ContentLoader from 'react-content-loader';
import Slider from '../components/Slider';
import CardProducts from '../components/card/card-products';
import { getCategory } from '../redux/actions/category';
import { getPopularProducts, getProducts } from '../redux/actions/products';

function Home({ deviceType }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [getSearch, setSearch] = useState('');

  // console.log(router.query.search);

  const { search } = router.query;

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategory());
    dispatch(getPopularProducts(getSearch));
    setSearch(search);
  }, []);

  useEffect(() => {
    if (search) {
      dispatch(getPopularProducts(getSearch));
    }
  }, []);

  const getAllCategory = useSelector(state => {
    return state.getAllCategory;
  });

  const getAllProducts = useSelector(state => {
    return state.getAllProducts;
  });

  const getPopular = useSelector(state => {
    return state.getPopular;
  });

  const onDetail = e => {
    router.push(`/products/${e}`);
  };

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

  const onCategory = e => {
    router.push(`/category?query=${e}`);
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
          <div className="font-sans leading-normal tracking-normal text-gray-100">
            <div className="md:grid md:grid-cols-12 py-7">
              <div className="col-span-2">
                <h1 className="text-black font-bold text-3xl">Category</h1>
                <p className="text-black font-medium">What are you currently looking for?</p>
              </div>
              <div className="md:col-span-10 md:p-5">
                {getAllCategory.isLoading ? null : (
                  <Carousel
                    partialVisible
                    deviceType={deviceType}
                    itemClass="image-item"
                    responsive={responsive}
                    removeArrowOnDeviceType={['tablet', 'mobile']}
                    showDots
                    className="py-5"
                  >
                    {getAllCategory.data.map((each, index) => {
                      return (
                        <div key={index} className="w-full h-full p-2">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_API_URL}uploads/categories/${each.photo}`}
                            className="rounded-lg shadow-xl cursor-pointer"
                            width={206}
                            height={220}
                            onClick={() => onCategory(each.category_name)}
                          />
                        </div>
                      );
                    })}
                  </Carousel>
                )}
              </div>
            </div>
          </div>
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
                {getAllProducts.isLoading ? (
                  <ContentLoader />
                ) : (
                  getAllProducts.data.map((item, index) => (
                    <div key={index}>
                      <CardProducts
                        nameProduct={`${item.product.product_name}`}
                        price={`$ ${item.product.price}`}
                        user={`${item.store[0].store_name}`}
                        onClick={() => onDetail(item.product.id)}
                        img={`${process.env.NEXT_PUBLIC_API_URL}uploads/products/${item.image[0].photo}`}
                      />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="bg-white mt-12 h-screen">
            <div className="">
              <h1 className="font-bold text-3xl text-black">All Product</h1>
              <p className="text-gray-500 font-medium">Find your favorite product</p>
            </div>
            <div
              className="w-content bg-secondary grid-cols-2
                     grid-flow-row gap-4 auto-rows-auto"
            >
              <div
                className="md:grid grid-cols-5
                     grid-flow-row gap-4 auto-rows-auto md:h-[78vh] "
              >
                {getPopular.isLoading ? (
                  <ContentLoader />
                ) : (
                  getPopular.data.map((item, index) => (
                    <div key={index}>
                      <CardProducts
                        nameProduct={`${item.product.product_name}`}
                        price={`$ ${item.product.price}`}
                        user={`${item.store[0].store_name}`}
                        onClick={() => onDetail(item.product.id)}
                        img={`${process.env.NEXT_PUBLIC_API_URL}uploads/products/${item.image[0].photo}`}
                      />
                    </div>
                  ))
                )}
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
