import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import SignOutButton from "@/components/Dropdown/SignOutButton";
import { getPhoto } from "@/lib/utils";
import { getUserData } from "@/service/user.service";
import Link from "next/link";

const DropdownHeader = async () => {
  const userInfo = await getUserData();
  const user = userInfo?.payload?.user;
  console.log(userInfo)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="pf flex items-center gap-4 cursor-pointer">
          <div>
            <Image
              src={getPhoto(user?.profile)}
              priority
              width={1000}
              height={1000}
              alt="profile"
              className="size-[2.5rem] object-cover rounded-full"
            />
          </div>
          <div className="">
            <p className="font-medium">{user?.firstName} {user?.lastName}</p>
            <p className="text-sm">{user?.email}</p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-50">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/admin/dashboard">
            <DropdownMenuItem className="cursor-pointer">
              Home
            </DropdownMenuItem>
          </Link>

          <Link href="/admin/dashboard/profile">
            <DropdownMenuItem className="cursor-pointer">
              Settings
            </DropdownMenuItem>
          </Link>

        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <SignOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownHeader;
