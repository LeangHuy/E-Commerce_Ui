"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { postCategoryAction } from '@/acitons/categoryAction';
const AddCategoryPage = () => {
    const onSubmit = async (data) => {
        console.log("category data :", data)
        const result = await postCategoryAction({ data });

        await revalidateWhere("getAllSlideShows");
        if (result?.productId) {
            router.push("/admin/dashboard/products?tab=Products");
        }
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    return (
        // <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="flex gap-2 items-center">
                        <Package className="size-[20px]" />
                        <span className="text-sm">Add Category</span>
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Category</DialogTitle>
                        <DialogDescription>
                            Make category here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div class="">
                            <label
                                htmlFor="categoryName"
                                class="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Category Name
                            </label>
                            <div class="mt-2">
                                <div class="flex rounded-md shadow-sm ring-inset ring-gray-300  sm:max-w-md">
                                    <input
                                        {...register("categoryName", { required: true })}
                                        type="text"
                                        class="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Category name"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button >Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </form>
        // </div>
    )
}
export default AddCategoryPage;
