import React, { useEffect } from 'react'
import { useCart } from 'react-use-cart'
import Link from 'next/link'

export default function Success() {
  const { emptyCart } = useCart()

  useEffect(() => {
    emptyCart()    
  }, [])
  return (
    <div className='w-full h-[85vh] flex justify-center items-center flex-col gap-2'>
        <p className='text-4xl font-bold text-center'>Thank you for your purchase!</p>
        <Link className='w-3/5 py-2 rounded-lg text-[linen] text-center bg-gray-800' href='/'>Home</Link>
    </div>
  )
}
