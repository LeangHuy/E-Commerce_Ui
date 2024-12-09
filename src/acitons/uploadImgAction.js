"use server";

import { uploadImg } from "@/service/uploadImg.service";
import { revalidateTag } from "next/cache";

export const uploadImgAction = async (fileImg, slideId) => {
  const data = await uploadImg(fileImg, slideId);
  revalidateTag("getAllSlideShows");
  return data;
};
