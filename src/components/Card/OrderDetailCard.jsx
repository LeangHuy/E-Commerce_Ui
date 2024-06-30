"use client";
import React from "react";
import { Button } from "../ui/button";
import { useAddToCart } from "@/store/useAddToCart";
import { useToast } from "../ui/use-toast";

const OrderDetailCard = () => {
  const { cartList, removeAllCart } = useAddToCart();
  const { toast } = useToast();
  return (
    <div className="border p-6 rounded-md flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <p className="font-medium">Subtotal</p>
        <p className="before:content-['$']">
          {cartList?.reduce(
            (acc, product) => acc + product?.qty * product?.unitPrice,
            0
          )}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-medium">Discount</p>
        <p className="after:content-['%']">
          {cartList?.reduce((acc, product) => acc + product?.discount || 0, 0)}
        </p>
      </div>
      <div className="pt-4 border-t flex justify-between items-center">
        <p className="font-medium">Grand Total</p>
        <p className="before:content-['$']">
          {cartList?.reduce(
            (acc, product) => acc + product?.qty * product?.unitPrice,
            0
          ) -
            cartList?.reduce(
              (acc, product) => acc + product?.qty * product?.unitPrice,
              0
            ) *
              (cartList?.reduce(
                (acc, product) => acc + product?.discount || 0,
                0
              ) /
                100)}
        </p>
      </div>
      {cartList?.length > 0 && (
        <div>
          <Button
            onClick={() => {
              toast({
                title: "Thank you",
                description: "We will delivery products to you soon",
              });
              removeAllCart();
            }}
            className="w-full"
          >
            Checkout now
          </Button>
        </div>
      )}
    </div>
  );
};

export default OrderDetailCard;
