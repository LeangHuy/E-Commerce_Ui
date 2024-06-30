"use client";
import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useState } from "react";
import Link from "next/link";
import { getPhoto } from "@/lib/utils";

const ProductCard = ({ products }) => {
  const [isActive, setIsActive] = useState(0);
  const handleButtonClick = () => {
    setIsActive(1);
  };
  return (
    <main className="container grid grid-cols-4 gap-6 my-8">
      {products?.map((item, idx) => (
        <div
          key={idx}
          className="grid transition-all grid-rows-[1fr_auto_auto] gap-3"
        >
          <div className="h-[20rem] relative">
            <Link href={`/view/product/${item?.productId}`}>
              <Image
                width={1000}
                height={1000}
                alt="pic 1"
                src={getPhoto(item?.imageProductList[0]?.fileName)}
                className="object-cover w-full h-full  rounded-xl"
              />
            </Link>
            <Heart
              // onClick={() => setIsActive(idx)}
              className={`absolute top-3 right-3 size-[35px] stroke-red-500 p-2 bg-white  rounded-full stroke-[2] cursor-pointer `}
            />
          </div>
          <Link href={`/view/product/${item?.productId}`} className="">
            <p className=" text-[18px] text-[#ff540a]">{item?.unitPrice}$</p>
            <h3 className="font-medium text-xl text-[#1d1d1d]">
              {item?.productName}
            </h3>
            {/* <p className="text-gray-600">{item?.productDesc}</p> */}
          </Link>
          <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
            {/* <Button className=" rounded-lg">Add to Cart</Button> */}
          </div>
        </div>
      ))}
    </main>
  );
};

export default ProductCard;
