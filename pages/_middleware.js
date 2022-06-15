/* eslint-disable consistent-return */
/* eslint-disable operator-linebreak */
import { NextResponse } from 'next/server';

export default function middleware(req) {
  const { token } = req.cookies;
  const isCustomer = '';

  const { pathname, origin } = req.nextUrl;

  if (
    !token &&
    pathname !== 'auth/login' &&
    pathname !== 'auth/register' &&
    pathname !== 'auth/reset' &&
    pathname !== 'auth/forgot' &&
    pathname !== 'auth/' &&
    pathname !== '/' &&
    pathname !== 'products/:id' &&
    pathname !== '/category'
  ) {
    return NextResponse.redirect(`${origin}/login`);
  }
  if (isCustomer === true && pathname === '/profile/seller') {
    return NextResponse.redirect(`${origin}/profile/customer`);
  }
  if (isCustomer === false && pathname === '/profile/customer') {
    return NextResponse.redirect(`${origin}/profile/seller`);
  }
}
