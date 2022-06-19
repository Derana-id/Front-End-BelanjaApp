/* eslint-disable array-callback-return */
/* eslint-disable radix */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Code, List, Instagram } from 'react-content-loader';
import Swal from 'sweetalert2';
import _ from 'lodash';
import { getMyTransaction, updatePayment } from '../../redux/actions/transaction';
import { getMyAddress, createAddress, editAddress, deleteAddress } from '../../redux/actions/address';
import { toastify } from '../../utils/toastify';
import AddAddress from '../../components/modals/add-address';
import CardCheckout from '../../components/card/card-checkout';
import CardTotalPrice from '../../components/card/card-total-price';
import ModalsPayment from '../../components/modals/modals-payment';

const Checkout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
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
  const [payment, setPayment] = useState(0);

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
        .then(res => {
          Swal.fire('Success!', res.message, 'success');
          window.location.reload();
        })
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

  const EditAddress = (e, id) => {
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
      editAddress(formAddress, id)
        .then(res => {
          Swal.fire('Success!', res.message, 'success');
          window.location.reload();
        })
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

  const DeleteAddress = (e, id) => {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: 'Are you sure you want to restore the data ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, I Sure!'
    }).then(async confirm => {
      if (confirm.isConfirmed) {
        deleteAddress(id)
          .then(res => {
            Swal.fire('Success!', res.message, 'success');
            window.location.reload();
          })
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
    });
  };

  const order = [];
  if (myTransaction.data) {
    myTransaction.data.map(item => {
      order.push(item.transactionDetail.price);
    });
  }
  const setOrder = _.sum(order);

  const handlePayment = e => {
    e.preventDefault();
    if (!payment) {
      Swal.fire('Failed!', 'Type payment must be filled', 'warning');
    } else {
      myTransaction.data.map(item => {
        updatePayment(
          {
            paymentMethod: payment
          },
          item.transaction.id
        )
          .then(res => {
            Swal.fire('Succcess!', res.message, 'success');
            router.push('/profile/customer');
          })
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
      });
    }
  };

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
                  <div className="bg-white p-6 rounded-lg shadow-lg" key={index}>
                    <p className="font-bold text-black text-lg">{item.recipient_name}</p>
                    <p className="mt-2">
                      {`[${item.label}] ${item.address},  ${item.city}, ${item.postal_code}, (HP: ${item.recipient_phone})`}
                    </p>
                    <div className="mt-5">
                      <AddAddress
                        myAddress={myAddress}
                        formAddress={formAddress}
                        setFormAddress={setFormAddress}
                        AddNewAddress={AddNewAddress}
                        EditAddress={EditAddress}
                        DeleteAddress={DeleteAddress}
                      />
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
                    store={item.store[0].store_name}
                    price={new Intl.NumberFormat('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                      minimumFractionDigits: 0
                    }).format(parseInt(item.transactionDetail.price))}
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
              <CardTotalPrice
                order={new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  minimumFractionDigits: 0
                }).format(setOrder)}
                delivery={new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  minimumFractionDigits: 0
                }).format(5000)}
                totalPrice={new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  minimumFractionDigits: 0
                }).format(5000 + setOrder)}
                onClick={() => setIsPayment(true)}
              />
            )}
          </div>
        </div>
      </div>
      {isPayment ? (
        <ModalsPayment
          onClick={() => setIsPayment(false)}
          setOrder={setOrder}
          handlePayment={handlePayment}
          setPayment={setPayment}
        />
      ) : null}
    </div>
  );
};

Checkout.layouts = 'MainLayout';

export default Checkout;
