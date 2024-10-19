"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useAddToCart } from "@/store/useAddToCart";
import { orderAction } from "@/acitons/orderAction";
import { DrawerCheckout } from "../Drawer/Drawer";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { usePaymentMethod } from "@/store/usePayment";
import { getPaymentMethodAction } from "@/acitons/paymentAction";
import { useForm } from "react-hook-form";
import { orderService } from "@/service/order.service";
import toast from "react-hot-toast";

const OrderDetailCard = ({ user }) => {
  const currentUser = user?.payload?.user;
  const { cartList, removeAllCart } = useAddToCart();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { payment_option, setPaymentOption, current_bank, setCurrentBank } =
    usePaymentMethod();

  const [order, setOrder] = useState([]);

  const onOrder = async (pro) => {
    const result = await orderAction(pro);
  };

  useEffect(() => {
    // console.log("option payment : ", payment_option);
  }, [payment_option]);

  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const [banks, setBank] = useState();

  useEffect(() => {
    getPaymentMethodAction().then((data) => {
      setBank(data);
    });
  }, []);

  const onSubmit = async (data) => {
    const result = await orderAction({
      orderProductRequestList: cartList?.map((pro) => ({
        productId: pro?.productId,
        qty: pro?.qty,
      })),
      paymentRequest: {
        ...data,
      },
    });
    if (result?.receiverLocation) {
      toast.success("Order Success");
      setOpen(false);
      setPaymentOption(0);
      removeAllCart();
    }
  };
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
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => setOpen(true)} className="w-full">
                Checkout now
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>
                  {payment_option != 1 ? (
                    "Choose payment"
                  ) : (
                    <p
                      onClick={() => setPaymentOption(0)}
                      className="underline cursor-pointer"
                    >
                      Back
                    </p>
                  )}
                </DialogTitle>
                <DialogDescription>
                  {payment_option != 1 ? (
                    "Choose your payment method"
                  ) : (
                    <p>Fill the Receiver information</p>
                  )}
                </DialogDescription>
              </DialogHeader>
              {payment_option !== 1 && (
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    <Button
                      variant={active == 1 ? "" : "outline"}
                      onClick={() => {
                        setPaymentOption(1);
                        setActive(1);
                      }}
                    >
                      ទូទាត់ប្រាក់ពេលទំនិញទៅដល់
                    </Button>
                    <Button
                      variant={active == 2 ? "" : "outline"}
                      onClick={() => {
                        setPaymentOption(2);
                        setActive(2);
                      }}
                    >
                      <DrawerCheckout
                        user={currentUser}
                        price={cartList?.reduce(
                          (acc, pro) =>
                            pro?.priceAfterDiscount * pro?.qty + acc,
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
              )}
              {payment_option == 1 && (
                <div>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-3"
                  >
                    <input
                      {...register("receiverPhone")}
                      type="text"
                      defaultValue={currentUser?.phone}
                      className="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Enter phone number"
                    />
                    <input
                      {...register("receiverLocation")}
                      type="text"
                      defaultValue={currentUser?.address}
                      className="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Enter location"
                    />

                    <Button>Buy now</Button>
                  </form>
                </div>
              )}
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
