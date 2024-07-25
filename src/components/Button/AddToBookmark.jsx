"use client";
import { postBookmark } from "@/service/bookmark";
import { Heart } from "lucide-react";
import React from "react";

function AddToBookmark({item}) {
    async function postBookmarkfunc(productId) {
        await postBookmark(productId)
      }
  return (
    <Heart
      // onClick={() => setIsActive(idx)}
      onClick={() => postBookmarkfunc(item.productId)}
      className={`absolute top-3 right-3 size-[35px] stroke-red-500 p-2 bg-white  rounded-full stroke-[2] cursor-pointer `}
    />
  );
}

export default AddToBookmark;
