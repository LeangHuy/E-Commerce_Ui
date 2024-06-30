// "use client";
import Link from "next/link";
import React from "react";
import MyLink from "../Link/Link";
import { User } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Search } from "lucide-react";
import { SearchDialog } from "../Search/SearchBtn";
import { CustomSheet } from "../Sheet/CustomSheet";
import Image from "next/image";
import { DropdownMenuDemo, MenuDropdown } from "../Dropdown/Menu";
const Navbar = () => {
  return (
    <header className="py-6  shadow-sm bg-white">
      <div className="w-[1330px] mx-auto flex items-center justify-between">
        <section className="logo-links flex gap-10 items-center">
          <Link href={"/"} className="font-bold text-3xl">
            {/* <span>Cam</span>
            <span className="text-sky-500">Game</span> */}
            <Image
              src="/images/logo.png"
              alt="alt"
              width={1000}
              height={1000}
              className="w-10 h-10 rounded-full"
            />
          </Link>
          <MyLink />
        </section>
        <div className="flex items-center gap-6">
          <SearchDialog />
          {/* <Search className="cursor-pointer hover:stroke-sky-500" /> */}
          {/* <ShoppingCart className="cursor-pointer hover:stroke-sky-500" /> */}
          {/* <CustomSheet /> */}
          <Link href={"/view/cart"}>
            <ShoppingCart className="cursor-pointer hover:stroke-sky-500" />
          </Link>

          {/* <Link href={"/login"}>
            <User className="cursor-pointer hover:stroke-sky-500" />
          </Link> */}
          <DropdownMenuDemo />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
