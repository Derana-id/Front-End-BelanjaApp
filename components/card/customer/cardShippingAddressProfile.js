import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Swal from 'sweetalert2';
import { List } from 'react-content-loader';
import { useDispatch, useSelector } from 'react-redux';
import Close from '../../../assets/icons/close.svg';
import { createAddressBuyer, getAddress } from '../../../redux/actions/userProfile';
import { toastify } from '../../../utils/toastify';

export default function cardShippingAddress({ myAddress }) {
  const [showModal, setShowModal] = useState();
  const [showEditModal, setShowEditModal] = useState();
  // const dispatch = useDispatch();

  // const myAddress = useSelector(state => {
  //   return state.myAddress;
  // });

  // useEffect(() => {
  //   dispatch(getAddress());
  // }, [dispatch]);

  // const [form, setForm] = useState({
  //   label: '',
  //   recipientName: '',
  //   recipientPhone: '',
  //   address: '',
  //   postalCode: '',
  //   city: '',
  //   isPrimary: ''
  // });

  // const onAddAdress = e => {
  //   e.preventDefault();

  //   createAddressBuyer(form)
  //     .then(res => {
  //       Swal.fire({
  //         title: 'success',
  //         text: res.message,
  //         icon: 'success'
  //       });
  //     })
  //     .catch(err => {
  //       if (err.response.data.code === 422) {
  //         const { error } = err.response.data;
  //         error.map(item => toastify(item, 'error'));
  //       } else {
  //         Swal.fire({
  //           title: 'Error!',
  //           text: err.response.data.message,
  //           icon: 'error'
  //         });
  //       }
  //     });
  // };

  const handleDelete = () => {};

  return (
    <div>
      <div className="flex flex-col bg-white rounded w-3/4 pb-8 h-auto mt-[120px] mx-12">
        <div className="flex flex-col m-5 border-b-2 border-[#9B9B9B] pb-5">
          <label className="mb-2 text-lg font-semibold">Choose another address</label>
          <label className="text-[#9B9B9B]">Manage your profile information</label>
        </div>
        <div className="flex w-full">
          <button
            onClick={() => setShowModal(true)}
            className="w-full mx-10 h-20 border-2 border-dashed rounded text-[#9B9B9B]"
          >
            Add new address
          </button>
        </div>
        {myAddress.isLoading ? (
          <List />
        ) : myAddress.error === 'Addres Not Found' ? (
          <button>Add New Address</button>
        ) : myAddress.isError ? (
          <div>Error</div>
        ) : myAddress.data.length > 0 ? (
          myAddress.data.map((item, index) => (
            <div
              className="ml-10 mr-10 my-5 border-2 rounded border-primary h-auto relative flex items-start flex-col"
              key={index}
            >
              <label className="font-semibold m-2" htmlFor="">
                {item.recipient_name}
              </label>
              <p className="text-[#222222] m-2">
                {`[${item.label}] ${item.address},  ${item.city}, ${item.postal_code}, (HP: ${item.recipient_phone})`}
              </p>

              <button type="button" onClick={() => setShowEditModal(true)} className="text-primary m-2 font-bold">
                Change address
              </button>
              <button type="button" onClick={handleDelete} className="text-primary m-2 font-bold">
                Delete address
              </button>
            </div>
          ))
        ) : (
          <button>Add New Address</button>
        )}
      </div>
      {showModal ? (
        <>
          <form onSubmit={e => onAddAdress(e)}>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-4xl">
                {/* content */}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/* header */}
                  <div className="flex flex-col items-start justify-between p-5 rounded-t">
                    <button
                      className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none">
                        <Image src={Close} />
                      </span>
                    </button>
                    <div className="mt-6 mx-auto">
                      <h3 className="text-3xl font-semibold">Add new address</h3>
                    </div>
                  </div>
                  {/* body */}
                  <div className="w-[900px] flex flex-col relative p-6">
                    <div className="w-full mb-2 flex flex-col">
                      <label className="text-[#9B9B9B]">Save address as (ex : home address, office address)</label>
                      <input
                        onChange={e => setForm({ ...form, label: e.target.value })}
                        type="text"
                        className="border h-11 px-3 rounded mt-2"
                      />
                    </div>
                    <div className="flex mb-2 w-full">
                      <div className="flex flex-col mr-4 w-1/2">
                        <label className="text-[#9B9B9B]">Recipient’s name</label>
                        <input
                          onChange={e => setForm({ ...form, recipientName: e.target.value })}
                          type="text"
                          className="border h-11 px-3 rounded mt-2"
                        />
                      </div>
                      <div className="flex flex-col ml-4 w-1/2">
                        <label className="flex text-[#9B9B9B] flex-col">Recipient&apos;s telephone number</label>
                        <input
                          onChange={e => setForm({ ...form, recipientPhone: e.target.value })}
                          type="text"
                          className="border h-11 px-3 rounded mt-2"
                        />
                      </div>
                    </div>
                    <div className="flex mb-2 w-full">
                      <div className="flex flex-col mr-4 w-1/2">
                        <label className="text-[#9B9B9B]">Address</label>
                        <input
                          onChange={e => setForm({ ...form, address: e.target.value })}
                          type="text"
                          className="border h-11 px-3 rounded mt-2"
                        />
                      </div>
                      <div className="flex flex-col ml-4 w-1/2">
                        <label className="flex flex-col text-[#9B9B9B]">Postal code</label>
                        <input
                          onChange={e => setForm({ ...form, postalCode: e.target.value })}
                          type="number"
                          className="border h-11 px-3 rounded mt-2"
                        />
                      </div>
                    </div>
                    <div className="w-1/2 mb-2 flex flex-col">
                      <label className="text-[#9B9B9B]">City or Subdistrict</label>
                      <input
                        onChange={e => setForm({ ...form, city: e.target.value })}
                        type="text"
                        className="border mr-4 h-11 px-3 rounded mt-2"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        value="1"
                        onChange={e => setForm({ ...form, isPrimary: e.target.value })}
                        type="checkbox"
                        className="mr-4 mt-8"
                      />
                      <label className="text-[#9B9B9B]">Make it the primary address</label>
                    </div>
                  </div>
                  {/* footer */}
                  <div className="flex items-center justify-end p-4 mr-5 rounded-b">
                    <button
                      className="border border-[#9B9B9B] text-[#9B9B9B] rounded-2xl h-10 w-44 mr-4"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className=" bg-primary text-white rounded-2xl h-10 w-44 ml-4"
                      type="submit"
                      // onClick={() => setShowModal(false)}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" />
          </form>
        </>
      ) : null}

      {showEditModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-4xl">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* header */}
                <div className="flex flex-col items-start justify-between p-5 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowEditModal(false)}
                  >
                    <span className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <Image src={Close} />
                    </span>
                  </button>
                  <div className="mt-6 mx-auto">
                    <h3 className="text-3xl font-semibold">Edit address</h3>
                  </div>
                </div>
                {/* body */}
                <div className="w-[900px] flex flex-col relative p-6">
                  <div className="w-full mb-2 flex flex-col">
                    <label className="text-[#9B9B9B]">Save address as (ex : home address, office address)</label>
                    <input type="text" className="border h-11 px-3 rounded mt-2" />
                  </div>
                  <div className="flex mb-2 w-full">
                    <div className="flex flex-col mr-4 w-1/2">
                      <label className="text-[#9B9B9B]">Recipient’s name</label>
                      <input type="text" className="border h-11 px-3 rounded mt-2" />
                    </div>
                    <div className="flex flex-col ml-4 w-1/2">
                      <label className="flex text-[#9B9B9B] flex-col">Recipient&apos;s telephone number</label>
                      <input type="text" className="border h-11 px-3 rounded mt-2" />
                    </div>
                  </div>
                  <div className="flex mb-2 w-full">
                    <div className="flex flex-col mr-4 w-1/2">
                      <label className="text-[#9B9B9B]">Address</label>
                      <input type="text" className="border h-11 px-3 rounded mt-2" />
                    </div>
                    <div className="flex flex-col ml-4 w-1/2">
                      <label className="flex flex-col text-[#9B9B9B]">Postal code</label>
                      <input type="number" className="border h-11 px-3 rounded mt-2" />
                    </div>
                  </div>
                  <div className="w-1/2 mb-2 flex flex-col">
                    <label className="text-[#9B9B9B]">City or Subdistrict</label>
                    <input type="text" className="border mr-4 h-11 px-3 rounded mt-2" />
                  </div>
                  <div className="mb-2">
                    <input type="checkbox" className="mr-4 mt-8" />
                    <label className="text-[#9B9B9B]">Make it the primary address</label>
                  </div>
                </div>
                {/* footer */}
                <div className="flex items-center justify-end p-4 mr-5 rounded-b">
                  <button
                    className="text-gray-500 hover:bg-gray-500 hover:text-white active:bg-gray-600 px-20 py-2 rounded-full outline outline-2 focus:outline mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowEditModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className=" text-white bg-red-500 active:bg-red-600 px-20 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={() => setShowEditModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
    </div>
  );
}
