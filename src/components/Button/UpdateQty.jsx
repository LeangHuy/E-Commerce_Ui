"use client";
import { useAddToCart } from "@/store/useAddToCart";
import React, { useState } from "react";

const UpdateQty = ({ product }) => {
  const [qty, setQty] = useState(product?.qty);
  const { updateQtyProduct, decQtyProduct } = useAddToCart();
  return (
    <div className="flex items-center gap-6">
      <p
        onClick={() => {
          if (qty > 1) {
            setQty(qty - 1);
            decQtyProduct(product?.productId);
          }
        }}
        className="cursor-pointer text-xl flex items-center"
      >
        -
      </p>
      <p className="size-6 flex items-center justify-center border rounded-sm">
        {qty}
      </p>
      <p
        className="cursor-pointer text-xl flex items-center"
        onClick={() => {
          setQty(qty + 1);
          updateQtyProduct(product?.productId);
        }}
      >
        +
      </p>
    </div>
  );
};

export default UpdateQty;
