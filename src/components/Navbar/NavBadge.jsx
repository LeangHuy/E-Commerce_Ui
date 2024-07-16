"use client";
import { useAddToCart } from "@/store/useAddToCart";
import React from "react";

const NavBadge = () => {
  const { cartList } = useAddToCart();
  if (cartList?.length <= 0) return;
  return (
    <span className=" flex bg-red-500 rounded-full text-white text-sm items-center justify-center p-1 size-[20px]">
      {cartList?.length}
    </span>
  );
};

export default NavBadge;
