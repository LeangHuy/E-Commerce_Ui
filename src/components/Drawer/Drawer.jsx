"use client";
import * as React from "react";
import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { X } from "lucide-react";
import { useAddToCart } from "@/store/useAddToCart";
import toast from "react-hot-toast";
import { orderAction, orderByQrAction } from "@/acitons/orderAction";
import { useState } from "react";
import { useEffect } from "react";
import { getPaymentMethodAction } from "@/acitons/paymentAction";
import { getPhoto } from "@/lib/utils";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { postImgAction } from "@/acitons/uploadImgAction";

export function DrawerCheckout({ price, user }) {
  const { cartList, removeAllCart } = useAddToCart();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [img, setImg] = useState({ img: null, imgPrev: null });
  const [open, setOpen] = useState(false);

  const onSubmit = async (data) => {
    if (!img.img) {
      toast.error("Select an image");
      return;
    }

    const formData = new FormData();
    formData.append("file", img.img);
    const transferImage = await postImgAction(formData);
    const result = await orderByQrAction({
      orderProductRequestList: cartList?.map((pro) => ({
        productId: pro?.productId,
        qty: pro?.qty,
      })),
      paymentRequest: {
        ...data,
        transferImage,
      },
    });

    if (result?.status == "CREATED") {
      toast.success("Success");
      removeAllCart();
      setOpen(false);
    } else toast.error("Error");
  };

  const onOrder = async (pro) => {
    try {
      const result = await orderAction(pro);
      removeAllCart();
      toast.success("We will delivery products to you soon");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const [banks, setBank] = useState();
  const [currentBank, setCurrentBank] = useState();

  useEffect(() => {
    getPaymentMethodAction().then((data) => {
      setBank(data);
    });
  }, []);

  useEffect(() => {
    // if (currentBank) console.log(JSON.parse(currentBank));
  }, [currentBank]);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <p onClick={() => setOpen(true)}>Pay by KHQR</p>
      </DrawerTrigger>
      <DrawerContent className="">
        <div className="mx-auto w-full max-w-sm ">
          <DrawerClose asChild className="absolute top-4 right-4">
            <div className="flex cursor-pointer items-center justify-center rounded-full mt-8">
              <X />
            </div>
          </DrawerClose>
        </div>
        <div className="w-[80%] mx-auto p-10 grid grid-cols-3 gap-10">
          <div className="flex flex-col gap-5">
            <h3 className="text-center font-semibold">Step 1</h3>
            <div>
              <p>
                បងប្អូនអាចធ្វើការទូទាត់ប្រាក់តាមរយៈ ABA របស់ពួកយើងបាន
                ដោយគ្រាន់តែ Scan QR Code ដែលពួកយើងបានដាក់
                រាល់ការទូទាត់ប្រាក់របស់បងប្អូនវានឹងធ្វើការលោត Alert Notification
                មកកាន់ Telegram របស់ពួកយើងដោយស្វ័យប្រវត្តិ!
              </p>
              <p>
                ទឺកប្រាក់ដែលលោកអ្នកត្រូវទូទាត់ :{" "}
                <span className="border px-3 py-0 rounded-md font-medium bg-sky-400 text-white after:content-['$']">
                  {price}
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-center font-semibold">Step 2</h3>
            <div className="grid grid-cols-2 gap-6">
              <label className="font-medium">Choose Bank KHQR </label>
              <select
                className="cursor-pointer"
                defaultValue={0}
                onChange={(e) => setCurrentBank(e.target.value)}
              >
                <option value="" className="cursor-pointer">
                  Select
                </option>
                {banks?.map((b, idx) => (
                  <option
                    key={idx}
                    value={JSON.stringify(b)}
                  >
                    {b?.bankName}
                  </option>
                ))}
              </select>
            </div>
            {currentBank ? (
              // Show image for the selected `currentBank`
              <Image
                src={getPhoto(JSON.parse(currentBank)?.qrCode)}
                alt="payway"
                width={1000}
                height={1000}
                className="object-cover h-auto rounded-md"
              />
            ) : (
              // If `currentBank` is not set, show the image for the first bank in the list (if available)
              banks && banks.length > 0 && (
                <Image
                  src={getPhoto(banks[0]?.qrCode)}
                  alt="payway"
                  width={1000}
                  height={1000}
                  className="object-cover h-auto rounded-md"
                />
              )
            )}

          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-center font-semibold">Step 3</h3>
            <form
              id="form-qr"
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3"
            >
              <input
                {...register("receiverPhone", {
                  required: "Phone number is required",
                })}
                type="text"
                defaultValue={user?.phone}
                className="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Enter location"
              />
              <input
                {...register("receiverLocation", {
                  required: "Location is required",
                  minLength: {
                    value: 25,
                    message: "Location must be at least 25 characters long",
                  },
                  maxLength: {
                    value: 255,
                    message: "Location must be less than 255 characters",
                  },
                })}
                type="text"
                placeholder="Location"
                defaultValue={user?.address}
                className="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              />
              {errors.receiverLocation && (
                <span>{errors.receiverLocation.message}</span>
              )}
              <Input
                type="file"
                placeholder="Location"
                onChange={(e) => {
                  setImg({
                    img: e.target.files[0],
                    imgPrev: URL.createObjectURL(e.target.files[0]),
                  });
                }}
              />
              {img.img && (
                <Image
                  src={img.imgPrev}
                  alt="payway"
                  width={1000}
                  height={1000}
                  className="object-cover h-[345px] rounded-md"
                />
              )}
              <Button type="submit">Buy now</Button>
            </form>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
