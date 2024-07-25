"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { postImgAction } from "@/acitons/uploadImgAction";
import { ArrowLeft, Loader2 } from "lucide-react";
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
    formState: { errors, isSubmitting },
  } = useForm();

  const router = useRouter();

  const [images, setImg] = useState([]);
  const [cate, setCate] = useState([]);
  const [warranty, setWarranty] = useState([null]);
  const [storeFile, setStoreFile] = useState([]);

  const onSubmit = async (data) => {

    // Wait for all images to be uploaded
    const uploadedFiles = await Promise.all(
      images.map(async (i) => {
        const formData = new FormData();
        formData.append("file", i.imgFile);
        const response = await postImgAction(formData);
        return response;
      })
    );

    // Set storeFile state
    console.log("Upload Files : ", uploadedFiles);
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

    console.log("Result : ", result);
    console.log("Image Files : ", images);
  };

  useEffect(() => {
    getAllCategoriesAction(1, 999).then((data) => {
      setCate(data)
    });
   
  }, [images]);

  // useEffect(() => {
  // }, [img]);

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
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Product
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Start enter your product information
                </p>

                <div className="mt-10 grid grid-cols-4 gap-x-6 gap-y-8 ">
                  <div className="">
                    <label
                      for="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product Name
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-inset ring-gray-300  sm:max-w-md">
                        <input
                          {...register("productName", { required: true })}
                          type="text"
                          className="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="product name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <label
                      for="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product Stock
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-inset ring-gray-300  sm:max-w-md">
                        <input
                          {...register("productStock", {
                            required: true,
                            valueAsNumber: true,
                          })}
                          type="number"
                          className="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="product stock"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <label
                      for="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product Price
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-inset ring-gray-300  sm:max-w-md">
                        <input
                          {...register("unitPrice", {
                            required: true,
                            valueAsNumber: true,
                          })}
                          type="number"
                          className="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="price of a product"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <label
                      for="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product Discount
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-inset ring-gray-300  sm:max-w-md">
                        <input
                          {...register("discount", {
                            required: true,
                            valueAsNumber: true,
                          })}
                          type="number"
                          className="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="0-100%"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <label
                      for="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product Category
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-inset ring-gray-300 h-10 ">
                        <select className="w-full rounded-md shadow-sm " {...register("categoryId", { required: true })}>
                          <option value={null}>Select</option>
                          {cate?.map((c) => (
                            <option value={c.categoryId} key={c?.categoryId}>
                              {c.categoryName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <label
                      for="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product Warranty Time
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-inset ring-gray-300 h-10 ">
                        <select className="w-full rounded-md shadow-sm " onChange={(e) => setWarranty(e.target.value)}>
                          <option value={null}>Select</option>

                          <option value={"DAY"}>DAY</option>
                          <option value={"MONTH"}>MONTH</option>
                          <option value={"YEAR"}>YEAR</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <label
                      for="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product Warranty Date Count
                    </label>
                    <div className="mt-2">
                      <div className="flex w-full rounded-md shadow-sm ring-inset ring-gray-300 ">
                        <input
                          {...register("warrantyDate", {
                            required: true,
                            valueAsNumber: true,
                          })}
                          type="number"
                          className="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="warranty date"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-full">
                    <label
                      for="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Description
                    </label>
                    <div className="mt-2">
                      <textarea
                        {...register("productDesc", { required: true })}
                        placeholder="describe about your product"
                        rows="3"
                        className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 max-h-[100px] focus:ring-inset  sm:text-sm sm:leading-6"
                      ></textarea>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      Write a few sentences about product.
                    </p>
                  </div>
                  <div className="col-span-full">
                    <label
                      for="cover-photo"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product photos <span className="text-red-500">(1-3)*</span>
                    </label>
                    {images?.length <= 2 && (
                      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-300"
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
                          <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                              for="file-upload"
                              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                onChange={(e) =>
                                  setImg([
                                    ...images,
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
                    )}
                  </div>
                  <div className="grid grid-cols-3 gap-10 col-span-4">
                    {images?.length >= 1 &&
                      images?.map((i, idx) => (
                        i?.imgPreview ? 
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
                                images.filter(
                                  (pre) => pre?.imgPreview !== i?.imgPreview
                                )
                              )
                            }
                            className="absolute cursor-pointer transition-all hover:scale-105 group top-2 right-2 size-[1.5rem] rounded-full p-1 flex items-center justify-center bg-white"
                          >
                            <X className="group-hover:stroke-red-500" />
                          </div>
                        </div> : null
                      ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <Link
                href={"/admin/dashboard/products?tab=Products"}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </Link>
              <Button>
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
