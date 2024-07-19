"use server";

import {
  deleteProductService,
  getAllProductService,
  getProductById,
  postProduct,
} from "@/service/product.service";
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
  revalidateTag("getAllProductService");
  return result;
};

export const getProductByIdAction = async (productId) => {
  return await getProductById(productId);
};
