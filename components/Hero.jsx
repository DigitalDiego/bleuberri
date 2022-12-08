import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className='w-full h-[85vh] flex justify-center items-center flex-col px-[5vw] gap-5 2xl:max-w-7xl 2xl:mx-auto'>
        
        <p className='font-bold text-4xl text-center'>What you want at <br/>a price you need</p>
    
        <Link className='w-3/5 py-2 rounded-lg bg-gray-800 text-[linen] text-center sm:w-2/5 lg:w-1/5' href='/products'>Shop</Link>

    </div>
  )
}
