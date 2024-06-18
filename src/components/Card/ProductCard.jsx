import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const ProductCard = () => {
  return (
    <main className="p-4 bg-white shadow-md rounded-xl grid grid-rows-[1fr_auto_auto] gap-3">
      <div className="h-[15rem] relative">
        <Image
          width={1000}
          height={1000}
          alt="pic 1"
          src={
            "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=3047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          className="object-cover w-full h-full  rounded-md"
        />
        <Heart className="absolute top-3 right-3 size-[30px] p-1 bg-white rounded-sm stroke-[1.5]" />
      </div>
      <div>
        <h3 className="font-bold text-xl">Xbox 2024</h3>
        <p className="text-gray-600">
          It is the new model of xbox with fast and scalable
        </p>
      </div>
      <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
        <p className="font-semibold text-[18px]">$ 199.99</p>
        <Button className=" rounded-lg">Add to Cart</Button>
      </div>
    </main>
  );
};

export default ProductCard;
