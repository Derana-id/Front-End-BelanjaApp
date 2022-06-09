import React from 'react'

export default function index(params) {
    return (
        <input className='form-control block w-full px-3 py-1.5 h-12 text-base border border-red-300 rounded my-3'
            placeholder={params.placeholder} />
    )
}