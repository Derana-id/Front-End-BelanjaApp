import React from 'react';
import Image from 'next/image';
import Input from '../../Input/input-profile';
import RadioButton from '../../Input/radio-button';
import Datepicker from '../../Input/datepicker';
import user from '../../../assets/img/user.jpg';

export default function cardMyprofile() {
  return (
    <div>
      <div className="flex flex-col bg-white rounded w-full h-auto mt-[120px] mx-2 sm:w-full md:w-3/4 lg:w-3/4 sm:mx-2 md:mx-12 lg:mx-12">
        <div className="flex flex-col m-5 border-b-2 border-[#9B9B9B] pb-5">
          <label className="font-semibold mb-2 text-lg">My Profile</label>
          <label className="text-[#9B9B9B]">Manage your profile information</label>
        </div>
        <div className="flex w-full">
          <form className="flex w-full">
            <div className="w-[70%] flex flex-col items-end">
              <Input name="Name" type="text" />
              <Input name="Email" type="text" />
              <Input name="Phone Number" type="text" />
              <div className="flex mr-0 sm:mr-0 md:mr-[150px] lg-mr-[150px] xl:mr-[150px]">
                <label className="mr-5 text-[#9B9B9B]">Gender</label>
                <RadioButton />
              </div>
              <Datepicker />
            </div>
            <div className="w-[30%] flex flex-col items-center border-l-2 border-gray my-4">
              <Image className="rounded-[100%] mb-9" src={user} layout="fixed" width={100} height={100} />
              <input id="images" type="file" className="hidden" />
              <label className="border w-[70%] sm:w-[70%] md:w-[80%] lg:w-[80%] pl-4 sm:pl-4 md:pl-[20%] lg:pl-[20%] rounded-2xl mt-8 p-2 text-gray" htmlFor="images">Select image</label>
            </div>
          </form>
        </div>
        <button className="w-32 h-10 ml-28 sm:ml-28 md:ml-44 lg:ml-44 mt-5 mb-10 bg-primary text-white active:bg-white active:text-primary border rounded-2xl">Save</button>
      </div>
    </div>
  );
}
