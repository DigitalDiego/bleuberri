import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { data } from "../data";
import Link from "next/link";
import Image from "next/image";
import { formatCurrency } from "../lib";

export default function LargestAndGreatest() {
  return (
    <div className="w-full px-[2vw] py-[5vw] flex justify-center items-center flex-col gap-8">
      <p className="text-4xl font-bold">LARGEST AND GREATEST</p>
      <div className="w-full">
        <Swiper className="lg:hidden" slidesPerView={1}>
          {data.map(({ id, name, image, price }) => (
            <SwiperSlide
              className="w-full flex justify-center items-center flex-col gap-4"
              key={id}
            >
              <Link className="w-full" href={`/products/${id}`}>
                <Image
                  className="w-full h-[300px] rounded-lg object-cover"
                  src={image}
                  alt={name}
                  width={200}
                  height={200}
                />
              </Link>
              <div className="flex justify-center items-center flex-col">
                <p>{name}</p>
                <p className="text-sm">{formatCurrency(price, "USD")}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper className="hidden lg:flex" slidesPerView={5} spaceBetween={10}>
          {data.map(({ id, name, image, price }) => (
            <SwiperSlide
              className="w-full flex justify-center items-center flex-col gap-4"
              key={id}
            >
              <Link className="w-full" href={`/products/${id}`}>
                <Image
                  className="w-full h-[150px] rounded-lg object-cover"
                  src={image}
                  alt={name}
                  width={200}
                  height={200}
                />
              </Link>
              <div className="flex justify-center items-center flex-col">
                <p>{name}</p>
                <p className="text-sm">{formatCurrency(price, "USD")}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
