"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { changeStatusOrderAction } from "@/acitons/orderAction";
import toast from "react-hot-toast";

export function Action({ data }) {
  const handleStatus = async (orderId, status) => {
    const res = await changeStatusOrderAction(orderId, status);

    if (res?.status) {
      toast.success(`You have accepted`);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer">Action</div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-50">
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuGroup>
          {status.map((s) => (
            <DropdownMenuItem key={s}>
              <p
                onClick={() => handleStatus(data?.orderId, s)}
                className={cn("", data?.status == s ? "text-green-400" : "")}
              >
                {s}
              </p>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const status = ["PAID", "DELIVERY", "DONE"];
