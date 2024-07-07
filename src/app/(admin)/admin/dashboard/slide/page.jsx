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
import { Trash2Icon } from "lucide-react";
import { Pencil } from "lucide-react";
import Link from "next/link";

const ShopPage = ({ searchParams: { tab = "Slide" } }) => {
  return (
    <div className="w-full">
      <Header tab={tab}>
        <Link href={"/admin/dashboard/slide/add?tab=Slide"}>
          <Button className="flex gap-2 items-center">
            <ImagePlusIcon className="size-[20px]" />
            <span className="text-sm">Add Slides</span>
          </Button>
        </Link>
      </Header>
      <div className="content p-5 bg-gray-100">
        <div className=" bg-white min-h-screen rounded-2xl p-10">
          <Table>
            <TableCaption>List of Slides Show</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">No</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="group">
                <TableCell className="font-medium">1</TableCell>
                <TableCell>
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?q=80&w=2504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    priority
                    width={1000}
                    height={1000}
                    alt="profile"
                    className="size-[3.5rem] object-cover rounded-sm"
                  />
                </TableCell>
                <TableCell>Come and enjoy the best promotion</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-4">
                    <Pencil className="size-[18px] p-2 box-content bg-gray-100 rounded-lg group-hover:bg-white transition-all hover:stroke-red-500 cursor-pointer" />

                    <Trash2Icon className="size-[18px] p-2 box-content bg-gray-100 rounded-lg group-hover:bg-white transition-all hover:stroke-red-500 cursor-pointer" />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
