export const getAllCategories = async (page = 1, size = 999) => {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/categories?offset=${page}&limit=${size}`,
      {
        headers: {
          "Content-Type": "*/*",
        },
        cache: "no-store",
      }
    ).then((data) => data.json());

    return res?.payload;
  } catch (error) {}
};
