import React from 'react'
import Image from 'next/image'
import user from '../../assets/img/user.jpg'
import edit from '../../assets/icons/edit.svg'
import myaccount from '../../assets/icons/myaccount.svg'
import address from '../../assets/icons/address.svg'
import myorder from '../../assets/icons/order.svg'

export default function sidebarCustomer(params) {
    return (
        <div className='w-full flex justify-center items-center mr-10 flex-col mt-[120px]'>
            <div className='flex items-center'>
                <Image src={user} width={60} height={60} className='rounded-full' />
                <div className='flex flex-col ml-2'>
                    <label className='ml-3 mb-2'>{params.name}</label>
                    <Image className='cursor-pointer' src={edit} />
                </div>
            </div>
            <div className='flex flex-col justify-center mt-10'>
                <div className='flex items-center m-2'>
                    {/* <Image className='bg-[#456BF3] p-7 rounded-full' width={30} height={30} src={myaccount} /> */}
                    <div className='h-9 w-9 bg-[#456BF3]  rounded-full relative flex justify-center items-center'>
                        <Image className='absolute border-none p-7 rounded-full' width={20} height={20} src={myaccount} />
                    </div>
                    <label className='ml-3  cursor-pointer'>My account</label>
                </div>
                <div className='flex items-center m-2'>
                    <div className='h-9 w-9 bg-[#F36F45]  rounded-full relative flex justify-center items-center'>
                        <Image className='absolute border-none p-7 rounded-full' width={20} height={20} src={address} />
                    </div>
                    <label className='ml-3  cursor-pointer'>Shipping Adrress</label>
                </div>
                <div className='flex items-center m-2'>
                    <div className='h-9 w-9 bg-[#F3456F]  rounded-full relative flex justify-center items-center'>
                        <Image className='absolute border-none p-7 rounded-full' width={20} height={20} src={myorder} />
                    </div>
                    <label className='ml-3  cursor-pointer'>My order</label>
                </div>
            </div>
        </div>
    )
}
