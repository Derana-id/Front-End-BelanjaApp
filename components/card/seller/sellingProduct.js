/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
// import box from '../../../assets/icons/box.png';
import FormAddProduct from '../../form/form-addProduct';
import RadioInput from '../../Input/radio';
import ButtonSuccess from '../../Button/button-success';
import ButtonWarning from '../../Button/button-warning';
import CardForm from '../card-form';
import { createProductStore, getAllBrand, getAllCategory } from '../../../redux/actions/storeProfile';
import FormAddBrand from '../../form/form-brand';
import FormAddCategory from '../../form/form-category';

export default function sellingProduct() {
  // integrasi
  const dispatch = useDispatch();

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
    product_name: '',
    brand_id: '',
    price: '',
    stock: '',
    description: '',
    is_new: '',
    product_color: [],
    photo: [],
    product_size: []
  });

  const [images, setImages] = useState([]);

  const fileSelectedHandler = (e) => {
    setImages([...images, e.target.files[0]]);
    // setForm({ ...form, photo: e.target.files[0] });
  };

  // console.log(images);

  // Image
  // const addImage = () => {
  //   setForm({
  //     ...form,
  //     photo: [
  //       ...form.photo,
  //     ]
  //   });
  // };

  // const handleInputImage = (e, index) => {
  //   const newImage = form.photo.map((item, i) => {
  //     if (i === index) {
  //       return {
  //         ...item,
  //         e
  //       };
  //     }
  //     return item;
  //   });

  //   setForm({
  //     ...form,
  //     photo: newImage,
  //   });
  //   console.log(form.photo);
  // };

  // const deleteImage = (index) => {
  //   const newImage = form.photo.filter((item, i) => {
  //     if (i !== index) {
  //       return item;
  //     }
  //   });
  //   setForm({
  //     ...form,
  //     photo: newImage,
  //   });
  // };

  // Color
  const addIColor = () => {
    setForm({
      ...form,
      product_color: [
        ...form.product_color,
        {
          color_name: '',
          color_value: ''
        }
      ]
    });
  };
  const handleInputColor = (e, index) => {
    const newColor = form.product_color.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          [e.target.id]: e.target.value,
        };
      }
      return item;
    });

    setForm({
      ...form,
      product_color: newColor,
    });
  };

  // Size;
  const addSize = () => {
    setForm({
      ...form,
      product_size: [
        ...form.product_size,
        {
          size: ''
        }
      ]
    });
  };
  const handleInputSize = (e, index) => {
    const newSize = form.product_size.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          [e.target.id]: e.target.value,
        };
      }
      return item;
    });

    setForm({
      ...form,
      product_size: newSize,
    });
  };

  const createProduct = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('category_id', form.category_id);
    formData.append('product_name', form.product_name);
    formData.append('brand_id', form.brand_id);
    formData.append('price', form.price);
    formData.append('stock', form.stock);
    formData.append('description', form.description);
    formData.append('is_new', form.is_new);
    // form.product_color.map((item) => {
    //   formData.append('color_name', item.color_name);
    //   formData.append('color_value', item.color_value);
    // });
    // form.product_size.map((item) => {
    //   formData.append('size', item.size);
    // });
    // formData.append('photo', images);

    createProductStore(formData)
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
              <div className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row">
                <FormAddProduct onChange={(e) => setForm({ ...form, product_name: e.target.value })} title="Name of goods" id="product_name" />
                {allBrand.isLoading ? (
                  <div>Loading</div>
                ) : (
                  <FormAddBrand onChange={(e) => setForm({ ...form, brand_id: e.target.value })} brand={allBrand} title="Brand" id="category" />
                )}
              </div>
              <div className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row">
                {allCategory.isLoading ? (
                  <div>Loading</div>
                ) : (
                  <FormAddCategory onChange={(e) => setForm({ ...form, category_id: e.target.value })} category={allCategory} title="Category" id="brand" />
                )}
                <FormAddProduct onChange={(e) => setForm({ ...form, price: e.target.value })} title="Unit price" id="price" />
              </div>
              <div className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row">
                <FormAddProduct onChange={(e) => setForm({ ...form, stock: e.target.value })} title="Stock" id="stock" />
                <div className="flex flex-col">
                  <p className="text-gray mt-5 mb-2">Condition</p>
                  <div className="flex">
                    <RadioInput onChange={(e) => setForm({ ...form, is_new: e.target.value })} id="new" name="is_new" title="Baru" value="1" />
                    <RadioInput onChange={(e) => setForm({ ...form, is_new: e.target.value })} id="old" name="is_new" title="Bekas" value="0" />
                  </div>
                </div>
              </div>

            </div>
          </div>
          {/* color */}
          <CardForm>
            <h5 className="text-black relative ml-10 text-lg font-bold">Product Color</h5>
            <hr className="text-gray mt-3" />
            <div className="flex flex-col">
              {form.product_color.map((item, index) => (
                <div key={index}>
                  <FormAddProduct onChange={(e) => handleInputColor(e, index)} value={item.color_name} title="Color Name" id="color_name" />
                  <div className="flex flex-col mt-5">
                    <label className="text-gray max-w-[150px] text-sm mb-1 cursor-pointer"> Color</label>
                    <input
                      className="w-52 sm:w-52 md:w-80 lg:w-80 xl:w-80 border-gray border-2 border-solid h-10 rounded focus:outline-none px-3"
                      type="color"
                      id="color_value"
                      value={item.color_value}
                      onChange={(e) => handleInputColor(e, index)}
                    />
                  </div>
                  <hr className="text-gray w-full mt-8" />
                </div>
              ))}
              {/* <hr className="text-gray w-full mt-8" /> */}
              <div className="flex justify-center mt-5">
                <ButtonSuccess onClick={addIColor} action="Add Color" className="p-[5px]" />
              </div>
            </div>
          </CardForm>
          {/* size */}
          <CardForm>
            <h5 className="text-black relative ml-10 text-lg font-bold">Product Size</h5>
            <hr className="text-gray mt-3" />
            <div className="flex flex-col">
              {form.product_size.map((item, index) => (
                <div key={index}>
                  <FormAddProduct
                    onChange={(e) => handleInputSize(e, index)}
                    title="Size"
                    id="size"
                    value={item.size}
                    type="number"
                  />
                  <hr className="text-gray w-full mt-8" />
                </div>
              ))}

              <div className="flex justify-center mt-5">
                <ButtonSuccess onClick={addSize} action="Add Foto" className="p-[5px]" />
              </div>
            </div>
          </CardForm>
          {/* photo */}
          <CardForm>
            <h5 className="text-black relative ml-10 text-lg font-bold">Photo</h5>
            <hr className="text-gray mt-3" />
            <div className="border-2 border-dashed border-gray opacity-60 m-6 p-7 mx-10 flex flex-col justify-center">
              {/* <div className="">
                {form.photo.map((item, index) => (
                  <div className="flex justify-center items-center">
                    <div key={index} className="flex flex-row justify-between items-center relative">
                      <label
                        className="bg-gray-light w-40 h-40 cursor-pointer flex items-center justify-center  rounded"
                        htmlFor="id"
                      >
                        <Image src={box} />
                      </label>
                      <button className="absolute font-bold -top-2 -right-2 text-primary">X</button>

                      <input type="file" multiple="multiple" onChange={(e) => handleInputImage(e.target.files[0], index)} id="id" hidden />

                    </div>
                  </div>
                ))}
                <hr className="text-gray w-full mt-8" />
                <div className="flex justify-center mt-5">
                  <ButtonSuccess onClick={addImage} action="Add Foto" className="p-[5px]" />
                </div>
              </div> */}
              <input type="file" multiple="multiple" onChange={(e) => fileSelectedHandler(e)} />
            </div>
          </CardForm>
          {/* description */}
          <CardForm>
            <h5 className="text-black relative ml-10 text-lg font-bold">Description</h5>
            <hr className="text-gray mt-3" />
            <div className="opacity-60 m-6 mx-10 flex flex-col justify-center rounded">
              <textarea onChange={(e) => setForm({ ...form, description: e.target.value })} className="border-solid border-2 rounded border-gray max-h-60 min-h-[15rem] focus:outline-none p-5" />
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
