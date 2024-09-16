"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../../../components/Header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { editSlideByIdAction, getSlideByIdAction } from "@/acitons/slideAction";
import toast from "react-hot-toast";
import { revalidateWhere } from "@/acitons/revalidateAction";
import Image from "next/image";
import { getPhoto } from "@/lib/utils";
import { postImgAction, uploadImgAction } from "@/acitons/uploadImgAction";

const AdminDashboardPage = ({
  searchParams: { tab = "Overview" },
  params: { slideId },
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const router = useRouter();

  const [img, setImg] = useState({ imgPreview: null, imgFile: null });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", img?.imgFile);
    const imgresult = await postImgAction(formData);
    const result = await editSlideByIdAction(
      { ...data, image: imgresult },
      slideId
    );

    reset();

    if (result?.slideId) {
      toast.success("Slide has been updated successfully");
      router.push("/admin/dashboard/slide?tab=Slide");
    } else toast.error("Error");
  };

  useEffect(() => { }, [img]);

  const [currentSlide, setCurrentSlide] = useState(null);

  useEffect(() => {
    getSlideByIdAction(slideId).then((data) => {
      setCurrentSlide(data);
    });
  }, []);

  return (
    <div className="w-full">
      <Header tab={tab}>
        <Link href={"/admin/dashboard/slide?tab=Slide"}>
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
                  Edit Slideshow
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Upload any photos of your products to show all to customers
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Title
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-inset ring-gray-300  sm:max-w-md">
                        <input
                          {...register("title", { required: false })}
                          type="text"
                          defaultValue={currentSlide?.title}
                          className="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="title of your image"
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
                        {...register("description", { required: false })}
                        placeholder="describe about your images slideshow"
                        rows="3"
                        defaultValue={currentSlide?.description}
                        className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 max-h-[100px] focus:ring-inset  sm:text-sm sm:leading-6"
                      ></textarea>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      Write a few sentences about image slideshow.
                    </p>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="cover-photo"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Slideshow photo
                    </label>
                    {!img.imgFile ? (
                      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        {/* <div className="text-center">
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
                        </div> */}
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
                        <label htmlFor="file-upload">
                          <Image
                            src={getPhoto(currentSlide?.image)}
                            width={1000}
                            height={1000}
                            alt="preview"
                            className="h-[400px] object-cover rounded-lg"
                          />
                        </label>
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
            {/* {!img.imgFile && (
              <div>
                <Image
                  src={getPhoto(currentSlide?.image)}
                  width={1000}
                  height={1000}
                  alt="preview"
                  className="h-[400px] object-cover rounded-lg"
                />
              </div>
            )} */}

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <Link
                href={"/admin/dashboard/slide?tab=Slide"}
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

export default AdminDashboardPage;
