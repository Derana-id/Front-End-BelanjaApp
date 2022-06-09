import React from 'react';
import AuthNavbar from '../components/navbar/navbar-auth';

export default function Thridlayouts({ children }) {
  return (
    <>
      <AuthNavbar />
      <main>{children}</main>
    </>
  );
}
