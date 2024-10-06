import { getPhoto } from "@/lib/utils";
import { getProductById } from "@/service/product.service";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const ActionCard = async ({ order }) => {
  const product = await getProductById(order?.orderResponse?.orderDetail[0].productId);
  const user = order?.orderResponse?.user?.user;
  const userName = user?.firstName + ' ' + user?.lastName;
  console.log("order Report : ", order)
  return (
    <div className="grid grid-cols-[auto_1fr] gap-5 p-4 border rounded-lg">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr className="">
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Product name
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Price
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Category
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {products.slice(0, 5).map((product: any) => (
              <tr
                className="border-b border-gray-200 dark:border-gray-700"
                key={product.id}
              >
                <th scope="row" className="px-6 py-4">
                  {product.title}
                </th>
                <td className="px-6 py-4">{product.price}$</td>
                <td className="px-6 py-4">{product.category}$</td>
                <td className="px-6 py-4">
                  {product.description.slice(0, 20)} ...
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActionCard;
