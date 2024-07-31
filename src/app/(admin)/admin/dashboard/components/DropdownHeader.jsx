"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import SignOutButton from "@/components/Dropdown/SignOutButton";
import { getUserData } from "@/service/user.service";
import { useEffect } from "react";
import { useState } from "react";
import { getPhoto } from "@/lib/utils";
import { getUserAction } from "@/acitons/userAction";
import Link from "next/link";

const DropdownHeader = () => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUserAction().then((data) => {
      setUser(data.payload);
      setLoading(false);
    });
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="pf flex items-center gap-4 cursor-pointer">
          <div>
            <Image
              src={
                loading
                  ? "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?q=80&w=2504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  : getPhoto(user?.user?.profile)
              }
              priority
              width={1000}
              height={1000}
              alt="profile"
              className="size-[2.5rem] object-cover rounded-full"
            />
          </div>
          <div className="">
            <p className="font-medium flex gap-2">
              <span>{user?.user?.firstName}</span>
              <span>{user?.user?.lastName}</span>
            </p>
            <p className="text-sm">{user?.user?.email}</p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-50">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={"/admin/dashboard?tab=Overview"}>Home</Link>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignOutButton />
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownHeader;
