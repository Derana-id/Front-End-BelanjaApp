import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
// import { Code } from 'react-content-loader';
// import Cookies from 'js-cookie';
import itemImage from '../../public/images/gez-xavier-mansfield-b34E1vh1tYU-unsplash1.jpg'
import { getMyCart } from '../../redux/actions/cart';
import { getAddress } from '../../redux/actions/userProfile';
import AddAddress from '../../components/modals/add-address';
import CardCheckout from '../../components/card/card-checkout';
import CardTotalPrice from '../../components/card/card-total-price';
import ModalsPayment from '../../components/modals/modals-payment';
// import { getMyTransaction } from '../../redux/actions/transaction';

const Checkout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  // const token = Cookies.get('token');
  const myAddress = useSelector(state => state.myAddress);
  // const myCart = useSelector(state => state.myCart);
  const [isPayment, setIsPayment] = useState(false);
  // const [formAddress, setFormAddress] = useState({
  //   label: '',
  //   recipientName: '',
  //   recipientPhone: '',
  //   address: '',
  //   postalCode: '',
  //   city: '',
  //   is_primary: 0
  // });
  // const [formTransaction, setFormTransaction] = useState({
  //   label: '',
  //   recipientName: '',
  //   recipientPhone: '',
  //   address: '',
  //   postalCode: '',
  //   city: '',
  //   is_primary: 0
  // });
  // const [payment, setPayment] = useState(3);

  // const editAddress = item => {
  //   if (item) {
  //     setFormAddress({
  //       label: item.label,
  //       recipientName: item.recipient_name,
  //       recipent_name: item.recipient_phone,
  //       address: item.address,
  //       postalCode: item.postal_code,
  //       city: item.city,
  //       isPrimary: item.is_primary
  //     });
  //   }
  // };

  console.log(myAddress);

  useEffect(() => {
    dispatch(getAddress());
    dispatch(getMyCart(router));
  }, []);

  useEffect(() => {
    dispatch(getAddress());
  }, [dispatch]);

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
            <div className="p-6 bg-white rounded-lg shadow-lg">
              {myAddress.isLoading ? (
                <div>Loading</div>
              ) : (
                myAddress.data.map((items) => (
                  <>
                    {
                      items.is_primary === 1 ? (
                        <>
                          <p className="text-lg font-bold text-black">{items.recipient_name}</p>
                          <p className="mt-2">
                            {items.address} [{items.label}], {items.recipient_phone}, {items.city}, {items.postal_code}
                          </p>
                        </>
                      ) : null
                    }
                  </>
                ))
              )}
              <div className="mt-5">
                <AddAddress />
              </div>
            </div>
            <CardCheckout image={itemImage} productName="Men's formal suit - Black" store="Zalora Cloth" price="$ 20.0" />
            <CardCheckout image={itemImage} productName="Men's formal suit - Black" store="Zalora Cloth" price="$ 20.0" />
          </div>
          <div className="flex-1 mt-4 md:mt-0 md:w-32 md:ml-8">
            <CardTotalPrice order="$ 40.0" delivery="$ 5.0" totalPrice="$ 45.0" onClick={() => setIsPayment(true)} />
          </div>
        </div>
      </div>
      {isPayment ? <ModalsPayment onClick={() => setIsPayment(false)} /> : null}
    </div>
  );
};

Checkout.layouts = 'MainLayout';
export default Checkout;
