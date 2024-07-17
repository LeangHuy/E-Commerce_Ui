import React from "react";
import Header from "../components/Header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PackagePlus } from "lucide-react";

const ShopPage = ({ searchParams: { tab = "Shop" } }) => {
  return (
    <div className="w-full">
      <Header tab={tab}>
        <Link href={"/admin/dashboard/products/add?tab=Products"}>
          <Button className="flex gap-2 items-center">
            <PackagePlus className="size-[20px]" />
            <span className="text-sm">Add Product</span>
          </Button>
        </Link>
      </Header>
      <div className="content p-5 bg-gray-100">
        <div className=" bg-white rounded-2xl p-10">Shop</div>
      </div>
    </div>
  );
};

export default ShopPage;
