import { getPhoto } from "@/lib/utils";
import { getProductById } from "@/service/product.service";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const ActionCard = async ({ order }) => {
  const product = await getProductById(order?.orderDetail[0].productId);

  return (
    <div className="grid grid-cols-[auto_1fr] gap-5">
      <Image
        src={getPhoto(product?.imageProductList[0].fileName)}
        width={1000}
        height={1000}
        alt="product"
        className="size-[7rem] object-cover rounded-md"
      />
      <div className="flex justify-between">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-xl">{product?.productName}</h3>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-4">
              <p className="flex gap-2">
                <span className="text-gray-400">Qty</span>
                {order?.orderTotalQty}
              </p>
            </div>
            <span className="bg-gray-200 self-start py-1 px-2 text-sm rounded-lg">
              {new Date(order?.orderDate).toDateString()}
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="flex gap-2">
            <span className="text-gray-400">Total</span>${order?.totalPrice}
          </p>
          <span
            className={clsx(
              "text-sm",
              order?.status == "PAID" ? "text-green-400" : ""
            )}
          >
            {order?.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ActionCard;
