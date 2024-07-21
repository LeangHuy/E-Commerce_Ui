"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useAddToCart } from "@/store/useAddToCart";
import { orderAction } from "@/acitons/orderAction";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { DrawerCheckout } from "../Drawer/Drawer";

const OrderDetailCard = () => {
  const { cartList, removeAllCart } = useAddToCart();

  const [order, setOrder] = useState([]);

  const onOrder = async (pro) => {
    const result = await orderAction(pro);
  };

  useEffect(() => { }, [cartList]);

  return (
    <div className="border h-fit sticky top-20 p-6 rounded-md flex flex-col gap-6">
      {/* <div className="flex items-center justify-between">
        <p className="font-medium">Subtotal</p>
        <p className="before:content-['$']">
          {cartList?.reduce(
            (acc, product) => acc + product?.qty * product?.unitPrice,
            0
          )}
        </p>
      </div> */}
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
          {/* <Button
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
          </Button> */}
          {/* <Dialog>
            <DialogTrigger asChild>
              <Button className="inline-block w-full">Checkout now</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    defaultValue="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    defaultValue="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog> */}
          <DrawerCheckout />
        </div>
      )}
    </div>
  );
};

export default OrderDetailCard;
