import React from 'react';
import Head from 'next/head';
import FormAddProduct from '../../components/form/form-addProduct';
import RadioInput from '../../components/Input/radio';
import ButtonSuccess from '../../components/button/button-success';
import ButtonWarning from '../../components/button/button-warning';

const SellingProduct = () => {
  return (
    <div>
      <Head>
        <title>Blanja | Selling Product</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="p-28 bg-white">
        <div className="flex">
          <div className="flex w-1/5 bg-primary">02</div>
          <div className="flex-1 w-32 bg-special-success p-20 ">
            <div className="bg-white shadow-lg relative py-5 rounded-md">
              <h5 className="text-black relative ml-10 text-lg font-bold">Inventory</h5>
              <hr className="text-gray mt-3" />
              <div className="ml-10">
                <FormAddProduct title="Name of goods" id="name" onChange />
              </div>
            </div>

            <div className="bg-white shadow-lg relative py-5 rounded-md mt-10">
              <h5 className="text-black relative ml-10 text-lg font-bold">Item details</h5>
              <hr className="text-gray mt-3" />
              <div className="flex flex-col ml-10">
                <FormAddProduct title="Unit price" id="price" />
                <FormAddProduct title="Stock" id="stock" />
                <p className="text-gray mt-5 mb-2">Condition</p>
                <div className="flex">
                  <RadioInput id="new" name="condition" title="Baru" value="baru" />
                  <RadioInput id="old" name="condition" title="Bekas" value="bekas" />
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg relative py-5 rounded-md mt-10">
              <h5 className="text-black relative ml-10 text-lg font-bold">Photo of goods</h5>
              <hr className="text-gray mt-3" />
              <div className="border-2 border-dashed border-gray opacity-60 m-6 p-7 flex flex-col justify-center">
                <div className="h-80">
                  <input type="file" />
                </div>
                <hr className="text-gray w-full" />
                <div className="flex justify-center mt-5">
                  <ButtonSuccess action="Upload Foto" />
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg relative py-5 rounded-md mt-10">
              <h5 className="text-black relative ml-10 text-lg font-bold">Description</h5>
              <hr className="text-gray mt-3" />
              <div className="border-2 border-solid border-gray opacity-60 m-6 flex flex-col justify-center rounded">
                <textarea className="border-solid border-gray border-t-2 border-t-gray max-h-xl min-h-max focus:outline-none p-5 mt-10" />
              </div>
            </div>
            <div className="flex justify-end mt-5">
              <div className="w-28">
                <ButtonWarning action="Jual" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SellingProduct.layouts = 'SecondLayout';
export default SellingProduct;
