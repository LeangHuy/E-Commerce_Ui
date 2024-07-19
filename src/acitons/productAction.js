"use server";

import { getAllProductService, postProduct } from "@/service/product.service";
import { revalidateTag } from "next/cache";

export const getAllProduct = async () => {
  const res = await getAllProductService();
  return res;
};

export const postProductAction = async (data, warranty) => {
  const result = await postProduct(data, warranty);
  revalidateTag("getAllProductService");
  return result;
};

export const deleteProductAction = async (productId) => {
  const result = await deleteProductService(productId);
};
