"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/image-slider";
import Link from "next/link";

export function ImagesSliderDemo({ slides }) {
  const images = [...slides];
  console.log("slides", images);
  // return;
  return (
    <ImagesSlider
      className="h-[37rem] my-10 rounded-lg w-full mx-auto"
      images={images}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex bottom-10 absolute flex-col justify-center items-center"
      >
        {/* <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Welcome to <br /> our shop
        </motion.p> */}
        <button className="px-4 py-2 backdrop-blur-sm border  text-white mx-auto text-center rounded-full relative mt-4">
          <Link href={"#product"}>Shopping now →</Link>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent  to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
