/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';
import Drawer from 'react-modern-drawer';
// import CardStore from '../../components/card/seller/cardStore';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import JwtDecode from 'jwt-decode';
import Swal from 'sweetalert2';
import CardMyorder from '../../components/card/seller/cardMyorder';
import CardProduct from '../../components/card/seller/myProduct';
import SellingProduct from '../../components/card/seller/sellingProduct';
// import user from '../../assets/img/user.jpg';
import edit from '../../assets/icons/edit.svg';
import store from '../../assets/icons/store.svg';
import product from '../../assets/icons/product.svg';
import chart from '../../assets/icons/chart.svg';
import 'react-modern-drawer/dist/index.css';
import Input from '../../components/Input/input-profile';
// import user from '../../../assets/img/user.jpg';
import TextArea from '../../components/Input/input-textarea-profile';
import { getDetailStore, updateStore } from '../../redux/actions/storeProfile';

const Seller = () => {
  const [showNav, setShowNav] = useState();
  const [showNav1, setShowNav1] = useState();
  const [showNav2, setShowNav2] = useState();
  const [showSideBar, setFormShowSideBar] = useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState);
  };
  const onSetNav = () => {
    if (showNav === 1) {
      setShowNav(0);
    } else {
      setShowNav(1);
    }
  };
  const onSetNav2 = () => {
    if (showNav1 === 1) {
      setShowNav1(0);
    } else {
      setShowNav1(1);
    }
  };
  const onSetNav3 = () => {
    if (showNav2 === 1) {
      setShowNav2(0);
    } else {
      setShowNav2(1);
    }
  };

  const setCurrentShow = index => {
    setFormShowSideBar(index);
  };

  // integrasi
  const dispatch = useDispatch();
  const token = Cookies.get('token');
  let decoded = '';
  if (token) {
    decoded = JwtDecode(token);
  }

  const detailStore = useSelector(state => {
    return state.detailStore;
  });

  console.log(detailStore);

  const [form, setForm] = useState({
    store_name: '',
    email: '',
    store_phone: '',
    store_description: '',
    photo: ''
  });

  useEffect(() => {
    dispatch(getDetailStore(decoded.id));
  }, [dispatch]);

  useEffect(() => {
    if (detailStore.data[0]) {
      setForm({
        ...form,
        store_name: detailStore.data[0].store.store_name,
        email: detailStore.data[0].user.email,
        store_phone: detailStore.data[0].store.store_phone,
        store_description: detailStore.data[0].store.store_description,
        photo: detailStore.data[0].store.photo
      });
    }
  }, [detailStore]);

  const onEditStore = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('store_name', form.store_name);
    formData.append('email', form.email);
    formData.append('store_phone', form.store_phone);
    formData.append('store_description', form.store_description);
    formData.append('photo', form.photo);

    updateStore(formData, token)
      .then(res => {
        Swal.fire({
          title: 'success',
          text: res.message,
          icon: 'success'
        });
        dispatch(getDetailStore(decoded.id, token));
      })
      .catch(err => {
        console.log(err);
        // if (err.response.data.code === 422) {
        //   const { error } = err.response.data;
        //   error.map(item => toastify(item, 'error'));
        // } else {
        //   Swal.fire({
        //     title: 'Error!',
        //     text: err.response.data.message,
        //     icon: 'error'
        //   });
        // }
      });
  };
  return (
    <div>
      <Head>
        <title>Belanja | Profile Seller</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="flex grid-cols-2">
        <div className="w-0 sm:w-0 md:w-1/4 lg:w-1/4 xl:w-1/4">
          <div className="w-full flex mx-[25%] flex-col mt-[120px]">
            <div className="flex items-center">
              {detailStore.isLoading ? (<div>Laoding</div>)
                : (
                  <img
                    src={form.photo
                      ? `https://drive.google.com/uc?export=view&id=${form.photo}`
                      : `${process.env.NEXT_PUBLIC_API_URL}uploads/users/default.png`}
                    alt=""
                    width="100px"
                    height="100px"
                    className="rounded-[100%] mb-9"
                    onError={(e) => { e.target.src = `https://drive.google.com/uc?export=view&id=${detailStore.data[0].store.photo}`; }}
                  />
                )}
              <div className="flex flex-col ml-2">
                <label className="text-secondary text-sm float-right mt-1 ml-3 mb-2 font-semibold max-w-[120px] inline-block overflow-hidden text-ellipsis whitespace-nowrap">{ form.store_name}</label>
                <Image className="cursor-pointer hidden" width={25} height={25} src={edit} />
              </div>
            </div>
            {/* sidebar */}
            {showSideBar === 0 ? (
              <div className="flex flex-col justify-center mt-10">
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={store} />
                  </div>
                  <button onClick={onSetNav} className="ml-3 text-base cursor-pointer font-semibold">
                    Store
                  </button>
                </div>
                {showNav === 0 ? (
                  <div>
                    <button onClick={() => setCurrentShow(0)} className="text-base ml-14 font-semibold cursor-pointer">
                      Store profile
                    </button>
                  </div>
                ) : null}
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={product} />
                  </div>
                  <button onClick={onSetNav2} className="ml-3 text-base cursor-pointer">
                    Product
                  </button>
                </div>
                {showNav1 === 0 ? (
                  <div className="flex flex-col justify-start items-start">
                    <button onClick={() => setCurrentShow(1)} className="ml-14 text-base mb-3 cursor-pointer ">
                      My products
                    </button>
                    <button onClick={() => setCurrentShow(2)} className="ml-14 text-base cursor-pointer ">
                      Selling products
                    </button>
                  </div>
                ) : null}
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={chart} />
                  </div>
                  <button onClick={onSetNav3} className="ml-3 text-base  cursor-pointer">
                    Order
                  </button>
                </div>
                {showNav2 === 0 ? (
                  <div className="flex flex-col justify-start items-start">
                    <button onClick={() => setCurrentShow(3)} className="ml-14 text-base mb-3 cursor-pointer ">
                      My order
                    </button>
                    <button onClick={() => setCurrentShow(3)} className="ml-14 text-base cursor-pointer ">
                      Order cancel
                    </button>
                  </div>
                ) : null}
              </div>
            ) : showSideBar === 1 ? (
              <div className="flex flex-col justify-center mt-10">
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={store} />
                  </div>
                  <button onClick={onSetNav} className="ml-3 text-base cursor-pointer">
                    Store
                  </button>
                </div>
                {showNav === 0 ? (
                  <div>
                    <button
                      onClick={() => setCurrentShow(0)}
                      className="text-base ml-14 focus:text-gray cursor-pointer"
                    >
                      Store profile
                    </button>
                  </div>
                ) : null}
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={product} />
                  </div>
                  <button onClick={onSetNav2} className="ml-3 text-base cursor-pointer font-semibold">
                    Product
                  </button>
                </div>
                {showNav1 === 0 ? (
                  <div className="flex flex-col justify-start items-start">
                    <button
                      onClick={() => setCurrentShow(1)}
                      className="ml-14 text-base mb-3 cursor-pointer font-semibold"
                    >
                      My products
                    </button>
                    <button onClick={() => setCurrentShow(2)} className="ml-14 text-base cursor-pointer ">
                      Selling products
                    </button>
                  </div>
                ) : null}
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={chart} />
                  </div>
                  <button onClick={onSetNav3} className="ml-3 text-base  cursor-pointer">
                    Order
                  </button>
                </div>
                {showNav2 === 0 ? (
                  <div className="flex flex-col justify-start items-start">
                    <button onClick={() => setCurrentShow(3)} className="ml-14 text-base mb-3 cursor-pointer ">
                      My order
                    </button>
                    <button onClick={() => setCurrentShow(3)} className="ml-14 text-base cursor-pointer ">
                      Order cancel
                    </button>
                  </div>
                ) : null}
              </div>
            ) : showSideBar === 2 ? (
              <div className="flex flex-col justify-center mt-10">
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={store} />
                  </div>
                  <button onClick={onSetNav} className="ml-3 text-base cursor-pointer">
                    Store
                  </button>
                </div>
                {showNav === 0 ? (
                  <div>
                    <button
                      onClick={() => setCurrentShow(0)}
                      className="text-base ml-14 focus:text-gray cursor-pointer"
                    >
                      Store profile
                    </button>
                  </div>
                ) : null}
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={product} />
                  </div>
                  <button onClick={onSetNav2} className="ml-3 text-base cursor-pointer font-semibold">
                    Product
                  </button>
                </div>
                {showNav1 === 0 ? (
                  <div className="flex flex-col justify-start items-start">
                    <button onClick={() => setCurrentShow(1)} className="ml-14 text-base mb-3 cursor-pointer">
                      My products
                    </button>
                    <button onClick={() => setCurrentShow(2)} className="ml-14 text-base cursor-pointer font-semibold">
                      Selling products
                    </button>
                  </div>
                ) : null}
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={chart} />
                  </div>
                  <button onClick={onSetNav3} className="ml-3 text-base  cursor-pointer">
                    Order
                  </button>
                </div>
                {showNav2 === 0 ? (
                  <div className="flex flex-col justify-start items-start">
                    <button onClick={() => setCurrentShow(3)} className="ml-14 text-base mb-3 cursor-pointer ">
                      My order
                    </button>
                    <button onClick={() => setCurrentShow(3)} className="ml-14 text-base cursor-pointer ">
                      Order cancel
                    </button>
                  </div>
                ) : null}
              </div>
            ) : showSideBar === 3 ? (
              <div className="flex flex-col justify-center mt-10">
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={store} />
                  </div>
                  <button onClick={onSetNav} className="ml-3 text-base cursor-pointer">
                    Store
                  </button>
                </div>
                {showNav === 0 ? (
                  <div>
                    <button
                      onClick={() => setCurrentShow(0)}
                      className="text-base ml-14 focus:text-gray cursor-pointer"
                    >
                      Store profile
                    </button>
                  </div>
                ) : null}
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={product} />
                  </div>
                  <button onClick={onSetNav2} className="ml-3 text-base cursor-pointer">
                    Product
                  </button>
                </div>
                {showNav1 === 0 ? (
                  <div className="flex flex-col justify-start items-start">
                    <button onClick={() => setCurrentShow(1)} className="ml-14 text-base mb-3 cursor-pointer">
                      My products
                    </button>
                    <button onClick={() => setCurrentShow(2)} className="ml-14 text-base cursor-pointer">
                      Selling products
                    </button>
                  </div>
                ) : null}
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={chart} />
                  </div>
                  <button onClick={onSetNav3} className="ml-3 text-base font-semibold cursor-pointer">
                    Order
                  </button>
                </div>
                {showNav2 === 0 ? (
                  <div className="flex flex-col justify-start items-start">
                    <button
                      onClick={() => setCurrentShow(3)}
                      className="ml-14 text-base mb-3 cursor-pointer font-semibold"
                    >
                      My order
                    </button>
                    <button onClick={() => setCurrentShow(4)} className="ml-14 text-base cursor-pointer ">
                      Order cancel
                    </button>
                  </div>
                ) : null}
              </div>
            ) : (
              <div className="flex flex-col justify-center mt-10">
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={store} />
                  </div>
                  <button onClick={onSetNav} className="ml-3 text-base cursor-pointer">
                    Store
                  </button>
                </div>
                {showNav === 0 ? (
                  <div>
                    <button
                      onClick={() => setCurrentShow(0)}
                      className="text-base ml-14 focus:text-gray cursor-pointer"
                    >
                      Store profile
                    </button>
                  </div>
                ) : null}
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={product} />
                  </div>
                  <button onClick={onSetNav2} className="ml-3 text-base cursor-pointer">
                    Product
                  </button>
                </div>
                {showNav1 === 0 ? (
                  <div className="flex flex-col justify-start items-start">
                    <button onClick={() => setCurrentShow(1)} className="ml-14 text-base mb-3 cursor-pointer">
                      My products
                    </button>
                    <button onClick={() => setCurrentShow(2)} className="ml-14 text-base cursor-pointer">
                      Selling products
                    </button>
                  </div>
                ) : null}
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={chart} />
                  </div>
                  <button onClick={onSetNav3} className="ml-3 text-base font-semibold cursor-pointer">
                    Order
                  </button>
                </div>
                {showNav2 === 0 ? (
                  <div className="flex flex-col justify-start items-start">
                    <button onClick={() => setCurrentShow(3)} className="ml-14 text-base mb-3 cursor-pointer">
                      My order
                    </button>
                    <button onClick={() => setCurrentShow(3)} className="ml-14 text-base cursor-pointer  font-semibold">
                      Order cancel
                    </button>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>
        <div className="w-full sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 bg-[#F5F5F5] min-h-screen">
          <div className="w-full sm:w-full md:hidden lg:hidden xl:hidden mt-[80px] ml-[15px] absolute">
            <AiOutlineMenu onClick={toggleDrawer} />
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="left"
              style={{ width: '190px' }}
              zIndex={3000}
            >
              <div className="mt-10 flex flex-row">
                {detailStore.isLoading ? (<div>Laoding</div>)
                  : (
                    <img
                      src={form.photo
                        ? `https://drive.google.com/uc?export=view&id=${form.photo}`
                        : `${process.env.NEXT_PUBLIC_API_URL}uploads/users/default.png`}
                      alt=""
                      width="70px"
                      height="70px"
                      className="rounded-[100%] mb-9"
                      onError={(e) => { e.target.src = `https://drive.google.com/uc?export=view&id=${detailStore.data[0].store.photo}`; }}
                    />
                  )}
                <div className="flex flex-col ml-2">
                  <label className="text-secondary text-sm float-right mt-1 ml-3 mb-2 font-semibold max-w-[100px] inline-block overflow-hidden text-ellipsis whitespace-nowrap">{ form.store_name}</label>
                  <Image className="cursor-pointer hidden" width={25} height={25} src={edit} />
                </div>
              </div>

              <div>
                {/* sidebar */}
                {showSideBar === 0 ? (
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={store} />
                      </div>
                      <button onClick={onSetNav} className="ml-3 text-base cursor-pointer font-semibold">
                        Store
                      </button>
                    </div>
                    {showNav === 0 ? (
                      <div>
                        <button
                          onClick={() => setCurrentShow(0)}
                          className="text-base ml-14 font-semibold cursor-pointer"
                        >
                          Store profile
                        </button>
                      </div>
                    ) : null}
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={product} />
                      </div>
                      <button onClick={onSetNav2} className="ml-3 text-base cursor-pointer">
                        Product
                      </button>
                    </div>
                    {showNav1 === 0 ? (
                      <div className="flex flex-col justify-start items-start">
                        <button onClick={() => setCurrentShow(1)} className="ml-14 text-base mb-3 cursor-pointer ">
                          My products
                        </button>
                        <button onClick={() => setCurrentShow(2)} className="ml-14 text-base cursor-pointer ">
                          Selling products
                        </button>
                      </div>
                    ) : null}
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={chart} />
                      </div>
                      <button onClick={onSetNav3} className="ml-3 text-base  cursor-pointer">
                        Order
                      </button>
                    </div>
                    {showNav2 === 0 ? (
                      <div className="flex flex-col justify-start items-start">
                        <button onClick={() => setCurrentShow(3)} className="ml-14 text-base mb-3 cursor-pointer ">
                          My order
                        </button>
                        <button onClick={() => setCurrentShow(3)} className="ml-14 text-base cursor-pointer ">
                          Order cancel
                        </button>
                      </div>
                    ) : null}
                  </div>
                ) : showSideBar === 1 ? (
                  <div className="flex flex-col justify-center mt-10">
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={store} />
                      </div>
                      <button onClick={onSetNav} className="ml-3 text-base cursor-pointer">
                        Store
                      </button>
                    </div>
                    {showNav === 0 ? (
                      <div>
                        <button
                          onClick={() => setCurrentShow(0)}
                          className="text-base ml-14 focus:text-gray cursor-pointer"
                        >
                          Store profile
                        </button>
                      </div>
                    ) : null}
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={product} />
                      </div>
                      <button onClick={onSetNav2} className="ml-3 text-base cursor-pointer font-semibold">
                        Product
                      </button>
                    </div>
                    {showNav1 === 0 ? (
                      <div className="flex flex-col justify-start items-start">
                        <button
                          onClick={() => setCurrentShow(1)}
                          className="ml-14 text-base mb-3 cursor-pointer font-semibold"
                        >
                          My products
                        </button>
                        <button onClick={() => setCurrentShow(2)} className="ml-14 text-base cursor-pointer ">
                          Selling products
                        </button>
                      </div>
                    ) : null}
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={chart} />
                      </div>
                      <button onClick={onSetNav3} className="ml-3 text-base  cursor-pointer">
                        Order
                      </button>
                    </div>
                    {showNav2 === 0 ? (
                      <div className="flex flex-col justify-start items-start">
                        <button onClick={() => setCurrentShow(3)} className="ml-14 text-base mb-3 cursor-pointer ">
                          My order
                        </button>
                        <button onClick={() => setCurrentShow(3)} className="ml-14 text-base cursor-pointer ">
                          Order cancel
                        </button>
                      </div>
                    ) : null}
                  </div>
                ) : showSideBar === 2 ? (
                  <div className="flex flex-col justify-center mt-10">
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={store} />
                      </div>
                      <button onClick={onSetNav} className="ml-3 text-base cursor-pointer">
                        Store
                      </button>
                    </div>
                    {showNav === 0 ? (
                      <div>
                        <button
                          onClick={() => setCurrentShow(0)}
                          className="text-base ml-14 focus:text-gray cursor-pointer"
                        >
                          Store profile
                        </button>
                      </div>
                    ) : null}
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={product} />
                      </div>
                      <button onClick={onSetNav2} className="ml-3 text-base cursor-pointer font-semibold">
                        Product
                      </button>
                    </div>
                    {showNav1 === 0 ? (
                      <div className="flex flex-col justify-start items-start">
                        <button onClick={() => setCurrentShow(1)} className="ml-14 text-base mb-3 cursor-pointer">
                          My products
                        </button>
                        <button
                          onClick={() => setCurrentShow(2)}
                          className="ml-14 text-base cursor-pointer font-semibold"
                        >
                          Selling products
                        </button>
                      </div>
                    ) : null}
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={chart} />
                      </div>
                      <button onClick={onSetNav3} className="ml-3 text-base  cursor-pointer">
                        Order
                      </button>
                    </div>
                    {showNav2 === 0 ? (
                      <div className="flex flex-col justify-start items-start">
                        <button onClick={() => setCurrentShow(3)} className="ml-14 text-base mb-3 cursor-pointer ">
                          My order
                        </button>
                        <button onClick={() => setCurrentShow(3)} className="ml-14 text-base cursor-pointer ">
                          Order cancel
                        </button>
                      </div>
                    ) : null}
                  </div>
                ) : showSideBar === 3 ? (
                  <div className="flex flex-col justify-center mt-10">
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={store} />
                      </div>
                      <button onClick={onSetNav} className="ml-3 text-base cursor-pointer">
                        Store
                      </button>
                    </div>
                    {showNav === 0 ? (
                      <div>
                        <button
                          onClick={() => setCurrentShow(0)}
                          className="text-base ml-14 focus:text-gray cursor-pointer"
                        >
                          Store profile
                        </button>
                      </div>
                    ) : null}
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={product} />
                      </div>
                      <button onClick={onSetNav2} className="ml-3 text-base cursor-pointer">
                        Product
                      </button>
                    </div>
                    {showNav1 === 0 ? (
                      <div className="flex flex-col justify-start items-start">
                        <button onClick={() => setCurrentShow(1)} className="ml-14 text-base mb-3 cursor-pointer">
                          My products
                        </button>
                        <button onClick={() => setCurrentShow(2)} className="ml-14 text-base cursor-pointer">
                          Selling products
                        </button>
                      </div>
                    ) : null}
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={chart} />
                      </div>
                      <button onClick={onSetNav3} className="ml-3 text-base font-semibold cursor-pointer">
                        Order
                      </button>
                    </div>
                    {showNav2 === 0 ? (
                      <div className="flex flex-col justify-start items-start">
                        <button
                          onClick={() => setCurrentShow(3)}
                          className="ml-14 text-base mb-3 cursor-pointer font-semibold"
                        >
                          My order
                        </button>
                        <button onClick={() => setCurrentShow(4)} className="ml-14 text-base cursor-pointer ">
                          Order cancel
                        </button>
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <div className="flex flex-col justify-center mt-10">
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={store} />
                      </div>
                      <button onClick={onSetNav} className="ml-3 text-base cursor-pointer">
                        Store
                      </button>
                    </div>
                    {showNav === 0 ? (
                      <div>
                        <button
                          onClick={() => setCurrentShow(0)}
                          className="text-base ml-14 focus:text-gray cursor-pointer"
                        >
                          Store profile
                        </button>
                      </div>
                    ) : null}
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={product} />
                      </div>
                      <button onClick={onSetNav2} className="ml-3 text-base cursor-pointer">
                        Product
                      </button>
                    </div>
                    {showNav1 === 0 ? (
                      <div className="flex flex-col justify-start items-start">
                        <button onClick={() => setCurrentShow(1)} className="ml-14 text-base mb-3 cursor-pointer">
                          My products
                        </button>
                        <button onClick={() => setCurrentShow(2)} className="ml-14 text-base cursor-pointer">
                          Selling products
                        </button>
                      </div>
                    ) : null}
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={chart} />
                      </div>
                      <button onClick={onSetNav3} className="ml-3 text-base font-semibold cursor-pointer">
                        Order
                      </button>
                    </div>
                    {showNav2 === 0 ? (
                      <div className="flex flex-col justify-start items-start">
                        <button onClick={() => setCurrentShow(3)} className="ml-14 text-base mb-3 cursor-pointer">
                          My order
                        </button>
                        <button
                          onClick={() => setCurrentShow(3)}
                          className="ml-14 text-base cursor-pointer  font-semibold"
                        >
                          Order cancel
                        </button>
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
            </Drawer>
          </div>
          {showSideBar === 0 ? (
            <form onSubmit={e => onEditStore(e)} className="flex w-full">
              <div className="flex flex-col bg-white rounded w-full h-auto mt-[120px] mx-2 sm:w-full md:w-3/4 lg:w-3/4 sm:mx-2 md:mx-12 lg:mx-12">
                <div className="flex flex-col m-5 border-b-2 border-[#9B9B9B] pb-5">
                  <label className="font-semibold mb-2 text-lg">My profile store</label>
                  <label className="text-[#9B9B9B]">Manage your profile information</label>
                </div>
                <div className="flex w-full">
                  <div className="w-[70%] flex flex-col items-end">
                    <Input
                      onChange={e => setForm({ ...form, store_name: e.target.value })}
                      value={form.store_name}
                      name="Store name"
                      type="text"
                    />
                    <Input value={form.email} name="Email" type="text" />
                    <Input
                      onChange={e => setForm({ ...form, store_phone: e.target.value })}
                      value={form.store_phone}
                      name="Phone Number"
                      type="text"
                    />
                    <TextArea
                      onChange={e => setForm({ ...form, store_description: e.target.value })}
                      value={form.store_description}
                      name="Store descripiton"
                    />
                  </div>
                  <div className="w-[30%] flex flex-col items-center border-l-2 border-gray my-4">
                    {detailStore.isLoading ? (<div>Laoding</div>)
                      : (
                        <img
                          src={form.photo
                            ? `https://drive.google.com/uc?export=view&id=${form.photo}`
                            : `${process.env.NEXT_PUBLIC_API_URL}uploads/users/default.png`}
                          alt=""
                          width="100px"
                          height="100px"
                          className="rounded-[100%] mb-9"
                          onError={(e) => { e.target.src = `https://drive.google.com/uc?export=view&id=${detailStore.data[0].store.photo}`; }}
                        />
                      )}
                    <input onChange={(e) => setForm({ ...form, photo: e.target.files[0] })} id="images" type="file" className="hidden" />
                    <label className="border w-[70%] sm:w-[70%] md:w-[80%] lg:w-[80%] pl-4 sm:pl-4 md:pl-[20%] lg:pl-[20%] rounded-2xl mt-8 p-2 text-gray" htmlFor="images">
                      Select image
                    </label>
                  </div>
                </div>
                <button className="w-32 h-10 ml-28 sm:ml-28 md:ml-44 lg:ml-44 mt-5 mb-10 bg-primary text-white active:bg-white active:text-primary border rounded-2xl">
                  Save
                </button>
              </div>
            </form>
          ) : showSideBar === 1 ? (
            <CardProduct name="My Product" />
          ) : showSideBar === 2 ? (
            <SellingProduct />
          ) : (
            <CardMyorder />
          )}
        </div>
      </div>
    </div>
  );
};

Seller.layouts = 'SecondLayout';
export default Seller;
