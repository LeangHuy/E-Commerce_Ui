"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const CategoryButton = ({ categories }) => {
  const [isActive, setIsActive] = useState("All");

  return (
    <div className="flex items-center gap-4">
      {categories.map((category, idx) => (
        <Link
          href={`?q=${category}`}
          scroll={false}
          key={idx}
          className={cn(
            ` relative flex items-center z-10 font-medium p-1 px-4 rounded-full `,
            isActive == category
              ? " text-white border border-transparent"
              : "border"
          )}
          onClick={() => setIsActive(category)}
        >
          {category}
          {category === isActive && (
            <motion.section
              layoutId="filterButton"
              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              className={`absolute z-[-1] inset-0  bg-blue-500  rounded-full `}
            />
          )}
        </Link>
      ))}
    </div>
  );
};

export default CategoryButton;
