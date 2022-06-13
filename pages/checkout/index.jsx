import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import ContentLoader from 'react-content-loader';
import AddAddress from '../../components/modals/add-address';
import CardCheckout from '../../components/card/card-checkout';
import jas from '../../assets/img/jas.jpg';
import CardTotalPrice from '../../components/card/card-total-price';
import ModalsPayment from '../../components/modals/modals-payment';
import { getMyTransaction } from '../../redux/actions/transaction';

const Checkout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const myTransaction = useSelector(state => state.myTransaction);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isPayment, setIsPayment] = useState(false);

  return (
    <div>
      <Head>
        <title>Blanja | Checkout</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="p-6 pt-16 md:p-28 bg-white">
        <h1 className="mt-8 text-black text-3xl font-extrabold">Checkout</h1>

        <div className="md:flex">
          <div className="flex-auto md:w-2/5">
            <p className="mb-2 font-semibold">Shipping Address</p>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="font-bold text-black text-lg">Andreas Jane</p>
              <p className="mt-2">
                Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181
                [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181
              </p>
              <div className="mt-5">
                <AddAddress />
              </div>
            </div>
            <CardCheckout image={jas} productName="Men's formal suit - Black" store="Zalora Cloth" price="$ 20.0" />
            <CardCheckout image={jas} productName="Men's formal suit - Black" store="Zalora Cloth" price="$ 20.0" />
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
