import React, { useState } from 'react'
import { data } from '../../data'
import { formatCurrency } from '../../lib'
import Image from 'next/image'
import { useCart } from 'react-use-cart'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import Head from 'next/head'

export default function ProductDetails({ id }) {
  const product = data.filter(item => item.id === id)
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)
  
  const add = () => {
    setQty(qty => qty + 1)
  }
  const sub = () => {
    setQty(qty => qty - 1)
  }
 
  return (

    <>

      <Head>
        <title>BleuBerri | {product[0].name}</title>
      </Head>

      <div className='w-full px-[5vw] py-5 flex justify-start items-start flex-col gap-5 sm:w-4/5 sm:mx-auto lg:flex-row lg:h-[85vh] lg:justify-center lg:items-center lg:w-full lg:px-[10vw] 2xl:max-w-7xl 2xl:mx-auto 2xl:px-[5vw]'>

        <div className='w-full lg:w-1/2 lg:h-full lg:grid lg:place-items-center'>

          <Image
            className='w-full rounded-lg object-cover lg:h-4/5 2xl:h-3/5'
            src={product[0].image}
            alt={product[0].name}
            width={300}
            height={300}
            placeholder='blur'
            blurDataURL={product[0].image}
          />

        </div>

        <div className='w-full flex jsutify-start items-start flex-col gap-5 lg:w-1/2 lg:h-full lg:justify-center'>

          <div className='w-full flex justify-between items-center lg:flex-col lg:items-start'>
            <p className='font-bold lg:text-xl'>{product[0].name}</p>
            <p>{formatCurrency(product[0].price, "USD")}</p>
          </div>

          <div className='w-full flex justify-evenly items-center lg:justify-start lg:gap-20'>

            <button className='p-2 bg-gray-800 rounded-lg text-[linen]' onClick={sub} disabled={qty === 1}>
              <AiOutlineMinus/>
            </button>

            <p>{qty}</p>

            <button className='p-2 bg-gray-800 rounded-lg text-[linen]' onClick={add}>
              <AiOutlinePlus/>
            </button>

          </div>

          <button className='w-full py-2 rounded-lg text-center text-[linen] bg-gray-800 lg:w-2/5' onClick={() => addItem(product[0], qty)}>Add to cart</button>

        </div>

      </div>
    </>
  )
}

export const getServerSideProps = async ({ params }) => {
  const id = params.id

  return {
    props: {
      id
    }
  }
}