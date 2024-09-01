import React from "react";
import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import { ImagePlusIcon } from "lucide-react";

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
import { Pencil } from "lucide-react";
import Link from "next/link";
import { getPhoto } from "@/lib/utils";


async function BankPage({ searchParams: { tab = "Bank" } }) {
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
                <div className=" bg-white min-h-screen rounded-2xl p-10">
                    <Table>
                        <TableCaption>List of Bank KHQR</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">No</TableHead>
                                <TableHead>Image</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {/* {allSlides.map((slide, idx) => (
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
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-4">
                                            <Link
                                                href={`/admin/dashboard/slide/edit/${slide?.slideId}?tab=Slide`}
                                            >
                                                <Pencil className="size-[18px] p-2 box-content bg-gray-100 rounded-lg group-hover:bg-white transition-all hover:stroke-red-500 cursor-pointer" />
                                            </Link>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))} */}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default BankPage;
