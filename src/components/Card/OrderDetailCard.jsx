"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useAddToCart } from "@/store/useAddToCart";
import { orderAction } from "@/acitons/orderAction";
import toast from "react-hot-toast";

const OrderDetailCard = () => {
  const { cartList, removeAllCart } = useAddToCart();

  const [order, setOrder] = useState([]);

  const onOrder = async (pro) => {
    console.log("got clicked");
    const result = await orderAction(pro);
    console.log("order result ", result);
  };

  useEffect(() => {
    console.log("Change : ", cartList);
  }, [cartList]);

  return (
    <div className="border h-fit sticky top-20 p-6 rounded-md flex flex-col gap-6">
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
              toast.success("We will delivery products to you soon");
              onOrder(
                cartList.map((pro) => ({
                  qty: pro?.qty,
                  productId: pro?.productId,
                }))
              );
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
