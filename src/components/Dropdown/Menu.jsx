import { Button } from "@/components/ui/button";
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
import { User } from "lucide-react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { getUserData } from "@/service/user.service";
import SignOutButton from "./SignOutButton";

export async function DropdownMenuDemo() {
  const userData = await getUserData();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <User className="cursor-pointer hover:stroke-sky-500" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-50">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {userData != null && <Link href={"/profile"} ><DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem></Link>}
          {userData != null && userData.payload.role !== "USER" && (
            <Link href={"/admin/dashboard"} target="new">
              <DropdownMenuItem className="cursor-pointer">
                Dashboard
              </DropdownMenuItem>
            </Link>
          )}
          {userData == null && (
            <Link href={"/login"} >
              <DropdownMenuItem className="cursor-pointer">
                Login
              </DropdownMenuItem>
            </Link>

          )}
        </DropdownMenuGroup>
        {userData != null && (
          <DropdownMenuItem >
            <SignOutButton />
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
