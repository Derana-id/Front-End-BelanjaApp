import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';
import axios from 'axios';
import { getListOfMyAddress, getListofAddress, addAddress, changeAddress } from '../../../redux/actions/address';
import Close from '../../../assets/icons/close.svg';

export default function CardShippingAddress() {
  const [showModal, setShowModal] = useState();
  const [loading, setLoading] = useState(); 
  const [showEditModal, setShowEditModal] = useState();
  const [notFound, setNotFound] = useState(false);
  //const [address, setAddress] = useState([]);
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  const router = useRouter();
  const params = router.query;
  const address = useSelector((state) => {
    return state.listAddress;
  });

  const [form, setForm] = useState({
    user_id: '',
    label: '',
    recipent_name: '',
    recipient_phone: '',
    address: '',
    postal_code: 0,
    city: '',
    is_primary: 1,
    is_active: 1,
    createdAt: '',
    updatedAt: ''
  });
  
  useEffect(() => {
    dispatch(getListOfMyAddress(router));
  }, [dispatch]);

  /*useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/myaddress`)
      .then((res) => {
        setAddress(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    axios
      .get(`${process.env.REACT_APP_API_URL}/address/detail/${params.id}`, {
        headers: {
          token,
        },
      })
      .then((res) => {
        setForm({
          ...res.data.data
        });
      })
      .catch((err) => {
        console.log(err.message);
        setNotFound(true);
      });
  }, [params.id, token]);*/

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    axios.post(`${process.env.REACT_APP_API_URL}/address`, form)
      .then(() => {
        router.push('/profile/customer');
      })
      .catch((error) => {
        if (error.response) {
          if (Array.isArray(error.response.data.error)) {
            setErrors(error.response.data.error);
          } else {
            setErrors([{ msg: error.response.data.error }]);
          }
        } else {
          setErrors([{ msg: error.message }]);
        }
      });
  };
  
  console.log(address)
  return (
    <div>
      <div className="flex flex-col bg-white rounded w-3/4 h-auto mt-[30px] mx-24">
        <div className="flex w-full">
          <button onClick={() => setShowModal(true)} className="w-full mx-10 h-20 border-2 border-dashed rounded text-[#9B9B9B]">
            Add new address
          </button>
        </div>
        {
          address.data.map((item) => (
            <div className="relative flex flex-col items-start h-auto my-5 ml-10 mr-10 border-2 rounded border-primary">
              <label className="m-2 font-semibold" htmlFor="">
                {item.userID}
              </label>
              <p className="text-[#222222] m-2">
                {item.address}
                [Tokopedia Note: {item.label}] {item.city}, {item.postal_code}
              </p>
              <button type="button" onClick={() => setShowEditModal(true)} className="m-2 font-bold text-primary">Change address</button>
            </div>
          ))
        }
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-4xl mx-auto my-6">
              {/* content */}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/* header */}
                <div className="flex flex-col items-start justify-between p-5 rounded-t">
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none bg-transparent border-0 outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 text-2xl bg-transparent outline-none focus:outline-none">
                      <Image src={Close} />
                    </span>
                  </button>
                  <div className="mx-auto mt-6">
                    <h3 className="text-3xl font-semibold">Add new address</h3>
                  </div>
                </div>
                {/* body */}
                <form onSubmit={onSubmitHandler}>
                  <div className="w-[900px] flex flex-col relative p-6">
                    <div className="flex flex-col w-full mb-2">
                      <label className="text-[#9B9B9B]">Save address as (ex : home address, office address)</label>
                      <input 
                        type="text" 
                        className="px-3 mt-2 border rounded h-11" 
                        onChange={onChangeHandler}
                        value={form.address}
                      />
                    </div>
                    <div className="flex w-full mb-2">
                      <div className="flex flex-col w-1/2 mr-4">
                        <label className="text-[#9B9B9B]">Recipient’s name</label>
                        <input 
                          type="text" 
                          className="px-3 mt-2 border rounded h-11" 
                          onChange={onChangeHandler}
                          value={form.recipent_name}
                        />
                      </div>
                      <div className="flex flex-col w-1/2 ml-4">
                        <label className="flex text-[#9B9B9B] flex-col">Recipient&apos;s telephone number</label>
                        <input 
                          type="text" 
                          className="px-3 mt-2 border rounded h-11" 
                          onChange={onChangeHandler}
                          value={form.recipient_phone}
                        />
                      </div>
                    </div>
                    <div className="flex w-full mb-2">
                      <div className="flex flex-col w-1/2 mr-4">
                        <label className="text-[#9B9B9B]">Address</label>
                        <input 
                          type="text" 
                          className="px-3 mt-2 border rounded h-11" 
                          onChange={onChangeHandler}
                          value={form.address}
                        />
                      </div>
                      <div className="flex flex-col w-1/2 ml-4">
                        <label className="flex flex-col text-[#9B9B9B]">Postal code</label>
                        <input 
                          type="text" 
                          className="px-3 mt-2 border rounded h-11" 
                          onChange={onChangeHandler}
                          value={form.postal_code}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col w-1/2 mb-2">
                      <label className="text-[#9B9B9B]">City or Subdistrict</label>
                      <input 
                        type="text" 
                        className="px-3 mt-2 border rounded h-11" 
                        onChange={onChangeHandler}
                        value={form.city}
                      />
                    </div>
                    <div className="mb-2">
                      <input type="checkbox" className="mt-8 mr-4" />
                      <label className="text-[#9B9B9B]">Make it the primary address</label>
                    </div>
                  </div>
                  {/* footer */}
                  <div className="flex items-center justify-end p-4 mr-5 rounded-b">
                    <button
                      className="px-20 py-2 mb-1 mr-1 text-gray-500 transition-all duration-150 ease-linear rounded-full hover:bg-gray-500 hover:text-white active:bg-gray-600 outline outline-2 focus:outline"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="px-20 py-2 mb-1 mr-1 text-white transition-all duration-150 ease-linear bg-red-500 rounded-full outline-none active:bg-red-600 focus:outline-none"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25" />
        </>
      ) : null}

      {showEditModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-4xl mx-auto my-6">
              {/* content */}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/* header */}
                <div className="flex flex-col items-start justify-between p-5 rounded-t">
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none bg-transparent border-0 outline-none focus:outline-none"
                    onClick={() => setShowEditModal(false)}
                  >
                    <span className="block w-6 h-6 text-2xl bg-transparent outline-none focus:outline-none">
                      <Image src={Close} />
                    </span>
                  </button>
                  <div className="mx-auto mt-6">
                    <h3 className="text-3xl font-semibold">Edit address</h3>
                  </div>
                </div>
                {/* body */}
                <form onSubmit={onSubmitHandler}>
                  <div className="w-[900px] flex flex-col relative p-6">
                    <div className="flex flex-col w-full mb-2">
                      <label className="text-[#9B9B9B]">Save address as (ex : home address, office address)</label>
                      <input 
                        type="text" 
                        className="px-3 mt-2 border rounded h-11" 
                        onChange={onChangeHandler}
                        value={form.address}
                      />
                    </div>
                    <div className="flex w-full mb-2">
                      <div className="flex flex-col w-1/2 mr-4">
                        <label className="text-[#9B9B9B]">Recipient’s name</label>
                        <input 
                          type="text" 
                          className="px-3 mt-2 border rounded h-11" 
                          onChange={onChangeHandler}
                          value={form.recipent_name}
                        />
                      </div>
                      <div className="flex flex-col w-1/2 ml-4">
                        <label className="flex text-[#9B9B9B] flex-col">Recipient&apos;s telephone number</label>
                        <input 
                          type="text" 
                          className="px-3 mt-2 border rounded h-11" 
                          onChange={onChangeHandler}
                          value={form.recipient_phone}
                        />
                      </div>
                    </div>
                    <div className="flex w-full mb-2">
                      <div className="flex flex-col w-1/2 mr-4">
                        <label className="text-[#9B9B9B]">Address</label>
                        <input 
                          type="text" 
                          className="px-3 mt-2 border rounded h-11" 
                          onChange={onChangeHandler}
                          value={form.address}
                        />
                      </div>
                      <div className="flex flex-col w-1/2 ml-4">
                        <label className="flex flex-col text-[#9B9B9B]">Postal code</label>
                        <input 
                          type="text" 
                          className="px-3 mt-2 border rounded h-11" 
                          onChange={onChangeHandler}
                          value={form.postal_code}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col w-1/2 mb-2">
                      <label className="text-[#9B9B9B]">City or Subdistrict</label>
                      <input 
                        type="text" 
                        className="px-3 mt-2 border rounded h-11" 
                        onChange={onChangeHandler}
                        value={form.city}
                      />
                    </div>
                    <div className="mb-2">
                      <input type="checkbox" className="mt-8 mr-4" />
                      <label className="text-[#9B9B9B]">Make it the primary address</label>
                    </div>
                  </div>
                  {/* footer */}
                  <div className="flex items-center justify-end p-4 mr-5 rounded-b">
                    <button
                      className="px-20 py-2 mb-1 mr-1 text-gray-500 transition-all duration-150 ease-linear rounded-full hover:bg-gray-500 hover:text-white active:bg-gray-600 outline outline-2 focus:outline"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="px-20 py-2 mb-1 mr-1 text-white transition-all duration-150 ease-linear bg-red-500 rounded-full outline-none active:bg-red-600 focus:outline-none"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25" />
        </>
      ) : null}
    </div>
  );
}
