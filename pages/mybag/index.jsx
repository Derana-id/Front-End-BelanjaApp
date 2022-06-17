/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import ContentLoader from 'react-content-loader';
import Swal from 'sweetalert2';
import CardCart from '../../components/card/card-cart';
import ButtonWarning from '../../components/Button/button-warning';
import Checklist from '../../components/Input/checklist';
import { getMyCart, deleteCart, deleteCartUser, updateCart } from '../../redux/actions/cart';
import { toastify } from '../../utils/toastify';
import { sweetAlert } from '../../utils/sweetalert';

const MyBag = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const myCart = useSelector(state => state.myCart);
  const [total, setTotal] = useState(0);

  // console.log(myCart);

  useEffect(() => {
    dispatch(getMyCart(router));
  }, []);

  useEffect(() => {
    if (myCart) {
      const getTotal = myCart.data.map(item => {
        const price = Number(item.product[0].price * item.cart.qty);
        return price;
      });

      let sum = 0;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < getTotal.length; i++) {
        sum += getTotal[i];
      }
      setTotal(Intl.NumberFormat('en-US').format(sum));
    }
  }, [myCart]);

  const handleDelete = (e, id) => {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: 'Are you sure you want to delete the data ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, I Sure!'
    }).then(async confirm => {
      if (confirm.isConfirmed) {
        try {
          const res = await deleteCart(id);
          sweetAlert(res.message);
          window.location.reload();
        } catch (err) {
          if (err.response.data.code === 422) {
            const { error } = err.response.data;
            error.map(item => toastify(item, 'error'));
          } else {
            sweetAlert(err.response.data.message, 'error');
          }
        }
      }
    });
  };

  const handleDeleteUser = e => {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: 'Are you sure you want to delete the data ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, I Sure!'
    }).then(async confirm => {
      if (confirm.isConfirmed) {
        try {
          const res = await deleteCartUser();
          sweetAlert(res.message);
          window.location.reload();
        } catch (err) {
          if (err.response.data.code === 422) {
            const { error } = err.response.data;
            error.map(item => toastify(item, 'error'));
          } else {
            sweetAlert(err.response.data.message, 'error');
          }
        }
      }
    });
  };

  const valueAction = (e, id, productId, amount, stock) => {
    const data = {
      id,
      product_id: productId,
      qty: e
    };
    if (amount === 1 && e === -1) {
      alert('sure?');
    } else if (e === 1 && amount >= 10) {
      alert('fre');
    } else {
      updateCart(data)
        .then(res => {
          console.log(res);
          dispatch(getMyCart(router));
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <Head>
        <title>Blanja | My Bag</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="md:p-28 p-6 pt-28 bg-white">
        <h1 className="mt-8 text-black text-3xl font-extrabold">My Bag</h1>
        <div className="md:flex pt-5 md:pt-0">
          <div className="md:flex-auto md:w-2/5">
            <div className="bg-white p-6 rounded-md shadow-lg">
              <div className="flex items-cente justify-between">
                <div className="flex">
                  <Checklist onChange={e => handleDeleteUser(e)} />
                  <p className="text-black font-medium">Select all items</p>
                  <p className="text-gray ml-2">(2 items selected)</p>
                </div>
                <button className="flex text-primary font-semibold">Delete</button>
              </div>
            </div>
            {myCart.isLoading ? (
              <ContentLoader />
            ) : myCart.isError ? (
              <div className="w-full h-full flex justify-center items-center">
                <h1 className="text-3xl font-bold text-gray-light">Data not found</h1>
              </div>
            ) : (
              myCart.data.map((item, i) => (
                <div key={i}>
                  <CardCart
                    // image={`${
                    //   item.image[0].photo
                    //     ? `https://drive.google.com/uc?export=view&id=${item.image[0].photo}`
                    //     : `https://drive.google.com/uc?export=view&id=
                    //     default.png`
                    // }`}
                    onChange={e => handleDelete(e, item.cart.id)}
                    productName={item.product[0].product_name}
                    store={item.store[0].store_name}
                    price={`RP. ${item.product[0].price * item.cart.qty}`}
                    value={item.cart.qty}
                    onPlus={() =>
                      valueAction(
                        item.cart.qty + 1,
                        item.cart.id,
                        item.cart.product_id,
                        item.cart.qty,
                        item.product.stock
                      )
                    }
                    onMin={() =>
                      valueAction(
                        item.cart.qty - 1,
                        item.cart.id,
                        item.cart.product_id,
                        item.cart.qty,
                        item.product.stock
                      )
                    }
                  />
                </div>
              ))
            )}
          </div>
          <div className="md:flex-1 md:w-32 md:ml-8 mt-10 md:mt-0">
            <div className="bg-white w-full rounded-md shadow-lg p-5">
              <p className="text-black font-bold">Shopping summary</p>
              <div className="flex justify-between mt-3">
                <p className="text-gray text-md">Total Price</p>
                <p className="font-bold text-black text-lg">$ {total}</p>
              </div>
              <div className="mt-8">
                <ButtonWarning action="Buy" onClick={() => alert('Hallo')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MyBag.layouts = 'MainLayout';

export default MyBag;
