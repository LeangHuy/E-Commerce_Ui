"use client";
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
} from "@/components/ui/dialog";
import { postCategoryAction } from "@/acitons/categoryAction";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
const AddCategoryPage = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const result = await postCategoryAction(data);
        if (result?.categoryId) {
            toast.success("New Category was Added");
        }
    };

    return (
        <div>
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
export default AddCategoryPage;
