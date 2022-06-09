import React from 'react'
import Head from 'next/head'
import Card from '../../components/card/card-profile'

export default function customer() {
    return (
        <div>
            <Head>
                <title>Belanja | Profile customer</title>
                <meta name="" content="" />
                <link rel="icon" href="/logo.svg" />
            </Head>
            <div className='flex grid-cols-2'>
                <div className='w-1/3'>hello</div>
                <div className='w-3/4 bg-[#F5F5F5] min-h-screen'>
                    <Card />
                </div>
            </div>
        </div>
    )
}
