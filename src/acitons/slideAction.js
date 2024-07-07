"use server";

import { createSlideShow } from "@/service/slide.service";

export const createSlideAction = async ({ title, description }) => {
  //   console.log("data action : ", { title, description });
  const data = await createSlideShow({ title, description });
  return data;
};
