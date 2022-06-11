import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Input from '../../../components/Input/index';
import Button from '../../../components/Button';

export default function index() {
  return (
    <div className="flex min-h-screen">
      <Head>
        <title>Belanja | Confirm password</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="sm:w-full md:w-2/6 border-slate-200 rounded-xl mx-auto p-5 flex flex-col items-center relative">
        <Image src="/logoAuth.svg" width={150} height={100} layout="fixed" />
        <label className="font-bold mb-10">Reset password</label>
        <form className="w-full">
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Link href="/auth/reset/customer">
            <label className="text-special-warning mr-0 cursor-pointer absolute right-6">Forgot password?</label>
          </Link>
          <Button name="Submit" />
        </form>
      </div>
    </div>
  );
}
