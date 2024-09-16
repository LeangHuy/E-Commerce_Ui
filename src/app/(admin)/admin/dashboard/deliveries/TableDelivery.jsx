"use client";
import React from "react";
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
import { deleteSlideAction } from "@/acitons/slideAction";
import { EyeIcon } from "lucide-react";
function DeliveryTable({ data }) {
  return (
    <div>
      <Table>
        <TableCaption>List of Delivery</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>Profile</TableHead>
            <TableHead>Name</TableHead>

            <TableHead>Phone</TableHead>
            <TableHead className="text-right">Address</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.payload?.map((slide, idx) => (
            <TableRow key={idx} className="group">
              <TableCell className="font-medium">{idx + 1}</TableCell>
              <TableCell>
                <Image
                  src={getPhoto(slide?.profile)}
                  priority
                  width={1000}
                  height={1000}
                  alt="profile"
                  className="size-[3.5rem] object-cover rounded-sm"
                />
              </TableCell>
              <TableCell>{slide?.firstName + " " + slide?.lastName}</TableCell>
              <TableCell>{slide?.phone}</TableCell>
              <TableCell className=" text-right">{slide?.address}</TableCell>

              <TableCell className="text-right">
                <div className="flex justify-end gap-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="flex  rounded-sm gap-3 items-center px-2 py-1.5 hover:bg-accent cursor-pointer ">
                        <Eye className="size-[18px] group-hover:stroke-green-400  transition-all hover:stroke-red-500 cursor-pointer" />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle className="text-sky-500">
                          View Detail
                        </DialogTitle>
                      </DialogHeader>
                      <div className="flex justify-between">
                        <div className="w-1/2">
                          <label className="block text-sm capitalize font-medium leading-6 text-gray-900">
                            {/* Delivery Name :{" "} */}
                            <span className="font-bold">
                              {slide?.firstName + " " + slide?.lastName}
                            </span>
                          </label>
                          <label className="block text-sm capitalize font-medium leading-6 text-gray-900">
                            {/* Email :{" "} */}
                            <span className="font-bold">
                              {slide?.email}
                            </span>
                          </label>
                          <label className="block text-sm capitalize font-medium leading-6 text-gray-900 ">
                            {/* Phone Number :{" "} */}
                            <span className="font-bold">
                              {slide?.phone}
                            </span>
                          </label>
                          <label className="block text-sm capitalize font-medium leading-6 text-gray-900 ">
                            {/* Address:{" "} */}
                            <span className="font-bold">
                              {slide?.address}
                            </span>
                          </label>
                          <label className="block text-sm capitalize font-medium leading-6 text-gray-900 ">
                            {/* Gender :{" "} */}
                            <span className="font-bold ">
                              {slide?.gender}
                            </span>
                          </label>
                        </div>
                        <div className="w-1/3 p-2 border-1 border rounded-md">
                          <Image
                            src={getPhoto(slide?.profile)}
                            className="w-full rounded-md border-1  object-cover hover:scale-105 transition-all cursor-pointer border border-gray-300"
                            alt="alt"
                            width={1000}
                            height={1000}
                          />
                        </div>
                      </div>

                    </DialogContent>
                  </Dialog>
                </div>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default DeliveryTable;
