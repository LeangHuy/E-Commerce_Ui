"use client";
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";
import { getPhoto } from "@/lib/utils";
import { Eye } from "lucide-react";
import { MoreHorizontal } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Pen } from "lucide-react";
import { Trash } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import ButtonDelete from '../../products/ButtonDeleteProduct';
import { deleteBankAction } from '@/acitons/bankAction';
import SwitchToggle from '../../components/SwtichToggle';
import { deleteSlideAction } from '@/acitons/slideAction';
function SlideTableComponent({ slides }) {
    return (
        <div>
            <Table>
                <TableCaption>List of Slides Show</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">No</TableHead>
                        <TableHead>Image</TableHead>
                        <TableHead>Title</TableHead>

                        <TableHead>Description</TableHead>
                        <TableHead className="text-right">Toggle Active</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {slides.map((slide, idx) => (
                        <TableRow key={idx} className="group">
                            <TableCell className="font-medium">{idx + 1}</TableCell>
                            <TableCell>
                                <Image
                                    src={getPhoto(slide?.image)}
                                    priority
                                    width={1000}
                                    height={1000}
                                    alt="profile"
                                    className="size-[3.5rem] object-cover rounded-sm"
                                />
                            </TableCell>
                            <TableCell>{slide?.title}</TableCell>
                            <TableCell>{slide?.description}</TableCell>
                            <TableCell className="flex items-center">
                                <SwitchToggle
                                    slideId={slide?.slideId}
                                    isActive={slide?.isActive}
                                    slide={slide}
                                />
                            </TableCell>
                            <TableCell className="text-right">
                                <div className="flex justify-end gap-4">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <MoreHorizontal className="size-[18px] p-2 box-content bg-gray-100 rounded-lg group-hover:bg-white transition-all hover:stroke-red-500 cursor-pointer" />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-50">
                                            <DropdownMenuGroup>
                                                <Link
                                                    href={`/admin/dashboard/slide/edit/${slide?.slideId}?tab=Slide`}
                                                >
                                                    <DropdownMenuItem className="cursor-pointer">
                                                        <div className="flex items-center gap-3 group">
                                                            <Pen className="size-[18px] group-hover:stroke-indigo-400  transition-all hover:stroke-red-500 cursor-pointer" />
                                                            <p className="group-hover:text-indigo-400">
                                                                Edit
                                                            </p>
                                                        </div>
                                                    </DropdownMenuItem>
                                                </Link>
                                                <div>
                                                    <div className="flex items-center gap-3 group">
                                                        <Dialog>
                                                            <DialogTrigger asChild>
                                                                <div className="flex w-full rounded-sm gap-3 items-center px-2 py-1.5 hover:bg-accent cursor-pointer ">
                                                                    <Eye className="size-[18px] group-hover:stroke-green-400  transition-all hover:stroke-red-500 cursor-pointer" />
                                                                    <p className="group-hover:text-green-400">
                                                                        View
                                                                    </p>
                                                                </div>
                                                            </DialogTrigger>
                                                            <DialogContent className="sm:max-w-[425px]">
                                                                <DialogHeader>
                                                                    <DialogTitle className="text-sky-500">
                                                                        View Detail
                                                                    </DialogTitle>
                                                                </DialogHeader>
                                                                <div className="">
                                                                    <label className="block text-sm capitalize font-medium leading-6 text-gray-900">
                                                                        Slide title :{" "}
                                                                        <span className="font-bold">
                                                                            {slide?.title}
                                                                        </span>
                                                                    </label>
                                                                    <label className="block text-sm capitalize font-medium leading-6 text-gray-900">
                                                                        Slide description :{" "}
                                                                        <span className="font-bold">
                                                                            {slide?.description}
                                                                        </span>
                                                                    </label>
                                                                    <label className="block text-sm capitalize font-medium leading-6 text-gray-900">
                                                                        Slide Active :{" "}
                                                                        <span className="font-bold">
                                                                            {slide?.isActive == true
                                                                                ? "Slide is enable"
                                                                                : "Slide is disable"
                                                                            }
                                                                        </span>
                                                                    </label>
                                                                    <label className="block text-sm capitalize font-medium leading-6 text-gray-900 ">
                                                                        Image :
                                                                    </label>
                                                                    <div >
                                                                        <Image
                                                                            src={getPhoto(slide?.image)}
                                                                            className="w-full object-cover  cursor-pointer rounded-md border border-gray-300"
                                                                            alt="alt"
                                                                            width={1000}
                                                                            height={1000}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </DialogContent>
                                                        </Dialog>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-3 group">
                                                        <Dialog>
                                                            <DialogTrigger asChild>
                                                                <div className="flex w-full rounded-sm gap-3 items-center px-2 py-1.5 hover:bg-accent cursor-pointer ">
                                                                    <Trash className="size-[18px] group-hover:stroke-red-400  transition-all hover:stroke-red-500 cursor-pointer" />
                                                                    <p className="group-hover:text-red-400">
                                                                        Delete
                                                                    </p>
                                                                </div>
                                                            </DialogTrigger>
                                                            <DialogContent className="sm:max-w-[425px]">
                                                                <DialogHeader>
                                                                    <DialogTitle className="text-red-500">
                                                                        Attention
                                                                    </DialogTitle>
                                                                    <DialogDescription>
                                                                        Do you want to delete this slide?
                                                                    </DialogDescription>
                                                                </DialogHeader>
                                                                <form className="grid gap-4 py-4">
                                                                    <div className="">
                                                                        <label
                                                                            htmlFor="categoryName"
                                                                            className="block text-sm capitalize font-medium leading-6 text-gray-900"
                                                                        >
                                                                            Slide title : <span className='font-bold text-blue-500'>{slide?.title}</span>
                                                                        </label>
                                                                    </div>
                                                                    <DialogHeader>
                                                                        <div>
                                                                            <ButtonDelete
                                                                                productId={slide?.slideId}
                                                                                fnDelete={deleteSlideAction}
                                                                            >
                                                                                Delete Slide
                                                                            </ButtonDelete>
                                                                        </div>
                                                                    </DialogHeader>
                                                                </form>
                                                            </DialogContent>
                                                        </Dialog>
                                                    </div>
                                                </div>
                                            </DropdownMenuGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default SlideTableComponent
