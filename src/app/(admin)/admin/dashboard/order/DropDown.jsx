"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn, getPhoto } from "@/lib/utils";
import {
  changeStatusOrderAction,
  updateOrderStatusToDeliveryAction,
} from "@/acitons/orderAction";
import toast from "react-hot-toast";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Image from "next/image";
import { assignDelAction } from "@/acitons/delivery";

export function Action({ data, deliveries, useFor }) {
  const handleStatus = async (orderId, status) => {
    const res = await changeStatusOrderAction(orderId, status);
    if (res?.status == "DELIVERY") {
      toast.success(`The orders is on delivery.`);
    } else if (res?.status == "DONE") {
      toast.success(`The orders has done.`);
    }
  };

  const [isOpen, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filterDeli = deliveries
    ? deliveries?.payload?.filter((p) =>
      p.firstName.toLowerCase().trim().includes(search?.toLowerCase().trim())
    )
    : [];

  const setDelivery = async (data, userId) => {
    const result = await assignDelAction(data?.orderResponse?.orderId, userId);
    if (result?.status == "OK") {
      toast.success("Assigned");
      setOpen(false);
    } else toast.error("Error");
  };

  // const updateOrderStatus = async (orderId, status) => {
  //   const result = await updateOrderStatusToDeliveryAction(orderId, status);
  //   if (result?.payload) {
  //     toast.success("Accepted");
  //   } else toast.error("Error");
  // };

  const updateOrderStatus = async (orderId, status) => {
    const result = await updateOrderStatusToDeliveryAction(orderId, status);
    if (result?.payload) {
      if (status === "DELIVERY") {
        toast.success("Accepted");
      } else if (status === "DONE") {
        toast.success("Order has finished");
      }
    } else {
      toast.error("Error");
    }
  };

  if (useFor == "delivery")
    return (
      data?.orderResponse?.status === "DELIVERY" ? (
        <Button
          onClick={() => updateOrderStatus(data?.orderResponse?.orderId, "DONE")}
          variant="outline"
        >
          DONE
        </Button>
      ) : (
        <Button
          onClick={() => updateOrderStatus(data?.orderResponse?.orderId, "DELIVERY")}
          variant="outline"
        >
          ACCEPT
        </Button>
      )
    );


  if (useFor == "no") return;

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="cursor-pointer">
            <span className="border font-medium border-sky-400 p-2 rounded-md hover:bg-sky-400 hover:text-white hover:font-medium">
              {!useFor ? "Action" : "Accept"}
            </span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-50">
          <DropdownMenuGroup>
            {!useFor && (
              <>
                <DropdownMenuItem className="cursor-pointer">
                  <p onClick={() => setOpen(!isOpen)}>Assign Delivery</p>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    handleStatus(data?.orderResponse?.orderId, DONE)
                  }
                  className={cn(
                    "",
                    data?.orderResponse?.status == "DONE"
                      ? "text-green-400 cursor-pointer"
                      : " cursor-pointer"
                  )}
                >
                  DONE
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Assign Delivery</DialogTitle>
              <DialogDescription>Please select delivery</DialogDescription>
            </DialogHeader>
            <div className="">
              <div>
                <Input
                  placeholder="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="flex mt-5 flex-col gap-4 max-h-[400px] overflow-y-scroll">
                {filterDeli?.length > 0 ? (
                  filterDeli?.map((user, idx) => (
                    <div
                      className="grid group grid-cols-[auto_1fr_auto] cursor-pointer gap-6 items-center"
                      key={idx}
                    >
                      <div>
                        <Image
                          src={getPhoto(user?.profile)}
                          width={1000}
                          height={1000}
                          alt="pf"
                          className="size-[50px] rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <p>{user?.firstName + " " + user?.lastName}</p>
                      </div>
                      <Button
                        onClick={() => setDelivery(data, user?.userId)}
                        className="translate-x-[110%] group-hover:translate-x-0 transition-all"
                      >
                        Assign
                      </Button>
                    </div>
                  ))
                ) : (
                  <p>Not found</p>
                )}
              </div>
            </div>
            {/* <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter> */}
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

const status = ["DELIVERY", "DONE"];
