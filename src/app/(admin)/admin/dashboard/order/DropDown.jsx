"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { changeStatusOrderAction } from "@/acitons/orderAction";
import toast from "react-hot-toast";
import { ChevronDown } from "lucide-react";

export function Action({ data }) {
  const handleStatus = async (orderId, status) => {
    console.log("data :", data)
    const res = await changeStatusOrderAction(orderId, status);
    console.log("after update status :", res)
    if (res?.status == "DELIVERY") {
      toast.success(`The orders is on delivery.`);
    } else if (res?.status == "DONE") {
      toast.success(`The orders has done.`);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer"><span className="border font-medium border-sky-400 p-2 rounded-md hover:bg-sky-400 hover:text-white hover:font-medium">Action</span></div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-50">
        <DropdownMenuGroup >
          {status.map((s) => (
            <DropdownMenuItem key={s} onClick={() => handleStatus(data?.orderResponse?.orderId, s)}
              className={cn("", data?.orderResponse?.status == s ? "text-green-400 cursor-pointer" : " cursor-pointer")}>
              <p>
                {s}
              </p>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const status = ["DELIVERY", "DONE"];
