import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function OurCommunity() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="px-[2vw] py-[5vw] flex justify-center items-center gap-8 flex-col">
      <p className="text-4xl font-bold">OUR COMMUNITY</p>
      <Carousel
        className="w-full"
        responsive={responsive}
        infinite
        autoPlay
        removeArrowOnDeviceType={["mobile", "tablet", "desktop"]}
      >
        {[0, 1, 2, 3].map((slide) => (
          <div
            className="w-full flex justify-center items-center gap-2 flex-col px-[5vw] py-[2vw]"
            key={slide}
          >
            <p className="text-center w-1/2">
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
              dicta maxime eveniet cupiditate. Sunt, sint! Ullam error
              exercitationem doloribus deleniti quae tempora. Nostrum,
              praesentium odit?"
            </p>
            <p className="font-bold">John Doe</p>
            <p className="underline underline-offset-2 text-sm cursor-pointer">
              See all reviews
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
