"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useAddToCart } from "@/store/useAddToCart";
import { orderAction } from "@/acitons/orderAction";
import { DrawerCheckout } from "../Drawer/Drawer";
import Link from "next/link";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePaymentMethod } from "@/store/usePayment";
import { getPaymentMethodAction } from "@/acitons/paymentAction";
import Image from "next/image";
import { cn, getPhoto } from "@/lib/utils";

const OrderDetailCard = () => {
  const { cartList, removeAllCart } = useAddToCart();
  const { payment_option, setPaymentOption, current_bank, setCurrentBank } =
    usePaymentMethod();

  const [order, setOrder] = useState([]);

  const onOrder = async (pro) => {
    const result = await orderAction(pro);
  };

  useEffect(() => {
    console.log("option payment : ", payment_option);
  }, [payment_option]);

  const [active, setActive] = useState(0);
  const [banks, setBank] = useState();

  useEffect(() => {
    getPaymentMethodAction().then((data) => {
      console.log(data);
      setBank(data);
    });
  }, []);

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
          {/* <DrawerCheckout
            price={cartList?.reduce(
              (acc, pro) => pro?.priceAfterDiscount * pro?.qty + acc,
              0
            )}
          /> */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full">Checkout now</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Chhose payment</DialogTitle>
                <DialogDescription>
                  Choose your payment method
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Button
                    variant={active == 1 ? "" : "outline"}
                    onClick={() => {
                      setPaymentOption(1);
                      setActive(1);
                    }}
                  >
                    Pay direct
                  </Button>
                  <Button
                    variant={active == 2 ? "" : "outline"}
                    onClick={() => {
                      setPaymentOption(2);
                      setActive(2);
                    }}
                  >
                    <DrawerCheckout
                      price={cartList?.reduce(
                        (acc, pro) => pro?.priceAfterDiscount * pro?.qty + acc,
                        0
                      )}
                    />
                  </Button>
                  {payment_option == 2 && (
                    <div className="grid grid-cols-2 gap-6">
                      {banks?.map((b, idx) => (
                        // <Image
                        //   onClick={() => setCurrentBank(idx + 1)}
                        //   src={getPhoto(b?.qrCode)}
                        //   width={1000}
                        //   height={1000}
                        //   priority
                        //   alt="qr"
                        //   className={cn("p-2 border rounded-md", {
                        //     "bg-gray-900": current_bank == idx + 1,
                        //   })}
                        // />
                        <div></div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <DialogFooter className="sm:justify-start">
                {/* <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose> */}
                {/* {payment_option == 2 ? (
                  <div className="mt-10 w-full">
                    <DrawerCheckout
                      price={cartList?.reduce(
                        (acc, pro) => pro?.priceAfterDiscount * pro?.qty + acc,
                        0
                      )}
                    />
                  </div>
                ) : (
                  <Button className="w-full mt-10">Continue process</Button>
                )} */}
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      )}
      <p>
        ក្រោយពេលបងប្អូនធ្វើការទូទាត់ប្រាក់រួចតាមជំហាននីមួយៗបងប្អូនអាចធ្វើការ
        chat ជាមួយពូកយើងតាមរយៈ telegram ខាងក្រោមបាន។
      </p>
      <Link
        href={"https://t.me/Playstation_Game_cambodia"}
        className="font-semibold"
        target="_blank"
      >
        <Button className="block w-full ">Contact us via Telegram</Button>
      </Link>
    </div>
  );
};

export default OrderDetailCard;
