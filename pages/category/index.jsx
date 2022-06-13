import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import CardProducts from '../../components/card/card-products';
import { getProducts } from '../../redux/actions/products';

const Category = () => {
  const router = useRouter();
  const { query } = router.query;
  const dispatch = useDispatch();

  // console.log(query);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const getAll = useSelector(state => {
    return state.getAllProducts;
  });

  // console.log(getAll.data);
  return (
    <div>
      <Head>
        <title>Blanja | Category</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="p-28 bg-white">
        <div>
          <ul className="flex text-gray tex-sm w-56 justify-between">
            <li>Home</li>
            <li>{'>'} </li>
            <li>category</li>
            <li>{'>'} </li>
            <li>T-Shirt</li>
          </ul>
        </div>

        <h1 className="mt-8 text-black text-3xl font-extrabold">T-Shirt</h1>
        <div
          className="w-content bg-secondary grid-cols-2
                     grid-flow-row gap-4 auto-rows-auto"
        >
          <div
            className="grid grid-cols-5
                   grid-flow-row gap-4 auto-rows-auto"
          >
            {getAll.isLoading ? null : getAll.data.map((item, index) => (
              <>
                {item.category[0].category_name === query ? (
                  <CardProducts
                    key={index}
                    productName={`${item.product.product_name}`}
                    nameProduct={`${item.product.product_name}`}
                    price={`$ ${item.product.price}`}
                    user={`${item.store[0].store_name}`}
                    img={`${process.env.NEXT_PUBLIC_API_URL}uploads/products/${item.image[0].photo}`}
                  />
                ) : (null)}
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
