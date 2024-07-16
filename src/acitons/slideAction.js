"use server";

import { createSlideShow } from "@/service/slide.service";
import { revalidateTag } from "next/cache";

export const createSlideAction = async ({ title, description }) => {
  const data = await createSlideShow({ title, description });
  revalidateTag("getAllSlideShows");
  return data;
};
