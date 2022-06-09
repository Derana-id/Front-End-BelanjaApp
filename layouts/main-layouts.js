import React from 'react';
import MainNavbar from '../components/navbar/navbar-main';

export default function MainLayouts({ children }) {
  return (
    <>
      <MainNavbar />
      <main>{children}</main>
    </>
  );
}
