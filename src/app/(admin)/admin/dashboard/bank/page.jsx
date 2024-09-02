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
import { deleteBankAction } from "@/acitons/bankAction";
import BankTableComponent from "./_components/BankTableComponent";


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
                    <BankTableComponent banks={allBanks} />
                </div>
            </div>
        </div>
    );
}

export default BankPage;
