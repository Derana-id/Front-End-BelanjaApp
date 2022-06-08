import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Input from '../../components/Input'
import Link from 'next/link'
import Button from '../../components/Button'

export default function index() {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='w-2/6 border-slate-200 rounded-xl mx-auto my-auto p-5 flex flex-col items-center relative' >
                <Image src='/logoAuth.svg' width={150} height={100} layout='fixed' />
                <label className='font-bold' >Please login with your account</label>
                <div className='flex w-[230px] flex-row my-8'>
                    <button className='border-solid rounded text-[white] w-full h-12 focus:bg-secondary'>customer</button>
                    <button className='border-solid rounded text-[white] w-full h-12 focus:bg-secondary text-white'>Seller</button>
                </div>
                <Input placeholder='Email' />
                <Input placeholder='Password' />
                <Link href=''>
                    <label className='text-secondary mr-0 absolute right-6 bottom-[120px]'>Forgot password?</label>
                </Link>
                <Button name='Login' />
            </div>
        </div >

    )
}
