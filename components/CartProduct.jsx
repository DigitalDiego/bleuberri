import React from 'react'
import { useCart } from 'react-use-cart'
import Image from 'next/image'
import { formatCurrency } from '../lib'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

export default function CartProduct(props) {
  const { removeItem, emptyCart, isEmpty, cartTotal, updateItemQuantity } = useCart()

  return (
    <div className='w-full flex justify-start items-start flex-col gap-2'>

        <Image
            className='w-full h-[200px] rounded-lg'
            src={props.image}
            alt={props.name}
            width={300}
            height={300}
            placeholder='blur'
            blurDataURL={props.image}
        />

        <div className='w-full flex justify-between items-center'>

            <p className='font-bold'>
                {props.name}{' '}
                <span className='text-xs'>x{props.quantity}</span>
            </p>

            <p>{formatCurrency(props.itemTotal, 'USD')}</p>

        </div>

        <div className='w-full flex justify-between items-center'>

            <p className='text-xs underline cursor-pointer' onClick={() => removeItem(props.id)}>Remove</p>

            <div className='flex items-center gap-5'>

                <button className='p-2 rounded-lg bg-gray-800 text-[linen]' onClick={() => updateItemQuantity(props.id, props.quantity - 1)}>
                    <AiOutlineMinus/>
                </button>

                <button className='p-2 rounded-lg bg-gray-800 text-[linen]' onClick={() => updateItemQuantity(props.id, props.quantity + 1)}>
                    <AiOutlinePlus/>
                </button>

            </div>

        </div>

    </div>
  )
}
