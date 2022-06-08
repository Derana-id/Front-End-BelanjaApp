import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Input from '../../components/Input'
import Link from 'next/link'
import Button from '../../components/Button'

export default function index() {
    const [formShow, setFormShow] = useState(0)

    const setCurrentShow = index => {
        setFormShow(index);
    };
    return (
        <div className='flex min-h-screen'>
            <div className='w-2/6 border-slate-200 rounded-xl mx-auto p-5 flex flex-col items-center relative' >
                <Image src='/logoAuth.svg' width={150} height={100} layout='fixed' />
                <label className='font-bold' >Please login with your account</label>
                <div className='flex w-[230px] flex-row my-8'>
                    <button onClick={() => setCurrentShow(0)} className='border-[1px] rounded-l text-gray w-full h-12 focus:bg-special-warning focus:text-white'>customer</button>
                    <button onClick={() => setCurrentShow(1)} className='border-[1px] rounded-r text-gray w-full h-12 focus:bg-special-warning focus:text-white '>Seller</button>
                </div>
                {
                    formShow === 0 ? (
                        <form className='w-full'>
                            <Input placeholder='Name' />
                            <Input placeholder='Email' />
                            <Input placeholder='Password' />
                            <Button name='Register' />
                            <label className='ml-12 mr-2'>Already have a Tokopedia account?</label>
                            <Link href='/auth/login' className='text-special-warning'>Login</Link>
                        </form>
                    ) : (
                        <form className='w-full'>
                            <Input placeholder='Name' />
                            <Input placeholder='Email' />
                            <Input placeholder='Phone' />
                            <Input placeholder='Store name' />
                            <Input placeholder='Password' />
                            <Button name='Register' />
                            <label className='ml-12 mr-2'>Already have a Tokopedia account?</label>
                            <Link href='/auth/login' className='text-special-warning'>Login</Link>
                        </form>
                    )
                }
            </div>
        </div >

    )
}
