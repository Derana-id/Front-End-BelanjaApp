import React from 'react';
import Image from 'next/image';
import Input from '../../Input/input-profile';
import user from '../../../assets/img/user.jpg';
import TextArea from '../../Input/input-textarea-profile';

export default function cardSeller() {
  return (
    <div className="flex flex-col bg-white rounded w-3/4 h-auto mt-[120px] mx-12">
      <div className="flex flex-col m-5 border-b-2 border-[#9B9B9B] pb-5">
        <label className="font-semibold mb-2 text-lg">My profile store</label>
        <label className="text-[#9B9B9B]">Manage your profile information</label>
      </div>
      <div className="flex w-full">
        <form className="flex w-full">
          <div className="w-[70%] flex flex-col items-end">
            <Input name="Store name" type="text" />
            <Input name="Email" type="text" />
            <Input name="Phone Number" type="text" />
            <TextArea name="Store descripiton" />
          </div>
          <div className="w-[30%] flex flex-col items-center border-l-2 border-gray my-4">
            <Image className="rounded-[100%] mb-9" src={user} layout="fixed" width={100} height={100} />
            <input id="images" type="file" className="hidden" />
            <label className="border rounded-2xl mt-8 p-2 text-gray" htmlFor="images">
              Select image
            </label>
          </div>
        </form>
      </div>
      <button className="w-32 h-10 ml-40 mt-5 mb-10 bg-primary text-white active:bg-white active:text-primary border rounded-2xl">
        Save
      </button>
    </div>
  );
}
