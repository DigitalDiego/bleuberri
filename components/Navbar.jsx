import React from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useCart } from 'react-use-cart'

export default function Navbar() {
  const { totalItems } = useCart()
  return (
    <div className='sticky top-0 right-0 w-full h-[15vh] flex justify-between items-center px-[5vw] bg-[linen] 2xl:max-w-7xl 2xl:mx-auto'>

        <Link className='font-lobster text-4xl' href='/'>BleuBerri</Link>

        <Link href='/cart'>
            <button className='p-2 rounded-lg bg-gray-800 text-[linen] flex justify-center items-center gap-2'>
                <AiOutlineShoppingCart/>
                {totalItems > 0 && <span className='text-xs'>( {totalItems} )</span>}
            </button>
        </Link>

    </div>
  )
}
