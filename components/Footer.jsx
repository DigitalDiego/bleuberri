import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="w-full px-[2vw] pt-[5vw] pb-[2vw] border-t-solid border-t-[1px] border-t-gray-500">
      <div className="w-full flex mb-8">
        <div className="w-1/2 flex justify-start items-start text-sm font-['serif']">
          <div className="w-1/4 flex justify-start items-start flex-col gap-2">
            <p className="font-bold font-poppins">MORE</p>
            <p>Appointements</p>
            <p>Reviews</p>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Accessibility</p>
            <p>Return Policy</p>
          </div>
          <div className="w-1/4 flex justify-start items-start flex-col gap-2">
            <p className="font-bold font-poppins">SHOP</p>
            <p>Prints</p>
            <p>Gift Cards</p>
          </div>
          <div className="w-1/4 flex justify-start items-start flex-col gap-2">
            <p className="font-bold font-poppins">SUPPORT</p>
            <p>FAQs</p>
            <p>Contact Us</p>
            <p>Trade Program</p>
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-start text-sm">
          <div className="flex justify-center items-start flex-col w-2/5">
            <p>BleuBerri</p>
            <p>1234, New York</p>
            <p>New York, NY 10001 USA</p>
            <AiOutlineInstagram className="text-xl cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start items-center">
        <p className="font-['serif'] text-sm">
          &copy;2023, BleuBerri Media Inc. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
