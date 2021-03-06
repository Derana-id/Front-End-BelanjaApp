/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import CardProducts from '../../components/card/card-products';
import { getProducts, getDetailProduct } from '../../redux/actions/products';

const Category = () => {
  const router = useRouter();
  const { query } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const getAll = useSelector(state => {
    return state.getAllProducts;
  });

  const onDetail = e => {
    dispatch(getDetailProduct(e));
    router.push(`/products/${e}`);
  };

  return (
    <div>
      <Head>
        <title>Blanja | Category</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="p-28 bg-white">
        <div>
          <ul className="flex text-gray tex-sm w-56 font-bold justify-between">
            <Link href="/">
              <li className="cursor-pointer">Home</li>
            </Link>
            <li>{'>'} </li>
            <Link href="/category">
              <li className="cursor-pointer">category</li>
            </Link>
            <li>{'>'} </li>
            <li>{query}</li>
          </ul>
        </div>

        <h1 className="mt-8 text-black text-3xl font-extrabold">{query}</h1>
        <div
          className="w-content bg-secondary grid-cols-2
                     grid-flow-row gap-4 auto-rows-auto"
        >
          <div
            className="grid grid-cols-5
                   grid-flow-row gap-4 auto-rows-auto"
          >
            {getAll.isLoading
              ? null
              : getAll.data.map((item, index) => (
                  <>
                    {item.category.length > 0 ? (
                      item.category[0].category_name.toLowerCase() === query.toLowerCase() ? (
                        <CardProducts
                          key={index}
                          productName={`${item.product.product_name}`}
                          nameProduct={`${item.product.product_name}`}
                          price={`$ ${item.product.price}`}
                          user={`${item.store[0].store_name}`}
                          onClick={() => onDetail(item.product.id)}
                          // img={`${process.env.NEXT_PUBLIC_API_URL}uploads/products/${item.image[0].photo}`}
                          img={`${process.env.NEXT_PUBLIC_API_URL}uploads/products/default.png`}
                        />
                      ) : null
                    ) : null}
                  </>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Category.layouts = 'MainLayout';

export default Category;
