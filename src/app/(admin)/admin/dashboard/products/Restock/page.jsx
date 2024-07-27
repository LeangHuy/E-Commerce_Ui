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
import { Loader2, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { restockProductAction } from "@/acitons/productAction";
import { ArchiveRestore } from "lucide-react";
const RestockProduct = ({ product }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  async function onSubmit(data) {
    const result = await restockProductAction(product?.productId, data.newStock);
    console.log("result", result);
    if (result?.statusCode === 200 ) {
        toast.success("Product has been restocsk");
    }else{
        toast.error(result.detail);
    }
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex w-full rounded-sm gap-3 items-center px-2 py-1.5 hover:bg-accent cursor-pointer ">
            <ArchiveRestore className="size-[18px] group-hover:stroke-green-400  transition-all hover:stroke-red-500 cursor-pointer" />
            <p className="group-hover:text-green-400">Restock</p>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              Restock for{" "}
              <span className="text-sky-400">{product?.productName}</span>
            </DialogTitle>
            <DialogDescription>
              Restock here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
            <div className="">
              <label
                htmlFor="newStock"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Product Stock
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-inset ring-gray-300  sm:max-w-md">
                  <input
                    {...register("newStock", {
                      required: true,
                      valueAsNumber: true,
                    })}
                    type="number"
                    defaultValue={product?.productStock}
                    className="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Product stock"
                  />
                </div>
              </div>
            </div>
            <DialogTrigger>
              <Button>
                {isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Save changes
              </Button>
            </DialogTrigger>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default RestockProduct;
