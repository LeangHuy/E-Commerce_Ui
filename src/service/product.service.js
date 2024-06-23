import { productUrl } from "../../utils/constants";

export const getAllProductService = async () => {
  try {
    const res = await fetch(`${productUrl}/products`, {
      next: { tags: ["product"] },
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error: ", e);
  }
};
