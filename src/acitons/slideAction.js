"use server";

import {
  changeStatusSlide,
  createSlideShow,
  editSlideById,
  getSlideById,
} from "@/service/slide.service";
import { revalidatePath, revalidateTag } from "next/cache";

export const createSlideAction = async ({ title, description }) => {
  const data = await createSlideShow({ title, description });
  revalidateTag("getAllSlideShows");
  return data;
};

export const changeStatusSlideAction = async (slideId, statusSlide) => {
  const result = await changeStatusSlide(slideId, statusSlide);
  revalidatePath("/admin/dashboard/slide");
  return result;
};

export const getSlideByIdAction = async (slideId) => {
  return await getSlideById(slideId);
};

export const editSlideByIdAction = async (data, slideId) => {
  const result = await editSlideById(data, slideId);
  revalidateTag("getAllSlideShows");
  return result;
};
