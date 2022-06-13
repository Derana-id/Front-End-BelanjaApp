import React from 'react';
import AddAddress from '../../components/modals/add-address';

const addAddress = () => {
  // const toggleModal = () => {
  //   document.getElementById('modal').classList.toggle('hidden');
  // };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <AddAddress />
      </div>
    </>
  );
};

addAddress.layouts = 'MainLayout';
export default addAddress;
