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

export const createCategory = async (data) => {
  const res = await fetch(`${process.env.BASE_URL}/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
    body: JSON.stringify(data),
  });
  const { payload } = await res.json();
  return payload;
};

export const updateCategory = async (data, categoryId) => {
  const res = await fetch(`${process.env.BASE_URL}/categories/${categoryId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
    body: JSON.stringify({ data }),
  });
  const { payload } = await res.json();
  return payload;
};
