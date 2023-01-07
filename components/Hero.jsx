import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full h-[120vh] lg:p-[2vw]">
      <div className="relative w-full h-full">
        <Image
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="hero image"
          width={1000}
          height={1000}
        />
        <div className="absolute top-0 right-0 w-full h-full bg-black/50 grid place-items-center">
          <div className="flex justify-center items-center gap-2 text-gray-200 flex-col">
            <p className="text-4xl lg:text-7xl font-bold text-center">
              ART FOR EVERY WALL
            </p>
            <p className="w-4/5 lg:w-auto text-sm lg:text-base font-['serif'] text-center">
              Framed fine art photography from the worlds most adventurous
              artists
            </p>
            <Link href="/products" className="underline underline-offset-2">
              Shop Prints
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
