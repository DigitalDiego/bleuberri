import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai'
import { useCart } from 'react-use-cart'

export default function Navbar() {
  const { totalItems } = useCart()
  const [navBtn, setNavBtn] = useState(false)

  const handleNavBtn = () => {
    setNavBtn(!navBtn)
  }
  const cn = (...classes) => {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div className='sticky top-0 right-0 z-[4000] w-full h-[15vh] flex justify-between items-center px-[5vw] bg-gray-800 text-[linen] 2xl:h-[10vh]'>
      <AiOutlineSearch className='hidden text-lg lg:inline'/>
      <div className='flex items-center gap-[50px]'>
        <Link className='hidden lg:inline' href='/'>Home</Link>
        <Link className='hidden lg:inline' href='/products'>Shop All</Link>
        <Link className='text-2xl font-lobster' href='/'>BleuBerri</Link>
        <Link className='hidden lg:inline' href='/contact'>Contact</Link>
        <Link className='hidden lg:inline' href='/about'>About</Link>
      </div>
      <div className='flex items-cenetr gap-2'>
        <Link href='/cart' className='flex items-center gap-2'>
          <AiOutlineShoppingCart className='text-lg'/>
          {totalItems > 0 && <p>( {totalItems} )</p>}
        </Link>
        <AiOutlineMenu className='text-lg cursor-pointer lg:hidden' onClick={handleNavBtn}/>
      </div>

      {/* Sidebar */}
      <div className={cn('fixed top-[15vh] right-0 w-full h-[85vh] bg-gray-800 flex justify-start items-start flex-col px-[5vw] duration-[.8s] lg:hidden', navBtn ? 'translate-x-0' : 'translate-x-[100%]')}>
        <Link className='w-full flex jsutify-start items-center h-[10vh] border-b-solid border-b-[1px] border-b-[linen] text-lg' href='/' onClick={handleNavBtn}>Home</Link>
        <Link className='w-full flex jsutify-start items-center h-[10vh] border-b-solid border-b-[1px] border-b-[linen] text-lg' href='/products' onClick={handleNavBtn}>Shop All</Link>
        <Link className='w-full flex jsutify-start items-center h-[10vh] border-b-solid border-b-[1px] border-b-[linen] text-lg' href='/contact' onClick={handleNavBtn}>Contact</Link>
        <Link className='w-full flex jsutify-start items-center h-[10vh] border-b-solid border-b-[1px] border-b-[linen] text-lg' href='/about' onClick={handleNavBtn}>About</Link>
      </div>
    </div>
  )
}
