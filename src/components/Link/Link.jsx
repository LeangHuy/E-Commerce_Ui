import { my_links } from "@/data/links";
import Link from "next/link";
import React from "react";

const MyLink = () => {
  return (
    <nav>
      <ul className="flex items-center gap-6">
        {my_links.map((link, idx) => (
          <li key={idx} className="">
            <Link
              href={link.path}
              className="hover:text-sky-500  font-medium after:transition-all relative after:content-[''] after:absolute after:w-0 hover:after:w-full after:h-[2px] after:-bottom-1 after:rounded-full after:left-0 after:bg-sky-500"
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
