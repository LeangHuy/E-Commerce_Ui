"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useAddToCart } from "@/store/useAddToCart";
import { orderAction } from "@/acitons/orderAction";
import { DrawerCheckout } from "../Drawer/Drawer";
import Link from "next/link";

const OrderDetailCard = () => {
  const { cartList, removeAllCart } = useAddToCart();

  const [order, setOrder] = useState([]);

  const onOrder = async (pro) => {
    const result = await orderAction(pro);
  };

  useEffect(() => { }, [cartList]);

  return (
    <div className="border h-fit sticky top-20 p-6 rounded-md flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <p className="font-medium">Total Quantity</p>
        <p className="">
          {cartList?.reduce((acc, product) => acc + product?.qty, 0)}
        </p>
      </div>
      <div className="pt-4 border-t flex justify-between items-center">
        <p className="font-medium">Grand Total</p>
        <p className="before:content-['$']">
          {cartList?.reduce(
            (acc, pro) => pro?.priceAfterDiscount * pro?.qty + acc,
            0
          )}
        </p>
      </div>
      {cartList?.length > 0 && (
        <div>
          <DrawerCheckout
            price={cartList?.reduce(
              (acc, pro) => pro?.priceAfterDiscount * pro?.qty + acc,
              0
            )}
          />
        </div>
      )}
      <p>
        ក្រោយពេលបងប្អូនធ្វើការទូទាត់ប្រាក់រួចតាមជំហាននីមួយៗបងប្អូនអាចធ្វើការ chat ជាមួយពូកយើងតាមរយៈ telegram ខាងក្រោមបាន។
      </p>
      <Link
        href={"https://t.me/Playstation_Game_cambodia"}
        className="font-semibold"
        target="_blank"
      >
        <Button className="block w-full ">

          Contact us via Telegram
        </Button>

      </Link>
    </div>
  );
};

export default OrderDetailCard;
