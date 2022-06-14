/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import box from '../../../assets/icons/box.png';
import FormAddProduct from '../../form/form-addProduct';
import RadioInput from '../../Input/radio';
import ButtonSuccess from '../../Button/button-success';
import ButtonWarning from '../../Button/button-warning';
import CardForm from '../card-form';
import { createProductStore, getAllBrand, getAllCategory } from '../../../redux/actions/storeProfile';
import FormAddBrand from '../../form/form-brand';
import FormAddCategory from '../../form/form-category';

export default function sellingProduct() {
  const [images, setImages] = useState([]);
  const [imageURLS, setImageURLS] = useState([]);

  const uploadImageToClient = event => {
    if (event.target.files && event.target.files[0]) {
      setImages(imageList => [...imageList, event.target.files[0]]);
      setImageURLS(urlList => [...urlList, URL.createObjectURL(event.target.files[0])]);
    }
  };

  // integrasi
  const dispatch = useDispatch();
  const token = Cookies.get('token');

  const allCategory = useSelector((state) => {
    return state.allCategory;
  });

  const allBrand = useSelector((state) => {
    return state.allBrand;
  });

  useEffect(() => {
    dispatch(getAllBrand());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const [form, setForm] = useState({
    category_id: '',
    productName: '',
    brand_id: '',
    price: '',
    stock: '',
    store_description: '',
    product_color: '',
    condition: '',
    product_image: '',
    product_size: ''
  });

  const createProduct = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('category_id', form.category_id);
    formData.append('product_name', form.productName);
    formData.append('brand_id', form.brand_id);
    formData.append('price', form.price);
    formData.append('stock', form.stock);
    formData.append('description', form.store_description);
    formData.append('product_color', form.product_color);
    formData.append('is_new', form.condition);
    formData.append('product_image', form.product_image);
    formData.append('product_size', form.product_size);

    createProductStore(formData, token)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(form);
  return (
    <div>
      <form onSubmit={(e) => createProduct(e)}>
        <div className="flex flex-col bg-[#F5F5F5] rounded w-3/4 h-auto mt-[120px] mx-12">
          <div className="bg-white shadow-lg relative my-5 py-5 pb-6 rounded-md">
            <h5 className="text-black relative ml-10 text-l font-bold">Inventory</h5>
            <hr className="text-gray mt-3" />
            <div className="ml-10">
              <FormAddProduct onChange={(e) => setForm({ ...form, productName: e.target.value })} title="Name of goods" id="name" />
              {allBrand.isLoading ? (
                <div>Loading</div>
              ) : (
                <FormAddBrand onChange={(e) => setForm({ ...form, brand_id: e.target.value })} brand={allBrand} title="Brand" id="category" />
              )}

              {allCategory.isLoading ? (
                <div>Loading</div>
              ) : (
                <FormAddCategory onChange={(e) => setForm({ ...form, category_id: e.target.value })} category={allCategory} title="Category" id="brand" />
              )}

            </div>
          </div>
          <CardForm>
            <h5 className="text-black relative ml-10 text-lg font-bold">Item details</h5>
            <hr className="text-gray mt-3" />
            <div className="flex flex-col ml-10">
              <FormAddProduct onChange={(e) => setForm({ ...form, price: e.target.value })} title="Unit price" id="price" />
              <FormAddProduct onChange={(e) => setForm({ ...form, stock: e.target.value })} title="Stock" id="stock" />
              <FormAddProduct onChange={(e) => setForm({ ...form, product_color: e.target.value })} title="Color" id="color" />
              <FormAddProduct onChange={(e) => setForm({ ...form, product_size: e.target.value })} title="Size" id="name" />
              <p className="text-gray mt-5 mb-2">Condition</p>
              <div className="flex">
                <RadioInput onChange={(e) => setForm({ ...form, condition: e.target.value })} id="new" name="condition" title="Baru" value="baru" />
                <RadioInput onChange={(e) => setForm({ ...form, condition: e.target.value })} id="old" name="condition" title="Bekas" value="bekas" />
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
              <textarea onChange={(e) => setForm({ ...form, store_description: e.target.value })} className="border-solid border-2 rounded border-gray max-h-60 min-h-[15rem] focus:outline-none p-5" />
            </div>
          </CardForm>
          <div className="flex justify-end mt-5">
            <div className="w-28">
              <ButtonWarning type="submit" action="Jual" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
