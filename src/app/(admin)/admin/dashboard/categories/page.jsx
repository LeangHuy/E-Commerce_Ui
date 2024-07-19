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

import AddCategoryPage from "./add/page";
import { getAllCategories } from "@/service/category.service";
import { Pencil } from "lucide-react";
import EditCategoryPage from "./edit/page";
const ShopPage = async ({ searchParams: { tab = "Categories" } }) => {
    const categories = await getAllCategories(1, 999);

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

                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {categories?.map((slide, idx) => (
                                <TableRow key={idx} className="group">
                                    <TableCell className="font-medium">{idx + 1}</TableCell>
                                    <TableCell>{slide?.categoryName}</TableCell>

                                    <TableCell className="text-right flex justify-end gap-4">
                                        <EditCategoryPage cate={slide} />
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
