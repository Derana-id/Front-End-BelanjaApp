/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';
import Drawer from 'react-modern-drawer';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import JwtDecode from 'jwt-decode';
import Swal from 'sweetalert2';
import CardMyorder from '../../components/card/customer/cardMyorder';
import CardShippingAddress from '../../components/card/customer/cardShippingAddressProfile';
// import user from '../../assets/img/user.jpg';
import edit from '../../assets/icons/edit.svg';
import myaccount from '../../assets/icons/myaccount.svg';
import address from '../../assets/icons/address.svg';
import myorder from '../../assets/icons/order.svg';
import 'react-modern-drawer/dist/index.css';
import { getDetailUser, updateProfile } from '../../redux/actions/userProfile';
import Input from '../../components/Input/input-profile';
import RadioButton from '../../components/Input/radio-button';
import Datepicker from '../../components/Input/datepicker';
import { toastify } from '../../utils/toastify';

const Customer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const [showSideBar, setFormShowSideBar] = useState(0);

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

  const detailProfile = useSelector((state) => {
    return state.detailCustomer;
  });

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    birth: '',
    photo: ''
  });

  useEffect(() => {
    dispatch(getDetailUser(decoded.id, token));
  }, [dispatch]);

  useEffect(() => {
    if (detailProfile.data.profile) {
      setForm({
        ...form,
        name: detailProfile.data.profile.name,
        email: detailProfile.data.user.email,
        phone: detailProfile.data.profile.phone,
        gender: detailProfile.data.profile.gender,
        birth: detailProfile.data.profile.birth,
        photo: detailProfile.data.profile.photo
      });
    }
  }, [detailProfile]);

  const onEditUser = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('phone', form.phone);
    formData.append('gender', form.gender);
    formData.append('birth', form.birth);
    formData.append('photo', form.photo);

    updateProfile(formData, token)
      .then((res) => {
        Swal.fire({
          title: 'success',
          text: res.message,
          icon: 'success'
        });
        dispatch(getDetailUser(decoded.id));
      })
      .catch((err) => {
        console.log(err);
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
  };

  console.log(form.photo);

  return (
    <div>
      <Head>
        <title>Belanja | Profile customer</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="flex grid-cols-2">
        <div className="w-0 sm:w-0 md:w-1/4 lg:w-1/4 xl:w-1/4">
          <div className="w-full flex justify-center items-center mr-10 flex-col mt-[120px]">
            <div className="flex items-center">
              {detailProfile.isLoading ? (<div>Laoding</div>)
                : (
                  <img
                    src={form.photo
                      ? `https://drive.google.com/uc?export=view&id=${form.photo}`
                      : 'https://drive.google.com/uc?export=view&id=default.png'}
                    alt=""
                    width="100px"
                    height="100px"
                    className="rounded-[100%] mb-9"
                    onError={(e) => { e.target.src = `https://drive.google.com/uc?export=view&id=${detailProfile.data.profile.photo}`; }}
                  />
                )}
              <div className="flex flex-col ml-2">
                <label className="text-secondary text-sm float-right mt-1 ml-3 mb-2 font-semibold max-w-[120px] inline-block overflow-hidden text-ellipsis whitespace-nowrap">{ form.name}</label>
                <Image className="cursor-pointer hidden" src={edit} />
              </div>
            </div>
            {/* sidebar */}
            {showSideBar === 0 ? (
              <div className="flex flex-col ml-[47%] w-full mt-10">
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={myaccount} />
                  </div>
                  <button onClick={() => setCurrentShow(0)} className="ml-3 cursor-pointer font-semibold">My account</button>
                </div>
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={address} />
                  </div>
                  <button onClick={() => setCurrentShow(1)} className="ml-3 cursor-pointer ">Shipping Adrress</button>
                </div>
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={myorder} />
                  </div>
                  <button onClick={() => setCurrentShow(2)} className="ml-3 cursor-pointer ">My order</button>
                </div>
              </div>
            ) : showSideBar === 1 ? (
              <div className="flex flex-col ml-[47%] w-full mt-10">
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={myaccount} />
                  </div>
                  <button onClick={() => setCurrentShow(0)} className="ml-3 cursor-pointer ">My account</button>
                </div>
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={address} />
                  </div>
                  <button onClick={() => setCurrentShow(1)} className="ml-3 cursor-pointer font-semibold ">Shipping Adrress</button>
                </div>
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={myorder} />
                  </div>
                  <button onClick={() => setCurrentShow(2)} className="ml-3 cursor-pointer ">My order</button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col ml-[47%] w-full mt-10">
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={myaccount} />
                  </div>
                  <button onClick={() => setCurrentShow(0)} className="ml-3 cursor-pointer ">My account</button>
                </div>
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={address} />
                  </div>
                  <button onClick={() => setCurrentShow(1)} className="ml-3 cursor-pointer">Shipping Adrress</button>
                </div>
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={myorder} />
                  </div>
                  <button onClick={() => setCurrentShow(2)} className="ml-3 cursor-pointer font-semibold ">My order</button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 bg-[#F5F5F5] min-h-screen relative">
          <div className="w-full sm:w-full md:hidden lg:hidden xl:hidden mt-[80px] ml-[15px] absolute">
            <AiOutlineMenu onClick={toggleDrawer} />
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="left"
              style={{ width: '200px' }}
              zIndex={3000}
            >
              <div className="mt-10 flex flex-row">
                {detailProfile.isLoading ? (<div>Laoding</div>)
                  : (
                    <img
                      src={form.photo
                        ? `https://drive.google.com/uc?export=view&id=${form.photo}`
                        : 'https://drive.google.com/uc?export=view&id=default.png'}
                      alt=""
                      width="100px"
                      height="100px"
                      className="rounded-[100%] mb-9"
                      onError={(e) => { e.target.src = `https://drive.google.com/uc?export=view&id=${detailProfile.data.profile.photo}`; }}
                    />
                  )}
                <div className="flex flex-col ml-2">
                  <label className="text-secondary text-sm float-right mt-1 ml-3 mb-2 font-semibold max-w-[75px] inline-block overflow-hidden text-ellipsis whitespace-nowrap">{ form.name}</label>
                  <Image className="cursor-pointer hidden" width={25} height={25} src={edit} />
                </div>
              </div>

              <div className="">
                {/* sidebar */}
                {showSideBar === 0 ? (
                  <div className="flex flex-col w-full">
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={myaccount} />
                      </div>
                      <button onClick={() => setCurrentShow(0)} className="ml-3 cursor-pointer font-semibold">My account</button>
                    </div>
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={address} />
                      </div>
                      <button onClick={() => setCurrentShow(1)} className="ml-3 cursor-pointer ">Shipping Adrress</button>
                    </div>
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={myorder} />
                      </div>
                      <button onClick={() => setCurrentShow(2)} className="ml-3 cursor-pointer ">My order</button>
                    </div>
                  </div>
                ) : showSideBar === 1 ? (
                  <div className="flex flex-col w-full mt-10">
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={myaccount} />
                      </div>
                      <button onClick={() => setCurrentShow(0)} className="ml-3 cursor-pointer ">My account</button>
                    </div>
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={address} />
                      </div>
                      <button onClick={() => setCurrentShow(1)} className="ml-3 cursor-pointer font-semibold ">Shipping Adrress</button>
                    </div>
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={myorder} />
                      </div>
                      <button onClick={() => setCurrentShow(2)} className="ml-3 cursor-pointer ">My order</button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col w-full mt-10">
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={myaccount} />
                      </div>
                      <button onClick={() => setCurrentShow(0)} className="ml-3 cursor-pointer ">My account</button>
                    </div>
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={address} />
                      </div>
                      <button onClick={() => setCurrentShow(1)} className="ml-3 cursor-pointer">Shipping Adrress</button>
                    </div>
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none p-7 rounded-full" width={20} height={20} src={myorder} />
                      </div>
                      <button onClick={() => setCurrentShow(2)} className="ml-3 cursor-pointer font-semibold ">My order</button>
                    </div>
                  </div>
                )}
              </div>

            </Drawer>
          </div>
          {showSideBar === 0
            ? (
              <form onSubmit={(e) => onEditUser(e)} className="flex w-full">
                <div className="flex flex-col bg-white rounded w-full h-auto mt-[120px] mx-2 sm:w-full md:w-3/4 lg:w-3/4 sm:mx-2 md:mx-12 lg:mx-12">
                  <div className="flex flex-col m-5 border-b-2 border-[#9B9B9B] pb-5">
                    <label className="font-semibold mb-2 text-lg">My Profile</label>
                    <label className="text-[#9B9B9B]">Manage your profile information</label>
                  </div>
                  <div className="flex w-full">

                    <div className="w-[70%] flex flex-col items-end">
                      <Input onChange={(e) => setForm({ ...form, name: e.target.value })} name="Name" type="text" value={form.name} />
                      <Input name="Email" value={form.email} type="text" readonly />
                      <Input onChange={(e) => setForm({ ...form, phone: e.target.value })} name="Phone Number" value={form.phone} type="text" />
                      <div className="flex -mr-4 sm:-mr-4 md:mr-[150px] lg-mr-[150px] xl:mr-[150px]">
                        <label className="mr-5 text-[#9B9B9B]">Gender</label>
                        <RadioButton onChange={(e) => setForm({ ...form, gender: e.target.value })} value={form.gender} />
                      </div>
                      <Datepicker onChange={(e) => setForm({ ...form, birth: e.target.value })} value={form.birth} />
                    </div>
                    <div className="w-[30%] flex flex-col items-center border-l-2 border-gray my-4">
                      {detailProfile.isLoading ? (<div>Laoding</div>)
                        : (
                          <img
                            src={form.photo
                              ? `https://drive.google.com/uc?export=view&id=${form.photo}`
                              : 'https://drive.google.com/uc?export=view&id=default.png'}
                            alt=""
                            width="100px"
                            height="100px"
                            className="rounded-[100%] mb-9"
                            onError={(e) => { e.target.src = `https://drive.google.com/uc?export=view&id=${detailProfile.data.profile.photo}`; }}
                          />
                        )}
                      <input onChange={(e) => setForm({ ...form, photo: e.target.files[0] })} id="images" type="file" className="hidden" />
                      <label className="border w-[70%] sm:w-[70%] md:w-[80%] lg:w-[80%] pl-4 sm:pl-4 md:pl-[20%] lg:pl-[20%] rounded-2xl mt-8 p-2 text-gray" htmlFor="images">Select image</label>
                    </div>

                  </div>
                  <button type="submit" className="w-32 h-10 ml-28 sm:ml-28 md:ml-44 lg:ml-44 mt-5 mb-10 bg-primary text-white active:bg-white active:text-primary border rounded-2xl">Save</button>
                </div>
              </form>
            ) : showSideBar === 1
              ? (<CardShippingAddress />) : showSideBar === 2
                ? (<CardMyorder />) : null}
        </div>
      </div>
    </div>
  );
};

Customer.layouts = 'MainLayout';
export default Customer;
