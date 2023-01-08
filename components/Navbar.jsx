import Link from "next/link";
import React from "react";
import {
  AiOutlineMenu,
  AiOutlinePlus,
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
          <Link className="hidden lg:inline" href="/products">
            Shop Prints
          </Link>
          <p className="hidden lg:inline">Reviews</p>
          <p className="hidden lg:inline">Membership</p>
          <button className="text-xl lg:hidden">
            <AiOutlineMenu />
          </button>
        </div>
        <div className="w-1/3 grid place-items-center">
          <Link className="font-lobster text-4xl" href="/">
            BleuBerri
          </Link>
        </div>
        <div className="w-1/3 flex justify-end items-center gap-5 text-xl">
          <AiOutlineUser className="hidden lg:inline" />
          <AiOutlineSearch className="hidden lg:inline" />
          <Link href="/cart">
            {isEmpty ? <AiOutlineShopping /> : <AiFillShopping />}
          </Link>
        </div>
      </div>
      <div className="w-full grid place-items-center font-['serif'] text-gray-500 border-t-solid border-t-[1px] border-t-gray-500 border-b-solid border-b-[1px] border-b-gray-500 py-1 text-sm">
        <p className="text-center">
          Complimentary custom framing and global shipping on all orders, all
          the time.
        </p>
      </div>
    </>
  );
}
