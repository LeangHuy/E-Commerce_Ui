"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ImagePlusIcon, Loader2 } from "lucide-react";
import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { postImgAction, uploadImgAction } from "@/acitons/uploadImgAction";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { revalidateWhere } from "@/acitons/revalidateAction";
import { ArrowLeft } from "lucide-react";
import { createBankAction } from "@/acitons/bankAction";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import { postDeliveryAction } from "@/acitons/delivery";

const DeliveryPage = ({ searchParams: { tab = "Overview" } }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const router = useRouter();

  const [img, setImg] = useState({ imgPreview: null, imgFile: null });

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("file", img.imgFile);
    const imgResult = await postImgAction(formData);
    const result = await postDeliveryAction({
      ...data,
      gender: "Male",
      profile: imgResult,
    });
    reset();
    setImg({ imgFile: null, imgPreview: null });
    await revalidateWhere("getAllBank");
    if (result?.id) {
      router.push("/admin/dashboard/deliveries?tab=deliveries");
    }
  };

  useEffect(() => { }, [img]);
  const [showPass, setShowPass] = useState(false);
  const [showCPass, setShowCPass] = useState(false);
  return (
    <div className="w-full">
      <Header tab={tab}>
        <Link href={"/admin/dashboard/deliveries?tab=deliveries"}>
          <Button className="flex gap-2 items-center">
            <ArrowLeft className="size-[20px]" />
            <span className="text-sm">Back</span>
          </Button>
        </Link>
      </Header>
      <div className="content p-5 bg-gray-100">
        <div className=" bg-white rounded-2xl p-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Delivery
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Create some deliver to show all to customers
                </p>

                <div className="mt-10">
                  {/* first and last name */}
                  <div className="flex w-full justify-between ">
                    <div className="sm:col-span-4 ">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        First Name
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-inset ring-gray-300  sm:max-w-md">
                          <input
                            {...register("firstName", {
                              required: "Firstname is required",
                            })}
                            type="text"
                            name="firstName"
                            placeholder="first name"
                            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
                          />
                          {errors?.firstName?.message && (
                            <p className="text-red-500 text-[0.65rem] mt-2 self-end">
                              {errors?.firstName?.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="sm:col-span-4 ">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Last Name
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-inset ring-gray-300  sm:max-w-md">
                          <input
                            {...register("lastName", {
                              required: "Lastname is required",
                            })}
                            type="text"
                            name="lastName"
                            placeholder="last name"
                            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
                          />
                          {errors?.lastName?.message && (
                            <p className="text-red-500 text-[0.65rem] mt-2 self-end">
                              {errors?.lastName?.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="sm:col-span-4 w-36">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Phone number
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-inset ring-gray-300  sm:max-w-md">
                          <input
                            {...register("phone", { required: true })}
                            type="text"
                            className="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Phone number"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sm:col-span-4 w-1/3">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Address
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-inset ring-gray-300  sm:max-w-md">
                          <input
                            {...register("address", { required: true })}
                            type="text"
                            className="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Address"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* first and last name */}
                  {/* password and email */}
                  <div className="flex w-full justify-between mt-3">
                    <div className="sm:col-span-4 w-1/4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-inset ring-gray-300  sm:max-w-md">
                          <input
                            {...register("email", {
                              required: "Email is required",
                            })}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="email@gmail.com"
                            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
                          />
                          {errors?.email?.message && (
                            <p className="text-red-500 text-[0.65rem] mt-2 self-end">
                              {errors?.email?.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="sm:col-span-4 w-1/3">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                      <div className="mt-2">
                        <div className="flex relative w-full px-3 py-2 rounded-md border focus-within:border-gray-500 focus-within:border-2 justify-between items-center">
                          <input
                            {...register("password", {
                              required: "Password is required",
                            })}
                            type={showPass ? "text" : "password"}
                            id="password"
                            name="password"
                            placeholder="password"
                            className="focus:outline-none border-none w-full"
                          />
                          {!showPass ? (
                            <Eye
                              className="cursor-pointer"
                              onClick={() => setShowPass(!showPass)}
                            />
                          ) : (
                            <EyeOff
                              className="cursor-pointer"
                              onClick={() => setShowPass(!showPass)}
                            />
                          )}
                        </div>
                        {errors?.password?.message && (
                          <p className="text-red-500 text-[0.65rem] mt-2 self-end">
                            {errors?.password?.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="sm:col-span-4 w-1/3">
                      <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Confirm password
                      </label>
                      <div className="mt-2">
                        <div className="flex relative w-full px-3 py-2 rounded-md border focus-within:border-gray-500 focus-within:border-2 justify-between items-center">
                          <input
                            {...register("confirmPassword", {
                              required: "Password is required",
                            })}
                            type={showCPass ? "text" : "password"}
                            // id="password"
                            // name="password"
                            placeholder="password"
                            className="focus:outline-none border-none w-full"
                          />
                          {!showCPass ? (
                            <Eye
                              className="cursor-pointer"
                              onClick={() => setShowCPass(!showCPass)}
                            />
                          ) : (
                            <EyeOff
                              className="cursor-pointer"
                              onClick={() => setShowCPass(!showCPass)}
                            />
                          )}
                        </div>
                        {errors?.password?.message && (
                          <p className="text-red-500 text-[0.65rem] mt-2 self-end">
                            {errors?.password?.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="cover-photo"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Profile
                    </label>
                    {!img.imgFile ? (
                      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-300"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                onChange={(e) =>
                                  setImg({
                                    imgPreview: URL.createObjectURL(
                                      e.target.files[0]
                                    ),
                                    imgFile: e.target.files[0],
                                  })
                                }
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <Image
                          src={img.imgPreview}
                          width={1000}
                          height={1000}
                          alt="preview"
                          className="h-[400px] object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <Link
                href={"/admin/dashboard/deliveries?tab=Delivery"}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </Link>
              <Button>
                {isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
