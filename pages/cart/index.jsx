import React from "react";
import { formatCurrency, getStripe } from "../../lib";
import { useCart } from "react-use-cart";
import Head from "next/head";
import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function Cart() {
  const { items, cartTotal, isEmpty, removeItem, updateItemQuantity } =
    useCart();
  const checkout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(items),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    stripe.redirectToCheckout({ sessionId: data.id });
  };
  return (
    <>
      <Head>
        <title>BleuBerri | Cart</title>
      </Head>
      <div className="w-full flex justify-start items-start p-[2vw]">
        <div className="w-1/2 min-h-[80vh]">
          {isEmpty ? (
            <div className="w-full h-[80vh] grid place-items-center">
              <p className="text-2xl">Your cart is empty</p>
            </div>
          ) : (
            <div className="w-full">
              {items.map((item) => (
                <div className="w-full h-[50vh] flex" key={item.id}>
                  <div className="w-1/3 grid place-items-center">
                    <Image
                      className="w-4/5 h-4/5 object-cover"
                      src={item.image}
                      slt={item.name}
                      width={500}
                      height={1000}
                    />
                  </div>
                  <div className="w-2/3 flex justify-center items-end flex-col gap-2 py-[10%]">
                    <p className="text-2xl font-bold">{item.name}</p>

                    <p className="text-lg">
                      {formatCurrency(item.price, "USD")}
                    </p>
                    <div className="flex items-center">
                      <button
                        className="p-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity === 1}
                      >
                        <AiOutlineMinus />
                      </button>
                      <div className="p-2">
                        <p>{item.quantity}</p>
                      </div>
                      <button
                        className="p-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <AiOutlinePlus />
                      </button>
                    </div>
                    <p
                      className="text-gray-500 underline underline-offset-2 cursor-pointer text-sm"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="w-1/2 h-[80vh] grid place-items-center">
          <div className="w-3/5 bg-gray-800 p-2 flex justify-center items-center gap-4 flex-col">
            <p className="text-gray-200 text-xl font-bold">ORDER SUMMARY</p>
            {isEmpty === false && (
              <div className="w-full flex justify-between items-center text-gray-200">
                <p>Shipping:</p>
                <p>Free</p>
              </div>
            )}
            <div className="w-full flex justify-between items-center text-gray-200">
              <p>Subtotal:</p>
              <p>{formatCurrency(cartTotal, "USD")}</p>
            </div>
            <button
              className="py-2 w-full bg-gray-200 text-gray-800"
              onClick={checkout}
              disabled={isEmpty}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
