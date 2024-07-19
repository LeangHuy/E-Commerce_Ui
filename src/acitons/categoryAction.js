"use server";

import { getAllCategories } from "@/service/category.service";

export const getAllCategoriesAction = async (page, size) => {
  return await getAllCategories(page, size);
};

export const postCategoryAction = async (data) => {
  const result = await createCategory(data);
  revalidateTag("getAllProductService");
  return result;
};
