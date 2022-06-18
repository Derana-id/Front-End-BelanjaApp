/* eslint-disable radix */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Code, List, Instagram } from 'react-content-loader';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import jas from '../../assets/img/jas.jpg';
// import { getMyCart } from '../../redux/actions/cart';
import { getMyTransaction } from '../../redux/actions/transaction';
import { getMyAddress, createAddress } from '../../redux/actions/address';
import { toastify } from '../../utils/toastify';
import AddAddress from '../../components/modals/add-address';
import CardCheckout from '../../components/card/card-checkout';
import CardTotalPrice from '../../components/card/card-total-price';
import ModalsPayment from '../../components/modals/modals-payment';
// import { getMyTransaction } from '../../redux/actions/transaction';

const Checkout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = Cookies.get('token');
  const myAddress = useSelector(state => state.myAddress);
  const myTransaction = useSelector(state => state.myTransaction);
  const [isPayment, setIsPayment] = useState(false);
  const [formAddress, setFormAddress] = useState({
    label: '',
    recipientName: '',
    recipientPhone: '',
    address: '',
    postalCode: '',
    city: '',
    isPrimary: 0
  });
  const [formTransaction, setFormTransaction] = useState({
    label: '',
    recipientName: '',
    recipientPhone: '',
    address: '',
    postalCode: '',
    city: '',
    is_primary: 0
  });
  const [payment, setPayment] = useState(3);

  const editAddress = item => {
    if (item) {
      setFormAddress({
        label: item.label,
        recipientName: item.recipient_name,
        recipent_name: item.recipient_phone,
        address: item.address,
        postalCode: item.postal_code,
        city: item.city,
        isPrimary: item.is_primary
      });
    }
  };

  const AddNewAddress = e => {
    e.preventDefault();
    if (
      !formAddress.label ||
      !formAddress.recipientName ||
      !formAddress.recipientPhone ||
      !formAddress.address ||
      !formAddress.postalCode ||
      !formAddress.city
    ) {
      Swal.fire('Failed!', 'All field must be filled', 'warning');
    } else {
      createAddress(formAddress)
        .then(() => {})
        .catch(err => {
          if (err.response.data.code === 422) {
            const { error } = err.response.data;
            error.map(item => toastify(item, 'error'));
          } else {
            Swal.fire({
              title: 'Error!',
              text: err.response.data.message,
              icon: 'error'
            });
          }
        });
    }
  };

  console.log(myTransaction);

  useEffect(() => {
    dispatch(getMyAddress());
    dispatch(getMyTransaction());
  }, []);

  return (
    <div>
      <Head>
        <title>Blanja | Checkout</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="p-6 pt-16 bg-white md:p-28">
        <h1 className="mt-8 text-3xl font-extrabold text-black">Checkout</h1>

        <div className="md:flex">
          <div className="flex-auto md:w-2/5">
            <p className="mb-2 font-semibold">Shipping Address</p>
            {myAddress.isLoading ? (
              <Code />
            ) : myAddress.error === 'Addres Not Found' ? (
              <button>Add New Address</button>
            ) : myAddress.isError ? (
              <div>{myAddress.error}</div>
            ) : myAddress.data.length > 0 ? (
              myAddress.data.map((item, index) =>
                item.is_primary ? (
                  <div className="p-6 bg-white rounded-lg shadow-lg" key={index}>
                    <p className="text-lg font-bold text-black">{item.recipient_name}</p>
                    <p className="mt-2">
                      {`[${item.label}] ${item.address},  ${item.city}, ${item.postal_code}, (HP: ${item.recipient_phone})`}
                    </p>
                    <div className="mt-5">
                      <AddAddress myAddress={myAddress} />
                    </div>
                  </div>
                ) : (
                  <></>
                )
              )
            ) : (
              <button>Add New Address</button>
            )}
            {myTransaction.isLoading ? (
              <List />
            ) : myTransaction.error === 'Not Found' ? (
              <div>Product Not Found</div>
            ) : myTransaction.isError ? (
              <div>{myTransaction.error}</div>
            ) : myTransaction.data.length > 0 ? (
              myTransaction.data.map((item, index) => (
                <div key={index}>
                  <CardCheckout
                    image={`https://drive.google.com/uc?export=view&id=${item.image[0].photo}`}
                    productName={item.product.product_name}
                    store="Zalora Cloth"
                    price={new Intl.NumberFormat('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                      minimumFractionDigits: 0
                    }).format(parseInt(item.product.price))}
                  />
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
          <div className="flex-1 mt-4 md:mt-0 md:w-32 md:ml-8">
            {myTransaction.isLoading ? (
              <Instagram />
            ) : (
              <></>
              // <CardTotalPrice
              //   order={new Intl.NumberFormat('id-ID', {
              //     style: 'currency',
              //     currency: 'IDR',
              //     minimumFractionDigits: 0
              //   }).format(parseInt(myTransaction.data[0].product.price) * 1)}
              //   delivery="$ 5.0"
              //   totalPrice="$ 45.0"
              //   onClick={() => setIsPayment(true)}
              // />
            )}
          </div>
        </div>
      </div>
      {isPayment ? <ModalsPayment onClick={() => setIsPayment(false)} /> : null}
    </div>
  );
};

Checkout.layouts = 'MainLayout';
export default Checkout;
