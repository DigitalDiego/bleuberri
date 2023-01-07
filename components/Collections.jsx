import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { data } from "../data";
import Image from "next/image";

export default function Collections() {
  return (
    <div className="w-full flex justify-center items-center gap-8 flex-col px-[2vw] py-[5vw]">
      <div className="w-full flex justify-between items-center">
        <p className="text-4xl font-bold">250,000 Collections and counting</p>
        <p className="font-['serif'] text-gray-500 cursor-pointer">
          Follow us on instagram
        </p>
      </div>
      <div className="w-full">
        <Swiper slidesPerView={5} spaceBetween={10}>
          {data.map(({ image }) => (
            <SwiperSlide
              className="flex jsutify-start items-start flex-col gap-2"
              key={image}
            >
              <Image
                className="w-full h-[350px] object-cover"
                src={image}
                alt="post"
                width={500}
                height={1000}
              />
              <p className="text-sm font-['serif']">@johndoe</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
