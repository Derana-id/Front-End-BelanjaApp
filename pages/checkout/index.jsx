import React from 'react';
import Head from 'next/head';
import BtnAction from '../../components/button/button-choose';
import CardCheckout from '../../components/card/card-checkout';
import jas from '../../assets/img/jas.jpg';
import CardTotalPrice from '../../components/card/card-total-price';

const Checkout = () => {
  return (
    <div>
      <Head>
        <title>Blanja | Checkout</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="p-28 bg-white">
        <h1 className="mt-8 text-black text-3xl font-extrabold">Checkout</h1>

        <div className="flex ">
          <div className="flex-auto w-2/5">
            <p className="mb-2">Shipping Adress</p>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="font-bold text-black text-lg">Andreas Jane</p>
              <p className="mt-2">
                Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181
                [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181
              </p>
              <div className="mt-5">
                <BtnAction action="Choose another address" />
              </div>
            </div>
            <CardCheckout image={jas} productName="Men's formal suit - Black" store="Zalora Cloth" price="$ 20.0" />
            <CardCheckout image={jas} productName="Men's formal suit - Black" store="Zalora Cloth" price="$ 20.0" />
          </div>
          <div className="flex-1 w-32 ml-8">
            <CardTotalPrice order="$ 40.0" delivery="$ 5.0" totalPrice="$ 45.0" />
          </div>
        </div>
      </div>
    </div>
  );
};

Checkout.layouts = 'MainLayout';
export default Checkout;
