"use client";
import { clsx } from "clsx";
import { Images, ShoppingCart, ShoppingCartIcon } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { PackagePlus } from "lucide-react";
import { LayoutList } from "lucide-react";
import { Truck } from "lucide-react";
import { BookMinus } from "lucide-react";
import { Landmark } from "lucide-react";
import { History } from "lucide-react";
import { LayoutDashboardIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const Sidebar = () => {
  const param = useSearchParams();
  const [activeTab, setActiveTab] = useState(param.get("tab") || "Overview");
  return (
    <div className="w-[250px] bg-white h-screen max-h-screen fixed top-0 left-0 flex flex-col gap-5">
      <div className="header-sidebar px-5 py-4">
        <Link href="/">
          <Image
            src={"/images/logo.png"}
            priority
            width={1000}
            height={1000}
            alt="logo"
            className="size-[3.5rem] object-cover rounded-full"
          />
          {/* <h3>Game of the Game</h3> */}
        </Link>
      </div>
      <div className="flex h-full flex-col justify-between px-5">
        <div className="flex flex-col gap-3">
          <p className="font-medium">Menu</p>
          <div>
            <ul className="flex flex-col gap-2">
              {menu_links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    onClick={() => setActiveTab(link.title)}
                    href={link.tab}
                    className={clsx(
                      "flex items-center gap-3 px-3 py-2 rounded-lg",
                      link.title.toLocaleLowerCase() ==
                        activeTab.toLocaleLowerCase()
                        ? "bg-gray-900"
                        : ""
                    )}
                  >
                    {link.icon(
                      link.title.toLocaleLowerCase() ==
                        activeTab.toLocaleLowerCase()
                        ? true
                        : false
                    )}
                    <span
                      className={clsx(
                        "font-medium",
                        link.title.toLocaleLowerCase() ==
                          activeTab.toLocaleLowerCase()
                          ? "text-white"
                          : ""
                      )}
                    >
                      {link.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const menu_links = [
  {
    title: "Overview",
    icon: (active) => (
      <LayoutDashboardIcon
        className={clsx(
          "size-[18px] ",
          active ? "stroke-white" : "stroke-black"
        )}
      />
    ),
    tab: "/admin/dashboard?tab=Overview",
  },
  {
    title: "Shop",
    icon: (active) => (
      <ShoppingBag
        className={clsx(
          "size-[18px] ",
          active ? "stroke-white" : "stroke-black"
        )}
      />
    ),
    tab: "/admin/dashboard/shop?tab=Shop",
  },
  {
    title: "Slide",
    icon: (active) => (
      <Images
        className={clsx(
          "size-[18px] ",
          active ? "stroke-white" : "stroke-black"
        )}
      />
    ),
    tab: "/admin/dashboard/slide?tab=Slide",
  },
  {
    title: "Products",
    icon: (active) => (
      <PackagePlus
        className={clsx(
          "size-[18px] ",
          active ? "stroke-white" : "stroke-black"
        )}
      />
    ),
    tab: "/admin/dashboard/products?tab=Products",
  },
  {
    title: "Categories",
    icon: (active) => (
      <LayoutList
        className={clsx(
          "size-[18px] ",
          active ? "stroke-white" : "stroke-black"
        )}
      />
    ),
    tab: "/admin/dashboard/categories?tab=Categories",
  },
  {
    title: "Deliveries",
    icon: (active) => (
      < Truck
        className={clsx(
          "size-[18px] ",
          active ? "stroke-white" : "stroke-black"
        )}
      />
    ),
    tab: "/admin/dashboard/deliveries?tab=Deliveries",
  },
  {
    title: "Bank",
    icon: (active) => (
      <Landmark
        className={clsx(
          "size-[18px] ",
          active ? "stroke-white" : "stroke-black"
        )}
      />
    ),
    tab: "/admin/dashboard/bank?tab=Bank",
  },
  {
    title: "Order",
    icon: (active) => (
      <ShoppingCartIcon
        className={clsx(
          "size-[18px] ",
          active ? "stroke-white" : "stroke-black"
        )}
      />
    ),
    tab: "/admin/dashboard/order?tab=Order",
  },
  {
    title: "History",
    icon: (active) => (
      <History
        className={clsx(
          "size-[18px] ",
          active ? "stroke-white" : "stroke-black"
        )}
      />
    ),
    tab: "/admin/dashboard/history?tab=History",
  },
  {
    title: "Report",
    icon: (active) => (
      <BookMinus
        className={clsx(
          "size-[18px] ",
          active ? "stroke-white" : "stroke-black"
        )}
      />
    ),
    tab: "/admin/dashboard/reports?tab=Report",
  },
];
