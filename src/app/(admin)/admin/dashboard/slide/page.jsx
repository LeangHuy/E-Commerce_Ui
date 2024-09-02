import React from "react";
import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import { ImagePlusIcon } from "lucide-react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Pencil } from "lucide-react";
import Link from "next/link";
import { getAllSlideShows } from "@/service/slide.service";
import { getPhoto } from "@/lib/utils";
import SwitchToggle from "../components/SwtichToggle";
import SlideTableComponent from "./_components/SlideTableComponent";

const ShopPage = async ({ searchParams: { tab = "Slide" } }) => {
  const allSlides = await getAllSlideShows();

  return (
    <div className="w-full">
      <Header tab={tab}>
        <Link href={"/admin/dashboard/slide/add?tab=Slide"}>
          <Button className="flex gap-2 items-center">
            <ImagePlusIcon className="size-[20px]" />
            <span className="text-sm">Add Slides</span>
          </Button>
        </Link>
      </Header>
      <div className="content p-5 bg-gray-100">
        <div className=" bg-white min-h-screen rounded-2xl p-10">
          <SlideTableComponent slides={allSlides} />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
