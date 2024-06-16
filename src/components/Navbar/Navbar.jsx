// "use client";
import Link from "next/link";
import React from "react";
import MyLink from "../Link/Link";
import { User } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Search } from "lucide-react";
import { SearchDialog } from "../Search/SearchBtn";
import { CustomSheet } from "../Sheet/CustomSheet";

const Navbar = () => {
  return (
    <header className="py-6  shadow-sm">
      <div className="w-[1300px] mx-auto flex items-center justify-between">
        <section className="logo-links flex gap-10 items-center">
          <Link href={"#"} className="font-bold text-3xl">
            <span>Cam</span>
            <span className="text-sky-500">Game</span>
          </Link>
          <MyLink />
        </section>
        <div className="flex items-center gap-6">
          <SearchDialog />
          {/* <Search className="cursor-pointer hover:stroke-sky-500" /> */}
          {/* <ShoppingCart className="cursor-pointer hover:stroke-sky-500" /> */}
          <CustomSheet />
          <User className="cursor-pointer hover:stroke-sky-500" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
