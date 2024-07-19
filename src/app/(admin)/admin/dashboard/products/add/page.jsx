"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { postImgAction } from "@/acitons/uploadImgAction";
import { ArrowLeft } from "lucide-react";
import { getAllCategoriesAction } from "@/acitons/categoryAction";
import { postProductAction } from "@/acitons/productAction";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AddProductPage = ({ searchParams: { tab = "Overview" } }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [img, setImg] = useState([]);
  const [cate, setCate] = useState([]);
  const [warranty, setWarranty] = useState([null]);
  const [storeFile, setStoreFile] = useState([]);

  const onSubmit = async (data) => {
    console.log("data : ", data);

    // Wait for all images to be uploaded
    const uploadedFiles = await Promise.all(
      img.map(async (i) => {
        const formData = new FormData();
        formData.append("file", i.imgFile);
        const response = await postImgAction(formData);
        console.log("file now ", response);
        return response;
      })
    );

    // Set storeFile state
    setStoreFile([...storeFile, ...uploadedFiles]);

    // Proceed with submitting the product data
    const result = await postProductAction(
      {
        ...data,
        productImages: [...storeFile, ...uploadedFiles],
      },
      warranty
    );

    if (result?.productId) {
      reset();
      setImg([{ imgFile: null, imgPreview: null }]);
      toast.success("Added new product");
      router.push("/admin/dashboard/products?tab=Products");
    }
  };

  useEffect(() => {
    getAllCategoriesAction(1, 999).then((data) => setCate(data));
  }, []);

  useEffect(() => {
    console.log("img", img);
  }, [img]);

  return (
    <div className="w-full">
      <Header tab={tab}>
        <Link href={"/admin/dashboard/products?tab=Products"}>
          <Button className="flex gap-2 items-center">
            <ArrowLeft className="size-[20px]" />
            <span className="text-sm">Back</span>
          </Button>
        </Link>
      </Header>
      <div className="content p-5 bg-gray-100">
        <div className=" bg-white rounded-2xl p-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="space-y-12">
              <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base font-semibold leading-7 text-gray-900">
                  Product
                </h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">
                  Start enter your product information
                </p>

                <div class="mt-10 grid grid-cols-4 gap-x-6 gap-y-8 ">
                  <div class="">
                    <label
                      for="username"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product Name
                    </label>
                    <div class="mt-2">
                      <div class="flex rounded-md shadow-sm ring-inset ring-gray-300  sm:max-w-md">
                        <input
                          {...register("productName", { required: true })}
                          type="text"
                          class="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="title of your image"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <label
                      for="username"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product Stock
                    </label>
                    <div class="mt-2">
                      <div class="flex rounded-md shadow-sm ring-inset ring-gray-300  sm:max-w-md">
                        <input
                          {...register("productStock", {
                            required: true,
                            valueAsNumber: true,
                          })}
                          type="number"
                          class="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="title of your image"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <label
                      for="username"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product Price
                    </label>
                    <div class="mt-2">
                      <div class="flex rounded-md shadow-sm ring-inset ring-gray-300  sm:max-w-md">
                        <input
                          {...register("unitPrice", {
                            required: true,
                            valueAsNumber: true,
                          })}
                          type="number"
                          class="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="title of your image"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <label
                      for="username"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product Discount
                    </label>
                    <div class="mt-2">
                      <div class="flex rounded-md shadow-sm ring-inset ring-gray-300  sm:max-w-md">
                        <input
                          {...register("discount", {
                            required: true,
                            valueAsNumber: true,
                          })}
                          type="number"
                          class="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="title of your image"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <label
                      for="username"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product Category
                    </label>
                    <div class="mt-2">
                      <div class="flex rounded-md shadow-sm ring-inset ring-gray-300 ">
                        <select {...register("categoryId", { required: true })}>
                          {cate?.map((c) => (
                            <option value={c.categoryId}>
                              {c.categoryName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="w-full">
                    <label
                      for="username"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product Warranty
                    </label>
                    <div class="mt-2">
                      <div class="flex w-full rounded-md shadow-sm ring-inset ring-gray-300 ">
                        <select onChange={(e) => setWarranty(e.target.value)}>
                          <option value={null}>Select</option>

                          <option value={"DAY"}>DAY</option>
                          <option value={"MONTH"}>MONTH</option>
                          <option value={"YEAR"}>YEAR</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="w-full">
                    <label
                      for="username"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product Warranty Count
                    </label>
                    <div class="mt-2">
                      <div class="flex w-full rounded-md shadow-sm ring-inset ring-gray-300 ">
                        <input
                          {...register("warrantyDate", {
                            required: true,
                            valueAsNumber: true,
                          })}
                          type="number"
                          class="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="title of your image"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-span-full">
                    <label
                      for="about"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Description
                    </label>
                    <div class="mt-2">
                      <textarea
                        {...register("productDesc", { required: true })}
                        placeholder="describe about your images slideshow"
                        rows="3"
                        class="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 max-h-[100px] focus:ring-inset  sm:text-sm sm:leading-6"
                      ></textarea>
                    </div>
                    <p class="mt-3 text-sm leading-6 text-gray-600">
                      Write a few sentences about product.
                    </p>
                  </div>
                  <div class="col-span-full">
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
                  </div>
                  <div className="grid grid-cols-3 gap-10 col-span-4">
                    {img?.length >= 1 &&
                      img?.map((i, idx) => (
                        <div key={idx} className="relative">
                          <Image
                            src={i?.imgPreview}
                            width={1000}
                            height={1000}
                            alt="preview"
                            className="h-[230px] object-cover rounded-lg"
                          />
                          <div
                            onClick={() =>
                              setImg(
                                img.filter(
                                  (pre) => pre.imgPreview !== i?.imgPreview
                                )
                              )
                            }
                            className="absolute cursor-pointer transition-all hover:scale-105 group top-2 right-2 size-[1.5rem] rounded-full p-1 flex items-center justify-center bg-white"
                          >
                            <X className="group-hover:stroke-red-500" />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-6 flex items-center justify-end gap-x-6">
              <Link
                href={"/admin/dashboard/products?tab=Products"}
                class="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </Link>
              <Button>Save</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
