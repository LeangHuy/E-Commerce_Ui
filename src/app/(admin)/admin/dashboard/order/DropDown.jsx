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
    const res = await changeStatusOrderAction(orderId, status);
    if (res?.status == "DELIVERY") {
      toast.success(`The orders is on delivery.`);
    } else if (res?.status == "DONE") {
      toast.success(`The orders has done.`);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* <div className="cursor-pointer"><span className="border font-medium border-sky-400 p-2 rounded-md hover:bg-sky-400 hover:text-white hover:font-medium">Action</span></div> */}
        <button class="relative flex p-2 rounded-md items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
          <span class="relative z-10">Action</span>
          <ChevronDown class="relative z-10" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-50">
        <DropdownMenuGroup >
          {status.map((s) => (
            <DropdownMenuItem key={s} onClick={() => handleStatus(data?.orderId, s)}
              className={cn("", data?.status == s ? "text-green-400 cursor-pointer" : " cursor-pointer")}>
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
