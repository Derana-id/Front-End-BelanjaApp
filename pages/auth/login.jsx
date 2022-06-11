import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import JwtDecode from 'jwt-decode';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Input from '../../components/Input';
import { login } from '../../redux/actions/auth';
import { toastify } from '../../utils/toastify';
import Button from '../../components/Button';

export default function index() {
  const router = useRouter();
  const [formShow, setFormShow] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const setCurrentShow = index => {
    setFormShow(index);
  };

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!form.email || !form.password) {
      Swal.fire({
        title: 'Error!',
        text: 'All field must be filled!',
        icon: 'error'
      });
    } else {
      setIsLoading(true);

      login(form)
        .then(res => {
          Cookies.set('token', res.token);

          const decoded = JwtDecode(res.token);

          if (decoded.level === 0) {
            Swal.fire({
              title: 'Error!',
              text: "You don't have permission!",
              icon: 'success'
            });
          } else if (decoded.level === 1) {
            Swal.fire({
              title: 'Success!',
              text: res.message,
              icon: 'success'
            }).then(() => router.push('/profile/seller'));
          } else {
            Swal.fire({
              title: 'Success!',
              text: res.message,
              icon: 'success'
            }).then(() => router.push('/profile/customer'));
          }
        })
        .catch(err => {
          if (err.response.data.code === 422) {
            const { error } = err.response.data;
            error.map(item => toastify(item, 'error'));
          } else {
            Swal.fire({
              title: 'Error!',
              text: err.response.data.message,
              icon: 'error'
            });
          }
        })
        .finally(() => {
          setForm({
            email: '',
            password: ''
          });
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="flex min-h-screen">
      <Head>
        <title>Belanja | Login</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="sm:w-full md:w-2/6 border-slate-200 rounded-xl mx-auto p-5 flex flex-col items-center relative">
        <Image src="/logoAuth.svg" width={150} height={100} layout="fixed" />
        <label className="font-bold">Please login with your account</label>
        {formShow === 0 ? (
          <div className="flex w-[230px] flex-row my-8">
            <button
              onClick={() => setCurrentShow(0)}
              className="border-solid-gray border-[1px] rounded w-full h-12 bg-primary text-white"
            >
              customer
            </button>
            <button
              onClick={() => setCurrentShow(1)}
              className="border-solid-gray border-[1px] rounded text-gray w-full h-12 "
            >
              Seller
            </button>
          </div>
        ) : (
          <div className="flex w-[230px] flex-row my-8">
            <button
              onClick={() => setCurrentShow(0)}
              className="border-solid-gray border-[1px] rounded text-gray w-full h-12"
            >
              customer
            </button>
            <button
              onClick={() => setCurrentShow(1)}
              className="border-solid-gray border-[1px] rounded w-full h-12 bg-primary text-white"
            >
              Seller
            </button>
          </div>
        )}
        {formShow === 0 ? (
          <form className="w-full" onSubmit={handleSubmit}>
            <Input placeholder="Email" id="email" type="email" value={form.email} onChange={handleChange} />
            <Input placeholder="Password" id="password" type="password" value={form.password} onChange={handleChange} />
            <Link href="/auth/reset/customer">
              <label className="text-special-warning mr-0 cursor-pointer absolute right-6">Forgot password?</label>
            </Link>

            {isLoading ? <Button disabled="disabled" name="Loading" /> : <Button name="Login" type="submit" />}
            <label className="ml-2 sm:ml-2 md:ml-12 lg:ml-12 mr-2">Don&apos;t have a Tokopedia account?</label>
            <Link href="/auth/register" className="text-special-warning">
              Register
            </Link>
          </form>
        ) : (
          <form className="w-full">
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Link href="/auth/reset/seller">
              <label className="text-special-warning cursor-pointer mr-0 absolute right-6">Forgot password?</label>
            </Link>
            <Button name="Login" />
            <label className="ml-2 sm:ml-2 md:ml-12 lg:ml-12 mr-2">Don&apos;t have a Tokopedia account?</label>
            <Link href="/auth/register" className="text-special-warning">
              Register
            </Link>
          </form>
        )}
      </div>
    </div>
  );
}
