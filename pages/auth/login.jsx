import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Input from '../../components/Input';
import Link from 'next/link';
import Button from '../../components/Button';

export default function index() {
  const [formShow, setFormShow] = useState(0);

    const setCurrentShow = index => {
        setFormShow(index);
    };
    return (
        <div className='flex min-h-screen'>
            <Head>
                <title>Belanja | Login</title>
                <meta name="" content="" />
                <link rel="icon" href="/logo.svg" />
            </Head>
            <div className='sm:w-full md:w-2/6 border-slate-200 rounded-xl mx-auto p-5 flex flex-col items-center relative' >
                <Image src='/logoAuth.svg' width={150} height={100} layout='fixed' />
                <label className='font-bold' >Please login with your account</label>
                {formShow === 0 ? (
                    <div className='flex w-[230px] flex-row my-8'>
                        <button onClick={() => setCurrentShow(0)} className='border-solid-gray border-[1px] rounded w-full h-12 bg-primary text-white'>customer</button>
                        <button onClick={() => setCurrentShow(1)} className='border-solid-gray border-[1px] rounded text-gray w-full h-12 '>Seller</button>
                    </div>
                ) : (
                    <div className='flex w-[230px] flex-row my-8'>
                        <button onClick={() => setCurrentShow(0)} className='border-solid-gray border-[1px] rounded text-gray w-full h-12'>customer</button>
                        <button onClick={() => setCurrentShow(1)} className='border-solid-gray border-[1px] rounded w-full h-12 bg-primary text-white'>Seller</button>
                    </div>
                )}
                {
                    formShow === 0 ? (
                        <form className='w-full'>
                            <Input placeholder='Email' />
                            <Input placeholder='Password' />
                            <Link href='/auth/reset/customer'>
                                <label className='text-special-warning mr-0 cursor-pointer absolute right-6'>Forgot password?</label>
                            </Link>
                            <Button name='Login' />
                            <label className='ml-2 sm:ml-2 md:ml-12 lg:ml-12 mr-2'>Don't have a Tokopedia account?</label>
                            <Link href='/auth/register' className='text-special-warning'>Register</Link>
                        </form>
                    ) : (
                        <form className='w-full'>
                            <Input placeholder='Email' />
                            <Input placeholder='Password' />
                            <Link href='/auth/reset/seller'>
                                <label className='text-special-warning cursor-pointer mr-0 absolute right-6'>Forgot password?</label>
                            </Link>
                            <Button name='Login' />
                            <label className='ml-2 sm:ml-2 md:ml-12 lg:ml-12 mr-2'>Don't have a Tokopedia account?</label>
                            <Link href='/auth/register' className='text-special-warning'>Register</Link>
                        </form>
                    )
                }
            </div>
        </div >

    )
}
