import { getPhoto } from "@/lib/utils";
import { getProductById } from "@/service/product.service";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Contact } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import { CircleDollarSign } from "lucide-react";
const ActionCard = async ({ order }) => {
  const product = await getProductById(order?.orderResponse?.orderDetail[0].productId);
  const user = order?.orderResponse?.user?.user;
  const userName = user?.firstName + ' ' + user?.lastName;

  return (
    <div className="grid grid-cols-[auto_1fr] gap-5 p-4 border rounded-lg">
      <Image
        src={getPhoto(product?.imageProductList[0].fileName)}
        width={1000}
        height={1000}
        alt="product"
        className="size-[7rem] object-cover rounded-md"
      />
      <div className="grid grid-cols-[1fr_auto_auto] gap-10">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-xl">Customer : {user?.firstName} {user?.lastName}</h3>
          </div>
          <div className="flex gap-4">
            <p className="flex gap-2">
              <span className="text-gray-400">Total Product : </span>
              <span className="after:content-['product']">{order?.orderResponse?.orderDetail.length} </span>
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex gap-4">
              <p className="flex gap-2">
                <span className="text-gray-400">Total Quantity : </span>
                <span>{order?.orderResponse?.orderTotalQty} </span>
              </p>
              <p className="flex gap-2">
                <span className="text-gray-400">Total Price : </span>
                <span className="font-medium">{order?.orderResponse?.totalPrice} $</span>
              </p>
            </div>
            <span className="bg-gray-100 self-start py-1 px-2 text-sm rounded-lg">
              {new Date(order?.orderResponse?.orderDate).toDateString()}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <p className="flex gap-2">
              <span className="text-gray-400">Total</span>${order?.orderResponse?.totalPrice}
            </p>
            <span
              className={clsx(
                "text-sm",
                order?.orderResponse?.status === "PAID"
                  ? "text-green-400"
                  : order?.orderResponse?.status === "DELIVERY"
                    ? "text-purple-400"
                    : order?.orderResponse?.status === "NONPAYMENT"
                      ? "text-red-400"
                      : order?.orderResponse?.status === "WAITING"
                        ? "text-blue-400"
                        : ""
              )}
            >
              {order?.orderResponse?.status}
            </span>

          </div>
          <div className="flex gap-4">

            {order?.orderResponse?.payment ?
              <div className="flex gap-4">
                {/* view payment */}
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="flex gap-2 bg-gray-900 rounded-md cursor-pointer items-center self-start p-2 ">
                      <p className="text-white text-sm">View Payment</p>
                      <ChevronRight className="stroke-white size-5" />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] h-auto">
                    <DialogHeader>
                      <DialogTitle>{userName}'s Payment</DialogTitle>
                      <DialogDescription> {new Date(order?.orderResponse?.orderDate).toDateString()}</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 ">
                      <div className="flex gap-2">
                        <div className="h-auto w-full ">
                          <ScrollArea className="h-75 w-full rounded-md border">
                            <div className="p-4">
                              <div className="">
                                <Image
                                  src={getPhoto(order?.transferImage)}
                                  className="object-cover border border-gray-300 rounded-md"
                                  alt="product"
                                  width={1000}
                                  height={1000}
                                />
                              </div>

                            </div>
                          </ScrollArea>
                        </div>
                      </div>

                    </div>
                  </DialogContent>
                </Dialog>

                {/* Order detail */}
                <Dialog Dialog >
                  <DialogTrigger asChild>
                    <div className="flex gap-2 bg-gray-900 rounded-md cursor-pointer items-center self-start p-2 ">
                      <p className="text-white text-sm">Detail</p>
                      <ChevronRight className="stroke-white size-5" />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[555px] h-auto">
                    <DialogHeader>
                      <DialogTitle>{userName}'s Order Detail</DialogTitle>
                      <DialogDescription> {new Date(order?.orderResponse?.orderDate).toDateString()}</DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-between border border-1 p-4 rounded-md">
                      <div className="w-1/2">
                        <h4>Order from :</h4>
                        <p className="flex items-center gap-2"><Contact size={14} />{userName}</p>
                        <p className="flex items-center gap-2"><Phone size={14} />{user?.phone}</p>
                        <p className="flex items-start gap-2"><MapPin size={18} className="mt-1" />{user?.address}</p>
                      </div>
                      <div className="w-1/2">
                        <h4>Receive by :</h4>
                        <p className="flex items-center gap-2"><Phone size={14} />{order?.receiverPhone}</p>
                        <p className="flex items-start gap-2"><MapPin size={18} className="mt-1" />{order?.receiverLocation}</p>
                      </div>
                    </div>


                    <div className="grid gap-4 py-4 ">
                      <div className="flex gap-2">
                        <div className="h-auto w-full ">
                          <ScrollArea className="h-64 w-full rounded-md border overflow-y-scroll">
                            <div className="p-4">
                              <div className="flex justify-between">
                                <h4 className="mb-4 text-lg font-medium leading-none">Item</h4>
                                <div className="w-1/4">
                                  <span
                                    className={`text-[14px] text-black font-medium ${order?.orderResponse?.status !== "NONPAYMENT" ? "bg-purple-400 py-1 px-5 rounded-full" : ""
                                      }`}
                                  >
                                    {order?.orderResponse?.status}
                                  </span>

                                </div>
                              </div>

                              {order?.orderResponse?.orderDetail.map((item, index) => (
                                <>
                                  <div key={index} className="text-sm">
                                    <div className="grid grid-cols-2 gap-4">
                                      <div className="">
                                        <Image
                                          src={getPhoto(item?.imageProductList[0]?.fileName)}
                                          className="object-cover border border-gray-300 rounded-md"
                                          alt="product"
                                          width={1000}
                                          height={1000}
                                        />
                                      </div>
                                      <div className="leading-7 ">
                                        <p className="font-medium text-blue-500">{item?.productName}</p>
                                        <p>Price : {item?.unitPrice}$</p>

                                        {item?.discount !== 0 && <p>Discount : {item?.discount}%</p>}
                                        <p>After discount : <span>{item?.priceAfterDiscount.toFixed(2)}$</span> </p>
                                        <p>Order Qty : {item?.orderQty}</p>
                                        <p>Warranty : {item?.warranty?.warrantyDate} {item?.warranty?.warrantyTime}</p>
                                      </div>


                                    </div>
                                  </div>
                                  <Separator className="my-2 " />
                                </>
                              ))}

                            </div>
                          </ScrollArea>
                          <div className="flex justify-between px-3">
                            <div>Total Quantity : </div>
                            <div className="font-medium">{order?.orderResponse?.orderTotalQty} products</div>
                          </div>
                          <div className="flex justify-between px-3">
                            <div>Total Price : </div>
                            <div className="font-medium border border-sky-300 py-0 px-1.5 rounded-md">{order?.orderResponse?.totalPrice.toFixed(2)}$</div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              :
              //Order detail
              <Dialog Dialog >
                <DialogTrigger asChild>
                  <div className="flex gap-2 bg-gray-900 rounded-md cursor-pointer items-center self-start p-2 ">
                    <p className="text-white text-sm">Detail</p>
                    <ChevronRight className="stroke-white size-5" />
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[555px] h-auto">
                  <DialogHeader>
                    <DialogTitle>{userName}'s Order Detail</DialogTitle>
                    <DialogDescription> {new Date(order?.orderResponse?.orderDate).toDateString()}</DialogDescription>
                  </DialogHeader>
                  <div className="flex justify-between border border-1 p-4 rounded-md">
                    <div className="w-1/2">
                      <h4>Order from :</h4>
                      <p className="flex items-center gap-2"><Contact size={14} />{userName}</p>
                      <p className="flex items-center gap-2"><Phone size={14} />{user?.phone}</p>
                      <p className="flex items-start gap-2"><MapPin size={18} className="mt-1" />{user?.address}</p>
                    </div>
                    <div className="w-1/2">
                      <h4>Receive by :</h4>
                      <p className="flex items-center gap-2"><Phone size={14} />{order?.receiverPhone}</p>
                      <p className="flex items-start gap-2"><MapPin size={18} className="mt-1" />{order?.receiverLocation}</p>
                      {order?.orderResponse?.payment == false &&
                        <p className="flex items-start gap-2"><CircleDollarSign size={18} className="mt-1" />បង់ប្រាក់ពេលទំនិញទៅដល់</p>
                      }
                    </div>
                  </div>


                  <div className="grid gap-4 py-4 ">
                    <div className="flex gap-2">
                      <div className="h-auto w-full ">
                        <ScrollArea className="h-64 w-full rounded-md border overflow-y-scroll">
                          <div className="p-4">
                            <div className="flex justify-between">
                              <h4 className="mb-4 text-lg font-medium leading-none">Item</h4>
                              <div className="w-1/4">
                                <span
                                  className={`text-[14px] text-black font-medium ${order?.orderResponse?.status !== "NONPAYMENT" ? "bg-purple-400 py-1 px-5 rounded-full" : ""
                                    }`}
                                >
                                  {order?.orderResponse?.status}
                                </span>

                              </div>
                            </div>

                            {order?.orderResponse?.orderDetail.map((item, index) => (
                              <>
                                <div key={index} className="text-sm">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="">
                                      <Image
                                        src={getPhoto(item?.imageProductList[0]?.fileName)}
                                        className="object-cover border border-gray-300 rounded-md"
                                        alt="product"
                                        width={1000}
                                        height={1000}
                                      />
                                    </div>
                                    <div className="leading-7 ">
                                      <p className="font-medium text-blue-500">{item?.productName}</p>
                                      <p>Price : {item?.unitPrice}$</p>

                                      {item?.discount !== 0 && <p>Discount : {item?.discount}%</p>}
                                      <p>After discount : <span>{item?.priceAfterDiscount.toFixed(2)}$</span> </p>
                                      <p>Order Qty : {item?.orderQty}</p>
                                      <p>Warranty : {item?.warranty?.warrantyDate} {item?.warranty?.warrantyTime}</p>
                                    </div>


                                  </div>
                                </div>
                                <Separator className="my-2 " />
                              </>
                            ))}

                          </div>
                        </ScrollArea>
                        <div className="flex justify-between px-3">
                          <div>Total Quantity : </div>
                          <div className="font-medium">{order?.orderResponse?.orderTotalQty} products</div>
                        </div>
                        <div className="flex justify-between px-3">
                          <div>Total Price : </div>
                          <div className="font-medium border border-sky-300 py-0 px-1.5 rounded-md">{order?.orderResponse?.totalPrice.toFixed(2)}$</div>
                        </div>
                      </div>
                    </div>

                  </div>
                </DialogContent>
              </Dialog>
            }

          </div>

        </div>

      </div>
    </div>
  );
};

export default ActionCard;
