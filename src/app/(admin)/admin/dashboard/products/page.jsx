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
import { getAllSlideShows } from "@/service/slide.service";
import { getPhoto } from "@/lib/utils";
import SwtichToggle from "../components/SwtichToggle";
import { getAllProductService } from "@/service/product.service";
import { Package } from "lucide-react";
import { Eye } from "lucide-react";
import { Dot } from "lucide-react";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Pen } from "lucide-react";
import { Trash } from "lucide-react";

const ShopPage = async ({ searchParams: { tab = "Products" } }) => {
  const products = await getAllProductService();

  console.log("data :", products);

  return (
    <div className="w-full">
      <Header tab={tab}>
        <Link href={"/admin/dashboard/products/add?tab=Products"}>
          <Button className="flex gap-2 items-center">
            <Package className="size-[20px]" />
            <span className="text-sm">Add Product</span>
          </Button>
        </Link>
      </Header>
      <div className="content p-5 bg-gray-100">
        <div className=" bg-white min-h-screen rounded-2xl p-10">
          <Table>
            <TableCaption>List of Products Show</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">No</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Product Name</TableHead>

                <TableHead>Stock</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Discount</TableHead>

                <TableHead className="text-right">Toggle Active</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products?.map((slide, idx) => (
                <TableRow key={idx} className="group">
                  <TableCell className="font-medium">{idx + 1}</TableCell>
                  <TableCell>
                    <Image
                      src={getPhoto(slide?.imageProductList[0]?.fileName)}
                      priority
                      width={1000}
                      height={1000}
                      alt="profile"
                      className="size-[3.5rem] object-cover rounded-sm"
                    />
                  </TableCell>
                  <TableCell>{slide?.productName}</TableCell>
                  <TableCell>{slide?.productStock}</TableCell>
                  <TableCell className="after:content-['$']">
                    {slide?.unitPrice}
                  </TableCell>
                  <TableCell className="after:content-['%']">
                    {slide?.discount}
                  </TableCell>

                  <TableCell className="flex items-center">
                    <SwtichToggle
                      slideId={slide?.productId}
                      isActive={slide?.isStatus}
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
                          {/* <DropdownMenuLabel>Action</DropdownMenuLabel> */}
                          {/* <DropdownMenuSeparator /> */}
                          <DropdownMenuGroup>
                            <DropdownMenuItem className="flex items-center gap-3 group">
                              <Pen className="size-[18px] group-hover:stroke-indigo-400  transition-all hover:stroke-red-500 cursor-pointer" />
                              <p className="group-hover:text-indigo-400">
                                Edit
                              </p>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center gap-3 group">
                              <Eye className="size-[18px] group-hover:stroke-green-400  transition-all hover:stroke-red-500 cursor-pointer" />
                              <p className="group-hover:text-green-400">View</p>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center gap-3 group">
                              <Trash className="size-[18px] group-hover:stroke-red-400  transition-all hover:stroke-red-500 cursor-pointer" />
                              <p className="group-hover:text-red-400">Delete</p>
                            </DropdownMenuItem>
                          </DropdownMenuGroup>
                          {/* <DropdownMenuSeparator /> */}
                          {/* <DropdownMenuItem>Log out</DropdownMenuItem> */}
                        </DropdownMenuContent>
                      </DropdownMenu>
                      {/* <Pencil className="size-[18px] p-2 box-content bg-gray-100 rounded-lg group-hover:bg-white transition-all hover:stroke-red-500 cursor-pointer" />
                      <Eye className="size-[18px] p-2 box-content bg-gray-100 rounded-lg group-hover:bg-white transition-all hover:stroke-red-500 cursor-pointer" /> */}
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
};

export default ShopPage;
