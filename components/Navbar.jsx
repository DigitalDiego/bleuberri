import Link from "next/link";
import React from "react";
import {
  AiOutlineShopping,
  AiFillShopping,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { useCart } from "react-use-cart";

export default function Navbar() {
  const { isEmpty } = useCart();

  return (
    <>
      <div className="w-full h-[12vh] flex justify-between items-center px-[2vw]">
        <div className="w-1/3 flex justify-start items-center gap-5">
          <Link href="/products">Shop Prints</Link>
          <p>Reviews</p>
          <p>Membership</p>
        </div>
        <div className="w-1/3 grid place-items-center">
          <Link className="font-lobster text-4xl" href="/">
            BleuBerri
          </Link>
        </div>
        <div className="w-1/3 flex justify-end items-center gap-5 text-xl">
          <AiOutlineUser />
          <AiOutlineSearch />
          <Link href="/cart">
            {isEmpty ? <AiOutlineShopping /> : <AiFillShopping />}
          </Link>
        </div>
      </div>
      <div className="w-full grid place-items-center font-['serif'] text-gray-500 border-t-solid border-t-[1px] border-t-gray-500 border-b-solid border-b-[1px] border-b-gray-500 py-1 text-sm">
        <p>
          Complimentary custom framing and global shipping on all orders, all
          the time.
        </p>
      </div>
    </>
  );
}
