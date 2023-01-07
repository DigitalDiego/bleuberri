import React from "react";
import { data } from "../../data";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Products() {
  return (
    <>
      <Head>
        <title>BleuBerri | Prints</title>
      </Head>
      <div className="w-full p-[2vw]">
        <div className="w-full flex justify-center items-center flex-col gap-2 py-[2vw]">
          <p className="text-4xl font-bold">ALL PRINTS</p>
          <p className="text-sm font-['serif']">
            All images are printed on premium matte artist grade paper – touting
            gallery-like quality and outstanding color.
          </p>
        </div>
        <div className="w-full grid grid-cols-3 gap-8 place-items-start">
          {data.map(({ id, image, name }) => (
            <div
              className="flex justify-center items-center gap-2 flex-col"
              key={id}
            >
              <Link className="w-full h-[250px]" href={`/products/${id}`}>
                <Image
                  className="w-full h-full object-cover"
                  src={image}
                  alt={name}
                  width={1000}
                  height={1000}
                  loading="lazy"
                />
              </Link>
              <p className="font-bold underline underline-offset-2">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
