import React,{useState} from 'react'
import Head from 'next/head'
import Input from '../../components/Input/input-profile'
import Image from 'next/image'
import user from '../../assets/img/user.jpg'
import RadioButton from '../../components/Input/radio-button'
import Datepicker from '../../components/Input/datepicker'
import Sidebar from '../../components/sidebar/sidebar-customer'
// import {FiHome} from 'react-icons/fi'
import Modal from '../../components/modals/add-address'

const Customer = () => {
    // const [show, setShow] = useState(false)

    // const setShowModal = (index) => {
    //     setShow(index)
    // }
    // console.log(show)
    return (
        <div>
            <Head>
                <title>Belanja | Profile customer</title>
                <meta name="" content="" />
                <link rel="icon" href="/logo.svg" />
            </Head>
            <div className='flex grid-cols-2'>
                <div className='w-1/4'>
                    <Sidebar name='Johanes Mikael' />
                </div>
                <div className='w-3/4 bg-[#F5F5F5] min-h-screen'>
                    {/* card */}
                    {/* <div className='flex flex-col bg-white rounded w-3/4 h-auto mt-[120px] mx-12'>
                        <div className='flex flex-col m-5 border-b-2 border-[#9B9B9B] pb-5'>
                            <label className='font-semibold mb-2 text-lg'>My Profile</label>
                            <label className='text-[#9B9B9B]'>Manage your profile information</label>
                        </div>
                        <div className='flex w-full'>
                            <form className='flex w-full'>
                                <div className='w-[70%] flex flex-col items-end'>
                                    <Input name='Name' type='text' />
                                    <Input name='Email' type='text' />
                                    <Input name='Phone Number' type='text' />
                                    <div className='flex mr-[150px]'>
                                        <label className='mr-5 text-[#9B9B9B]'>Gender</label>
                                        <RadioButton />
                                    </div>
                                    <Datepicker />
                                </div>
                                <div className='w-[30%] flex flex-col items-center border-l-2 border-gray my-4'>
                                    <Image className='rounded-[100%] mb-9' src={user} layout='fixed' width={100} height={100} />
                                    <input id='images' type='file' className='hidden' />
                                    <label className='border rounded-2xl mt-8 p-2 text-gray' htmlFor='images'>Select image</label>
                                </div>
                            </form>
                        </div>
                        <button className='w-32 h-10 ml-44 mt-5 mb-10 bg-primary text-white active:bg-white active:text-primary border rounded-2xl' >Save</button>
                    </div> */}

                    {/* card order */}
                    <div className='flex flex-col bg-white rounded w-3/4 h-auto mt-[120px] mx-12'>
                        <div className='flex flex-col m-5 border-b-2 border-[#9B9B9B] pb-5'>
                            <label className='font-semibold mb-2 text-lg'>My Profile</label>
                            <label className='text-[#9B9B9B]'>Manage your profile information</label>
                        </div>
                        <div className='flex w-full'>
                            <button className='w-full mx-10 h-20 border-2 border-dashed rounded text-[#9B9B9B]'>Add new address</button>
                        </div>
                        <div className='ml-10 mr-10 my-5 border-2 rounded border-primary h-auto relative flex items-start flex-col'>
                            <label className='font-semibold m-2' htmlFor="">Andreas Jane</label>
                            <p className='text-[#222222] m-2'>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>

                            <button className='text-primary m-2 font-bold'>Change address</button>
                       </div>
                    </div>

                    <Modal />
                    {/* card my order */}
                     {/* <div className='flex flex-col bg-white rounded w-3/4 h-auto mt-[120px] mx-12'>
                        <div className='flex flex-col m-5 border-b-2 border-[#9B9B9B] pb-5'>
                            <label className='font-semibold mb-2 text-lg'>My Profile</label>
                            <label className='text-[#9B9B9B]'>Manage your profile information</label>
                        </div>
                        <div className='flex w-full'>
                            <button className='w-full mx-10 h-20 border-2 border-dashed rounded text-[#9B9B9B]'>Add new address</button>
                        </div>
                        <div className='ml-10 mr-10 my-5 border-2 rounded border-primary h-auto relative flex items-start flex-col'>
                            <label className='font-semibold m-2' htmlFor="">Andreas Jane</label>
                            <p className='text-[#222222] m-2'>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>

                            <button className='text-primary m-2 font-bold'>Change address</button>
                       </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

Customer.layouts = 'MainLayout';
export default Customer;