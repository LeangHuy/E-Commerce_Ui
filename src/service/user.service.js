import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";

export const getUserData = async () => {
  const session = await getServerSession(authOption);

  console.log("session", session);
  if (!session) return null;

  const res = await fetch(`${process.env.BASE_URL}/users`, {
    method: "GET",
    headers: {
      "CONTENT-TYPE": "application/json",
      Authorization: `Bearer ${session.user.payload.token}`,
    },
  });
  const data = await res.json();

  return data;
};
