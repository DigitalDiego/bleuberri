import React from 'react'
import Head from 'next/head'
import { useCart } from 'react-use-cart'
import { CartProduct } from '../../components'
import { BsCartX } from 'react-icons/bs'
import Link from 'next/link'
import getStripe from '../../lib'
import { formatCurrency } from '../../lib'

export default function Cart() {
  const { isEmpty, emptyCart, items, cartTotal } = useCart()

  const checkout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(items),
    });

    if(response.statusCode === 500) return;
    
    const data = await response.json();

    stripe.redirectToCheckout({ sessionId: data.id });
  }
  return (
    <>

      <Head>
        <title>BleuBerri | Cart</title>
      </Head>

        {
          isEmpty ?
            <div className='w-full h-[85vh] flex justify-center items-center flex-col gap-2 2xl:max-w-7xl 2xl:mx-auto'>
              <BsCartX className='text-8xl'/>
              <p>Your cart is empty</p>
              <Link className='px-4 py-2 text-center text-[linen] bg-gray-800 rounded-lg' href='/products'>Shop</Link>
            </div>
          :
          <>
            <div className='w-full min-h-[80vh] px-[5vw] flex flex-wrap flex-col gap-5 py-5 2xl:max-w-7xl 2xl:mx-auto'>
              <div className='w-full flex justify-between items-center'>
                <p>Your cart</p>
                <p className='text-xs cursor-pointer' onClick={emptyCart}>(Empty)</p>
              </div>
              <div className='w-full grid grid-cols-1 gap-5 place-items-start sm:grid-cols-2 lg:grid-cols-3'>
                {items.map(item => (
                  <CartProduct {...item} key={item.id}/>
                ))}
              </div>
            </div>
            <div className='w-full px-[5vw] mb-5 lg:flex lg:justify-between lg:items-center 2xl:max-w-7xl 2xl:mx-auto'>
              <p className='hidden lg:inline lg:font-bold'>Subtotal: <span>{formatCurrency(cartTotal, 'USD')}</span></p>
              <button className='w-full bg-gray-800 rounded-lg text-[linen] text-center py-2 flex justify-center items-center gap-2 lg:w-1/5' onClick={checkout}>Checkout <span className='text-xs lg:hidden'>( {formatCurrency(cartTotal, 'USD')} )</span></button>
            </div>
          </>
        }

    </>
  )
}
