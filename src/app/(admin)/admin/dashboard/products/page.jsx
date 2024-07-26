import Header from "../components/Header";
import { Button } from "@/components/ui/button";

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
import SwitchToggle from "../components/SwtichToggle";
import { getAllProductService } from "@/service/product.service";
import { Loader2, Package } from "lucide-react";
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
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ButtonDelete from "./ButtonDeleteProduct";
import { deleteProductAction } from "@/acitons/productAction";
import SwitchProduct from "../components/SwitchProduct";

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
              {products?.map((product, idx) => (
                <TableRow key={idx} className="group">
                  <TableCell className="font-medium">{idx + 1}</TableCell>
                  <TableCell>
                    {product?.imageProductList[0]?.fileName ? (
                      <Image
                        src={getPhoto(product?.imageProductList[0]?.fileName)}
                        priority
                        width={1000}
                        height={1000}
                        alt="profile"
                        className="size-[3.5rem] object-cover rounded-sm"
                      />
                    ) : null}
                    {/* // <Image
                    //   src={getPhoto(product?.imageProductList[0]?.fileName)}
                    //   priority
                    //   width={1000}
                    //   height={1000}
                    //   alt="profile"
                    //   className="size-[3.5rem] object-cover rounded-sm"
                    // /> */}
                  </TableCell>
                  <TableCell>{product?.productName}</TableCell>
                  <TableCell>{product?.productStock}</TableCell>
                  <TableCell className="after:content-['$']">
                    {product?.unitPrice}
                  </TableCell>
                  <TableCell className="after:content-['%']">
                    {product?.discount}
                  </TableCell>

                  <TableCell className="flex items-center">
                    <SwitchProduct
                      productId={product?.productId}
                      isActive={product?.isStatus}
                      product={product}
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
                            <Link
                              href={`/admin/dashboard/products/edit/${product?.productId}?tab=Products`}
                            >
                              <DropdownMenuItem className="cursor-pointer">
                                <div className="flex items-center gap-3 group">
                                  <Pen className="size-[18px] group-hover:stroke-indigo-400  transition-all hover:stroke-red-500 cursor-pointer" />
                                  <p className="group-hover:text-indigo-400">
                                    Edit
                                  </p>
                                </div>
                              </DropdownMenuItem>
                            </Link>
                            <div>
                              <div className="flex items-center gap-3 group">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <div className="flex w-full rounded-sm gap-3 items-center px-2 py-1.5 hover:bg-accent cursor-pointer ">
                                      <Eye className="size-[18px] group-hover:stroke-green-400  transition-all hover:stroke-red-500 cursor-pointer" />
                                      <p className="group-hover:text-green-400">
                                        View
                                      </p>
                                    </div>
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                      <DialogTitle className="text-sky-500">
                                        View Detail
                                      </DialogTitle>
                                    </DialogHeader>
                                    <div class="">
                                      <label class="block text-sm capitalize font-medium leading-6 text-gray-900">
                                        Product Name :{" "}
                                        <span className="font-bold">
                                          {product?.productName}
                                        </span>
                                      </label>
                                      <label class="block text-sm capitalize font-medium leading-6 text-gray-900">
                                        Product Stock :{" "}
                                        <span className="font-bold">
                                          {product?.productStock}
                                        </span>
                                      </label>
                                      <label class="block text-sm capitalize font-medium leading-6 text-gray-900 ">
                                        Product Price :{" "}
                                        <span className="font-bold after:content-['$']">
                                          {product?.unitPrice}
                                        </span>
                                      </label>
                                      <label class="block text-sm capitalize font-medium leading-6 text-gray-900 ">
                                        Discount :{" "}
                                        <span className="font-bold after:content-['%']">
                                          {product?.discount}
                                        </span>
                                      </label>
                                      <label class="block text-sm capitalize font-medium leading-6 text-gray-900 ">
                                        After Discount :{" "}
                                        <span className="font-bold after:content-['$'] border p-1 rounded-md border-sky-500">
                                          {product?.priceAfterDiscount}
                                        </span>
                                      </label>

                                      <label class="block text-sm capitalize font-medium leading-6 text-gray-900 ">
                                        Category :{" "}
                                        <span className="font-bold ">
                                          {product?.category?.categoryName}
                                        </span>
                                      </label>
                                      <label class="block text-sm capitalize font-medium leading-6 text-gray-900 ">
                                        Warranty :{" "}
                                        <span className="font-bold">
                                          {product?.warranty?.warrantyDate}{" "}
                                          {product?.warranty?.warrantyTime}
                                        </span>
                                      </label>
                                      <label class="block text-sm capitalize font-medium leading-6 text-gray-900 ">
                                        Image :
                                      </label>
                                      <div className="grid grid-cols-3 gap-6 pt-6">
                                        {product?.imageProductList.map(
                                          (image, index) => (
                                            <Image
                                              key={index}
                                              src={getPhoto(image?.fileName)}
                                              className="w-full h-[7rem] object-cover hover:scale-105 transition-all cursor-pointer rounded-md"
                                              alt="alt"
                                              width={1000}
                                              height={1000}
                                            />
                                          )
                                        )}
                                      </div>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              </div>
                            </div>
                            <div>
                              <div className="flex items-center gap-3 group">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <div className="flex w-full rounded-sm gap-3 items-center px-2 py-1.5 hover:bg-accent cursor-pointer ">
                                      <Trash className="size-[18px] group-hover:stroke-red-400  transition-all hover:stroke-red-500 cursor-pointer" />
                                      <p className="group-hover:text-red-400">
                                        Delete
                                      </p>
                                    </div>
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                      <DialogTitle className="text-red-500">
                                        Attention
                                      </DialogTitle>
                                      <DialogDescription>
                                        Do you want to delete this product?
                                      </DialogDescription>
                                    </DialogHeader>
                                    <form
                                      // onSubmit={handleSubmit(onSubmit)}
                                      className="grid gap-4 py-4"
                                    >
                                      <div class="">
                                        <label
                                          htmlFor="categoryName"
                                          class="block text-sm capitalize font-medium leading-6 text-gray-900"
                                        >
                                          {product?.productName}
                                        </label>
                                      </div>
                                      <DialogHeader>
                                        <div>
                                          <ButtonDelete
                                            productId={product?.productId}
                                            fnDelete={deleteProductAction}
                                          >
                                            Delete Product
                                          </ButtonDelete>
                                        </div>
                                      </DialogHeader>
                                    </form>
                                  </DialogContent>
                                </Dialog>
                              </div>
                            </div>
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
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
