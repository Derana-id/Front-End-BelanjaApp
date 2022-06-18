import React from 'react';
import SecondNavbar from '../components/navbar/navbar-second';

export default function SecondLayouts({ children }) {
  return (
    <>
      <SecondNavbar />
      <main>{children}</main>
    </>
  );
}
