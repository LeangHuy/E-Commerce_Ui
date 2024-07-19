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
    console.log("updateInfo", updateInfo);
  }

  return (
    <div className="h-full w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full"
      >
        {/* <div className="flex items-center w-full">
          <div className="w-[20rem] font-semibold">Logo</div>

          <input
            {...register("logo")}
            defaultValue={logo}
            type="text"
            className="border border-black py-2 px-2 w-full"
          />
        </div> */}

        {/* <div class="col-span-full">
          <label
            for="cover-photo"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Slideshow photo
          </label>
          {img?.length <= 2 && (
            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div class="text-center">
                <svg
                  class="mx-auto h-12 w-12 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div class="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    for="file-upload"
                    class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      onChange={(e) =>
                        setImg([
                          ...img,
                          {
                            imgPreview: URL.createObjectURL(
                              e.target.files[0]
                            ),
                            imgFile: e.target.files[0],
                          },
                        ])
                      }
                      id="file-upload"
                      name="file-upload"
                      multiple
                      type="file"
                      class="sr-only"
                    />
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          )}
        </div> */}

        <div className="flex items-center w-full">
          <div className="w-[20rem] font-semibold">Name</div>
          <input
            {...register("shopName")}
            defaultValue={shopName}
            type="text"
            className="border border-black py-2 px-2 w-full"
          />
        </div>
        <div className="flex items-center w-full">
          <div className="w-[20rem] font-semibold">Address</div>
          <input
            {...register("shopAddress")}
            defaultValue={shopAddress}
            type="text"
            className="border border-black py-2 px-2 w-full"
          />
        </div>
        <div className="flex items-center w-full">
          <div className="w-[20rem] font-semibold">Phone number</div>
          <input
            {...register("phone")}
            defaultValue={phone}
            type="text"
            className="border w-full border-black py-2 px-2 "
          />
        </div>
        <div className="flex items-center w-full">
          <div className="w-[20rem] font-semibold">Email</div>
          <input
            {...register("email")}
            defaultValue={email}
            type="text"
            className="border border-black py-2 px-2 w-full"
          />
        </div>
        <div className="flex items-center w-full">
          <div className="w-[20rem] font-semibold">Facebook</div>
          <input
            {...register("facebookLink")}
            defaultValue={facebookLink}
            type="text"
            className="border w-full border-black py-2 px-2 "
          />
        </div>
        <div className="flex items-center w-full">
          <div className="w-[20rem] font-semibold">Telegram</div>
          <input
            {...register("telegramLink")}
            defaultValue={telegramLink}
            type="text"
            className="border border-black py-2 px-2 w-full"
          />
        </div>
        <div className="self-end">
          <Button type="submit">
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Update Shop
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ShopInfo;
