"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ImagePlusIcon } from "lucide-react";
import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import { createSlideAction } from "@/acitons/slideAction";
import Image from "next/image";
import { uploadImgAction } from "@/acitons/uploadImgAction";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { revalidateWhere } from "@/acitons/revalidateAction";

const AdminDashboardPage = ({ searchParams: { tab = "Overview" } }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const { toast } = useToast();

  const [img, setImg] = useState({ imgPreview: null, imgFile: null });

  const onSubmit = async (data) => {
    const result = await createSlideAction(data);
    const formData = new FormData();
    formData.append("file", img.imgFile);
    const imgResult = await uploadImgAction(formData, result.slideId);
    reset();
    setImg({ imgFile: null, imgPreview: null });
    await revalidateWhere("getAllSlideShows");
    if (result?.slideId && imgResult?.fileName) {
      router.back();
    }
  };

  useEffect(() => {
    console.log("img file", img);
  }, [img]);

  return (
    <div className="w-full">
      <Header tab={tab}>
        <Link href={"/admin/dashboard/slide/add?tab=Slide"}>
          <Button className="flex gap-2 items-center">
            <ImagePlusIcon className="size-[20px]" />
            <span className="text-sm">Add Slides</span>
          </Button>
        </Link>
      </Header>
      <div className="content p-5 bg-gray-100">
        <div className=" bg-white rounded-2xl p-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="space-y-12">
              <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base font-semibold leading-7 text-gray-900">
                  Slideshow
                </h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">
                  Upload any photos of your products to show all to customers
                </p>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div class="sm:col-span-4">
                    <label
                      for="username"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Title
                    </label>
                    <div class="mt-2">
                      <div class="flex rounded-md shadow-sm ring-inset ring-gray-300  sm:max-w-md">
                        <input
                          {...register("title", { required: true })}
                          type="text"
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
                        {...register("description", { required: true })}
                        placeholder="describe about your images slideshow"
                        rows="3"
                        class="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 max-h-[100px] focus:ring-inset  sm:text-sm sm:leading-6"
                      ></textarea>
                    </div>
                    <p class="mt-3 text-sm leading-6 text-gray-600">
                      Write a few sentences about image slideshow.
                    </p>
                  </div>

                  <div class="col-span-full">
                    <label
                      for="cover-photo"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Slideshow photo
                    </label>
                    {!img.imgFile ? (
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
                    ) : (
                      <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
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

            <div class="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                class="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <Button>Save</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
