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
import { getBankByIdAction } from "@/acitons/bankAction";

const AdminDashboardPage = ({
  searchParams: { tab = "Overview" },
  params: { bankId },
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
    const result = await editSlideByIdAction(data, bankId);

    reset();


    if (result?.id) {
      toast.success("Bank KHQR has been updated successfully");
      router.push("/admin/dashboard/bank?tab=Banks");
    }
  };

  useEffect(() => {
  }, [img]);

  const [currentBank, setCurrentBank] = useState(null);

  useEffect(() => {
    getBankByIdAction(bankId).then((data) => {
      setCurrentBank(data);
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
                          defaultValue={currentBank?.bankName}
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
                        defaultValue={currentBank?.qrCode}
                        className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 max-h-[100px] focus:ring-inset  sm:text-sm sm:leading-6"
                      ></textarea>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      Write a few sentences about image slideshow.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <Link
                href={"/admin/dashboard/slide?tab=Slide"}
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

export default AdminDashboardPage;
