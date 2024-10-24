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
        Authorization: `Bearer ${session.user.payload.token}`,
      },
      body: JSON.stringify(data),
    }
  );
  const product = await res.json();
  return product;

  // const { payload } = await res.json();
  // return payload;
};

export const changeStatusProduct = async (productId, statusProduct) => {
  const session = await getServerSession(authOption);
  const res = await fetch(
    `${process.env.BASE_URL}/products/status/${productId}?newStatus=${statusProduct}`,

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

export const getAllProductActiveService = async () => {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/products/active`,
      {
        headers: {
          "Content-Type": "*/*",
        },
        cache: "no-store",
      },
      {
        next: {
          tag: ["getAllProductActiveService"],
        },
      }
    ).then((data) => data.json());
    return res?.payload;
  } catch (error) {}
};

export const restockProductService = async (productId, newStock) => {
  const session = await getServerSession(authOption);
  const res = await fetch(
    `${process.env.BASE_URL}/products/restock/${productId}?newStock=${newStock}`,

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

export const getCategoryById = async (categoryId) => {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/products/categories/${categoryId}`,
      {
        headers: {
          "Content-Type": "*/*",
        },
      }
    ).then((data) => data.json());
    return res?.payload;
  } catch (error) {}
};

export const allProductInShop = async () => {
  const session = await getServerSession(authOption);
  try {
    const res = await fetch(`${process.env.BASE_URL}/products/product/all`, {
      headers: {
        "Content-Type": "*/*",
        Authorization: `Bearer ${session.user.payload.token}`,
      },
    }).then((data) => data.json());
    return res?.payload;
  } catch (error) {}
};

export const allProductInStock = async () => {
  const session = await getServerSession(authOption);
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/products/product/in-stock`,
      {
        headers: {
          "Content-Type": "*/*",
          Authorization: `Bearer ${session.user.payload.token}`,
        },
      }
    ).then((data) => data.json());
    return res?.payload;
  } catch (error) {}
};

export const allProductOutStock = async () => {
  const session = await getServerSession(authOption);
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/products/product/out-stock`,
      {
        headers: {
          "Content-Type": "*/*",
          Authorization: `Bearer ${session.user.payload.token}`,
        },
      }
    ).then((data) => data.json());
    return res?.payload;
  } catch (error) {}
};
