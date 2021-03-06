/* eslint-disable consistent-return */
/* eslint-disable operator-linebreak */
import { NextResponse } from 'next/server';
import JwtDecode from 'jwt-decode';

export default function middleware(req) {
  const { token } = req.cookies;

  let decoded = '';
  if (token) {
    decoded = JwtDecode(token);
  }

  const { pathname, origin } = req.nextUrl;

  if (!token) {
    if (
      pathname !== '/' &&
      pathname !== '/auth/login' &&
      pathname !== '/auth/register' &&
      pathname !== '/auth/forgot' &&
      !pathname.match(/\/auth\/reset\/[\w]*/gi) &&
      pathname !== '/category'
    ) {
      return NextResponse.redirect(`${origin}/auth/login`);
    }
  }

  if (token) {
    if (
      pathname === '/auth/login' ||
      pathname === '/auth/register' ||
      pathname === '/auth/forgot' ||
      pathname.match(/\/auth\/reset\/[\w]*/gi)
    ) {
      return NextResponse.redirect(`${origin}`);
    }
  }

  // validate customer
  if (decoded.level === 2 && pathname === '/profile/seller') {
    return NextResponse.redirect(`${origin}/profile/customer`);
  }

  // validate seller
  if (
    decoded.level === 1 &&
    (pathname === '/profile/customer' ||
      pathname === '/mybag' ||
      pathname === '/' ||
      pathname === '/checkout' ||
      pathname === '/products')
  ) {
    return NextResponse.redirect(`${origin}/profile/seller`);
  }
}
