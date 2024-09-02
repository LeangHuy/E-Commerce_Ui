import React from "react";
import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import { ImagePlusIcon, Eye, Trash } from "lucide-react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { getPhoto } from "@/lib/utils";
import { getAllBanks } from "@/service/bank.service";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { MoreHorizontal } from "lucide-react";
import { Pen } from "lucide-react";


async function BankPage({ searchParams: { tab = "Bank" } }) {
    const allBanks = await getAllBanks();

    return (
        <div className="w-full">
            <Header tab={tab}>
                <Link href={"/admin/dashboard/bank/add?tab=Bank"}>
                    <Button className="flex gap-2 items-center">
                        <ImagePlusIcon className="size-[20px]" />
                        <span className="text-sm">Add Bank KHQR</span>
                    </Button>
                </Link>
            </Header>
            <div className="content p-5 bg-gray-100">
                <div className="bg-white min-h-screen rounded-2xl p-10">
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
                            {allBanks.map((bank, idx) => (
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
            </div>
        </div>
    );
}

export default BankPage;
