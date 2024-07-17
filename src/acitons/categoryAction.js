"use server";

import { getAllCategories } from "@/service/category.service";

export const getAllCategoriesAction = async (page, size) => {
  return await getAllCategories(page, size);
};
