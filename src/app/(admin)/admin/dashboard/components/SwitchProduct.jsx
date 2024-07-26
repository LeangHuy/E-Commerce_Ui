"use client";
import React from "react";
import { Switch } from "@/components/ui/switch";
import { changeStatusProductAction } from "@/acitons/productAction";
import toast from "react-hot-toast";

const SwitchProduct = ({ isActive, productId, product }) => {
  const onChange = async (productId, isActive) => {
    const result = await changeStatusProductAction(productId, isActive);
    if (result.status == "OK")
      toast.success(
        `Product "${product?.productName}" is ${isActive ? "Active" : "Disable"
        }`
      );
  };

  return (
    <Switch
      onCheckedChange={() => onChange(productId, !product?.isStatus)}
      checked={product?.isStatus}
      className="ml-auto"
      id="olo"
    />
  );
};

export default SwitchProduct;
