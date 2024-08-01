import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
// import { getSession } from "next-auth/react";

export const getBookmarks = async () => {
  const session = await getServerSession(authOption);
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookmarks`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.user.payload.token}`,
    },
    next: {
      tags: ["getAllOrderService"],
    },
  });

  const data = await res.json();
  return data;
};

export const postBookmark = async (product_id) => {
  const session = await getSession();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/bookmarks/${product_id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.user.payload.token}`,
      },
      // body: JSON.stringify()
    }
  );
  const data = await res.json();
  return data;
};
