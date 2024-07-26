"use client";
import { my_links } from "@/data/links";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyLink = () => {
  const path = usePathname();
  console.log(path, "k".endsWith("k"));
  return (
    <nav>
      <ul className="flex items-center gap-6">
        {my_links.map((link, idx) => (
          <li key={idx} className="">
            <Link
              href={link.path}
              className={clsx(
                `hover:text-sky-500  font-medium after:transition-all relative after:content-[''] after:absolute after:w-0 hover:after:w-full after:h-[2px] after:-bottom-1 after:rounded-full after:left-0 after:bg-sky-500`,

                path.endsWith("/") == "/"
                  ? "text-sky-500"
                  : path == link.path
                  ? "text-sky-500"
                  : ""
              )}
            >
              {link.link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MyLink;
