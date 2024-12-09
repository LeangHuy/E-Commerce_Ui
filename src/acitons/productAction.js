"use server";
export const getAllProduct = async () => {
  const res = await getAllProductService();
  return res;
};
