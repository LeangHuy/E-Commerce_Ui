export const getAllCategories = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/categories`, {
      headers: {
        "Content-Type": "*/*",
      },
      cache: "no-store",
    }).then((data) => data.json());

    return Array.from(new Set(res?.payload.map((cate) => cate?.categoryName)));
  } catch (error) {}
};
