"use server";

import {
  postImg,
  uploadImg,
  uploadImgProduct,
} from "@/service/uploadImg.service";
import { revalidatePath, revalidateTag } from "next/cache";

export const uploadImgAction = async (fileImg, slideId) => {
  const data = await uploadImg(fileImg, slideId);
  revalidateTag("getAllSlideShows");
  revalidatePath("/admin/dashboard/slide");
  return data;
};

export const uploadImgProductAction = async (fileImg, productId) => {
  const data = await uploadImgProduct(fileImg, productId);
  // revalidateTag("getAllSlideShows");
  // revalidatePath("/admin/dashboard/products");
  return data;
};

export const postImgAction = async (fileImg) => {
  const result = await postImg(fileImg);

  return result;
};
