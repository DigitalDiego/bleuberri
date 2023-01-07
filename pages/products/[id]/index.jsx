import React, { useState } from "react";
import Head from "next/head";
import { data } from "../../../data";
import { useCart } from "react-use-cart";
import Image from "next/image";
import { formatCurrency } from "../../../lib";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/router";

export default function Product({ id }) {
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();
  const router = useRouter();

  const sub = () => {
    setQty((qty) => qty - 1);
  };
  const add = () => {
    setQty((qty) => qty + 1);
  };
  const item = data.filter((product) => product.id === id)[0];

  const addToBag = (id, qty) => {
    addItem(id, qty);
    setQty(1);
    router.push("/cart");
  };
  return (
    <div className="w-full h-screen flex justify-start items-start flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 h-full grid place-items-center">
        <div className="w-full lg:w-4/5 grid place-items-center">
          <Image
            className="w-full h-full object-contain"
            src={item.image}
            alt={item.name}
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full grid place-items-center">
        <div className="w-4/5">
          <p className="text-4xl font-bold">{item.name}</p>
          <p>{formatCurrency(item.price, "USD")}</p>
          <div className="flex items-center">
            <button className="p-2" onClick={sub} disabled={qty === 1}>
              <AiOutlineMinus />
            </button>
            <div className="p-2">
              <p>{qty}</p>
            </div>
            <button className="p-2" onClick={add}>
              <AiOutlinePlus />
            </button>
          </div>
          <button
            className="py-2 w-full lg:w-[200px] bg-gray-800 text-gray-200"
            onClick={() => addToBag(item, qty)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const id = params.id;

  return {
    props: {
      id,
    },
  };
};
