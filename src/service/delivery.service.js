import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const postDelivery = async (data) => {
  const session = await getServerSession(authOption);
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/deliveries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.user.payload.token}`,
    },
    next: { tags: ["bookmarks"] },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  return result;
};
