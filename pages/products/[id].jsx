/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import Img from '../../components/img/Img';
import Start from '../../components/star/start';
import Color from '../../components/molecules/color';
import SpinnerAction from '../../components/molecules/spinner';
import FormValueNumber from '../../components/form/form-addvalue';
import ButtonSuccess from '../../components/Button/button-success';
import ButtonWarning from '../../components/Button/button-warning';
import FormInformation from '../../components/form/form-information';
import CardProducts from '../../components/card/card-products';
import { getDetailProduct, getPopularProducts } from '../../redux/actions/products';
import { addCart } from '../../redux/actions/cart';

const Products = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const [getColor, setColor] = useState('');
  const [getSize, setSize] = useState(0);
  const [getAmount, setAmount] = useState(0);

  useEffect(() => {
    dispatch(getDetailProduct(id));
    dispatch(getPopularProducts());
  }, []);

  const getPopular = useSelector(state => {
    return state.getPopular;
  });

  const getDetail = useSelector(state => {
    return state.getDetailProduct;
  });

  const onSize = e => {
    setSize(getSize + e);
  };

  const onBuy = async e => {
    const data = {
      product_id: e,
      qty: getAmount,
      color: getColor
    };

    addCart(data)
      .then(res => {
        Swal.fire({
          title: 'Success!',
          text: res.message,
          icon: 'success'
        });
      })
      .catch(err => {
        Swal.fire({
          title: 'Failed!',
          text: err.message,
          icon: 'error'
        });
      });
  };

  const onAmount = e => {
    setAmount(getAmount + e);
  };

  const onDetail = e => {
    dispatch(getDetailProduct(e));
    router.push(`/products/${e}`);
  };

  return (
    <div>
      <Head>
        <title>Blanja | Products</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="p-6 pt-28 md:p-28 bg-white">
        <div>
          <ul className="flex text-gray text-sm font-bold w-56 justify-between">
            <Link href="/">
              <li className="cursor-pointer">Home</li>
            </Link>
            <li>{'>'} </li>
            <Link href="/category">
              <li className="cursor-pointer">category</li>
            </Link>
            <li>{'>'} </li>
            {/* {getDetail.data.category.length > 0 ? ( */}
            <li className="cursor-pointer">
              {getDetail.data.category ? getDetail.data.category[0].category_name : 'null'}
            </li>
            {/* ) : null} */}
          </ul>
        </div>
        {getDetail.data.length >= 0 ? null : (
          <div>
            <div className="md:flex mt-12">
              <div
                className="md:w-2/5 bg-secondary grid-cols-2
                     grid-flow-row gap-4 auto-rows-auto"
              >
                <div
                  className="grid grid-cols-2
                     grid-flow-row gap-4 auto-rows-auto"
                >
                  <Img
                    src={
                      getDetail.data.image[0]
                        ? `${process.env.NEXT_PUBLIC_API_URL}uploads/products/${getDetail.data.image[0].photo}`
                        : `${process.env.NEXT_PUBLIC_API_URL}uploads/products/default.png`
                    }
                  />
                  <Img
                    src={
                      getDetail.data.image[1]
                        ? `${process.env.NEXT_PUBLIC_API_URL}uploads/products/${getDetail.data.image[0].photo}`
                        : `${process.env.NEXT_PUBLIC_API_URL}uploads/products/default.png`
                    }
                  />
                  <Img
                    src={
                      getDetail.data.image[2]
                        ? `${process.env.NEXT_PUBLIC_API_URL}uploads/products/${getDetail.data.image[0].photo}`
                        : `${process.env.NEXT_PUBLIC_API_URL}uploads/products/default.png`
                    }
                  />
                  <Img
                    src={
                      getDetail.data.image[2]
                        ? `${process.env.NEXT_PUBLIC_API_URL}uploads/products/${getDetail.data.image[0].photo}`
                        : `${process.env.NEXT_PUBLIC_API_URL}uploads/products/default.png`
                    }
                  />
                </div>
              </div>
              <div className="flex-auto md:w-3/5 bg-tertiary md:pl-9 md:pr-7 mt-5 md:mt-0">
                <div>
                  <h3 className="text-2xl font-bold">
                    {getDetail.data.category ? getDetail.data.product.product_name : null}
                  </h3>
                  {getDetail.data.category ? (
                    <p className="text-gray text-sm font-semibold">{getDetail.data.brand[0].brand_name}</p>
                  ) : null}

                  <Start valueReview="(10)" />
                </div>
                <div className="mt-5">
                  <p className="text-md text-gray font-semibold text-sm">price</p>
                  <h3 className="text-dark text-xl font-extrabold">
                    $ {getDetail.data.category ? getDetail.data.product.price : null}
                  </h3>
                </div>
                <div className="mt-5">
                  <p className="font-semibold text-md">Color</p>
                  <div className="flex w-44 p-1 justify-between">
                    {getDetail.data.color.map((item, index) => (
                      <div key={index}>
                        <Color color={`${item.color_name}`.toLowerCase()} onClick={() => setColor(item.color_name)} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between w-full md:w-72 mt-5">
                  <div className="ralative">
                    <p className="font-bold text-base">Size</p>
                    <div className=" flex w-28 items-center justify-between">
                      <SpinnerAction action="+" onClick={() => onSize(+1)} />
                      <FormValueNumber defaultValue={getSize} value={getSize} />
                      <SpinnerAction action="-" onClick={() => onSize(-1)} />
                    </div>
                  </div>
                  <div className="ralative">
                    <p className="font-bold text-base">Jumlah</p>
                    <div className="flex w-28 items-center justify-between">
                      <SpinnerAction action="+" onClick={() => onAmount(+1)} />
                      <FormValueNumber defaultValue={getDetail.data.product.stock} value={getAmount} />
                      <SpinnerAction action="-" onClick={() => onAmount(-1)} />
                    </div>
                  </div>
                </div>
                <div className="mt-8 md:mt-5 md:w-80">
                  <div className="flex justify-between mt-5">
                    <ButtonSuccess onClick={() => alert('hai')} action="Chat" />
                    <ButtonSuccess onClick={() => onBuy(getDetail.data.product.id)} action="Add bag" />
                  </div>
                  <div className="mt-5">
                    <ButtonWarning action="Buy Now" />
                  </div>
                </div>
              </div>
            </div>
            <FormInformation
              condition={getDetail.data.product.is_new === 1 ? 'New' : 'Old'}
              description={getDetail.data.product.description}
            />
          </div>
        )}

        <hr className="text-gray mt-7" />
        <h1 className="mt-8 text-black text-3xl font-extrabold">You can also like this</h1>
        <p className="text-gray">You’ve never seen it before!</p>
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
                      onClick={() => onDetail(item.product.id)}
                      img={`${process.env.NEXT_PUBLIC_API_URL}uploads/products/${item.image[0].photo}`}
                    />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Products.layouts = 'ThridLayout';
export default Products;
