import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

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
  const session = await getServerSession(authOption);

  const res = await fetch(`${process.env.BASE_URL}/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.user.payload.token}`,
    },
    body: JSON.stringify(data),
  });
  const { payload } = await res.json();
  return payload;
};

export const editCategory = async (data, categoryId) => {
  const session = await getServerSession(authOption);

  const res = await fetch(`${process.env.BASE_URL}/categories/${categoryId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.user.payload.token}`,
    },
    body: JSON.stringify(data),
  });
  const { payload } = await res.json();
  return payload;
};

export const updateCategory = async (data, categoryId) => {
  const session = await getServerSession(authOption);

  const res = await fetch(`${process.env.BASE_URL}/categories/${categoryId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.user.payload.token}`,
    },
    body: JSON.stringify({ data }),
  });
  const { payload } = await res.json();
  return payload;
};
