import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { toastify } from '../../utils/toastify';
import { sweetAlert } from '../../utils/sweetalert';
import { forgot } from '../../redux/actions/auth';
import Input from '../../components/Input/index';
import Button from '../../components/Button';
import logoAuth from '../../public/logoAuth.png';

export default function index() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!email) {
      sweetAlert('All field must be filled!', 'error');
    } else {
      setIsLoading(true);

      forgot({ email })
        .then(res => {
          router.push('/auth/login');
          sweetAlert(res.message);
        })
        .catch(err => {
          if (err.response.data.code === 422) {
            const { error } = err.response.data;
            error.map(item => toastify(item, 'error'));
          } else {
            sweetAlert(err.response.data.message, 'error');
          }
        })
        .finally(() => {
          setEmail('');
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="flex min-h-screen">
      <Head>
        <title>Belanja | Forgot Password</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="sm:w-full md:w-2/6 border-slate-200 rounded-xl mx-auto p-5 flex flex-col items-center relative">
        <Image src={logoAuth} width={150} height={60} objectFit="center" layout="fixed" />
        <label className="font-bold mb-10 mt-4">Reset Password</label>
        <form className="w-full" onSubmit={handleSubmit}>
          <Input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          <Link href="/auth/confirm/seller">
            <label className="text-special-warning mr-0 absolute right-6">Forgot password?</label>
          </Link>
          {isLoading ? <Button disabled="disabled" name="Loading" /> : <Button name="Submit" type="submit" />}
          <label className="ml-2 sm:ml-2 md:ml-12 lg:ml-12 mr-2">Don&apos;t have a Tokopedia account?</label>
          <Link href="/auth/register" className="text-special-warning">
            Register
          </Link>
        </form>
      </div>
    </div>
  );
}
