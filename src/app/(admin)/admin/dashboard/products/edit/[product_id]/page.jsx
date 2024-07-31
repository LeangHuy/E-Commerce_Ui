"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useEffect } from "react";
import Header from "../../../components/Header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { getAllCategoriesAction } from "@/acitons/categoryAction";
import {
  getProductByIdAction,
  updateProductByIdAction,
} from "@/acitons/productAction";
import { X } from "lucide-react";
import Image from "next/image";
import { postImgAction } from "@/acitons/uploadImgAction";
import toast from "react-hot-toast";
import { getPhoto } from "@/lib/utils";

const EditProductPage = ({
  searchParams: { tab = "Overview" },
  params: { product_id },
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const router = useRouter();

  const [img, setImg] = useState([]);
  const [cate, setCate] = useState([]);
  const [warranty, setWarranty] = useState([null]);
  const [storeFile, setStoreFile] = useState(null);
  const [currentPro, setCurrentPro] = useState(null);

  const onSubmit = async (data) => {

    // Wait for all images to be uploaded
    const uploadedFiles = await Promise.all(
      img.map(async (i) => {
        const formData = new FormData();
        formData.append("file", i.imgFile);
        const response = await postImgAction(formData);
        return response;
      })
    );


    // Proceed with submitting the product data
    const result = await updateProductByIdAction(
      {
        // ...data,
        productName: data.productName || currentPro?.productName,
        productStock: data.productStock || currentPro?.productStock,
        unitPrice: data?.unitPrice || currentPro.unitPrice,
        productDesc: data.productDesc || currentPro.productDesc,
        discount: data.discount || currentPro.discount,
        categoryId: data.categoryId || currentPro.category.categoryId,
        warrantyDate: data.warrantyDate || currentPro.warranty.warrantyDate,
        quality: data.quality || currentPro.quality,
        productImages: [
          ...currentPro?.imageProductList.map((file) => file.fileName),
          ...uploadedFiles,
        ],
      },
      warranty || currentPro?.warranty.warrantyDate,
      product_id || currentPro.product_id
    );


    if (result?.statusCode == 200) {
      // setImg([{ imgFile: null, imgPreview: null }]);
      toast.success("Updated product successfully");
      router.push("/admin/dashboard/products?tab=Products");
    } else {
      toast.error("Updated product was not success");
    }

    // if (result?.productId) {
    //   setImg([{ imgFile: null, imgPreview: null }]);
    //   toast.success("Updated product successfully");
    //   router.push("/admin/dashboard/products?tab=Products");
    // } else {
    //   toast.error("Updated product was not success");
    // }
  };

  useEffect(() => {
    getAllCategoriesAction(1, 999).then((data) => setCate(data));
    getProductByIdAction(product_id).then((data) => {
      setCurrentPro(data);
      setWarranty(data?.warranty?.warrantyTime);
      setStoreFile([...data?.imageProductList]);
    });
  }, []);

  useEffect(() => {
  }, [currentPro]);

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
                  Edit Product
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Start enter your product information
                </p>

                <div className="mt-10 grid grid-cols-4 gap-x-6 gap-y-8 ">
                  <div className="">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product Name
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-inset ring-gray-300  sm:max-w-md">
                        <input
                          {...register("productName")}
                          type="text"
                          defaultValue={currentPro?.productName}
                          className="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <label
                      htmlFor="username"
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
                          defaultValue={currentPro?.productStock}
                          className="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product Quality
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-inset ring-gray-300  sm:max-w-md">
                        <input
                          {...register("quality", {
                            required: false,
                          })}
                          type="text"
                          defaultValue={currentPro?.quality}
                          className="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <label
                      htmlFor="username"
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
                          defaultValue={currentPro?.unitPrice}
                          type="number"
                          className="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <label
                      htmlFor="username"
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
                          defaultValue={currentPro?.discount}
                          type="number"
                          className="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product Category
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-inset ring-gray-300 h-10 ">
                        <select
                          className="w-full rounded-md shadow-sm"
                          {...register("categoryId")}
                        >
                          <option value={currentPro?.category?.categoryId}>
                            {currentPro?.category?.categoryName}
                          </option>
                          {cate
                            ?.filter(
                              (c) =>
                                c?.categoryName !== currentPro?.categoryName
                            )
                            .map((c) => (
                              <option value={c?.categoryId} key={c?.categoryId}>
                                {c?.categoryName}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product Warranty
                    </label>
                    <div className="mt-2">
                      <div className="flex w-full rounded-md shadow-sm ring-inset ring-gray-300 h-10">
                        <select
                          className="w-full rounded-md shadow-sm "
                          onChange={(e) => setWarranty(e?.target?.value)}
                        >
                          <option value={currentPro?.warranty?.warrantyTime}>
                            {currentPro?.warranty?.warrantyTime}
                          </option>
                          {["DAY", "MONTH", "YEAR"]
                            .filter(
                              (time) =>
                                time !== currentPro?.warranty?.warrantyTime
                            )
                            .map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="username"
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
                          defaultValue={currentPro?.warranty?.warrantyDate}
                          className="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Description
                    </label>
                    <div className="mt-2">
                      <textarea
                        {...register("productDesc", { required: false })}
                        rows="3"
                        defaultValue={currentPro?.productDesc}
                        className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 max-h-[100px] focus:ring-inset  sm:text-sm sm:leading-6"
                      ></textarea>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      Write a few sentences about product.
                    </p>
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="cover-photo"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product photos
                    </label>
                    {img?.length <= 2 && (
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
                    {currentPro?.imageProductList?.length > 0 &&
                      currentPro?.imageProductList?.map((i, idx) =>
                        i ? (
                          <div key={idx} className="relative">
                            <Image
                              src={getPhoto(i?.fileName)}
                              width={1000}
                              height={1000}
                              alt="preview"
                              className="h-[230px] object-cover rounded-lg"
                            />
                            <div
                              onClick={() =>
                                setCurrentPro({
                                  ...currentPro,
                                  imageProductList:
                                    currentPro?.imageProductList?.filter(
                                      (p) => p.fileName !== i.fileName
                                    ),
                                })
                              }
                              className="absolute cursor-pointer transition-all hover:scale-105 group top-2 right-2 size-[1.5rem] rounded-full p-1 flex items-center justify-center bg-white"
                            >
                              <X className="group-hover:stroke-red-500" />
                            </div>
                          </div>
                        ) : null
                      )}
                    {img.map((i, idx) => (
                      <div key={idx} className="relative">
                        <Image
                          src={i.imgPreview}
                          width={1000}
                          height={1000}
                          alt="preview"
                          className="h-[230px] object-cover rounded-lg"
                        />
                        <div
                          onClick={() =>
                            setCurrentPro({
                              ...currentPro,
                              imageProductList:
                                currentPro?.imageProductList?.filter(
                                  (p) => p.fileName !== i.fileName
                                ),
                            })
                          }
                          className="absolute cursor-pointer transition-all hover:scale-105 group top-2 right-2 size-[1.5rem] rounded-full p-1 flex items-center justify-center bg-white"
                        >
                          <X className="group-hover:stroke-red-500" />
                        </div>
                      </div>
                    ))}

                    {/* <div  className="relative">
                      <Image
                        src={
                          "http://34.143.196.56:9090/api/v1/files?fileName=25271d84-3549-4b2e-9f6f-9269d6cddc57.png"
                        }
                        width={1000}
                        height={1000}
                        alt="preview"
                        className="h-[230px] object-cover rounded-lg"
                      />
                      <div
                        onClick={() =>
                          setImg(
                            img?.filter(
                              (pre) => pre.imgPreview !== i?.imgPreview
                            )
                          )
                        }
                        className="absolute cursor-pointer transition-all hover:scale-105 group top-2 right-2 size-[1.5rem] rounded-full p-1 flex items-center justify-center bg-white"
                      >
                        <X className="group-hover:stroke-red-500" />
                      </div>
                    </div> */}
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

export default EditProductPage;
