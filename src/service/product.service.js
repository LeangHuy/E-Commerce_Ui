import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const getAllProductService = async () => {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/products`,
      {
        headers: {
          "Content-Type": "*/*",
        },
        cache: "no-store",
      },
      {
        next: {
          tag: ["getAllProductService"],
        },
      }
    ).then((data) => data.json());
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
  const session = await getServerSession(authOption);

  const res = await fetch(
    `${process.env.BASE_URL}/products?warrantyTime=${warranty}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //   Authorization: `Bearer ${session?.user?.token}`,
        Authorization: `Bearer ${session.user.payload.token}`,
      },
      body: JSON.stringify({ ...data }),
    }
  );

  const { payload } = await res.json();
  return payload;
};

export const deleteProductService = async (productId) => {
  const session = await getServerSession(authOption);

  const res = await fetch(`${process.env.BASE_URL}/products/${productId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: `Bearer ${session?.user?.token}`,
      Authorization: `Bearer ${session.user.payload.token}`,
    },
  });

  const payload = await res.json();
  return payload;
};

export const updateProductById = async (data, warranty, productId) => {
  const session = await getServerSession(authOption);
  const res = await fetch(
    `${process.env.BASE_URL}/products/${productId}?warrantyTime=${warranty}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        //   Authorization: `Bearer ${session?.user?.token}`,
        Authorization: `Bearer ${session.user.payload.token}`,
      },
      body: JSON.stringify(data),
    }
  );

  const { payload } = await res.json();
  return payload;
};

export const changeStatusProduct = async (productId, statusProduct) => {
  const session = await getServerSession(authOption);

  const res = await fetch(
    `${
      process.env.BASE_URL
    }/products/status/${productId}?isStatus=${!statusProduct}`,

    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        //   Authorization: `Bearer ${session?.user?.token}`,
        Authorization: `Bearer ${session.user.payload.token}`,
      },
    }
  );
  const data = await res.json();
  return data;
};
