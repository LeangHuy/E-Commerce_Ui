"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getPhoto } from "@/lib/utils";
import { useAddToCart } from "@/store/useAddToCart";
import Image from "next/image";
import UpdateQty from "../Button/UpdateQty";
import RemoveFromCart from "../Button/RemoveFromCart";

export function TableData() {
  const { cartList } = useAddToCart();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">No</TableHead>
          <TableHead>Product</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="text-right">Price</TableHead>
          <TableHead className="text-right">Discount</TableHead>
          <TableHead className="text-right">Subtotal</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cartList?.map((product, idx) => (
          <TableRow key={product.productId}>
            <TableCell className="font-medium">{idx + 1}</TableCell>
            <TableCell>
              <div className="flex gap-6 items-center">
                <Image
                  width={1000}
                  height={1000}
                  alt="prod img"
                  priority
                  src={getPhoto(product?.imageProductList[0]?.fileName)}
                  className="size-[100px] object-cover rounded-sm"
                />
                <div>
                  <p>{product?.productName}</p>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <UpdateQty product={product} />
            </TableCell>
            <TableCell className="text-right w-[100px]">
              ${product?.unitPrice}
            </TableCell>
            <TableCell className="text-right w-[100px]">
              {product?.discount}%
            </TableCell>
            <TableCell className="text-right w-[100px]">
              <p className="before:content-['$']">
                {cartList?.reduce(
                  (acc, product) => acc + product?.qty * product?.unitPrice,
                  0
                )}
              </p>
            </TableCell>

            <TableCell className="text-right">
              <RemoveFromCart product={product} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
