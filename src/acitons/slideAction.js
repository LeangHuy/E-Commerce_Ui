"use server";

import { changeStatusSlide, createSlideShow } from "@/service/slide.service";
import { revalidatePath, revalidateTag } from "next/cache";

export const createSlideAction = async ({ title, description }) => {
  const data = await createSlideShow({ title, description });
  revalidateTag("getAllSlideShows");
  return data;
};

export const changeStatusSlideAction = async (slideId, statusSlide) => {
  console.log("slide", slideId, statusSlide);

  const result = await changeStatusSlide(slideId, statusSlide);
  // revalidateTag("getAllSlideShows");
  revalidatePath("/admin/dashboard/slide");
  return result;
};
