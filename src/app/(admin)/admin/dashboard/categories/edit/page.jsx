"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import { Tooltip, Button } from "@nextui-org/react";

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
import { Pencil } from 'lucide-react';
import { Package } from 'lucide-react';
const EditCategoryPage = () => {
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
        <form onSubmit={handleSubmit(onSubmit)}>

            <Dialog>
                <DialogTrigger asChild>
                    <Button >
                        <Tooltip className="bg-blue-400 rounded-md px-2 py-0 text-white text-sm " content="Edit" >
                            <Pencil className="size-[18px] p-2 box-content bg-gray-100 rounded-lg group-hover:bg-white transition-all hover:stroke-red-500 cursor-pointer" />
                        </Tooltip>
                    </Button>

                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit Category</DialogTitle>
                        <DialogDescription>
                            Edit category name here. Click save when you're done.
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
                                        autoComplete="off"
                                        type="text"
                                        class="block flex-1 border rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Category name"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button className='bg-primary rounded-md text-white text-sm font-medium'>Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </form>
    )
}
export default EditCategoryPage;
