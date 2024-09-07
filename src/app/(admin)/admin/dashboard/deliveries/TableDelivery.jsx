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
  console.log(data);
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
                  <EyeIcon />
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
