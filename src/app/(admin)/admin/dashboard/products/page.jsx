import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getAllProductService } from "@/service/product.service";
import { Package } from "lucide-react";
import ProductTableComponent from "./_components/ProductTableComponent";

const ShopPage = async ({ searchParams: { tab = "Products" } }) => {
  const products = await getAllProductService();

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
          <ProductTableComponent products={products} />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
