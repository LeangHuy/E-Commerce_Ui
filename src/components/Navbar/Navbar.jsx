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
import NavBadge from "./NavBadge";
import { getShopInfoService } from "@/service/shop.service";
import { getPhoto } from "@/lib/utils";
const Navbar = async () => {
  const shopInfo = await getShopInfoService();
  console.log(shopInfo);
  return (
    <header className="py-6  shadow-sm bg-white">
      <div className="w-[1330px] max-[1400px]:w-[90%] mx-auto flex items-center justify-between">
        <section className="logo-links flex gap-10 items-center">
          <Link href={"/"} className="font-bold text-3xl">
            {/* <span>Cam</span>
            <span className="text-sky-500">Game</span> */}
            <Image
              src={getPhoto(shopInfo?.payload?.logo)}
              alt="alt"
              width={1000}
              height={1000}
              className="w-10 h-10 rounded-full object-cover"
            />
          </Link>
          <MyLink />
        </section>
        <div className="flex items-center gap-6">
          <SearchDialog />
          {/* <Search className="cursor-pointer hover:stroke-sky-500" /> */}
          {/* <ShoppingCart className="cursor-pointer hover:stroke-sky-500" /> */}
          {/* <CustomSheet /> */}
          <Link href={"/view/cart"} className="relative">
            <ShoppingCart className="cursor-pointer hover:stroke-sky-500" />
            <div className="absolute -top-3 -right-3">
              <NavBadge />
            </div>
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
