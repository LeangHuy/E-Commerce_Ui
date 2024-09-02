"use server";

import {
  changeStatusSlide,
  createSlideShow,
  deleteSlideById,
  editSlideById,
  getSlideById,
} from "@/service/slide.service";
import { revalidatePath, revalidateTag } from "next/cache";

export const createSlideAction = async ({ title, description, image }) => {
  const data = await createSlideShow({ title, description, image });
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
export const deleteSlideAction = async (slideId) => {
  const result = await deleteSlideById(slideId);
  revalidateTag("getAllSlideShows");
  return result;
};
