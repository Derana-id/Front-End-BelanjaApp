/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { BulletList } from 'react-content-loader';
import Head from 'next/head';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineLogout } from 'react-icons/ai';
import Drawer from 'react-modern-drawer';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import JwtDecode from 'jwt-decode';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
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
import { getMyAddress, createAddress, editAddress, deleteAddress } from '../../redux/actions/address';

const Customer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const myAddress = useSelector(state => state.myAddress);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const [showSideBar, setFormShowSideBar] = useState(0);

  const setCurrentShow = index => {
    setFormShowSideBar(index);
  };

  // integrasi
  const token = Cookies.get('token');
  let decoded = '';
  if (token) {
    decoded = JwtDecode(token);
  }

  const detailProfile = useSelector((state) => {
    return state.detailCustomer;
  });

  console.log(detailProfile);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    birth: '',
    photo: ''
  });

  useEffect(() => {
    dispatch(getDetailUser(decoded.id));
  }, [dispatch]);

  useEffect(() => {
    if (detailProfile.data.length > 0) {
      if (detailProfile.data[0]) {
        setForm({
          ...form,
          name: detailProfile.data[0].profile.name,
          email: detailProfile.data[0].user.email,
          phone: detailProfile.data[0].profile.phone,
          gender: detailProfile.data[0].profile.gender,
          birth: detailProfile.data[0].profile.birth,
          photo: detailProfile.data[0].profile.photo
        });
      }
    }
  }, [detailProfile]);

  const onLogout = () => {
    Swal.fire({
      title: 'Are you sure to Logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Cookies.remove('token');
        router.push('/auth/login');
        Swal.fire(
          'Success to logout!',
          'Success to logout.',
          'success'
        );
      }
    });
  };

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

  // address
  const [formAddress, setFormAddress] = useState({
    label: '',
    recipientName: '',
    recipientPhone: '',
    address: '',
    postalCode: '',
    city: '',
    isPrimary: 0
  });

  useEffect(() => {
    dispatch(getMyAddress());
  }, []);

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
                      : `${process.env.NEXT_PUBLIC_API_URL}uploads/users/default.png`}
                    alt=""
                    width="100px"
                    height="100px"
                    className="rounded-[100%] mb-9"
                    onError={(e) => { e.target.src = `https://drive.google.com/uc?export=view&id=${detailProfile.data[0].profile.photo}`; }}
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
                    <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={myaccount} />
                  </div>
                  <button onClick={() => setCurrentShow(0)} className="ml-3 font-semibold cursor-pointer">My account</button>
                </div>
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={address} />
                  </div>
                  <button onClick={() => setCurrentShow(1)} className="ml-3 cursor-pointer ">Shipping Adrress</button>
                </div>
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={myorder} />
                  </div>
                  <button onClick={() => setCurrentShow(2)} className="ml-3 cursor-pointer ">My order</button>
                </div>
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-primary  rounded-full relative flex justify-center items-center">
                    <AiOutlineLogout />
                  </div>
                  <button onClick={onLogout} className="ml-3 text-base  cursor-pointer">
                    Logout
                  </button>
                </div>
              </div>
            ) : showSideBar === 1 ? (
              <div className="flex flex-col ml-[47%] w-full mt-10">
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={myaccount} />
                  </div>
                  <button onClick={() => setCurrentShow(0)} className="ml-3 cursor-pointer ">My account</button>
                </div>
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={address} />
                  </div>
                  <button onClick={() => setCurrentShow(1)} className="ml-3 font-semibold cursor-pointer ">Shipping Adrress</button>
                </div>
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={myorder} />
                  </div>
                  <button onClick={() => setCurrentShow(2)} className="ml-3 cursor-pointer ">My order</button>
                </div>
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-primary  rounded-full relative flex justify-center items-center">
                    <AiOutlineLogout />
                  </div>
                  <button onClick={onLogout} className="ml-3 text-base  cursor-pointer">
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col ml-[47%] w-full mt-10">
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={myaccount} />
                  </div>
                  <button onClick={() => setCurrentShow(0)} className="ml-3 cursor-pointer ">My account</button>
                </div>
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={address} />
                  </div>
                  <button onClick={() => setCurrentShow(1)} className="ml-3 cursor-pointer">Shipping Adrress</button>
                </div>
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                    <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={myorder} />
                  </div>
                  <button onClick={() => setCurrentShow(2)} className="ml-3 font-semibold cursor-pointer ">My order</button>
                </div>
                <div className="flex items-center m-2">
                  <div className="h-9 w-9 bg-primary  rounded-full relative flex justify-center items-center">
                    <AiOutlineLogout />
                  </div>
                  <button onClick={onLogout} className="ml-3 text-base  cursor-pointer">
                    Logout
                  </button>
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
                        : `${process.env.NEXT_PUBLIC_API_URL}uploads/users/default.png`}
                      alt=""
                      width="100px"
                      height="100px"
                      className="rounded-[100%] mb-9"
                      onError={(e) => { e.target.src = `https://drive.google.com/uc?export=view&id=${detailProfile.data[0].profile.photo}`; }}
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
                  <div className="flex flex-col ml-[47%] w-full mt-10">
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={myaccount} />
                      </div>
                      <button onClick={() => setCurrentShow(0)} className="ml-3 font-semibold cursor-pointer">My account</button>
                    </div>
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={address} />
                      </div>
                      <button onClick={() => setCurrentShow(1)} className="ml-3 cursor-pointer ">Shipping Adrress</button>
                    </div>
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={myorder} />
                      </div>
                      <button onClick={() => setCurrentShow(2)} className="ml-3 cursor-pointer ">My order</button>
                    </div>
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-primary  rounded-full relative flex justify-center items-center">
                        <AiOutlineLogout />
                      </div>
                      <button onClick={onLogout} className="ml-3 text-base  cursor-pointer">
                        Logout
                      </button>
                    </div>
                  </div>
                ) : showSideBar === 1 ? (
                  <div className="flex flex-col ml-[47%] w-full mt-10">
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={myaccount} />
                      </div>
                      <button onClick={() => setCurrentShow(0)} className="ml-3 cursor-pointer ">My account</button>
                    </div>
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={address} />
                      </div>
                      <button onClick={() => setCurrentShow(1)} className="ml-3 font-semibold cursor-pointer ">Shipping Adrress</button>
                    </div>
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={myorder} />
                      </div>
                      <button onClick={() => setCurrentShow(2)} className="ml-3 cursor-pointer ">My order</button>
                    </div>
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-primary  rounded-full relative flex justify-center items-center">
                        <AiOutlineLogout />
                      </div>
                      <button onClick={onLogout} className="ml-3 text-base  cursor-pointer">
                        Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col ml-[47%] w-full mt-10">
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={myaccount} />
                      </div>
                      <button onClick={() => setCurrentShow(0)} className="ml-3 cursor-pointer ">My account</button>
                    </div>
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={address} />
                      </div>
                      <button onClick={() => setCurrentShow(1)} className="ml-3 cursor-pointer">Shipping Adrress</button>
                    </div>
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center">
                        <Image className="absolute border-none rounded-full p-7" width={20} height={20} src={myorder} />
                      </div>
                      <button onClick={() => setCurrentShow(2)} className="ml-3 font-semibold cursor-pointer ">My order</button>
                    </div>
                    <div className="flex items-center m-2">
                      <div className="h-9 w-9 bg-primary  rounded-full relative flex justify-center items-center">
                        <AiOutlineLogout />
                      </div>
                      <button onClick={onLogout} className="ml-3 text-base  cursor-pointer">
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>

            </Drawer>
          </div>
          {showSideBar === 0
            ? (
              detailProfile.isLoading ? (
                <BulletList />
              ) : (
                <form onSubmit={(e) => onEditUser(e)} className="flex w-full">
                  <div className="flex flex-col bg-white rounded w-full h-auto mt-[120px] mx-2 sm:w-full md:w-3/4 lg:w-3/4 sm:mx-2 md:mx-12 lg:mx-12">
                    <div className="flex flex-col m-5 border-b-2 border-[#9B9B9B] pb-5">
                      <label className="mb-2 text-lg font-semibold">My Profile</label>
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
                                : `${process.env.NEXT_PUBLIC_API_URL}uploads/users/default.png`}
                              alt=""
                              width="100px"
                              height="100px"
                              className="rounded-[100%] mb-9"
                              onError={(e) => { e.target.src = `https://drive.google.com/uc?export=view&id=${detailProfile.data[0].profile.photo}`; }}
                            />
                          )}
                        <input onChange={(e) => setForm({ ...form, photo: e.target.files[0] })} id="images" type="file" className="hidden" />
                        <label className="border w-[70%] sm:w-[70%] md:w-[80%] lg:w-[80%] pl-4 sm:pl-4 md:pl-[20%] lg:pl-[20%] rounded-2xl mt-8 p-2 text-gray" htmlFor="images">Select image</label>
                      </div>

                    </div>
                    <button type="submit" className="w-32 h-10 mt-5 mb-10 text-white border ml-28 sm:ml-28 md:ml-44 lg:ml-44 bg-primary active:bg-white active:text-primary rounded-2xl">Save</button>
                  </div>
                </form>
              )

            ) : showSideBar === 1
              ? (
                <CardShippingAddress
                  myAddress={myAddress}
                  formAddress={formAddress}
                  setFormAddress={setFormAddress}
                  AddNewAddress={AddNewAddress}
                  EditAddress={EditAddress}
                  DeleteAddress={DeleteAddress}
                />
              ) : showSideBar === 2
                ? (<CardMyorder />) : null}
        </div>
      </div>
    </div>
  );
};

Customer.layouts = 'MainLayout';
export default Customer;
