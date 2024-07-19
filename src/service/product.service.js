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

export const postProduct = async (data, warranty) => {
  console.log("data submit : ", { ...data });
  const res = await fetch(
    `${process.env.BASE_URL}/products?warrantyTime=${warranty}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //   Authorization: `Bearer ${session?.user?.token}`,
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
      body: JSON.stringify({ ...data }),
    }
  );

  const { payload } = await res.json();
  return payload;
};
