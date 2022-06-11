import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import box from '../../assets/icons/box.png';
import FormAddProduct from '../../components/form/form-addProduct';
import RadioInput from '../../components/Input/radio';
import ButtonSuccess from '../../components/button/button-success';
import ButtonWarning from '../../components/button/button-warning';
import CardForm from '../../components/card/card-form';

const SellingProduct = () => {
  const [images, setImages] = useState([]);
  const [imageURLS, setImageURLS] = useState([]);
  const [tag, setTag] = useState(null);

  const uploadImageToClient = event => {
    if (event.target.files && event.target.files[0]) {
      setImages(imageList => [...imageList, event.target.files[0]]);
      setImageURLS(urlList => [...urlList, URL.createObjectURL(event.target.files[0])]);
    }
  };

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
          <div className="flex-1 w-32 bg-special-success p-12 ">
            <div className="bg-white shadow-lg relative py-5 pb-6 rounded-md">
              <h5 className="text-black relative ml-10 text-l font-bold">Inventory</h5>
              <hr className="text-gray mt-3" />
              <div className="ml-10">
                <FormAddProduct title="Name of goods" id="name" onChange="" />
              </div>
            </div>

            <CardForm>
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
            </CardForm>

            <CardForm>
              <h5 className="text-black relative ml-10 text-lg font-bold">Photo of goods</h5>
              <hr className="text-gray mt-3" />
              <div className="border-2 border-dashed border-gray opacity-60 m-6 p-7 mx-10 flex flex-col justify-center">
                <div className="">
                  <div className="flex justify-between items-center">
                    {images.length < 4 ? (
                      <label
                        className="bg-gray-light w-40 h-40 cursor-pointer flex items-center justify-center rounded"
                        htmlFor="id"
                      >
                        <Image src={box} />
                      </label>
                    ) : null}
                    <input type="file" onChange={uploadImageToClient} id="id" hidden />
                    {images.map((file, index) => {
                      return (
                        <div className="flex-end m-2">
                          <Image src={imageURLS[index]} width={150} height={150} className="z-9 object-cover" />
                        </div>
                      );
                    })}
                  </div>
                  <hr className="text-gray w-full mt-8" />
                  <div className="flex justify-center mt-5">
                    <ButtonSuccess action="Upload Foto" className="p-[5px]" />
                  </div>
                </div>
              </div>
            </CardForm>

            <CardForm>
              <h5 className="text-black relative ml-10 text-lg font-bold">Description</h5>
              <hr className="text-gray mt-3" />
              <div className="opacity-60 m-6 mx-10 flex flex-col justify-center rounded">
                <textarea className="border-solid border-2 rounded border-gray max-h-60 min-h-[15rem] focus:outline-none p-5" />
              </div>
            </CardForm>
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