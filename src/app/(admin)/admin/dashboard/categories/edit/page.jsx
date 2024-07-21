"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Tooltip } from "@nextui-org/react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  editCategoryAction,
  postCategoryAction,
} from "@/acitons/categoryAction";
import { Pencil } from "lucide-react";
import { Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
const EditCategoryPage = ({ cate }) => {
  const onSubmit = async (data) => {
    const result = await editCategoryAction(data, cate?.categoryId);
    if (result?.categoryId) {
      toast.success("Category has been updated");
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div>
            <Tooltip
              className="bg-blue-400 rounded-md px-2 py-0 text-white text-sm "
              content="Edit"
            >
              <Pencil className="size-[18px] p-2 box-content bg-gray-100 rounded-lg group-hover:bg-white transition-all hover:stroke-red-500 cursor-pointer" />
            </Tooltip>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Category</DialogTitle>
            <DialogDescription>
              Make category here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
            <div className="">
              <label
                htmlFor="categoryName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Category Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-inset ring-gray-300  sm:max-w-md">
                  <input
                    autoComplete="off"
                    {...register("categoryName", { required: true })}
                    type="text"
                    defaultValue={cate?.categoryName}
                    className="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Category name"
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button>Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default EditCategoryPage;
