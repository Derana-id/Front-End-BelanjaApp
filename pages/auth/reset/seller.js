import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Input from '../../../components/Input'
import Link from 'next/link'
import Button from '../../../components/Button'

export default function index() {
    return (
        <div className='flex min-h-screen'>
            <div className='sm:w-full md:w-2/6 border-slate-200 rounded-xl mx-auto p-5 flex flex-col items-center relative' >
                <Image src='/logoAuth.svg' width={150} height={100} layout='fixed' />
                <label className='font-bold mb-10' >Please login with your account</label>
                <form className='w-full'>
                    <Input placeholder='Email' />
                    <Link href=''>
                        <label className='text-special-warning mr-0 absolute right-6'>Forgot password?</label>
                    </Link>
                    <Button name='Login' />
                    <label className='ml-2 sm:ml-2 md:ml-12 lg:ml-12 mr-2'>Don't have a Tokopedia account?</label>
                    <Link href='/auth/register' className='text-special-warning'>Register</Link>
                </form>
            </div>
        </div >
    )
}
