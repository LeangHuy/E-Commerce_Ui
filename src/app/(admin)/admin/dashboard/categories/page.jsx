import React from "react";
import Header from "../components/Header";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { useForm } from "react-hook-form";
import AddCategoryPage from "./add/page";
const ShopPage = async ({ searchParams: { tab = "Categories" } }) => {
    // const products = await getAllProductService();

    return (
        <div className="w-full">

            <Header tab={tab}>
                <AddCategoryPage />
            </Header>
            <div className="content p-5 bg-gray-100">
                <div className=" bg-white min-h-screen rounded-2xl p-10">
                    <Table>
                        <TableCaption>List of Categories Show</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">No</TableHead>
                                <TableHead>Category name</TableHead>

                                <TableHead className="text-right">Toggle Active</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {/* {products?.map((slide, idx) => (
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
                                                    
                                                </DropdownMenuContent>
                                            </DropdownMenu>
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
};

export default ShopPage;
