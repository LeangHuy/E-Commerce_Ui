"use client";
import * as React from "react";
import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
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

export function DrawerCheckout({ price }) {
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

    console.log(result);
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
      console.log(data);
      setBank(data);
    });
  }, []);

  useEffect(() => {
    if (currentBank) console.log(JSON.parse(currentBank));
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
              {/* <Image
                src={"/images/payway.JPG"}
                alt="payway"
                width={1000}
                height={1000}
                className="object-cover"
              /> */}
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
                    // onChange={() => setCurrentBank(b)}
                    // variant={"outline"}
                  >
                    {b?.bankName}
                  </option>
                ))}
              </select>
            </div>
            {currentBank && (
              <Image
                src={getPhoto(JSON.parse(currentBank)?.qrCode)}
                alt="payway"
                width={1000}
                height={1000}
                className="object-cover h-auto"
              />
            )}
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-center font-semibold">Step 3</h3>
            <form
              id="form-qr"
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3"
            >
              <Input
                {...register("receiverPhone", {
                  // required: "Phone number is required",
                  // pattern: {
                  //   value: /^[0-9]{10}$/,
                  //   message: "Phone number must be 10 digits",
                  // },
                })}
                type="text"
                placeholder="Phone number"
              />

              <Input
                {...register("receiverLocation", {
                  required: "Location is required",
                  minLength: {
                    value: 3,
                    message: "Location must be at least 3 characters long",
                  },
                  maxLength: {
                    value: 100,
                    message: "Location must be less than 100 characters",
                  },
                })}
                type="text"
                placeholder="Location"
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
                  className="object-cover h-[490px]"
                />
              )}
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
