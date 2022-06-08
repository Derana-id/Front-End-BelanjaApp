import React from 'react'

export default function index(params) {
    return (
        <button className='bg-secondary rounded-3xl text-[white] w-full decoration-white h-12 my-10'>{params.name}</button>
    )
}
