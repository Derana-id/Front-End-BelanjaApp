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

  if (
    !token &&
    pathname !== '/auth/login' &&
    pathname !== '/auth/register' &&
    pathname !== '/auth/reset/' &&
    pathname !== '/auth/forgot' &&
    pathname !== '/auth/' &&
    pathname !== '/' &&
    pathname !== '/products/[id]' &&
    pathname !== '/category'
  ) {
    return NextResponse.redirect(`${origin}/auth/login`);
  }
  if (decoded.level === 2 && pathname === '/profile/seller') {
    return NextResponse.redirect(`${origin}/profile/customer`);
  }
  if (decoded.level === 1 && pathname === '/profile/customer') {
    return NextResponse.redirect(`${origin}/profile/seller`);
  }
}
