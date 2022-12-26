import React from 'react'

export default function Footer() {
  return (
    <div className='w-full px-[5vw] bg-gray-800 py-[5vw] flex justify-center items-center flex-col lg:flex-row'>
      <div className='w-full lg:w-1/2 h-[40vh] flex justify-center lg:justify-start items-center'>
        <p className='text-4xl text-[linen] font-lobster'>BleuBerri</p>
      </div>
      <div className='w-full lg:w-1/2 flex'>
        <div className='w-1/2 flex flex-col justify-start items-start gap-2 text-[linen]'>
          <p className='font-bold text-lg'>Quick links</p>
          <p>Home</p>
          <p>Shop All</p>
          <p>Contact</p>
          <p>About</p>
        </div>
        <div className='w-1/2 flex flex-col justify-start items-start gap-2 text-[linen]'>
          <p className='font-bold text-lg'>Information</p>
          <p>Shipping / Returns</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  )
}
