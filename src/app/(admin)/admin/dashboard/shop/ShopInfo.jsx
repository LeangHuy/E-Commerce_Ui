"use client";
import { Button } from "@/components/ui/button";
import { updateShopInfoService } from "@/service/shop.service";
import { Loader2 } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function ShopInfo({ shopData }) {
  const {
    shopId,
    shopName,
    shopAddress,
    email,
    phone,
    logo,
    facebookLink,
    telegramLink,
  } = shopData.payload;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    shopId,
    shopName,
    shopAddress,
    email,
    phone,
    logo,
    facebookLink,
    telegramLink,
  });

  async function onSubmit(reqdata) {
    const data = {
      ...reqdata,
      shopId
    }
    const updateInfo = await updateShopInfoService(data);
    if (updateInfo.statusCode === 200) {
      toast.success("Shop Info Updated!")
    }
  }

  return (
    <div className="h-full w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full"
      >
        <div className="flex items-center w-full">
          <div className="w-[20rem] font-semibold">Logo</div>

          <input
            {...register("logo")}
            defaultValue={logo}
            type="text"
            className="block w-full border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="flex items-center w-full">
          <div className="w-[20rem] font-semibold">Name</div>
          <input
            {...register("shopName")}
            defaultValue={shopName}
            type="text"
            className="block w-full border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="flex items-center w-full">
          <div className="w-[20rem] font-semibold">Address</div>
          <input
            {...register("shopAddress")}
            defaultValue={shopAddress}
            type="text"
            className="block w-full border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="flex items-center w-full">
          <div className="w-[20rem] font-semibold">Phone number</div>
          <input
            {...register("phone")}
            defaultValue={phone}
            type="text"
            className="block w-full border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 "
          />
        </div>
        <div className="flex items-center w-full">
          <div className="w-[20rem] font-semibold">Email</div>
          <input
            {...register("email")}
            defaultValue={email}
            type="text"
            className="block w-full border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="flex items-center w-full">
          <div className="w-[20rem] font-semibold">Facebook</div>
          <input
            {...register("facebookLink")}
            defaultValue={facebookLink}
            type="text"
            className="block w-full border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="flex items-center w-full">
          <div className="w-[20rem] font-semibold">Telegram</div>
          <input
            {...register("telegramLink")}
            defaultValue={telegramLink}
            type="text"
            className="block w-full border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="self-end">
          <Button type="submit">
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Update Shop Info
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ShopInfo;
