"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/image-slider";
import Link from "next/link";

export function ImagesSliderDemo() {
  const images = [
    "https://images.unsplash.com/photo-1602029908656-b54d40a76ad8?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1585857188823-77658a70979a?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1613750629907-e8f64ea16396?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <ImagesSlider
      className="h-[37rem] my-10 rounded-lg w-[1330px] mx-auto"
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
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Welcome to <br /> our shop
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border  text-white mx-auto text-center rounded-full relative mt-4">
          <Link href={"#product"}>Shopping now →</Link>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent  to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
