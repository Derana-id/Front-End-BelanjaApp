import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import JwtDecode from 'jwt-decode';
import Close from '../../../assets/icons/close.svg';
import { createAddressBuyer, updateAddressBuyer, getAddress } from '../../../redux/actions/userProfile';
import { getDetailAddress } from '../../../redux/actions/address';
import { toastify } from '../../../utils/toastify';

export default function CardAddress() {
  const [showModal, setShowModal] = useState();
  const [showEditModal, setShowEditModal] = useState();
  const [id, setID] = useState('');

  const dispatch = useDispatch();
  const myAddress = useSelector((state) => {
    return state.myAddress;
  });
  const myDetailAddress = useSelector((state) => {
    return state.myDetailAddress;
  });

  useEffect(() => {
    dispatch(getAddress);
    // dispatch(getDetailAddress(id));
  }, [dispatch]);

  const clickDetail = (e, id) => {
    e.preventDefault();

    dispatch(getDetailAddress(id));
    // console.log(myDetailAddress);
    setShowEditModal(true);
  };

  const [form, setForm] = useState({
    label: '',
    recipientName: '',
    recipientPhone: '',
    address: '',
    postalCode: '',
    city: '',
    isPrimary: ''
  });

  useEffect(() => {
    if (myDetailAddress.data) {
      setForm({
        ...form,
        label: myDetailAddress.data.label,
        recipientName: myDetailAddress.data.recipient_name,
        recipientPhone: myDetailAddress.data.recipient_phone,
        address: myDetailAddress.data.address,
        postalCode: myDetailAddress.data.postal_code,
        city: myDetailAddress.data.city,
        isPrimary: myDetailAddress.data.is_primary
      });
    }
  }, [myDetailAddress]);

  console.log(myDetailAddress);

  const onAddAdress = (e) => {
    e.preventDefault();

    createAddressBuyer(form)
      .then((res) => {
        Swal.fire({
          title: 'success',
          text: res.message,
          icon: 'success'
        });
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

  const onEditAddress = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('label', form.label);
    formData.append('recipientName', form.recipientName);
    formData.append('recipientPhone', form.recipientPhone);
    formData.append('address', form.address);
    formData.append('postalCode', form.postalCode);
    formData.append('city', form.city);

    updateAddressBuyer(form)
      .then((res) => {
        Swal.fire({
          title: 'success',
          text: res.message,
          icon: 'success'
        });
        dispatch(getDetailAddress(id));
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
  // console.log(id)

  return (
    <div>
      <div className="flex flex-col bg-white rounded w-3/4 pb-8 h-auto mt-[30px] mx-24">
        <div className="flex w-full">
          <button onClick={() => setShowModal(true)} className="w-full mx-10 h-20 border-2 border-dashed rounded text-[#9B9B9B]">
            Add new address
          </button>
        </div>
        {myAddress.isLoading ? (
          <div>Loading</div>
        ) : (
          myAddress.data.map((items, index) => (
            <div key={index} className="relative flex flex-col items-start h-auto my-5 ml-10 mr-10 border-2 rounded border-primary">
              <label className="m-2 font-semibold" htmlFor="">
                {items.recipient_name}
              </label>
              <p className="text-[#222222] m-2">
                {items.address} [{items.label}], {items.recipient_phone}, {items.city}, {items.postal_code}
              </p>

              <button type="button" onClick={(e) => clickDetail(e, items.id)} className="m-2 font-bold text-primary">Change address</button>
              <button type="button" className="m-2 font-bold text-gray">Delete address</button>
            </div>
          ))
        )}

      </div>
      {showModal ? (
        <>
          <form onSubmit={(e) => onAddAdress(e)}>
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
                  <div className="w-[900px] flex flex-col relative p-6">
                    <div className="flex flex-col w-full mb-2">
                      <label className="text-[#9B9B9B]">Save address as (ex : home address, office address)</label>
                      <input onChange={(e) => setForm({ ...form, label: e.target.value })} type="text" className="px-3 mt-2 border rounded h-11" />
                    </div>
                    <div className="flex w-full mb-2">
                      <div className="flex flex-col w-1/2 mr-4">
                        <label className="text-[#9B9B9B]">Recipient&apos;s name</label>
                        <input onChange={(e) => setForm({ ...form, recipientName: e.target.value })} type="text" className="px-3 mt-2 border rounded h-11" />
                      </div>
                      <div className="flex flex-col w-1/2 ml-4">
                        <label className="flex text-[#9B9B9B] flex-col">Recipient&apos;s telephone number</label>
                        <input onChange={(e) => setForm({ ...form, recipientPhone: e.target.value })} type="text" className="px-3 mt-2 border rounded h-11" />
                      </div>
                    </div>
                    <div className="flex w-full mb-2">
                      <div className="flex flex-col w-1/2 mr-4">
                        <label className="text-[#9B9B9B]">Address</label>
                        <input onChange={(e) => setForm({ ...form, address: e.target.value })} type="text" className="px-3 mt-2 border rounded h-11" />
                      </div>
                      <div className="flex flex-col w-1/2 ml-4">
                        <label className="flex flex-col text-[#9B9B9B]">Postal code</label>
                        <input onChange={(e) => setForm({ ...form, postalCode: e.target.value })} type="number" className="px-3 mt-2 border rounded h-11" />
                      </div>
                    </div>
                    <div className="flex flex-col w-1/2 mb-2">
                      <label className="text-[#9B9B9B]">City or Subdistrict</label>
                      <input onChange={(e) => setForm({ ...form, city: e.target.value })} type="text" className="px-3 mt-2 mr-4 border rounded h-11" />
                    </div>
                    <div className="mb-2">
                      <input value="1" onChange={(e) => setForm({ ...form, isPrimary: e.target.value })} type="checkbox" className="mt-8 mr-4" />
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
                      className="h-10 ml-4 text-white bg-primary rounded-2xl w-44"
                      type="submit"
                      // onClick={() => setShowModal(false)}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25" />
          </form>
        </>
      ) : null}
      {showEditModal ? (
        <>
          <form onSubmit={(e) => onEditAddress(e)}>
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
                  <div className="w-[900px] flex flex-col relative p-6">
                    <div className="flex flex-col w-full mb-2">
                      <label className="text-[#9B9B9B]">Save address as (ex : home address, office address)</label>
                      <input onChange={(e) => setForm({ ...form, label: e.target.value })} defaultValue={form.label} type="text" className="px-3 mt-2 border rounded h-11" />
                    </div>
                    <div className="flex w-full mb-2">
                      <div className="flex flex-col w-1/2 mr-4">
                        <label className="text-[#9B9B9B]">Recipient’s name</label>
                        <input onChange={(e) => setForm({ ...form, recipientName: e.target.value })} defaultValue={form.recipientName} type="text" className="px-3 mt-2 border rounded h-11" />
                      </div>
                      <div className="flex flex-col w-1/2 ml-4">
                        <label className="flex text-[#9B9B9B] flex-col">Recipient&apos;s telephone number</label>
                        <input onChange={(e) => setForm({ ...form, recipientPhone: e.target.value })} defaultValue={form.recipientPhone} type="text" className="px-3 mt-2 border rounded h-11" />
                      </div>
                    </div>
                    <div className="flex w-full mb-2">
                      <div className="flex flex-col w-1/2 mr-4">
                        <label className="text-[#9B9B9B]">Address</label>
                        <input onChange={(e) => setForm({ ...form, address: e.target.value })} defaultValue={form.address} type="text" className="px-3 mt-2 border rounded h-11" />
                      </div>
                      <div className="flex flex-col w-1/2 ml-4">
                        <label className="flex flex-col text-[#9B9B9B]">Postal code</label>
                        <input onChange={(e) => setForm({ ...form, postalCode: e.target.value })} defaultValue={form.postalCode} type="number" className="px-3 mt-2 border rounded h-11" />
                      </div>
                    </div>
                    <div className="flex flex-col w-1/2 mb-2">
                      <label className="text-[#9B9B9B]">City or Subdistrict</label>
                      <input onChange={(e) => setForm({ ...form, city: e.target.value })} defaultValue={form.city} type="text" className="px-3 mt-2 mr-4 border rounded h-11" />
                    </div>
                    <div className="mb-2">
                      <input defaultValue={form.isPrimary} onChange={(e) => setForm({ ...form, isPrimary: e.target.value })} type="checkbox" className="mt-8 mr-4" />
                      <label className="text-[#9B9B9B]">Make it the primary address</label>
                    </div>
                  </div>
                  {/* footer */}
                  <div className="flex items-center justify-end p-4 mr-5 rounded-b">
                    <button
                      className="border border-[#9B9B9B] text-[#9B9B9B] rounded-2xl h-10 w-44 mr-4"
                      type="button"
                      onClick={() => setShowEditModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="h-10 ml-4 text-white bg-primary rounded-2xl w-44"
                      type="submit"
                      // onClick={() => setShowModal(false)}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25" />
          </form>
        </>
      ) : null}
    </div>
  );
}
