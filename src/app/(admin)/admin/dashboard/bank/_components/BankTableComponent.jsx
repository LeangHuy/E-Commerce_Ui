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

function BankTableComponent({ banks }) {
    return (
        <div>
            <Table>
                <TableCaption>List of Bank KHQR</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">No</TableHead>
                        <TableHead>Bank Name</TableHead>
                        <TableHead>KHQR</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {banks?.map((bank, idx) => (
                        <TableRow key={idx} className="group">
                            <TableCell className="font-medium">{idx + 1}</TableCell>
                            <TableCell className="font-bold">{bank?.bankName}</TableCell>
                            <TableCell>
                                <Image
                                    src={getPhoto(bank?.qrCode)}
                                    priority
                                    width={1000}
                                    height={1000}
                                    alt="profile"
                                    className="size-[3.5rem] object-cover rounded-sm"
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
                                                    href={`/admin/dashboard/bank/edit/${bank?.id}?tab=Banks`}
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
                                                                        Do you want to delete this bank KHQR?
                                                                    </DialogDescription>
                                                                </DialogHeader>
                                                                <form className="grid gap-4 py-4">
                                                                    <div className="">
                                                                        <label
                                                                            htmlFor="categoryName"
                                                                            className="block text-sm capitalize font-medium leading-6 text-gray-900"
                                                                        >
                                                                            {bank?.bankName}
                                                                        </label>
                                                                    </div>
                                                                    <DialogHeader>
                                                                        <div>
                                                                            <ButtonDelete
                                                                                productId={bank?.id}
                                                                                fnDelete={deleteBankAction}
                                                                            >
                                                                                Delete Bank KHQR
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

export default BankTableComponent
