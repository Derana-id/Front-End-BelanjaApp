/* eslint-disable react/jsx-curly-newline */
import React, { useState } from 'react';
import Image from 'next/image';
import { List } from 'react-content-loader';
import Close from '../../../assets/icons/close.svg';

export default function cardShippingAddress(params) {
  const [showModal, setShowModal] = useState();
  const [showEditModal, setShowEditModal] = useState();
  const [idAdress, setIdAddress] = useState('');

  const handleEdit = (e, item) => {
    e.preventDefault();
    if (item) {
      params.setFormAddress({
        label: item.label,
        recipientName: item.recipient_name,
        recipientPhone: item.recipient_phone,
        address: item.address,
        postalCode: item.postal_code,
        city: item.city,
        isPrimary: item.is_primary
      });
      setIdAddress(item.id);
    }
    setShowEditModal(true);
  };

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
        {params.myAddress.isLoading ? (
          <List />
        ) : params.myAddress.error === 'Addres Not Found' ? (
          <button>Add New Address</button>
        ) : params.myAddress.isError ? (
          <div>Error</div>
        ) : params.myAddress.data.length > 0 ? (
          params.myAddress.data.map((item, index) => (
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

              <button type="button" onClick={e => handleEdit(e, item)} className="text-primary m-2 font-bold">
                Change address
              </button>
              <button
                type="button"
                onClick={e => params.DeleteAddress(e, item.id)}
                className="text-primary m-2 font-bold"
              >
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
          <form onSubmit={e => params.AddNewAddress(e)}>
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
                        onChange={e => params.setFormAddress({ ...params.formAddress, label: e.target.value })}
                        type="text"
                        className="border h-11 px-3 rounded mt-2"
                      />
                    </div>
                    <div className="flex mb-2 w-full">
                      <div className="flex flex-col mr-4 w-1/2">
                        <label className="text-[#9B9B9B]">Recipient’s name</label>
                        <input
                          onChange={e =>
                            params.setFormAddress({ ...params.formAddress, recipientName: e.target.value })
                          }
                          type="text"
                          className="border h-11 px-3 rounded mt-2"
                        />
                      </div>
                      <div className="flex flex-col ml-4 w-1/2">
                        <label className="flex text-[#9B9B9B] flex-col">Recipient&apos;s telephone number</label>
                        <input
                          onChange={e =>
                            params.setFormAddress({ ...params.formAddress, recipientPhone: e.target.value })
                          }
                          type="text"
                          className="border h-11 px-3 rounded mt-2"
                        />
                      </div>
                    </div>
                    <div className="flex mb-2 w-full">
                      <div className="flex flex-col mr-4 w-1/2">
                        <label className="text-[#9B9B9B]">Address</label>
                        <input
                          onChange={e => params.setFormAddress({ ...params.formAddress, address: e.target.value })}
                          type="text"
                          className="border h-11 px-3 rounded mt-2"
                        />
                      </div>
                      <div className="flex flex-col ml-4 w-1/2">
                        <label className="flex flex-col text-[#9B9B9B]">Postal code</label>
                        <input
                          onChange={e => params.setFormAddress({ ...params.formAddress, postalCode: e.target.value })}
                          type="number"
                          className="border h-11 px-3 rounded mt-2"
                        />
                      </div>
                    </div>
                    <div className="w-1/2 mb-2 flex flex-col">
                      <label className="text-[#9B9B9B]">City or Subdistrict</label>
                      <input
                        onChange={e => params.setFormAddress({ ...params.formAddress, city: e.target.value })}
                        type="text"
                        className="border mr-4 h-11 px-3 rounded mt-2"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        value="1"
                        onChange={e => params.setFormAddress({ ...params.formAddress, isPrimary: e.target.value })}
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
                    <input
                      type="text"
                      className="border h-11 px-3 rounded mt-2"
                      value={params.formAddress.label}
                      onChange={e => params.setFormAddress({ ...params.formAddress, label: e.target.value })}
                    />
                  </div>
                  <div className="flex mb-2 w-full">
                    <div className="flex flex-col mr-4 w-1/2">
                      <label className="text-[#9B9B9B]">Recipient’s name</label>
                      <input
                        type="text"
                        className="border h-11 px-3 rounded mt-2"
                        value={params.formAddress.recipientName}
                        onChange={e => params.setFormAddress({ ...params.formAddress, recipientName: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col ml-4 w-1/2">
                      <label className="flex text-[#9B9B9B] flex-col">Recipient&apos;s telephone number</label>
                      <input
                        type="text"
                        className="border h-11 px-3 rounded mt-2"
                        value={params.formAddress.recipientPhone}
                        onChange={e => params.setFormAddress({ ...params.formAddress, recipientPhone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="flex mb-2 w-full">
                    <div className="flex flex-col mr-4 w-1/2">
                      <label className="text-[#9B9B9B]">Address</label>
                      <input
                        type="text"
                        className="border h-11 px-3 rounded mt-2"
                        value={params.formAddress.address}
                        onChange={e => params.setFormAddress({ ...params.formAddress, address: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col ml-4 w-1/2">
                      <label className="flex flex-col text-[#9B9B9B]">Postal code</label>
                      <input
                        type="number"
                        className="border h-11 px-3 rounded mt-2"
                        value={params.formAddress.postalCode}
                        onChange={e => params.setFormAddress({ ...params.formAddress, postalCode: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="w-1/2 mb-2 flex flex-col">
                    <label className="text-[#9B9B9B]">City or Subdistrict</label>
                    <input
                      type="text"
                      className="border mr-4 h-11 px-3 rounded mt-2"
                      value={params.formAddress.city}
                      onChange={e => params.setFormAddress({ ...params.formAddress, city: e.target.value })}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="checkbox"
                      className="mr-4 mt-8"
                      checked={params.formAddress.isPrimary === 1}
                      onChange={e => {
                        if (e.target.checked) {
                          params.setFormAddress({ ...params.formAddress, isPrimary: 1 });
                        } else {
                          params.setFormAddress({ ...params.formAddress, isPrimary: 0 });
                        }
                      }}
                    />
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
                    onClick={e => params.EditAddress(e, idAdress)}
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
