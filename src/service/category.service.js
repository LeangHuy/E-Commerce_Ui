export const getAllCategories = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/categories`, {
      headers: {
        "Content-Type": "*/*",
      },
      cache: "no-store",
    }).then((data) => data.json());
    return res?.payload;
  } catch (error) {}
};
