"use server";

import {
  changeStatusProduct,
  deleteProductService,
  getAllProductService,
  getProductById,
  postProduct,
  updateProductById,
} from "@/service/product.service";
import { revalidatePath, revalidateTag } from "next/cache";

export const getAllProduct = async () => {
  const res = await getAllProductService();
  return res;
};

export const postProductAction = async (data, warranty) => {
  const result = await postProduct(data, warranty);
  revalidateTag("getAllProductService");
  console.log("Result action : ", result);
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

export const updateProductByIdAction = async (data, warranty, productId) => {
  const result = await updateProductById(data, warranty, productId);
  revalidateTag("getAllProductService");
  return result;
};

export const changeStatusProductAction = async (productId, statusProduct) => {
  const result = await changeStatusProduct(productId, statusProduct);
  revalidatePath("/admin/dashboard/product");
  return result;
};
