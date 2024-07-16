export const getAllProductService = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/products`, {
      headers: {
        "Content-Type": "*/*",
      },
      cache: "no-store",
    }).then((data) => data.json());
    return res?.payload;
  } catch (error) {}
};

export const getProductById = async (productId) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/products/${productId}`, {
      headers: {
        "Content-Type": "*/*",
      },
    }).then((data) => data.json());
    return res?.payload;
  } catch (error) {}
};
