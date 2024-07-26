"use client";
import { postImgAction } from "@/acitons/uploadImgAction";
import { Button } from "@/components/ui/button";
import { getPhoto } from "@/lib/utils";
import { updateShopInfoService } from "@/service/shop.service";
import clsx from "clsx";
import { Edit } from "lucide-react";
import { Camera } from "lucide-react";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
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
    console.log("req : ", reqdata);
    const formData = new FormData();
    formData.append("file", img.imgFile);
    let logo = !img.imgFile
      ? shopData.payload.logo
      : await postImgAction(formData);
    // if(!img.imgFile)
    //  logo = await postImgAction(formData);
    const data = {
      ...reqdata,
      shopId,
      logo,
    };
    const updateInfo = await updateShopInfoService(data);
    if (updateInfo.statusCode === 200) {
      toast.success("Shop Info Updated!");
      setEdit(!isEdit);
    }
  }

  const [isEdit, setEdit] = useState(false);
  const [img, setImg] = useState({ imgFile: null, imgPreview: null });

  useEffect(() => {
    console.log("shop", shopData);
  }, []);

  return (
    <div className=" grid grid-cols-1 gap-10">
      <div className="left-side">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="profile-shop bg-white p-6 rounded-lg"
        >
          <div className="relative grid place-items-center">
            <div className="relative">
              <Image
                width={1000}
                height={1000}
                alt="cover shop"
                src={
                  img.imgPreview
                    ? img.imgPreview
                    : getPhoto(shopData?.payload?.logo)
                }
                className="size-[10rem]  object-cover rounded-full"
              />
              <input
                type="file"
                onChange={(e) =>
                  setImg({
                    imgFile: e.target.files[0],
                    imgPreview: URL.createObjectURL(e.target.files[0]),
                  })
                }
                className="absolute invisible"
                id="pf"
              />
              {isEdit && (
                <label
                  htmlFor="pf"
                  className="absolute bottom-2 bg-white p-2 rounded-full right-2 border"
                >
                  <Camera />
                </label>
              )}
            </div>

            <div className="flex gap-3 items-center bg-primary cursor-pointer transition-all hover:scale-105 py-2 rounded-full px-4 absolute -bottom-[4rem] right-10">
              <span>
                <Edit className="size-[1.4rem] stroke-white" />
              </span>
              <span
                onClick={() => {
                  setEdit(!isEdit);
                  if (isEdit) {
                    setImg({ imgFile: null, imgPreview: null });
                  }
                }}
                className="text-mid text-white"
              >
                Edit Profile
              </span>
            </div>
          </div>
          <div className="pt-[7rem] pb-10 px-10">
            <p className="text-mid">{shopData?.payload?.description}</p>
            <div className="mt-10 flex flex-col gap-6">
              <h3 className="text-normal font-medium">Profile Info</h3>
              <div className="grid grid-cols-2 w-full gap-10 p-6 border rounded-xl">
                <div className="flex gap-10 items-center">
                  <p className="text-normal text-gray-400">Shop Name</p>
                  {!isEdit ? (
                    <p className="text-normal font-semibold">
                      {shopData?.payload?.shopName}
                    </p>
                  ) : (
                    <div className="flex rounded-md shadow-sm ring-inset ring-gray-300 ">
                      <input
                        {...register("shopName", { required: true })}
                        type="text"
                        defaultValue={shopName}
                        className="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="shop name"
                      />
                    </div>
                  )}
                </div>
                <div className="flex gap-10 items-center">
                  <p className="text-normal text-gray-400">Email</p>
                  {!isEdit ? (
                    <p className="text-normal font-semibold">
                      {shopData?.payload?.email}
                    </p>
                  ) : (
                    <div className="flex rounded-md shadow-sm ring-inset ring-gray-300 ">
                      <input
                        {...register("email", { required: true })}
                        type="text"
                        defaultValue={email}
                        className="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="email"
                      />
                    </div>
                  )}
                </div>
                <div className="flex gap-10 items-center">
                  <p className="text-normal text-gray-400">Phone Number</p>
                  {!isEdit ? (
                    <p className="text-normal font-semibold">
                      {shopData?.payload?.phone}
                    </p>
                  ) : (
                    <div className="flex rounded-md shadow-sm ring-inset ring-gray-300 ">
                      <input
                        {...register("phone", { required: true })}
                        type="text"
                        defaultValue={phone}
                        className="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="shop name"
                      />
                    </div>
                  )}
                </div>
                <div className="flex gap-10 items-center">
                  <p className="text-normal text-gray-400">Location</p>
                  {!isEdit ? (
                    <p className="text-normal font-semibold">
                      {shopData?.payload?.shopAddress || "Unknown"}
                    </p>
                  ) : (
                    <div className="flex rounded-md shadow-sm ring-inset ring-gray-300 ">
                      <input
                        {...register("shopAddress", { required: true })}
                        type="text"
                        defaultValue={shopAddress}
                        className="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="shop name"
                      />
                    </div>
                  )}
                </div>
                <div className="flex gap-10 items-center">
                  <p className="text-normal text-gray-400">Facebook</p>
                  {!isEdit ? (
                    <p className="text-normal font-semibold">{facebookLink}</p>
                  ) : (
                    <div className="flex rounded-md shadow-sm ring-inset ring-gray-300 ">
                      <input
                        {...register("facebookLink", { required: true })}
                        type="text"
                        defaultValue={facebookLink}
                        className="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="shop name"
                      />
                    </div>
                  )}
                </div>
                <div className="flex gap-10 items-center">
                  <p className="text-normal text-gray-400">Telegram</p>
                  {!isEdit ? (
                    <p className="text-normal font-semibold">{telegramLink}</p>
                  ) : (
                    <div className="flex rounded-md shadow-sm ring-inset ring-gray-300 ">
                      <input
                        {...register("telegramLink", { required: true })}
                        type="text"
                        defaultValue={telegramLink}
                        className="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="shop name"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            {isEdit && (
              <div className="mt-6 flex justify-end">
                <Button>Save Change</Button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ShopInfo;
