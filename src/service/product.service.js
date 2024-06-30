export const getAllProductService = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/products`).then((data) =>
      data.json()
    );
    return res?.payload;
  } catch (error) {}
};
