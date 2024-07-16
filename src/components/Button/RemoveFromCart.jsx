"use client";
import { useAddToCart } from "@/store/useAddToCart";
import { Trash2 } from "lucide-react";
import React from "react";

const RemoveFromCart = ({ product }) => {
  const { removeCartById } = useAddToCart();
  return (
    <Trash2
      onClick={() => removeCartById(product?.productId)}
      className="ml-auto size-5 cursor-pointer hover:stroke-red-500 stroke-slate-500"
    />
  );
};

export default RemoveFromCart;
