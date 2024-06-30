"use client";
import { useAddToCart } from "@/store/useAddToCart";
import { Trash2 } from "lucide-react";
import React from "react";

const RemoveAllCart = () => {
  const { removeAllCart } = useAddToCart();
  return (
    <p
      onClick={removeAllCart}
      className="flex items-center gap-2 text-slate-500 cursor-pointer group"
    >
      <Trash2 className="size-[18px] stroke-[1.5] cursor-pointer group-hover:stroke-red-500" />
      <span className=" group-hover:text-red-500">Remove</span>
    </p>
  );
};

export default RemoveAllCart;
