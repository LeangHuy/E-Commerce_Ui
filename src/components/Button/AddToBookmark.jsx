"use client";
import { postBookmark } from "@/service/bookmark";
import { postBookmarkAction } from "@/service/bookmarkserver";
import { Heart } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

function AddToBookmark({ item }) {
  async function postBookmarkFunc(productId) {
    const result = await postBookmarkAction(productId);
    if (result.statusCode == 201) toast.success("Added to bookmark");
  }
  return (
    <Heart
      onClick={() => postBookmarkFunc(item.productId)}
      className={`absolute top-3 right-3 size-[35px] stroke-red-500 p-2 bg-white  rounded-full stroke-[2] cursor-pointer `}
    />
  );
}

export default AddToBookmark;
