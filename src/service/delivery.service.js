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

export const assignDel = async (orderId, userId) => {
  const session = await getServerSession(authOption);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/orders/${orderId}/assign/delivery?deliveryId=${userId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.user.payload.token}`,
      },
      next: { tags: ["bookmarks"] },
    }
  );
  const result = await res.json();
  return result;
};

// /api/v1/orders/{orderId}/assign/delivery

export const getCurrentDeli = async (deliverId) => {
  console.log(deliverId);
  const session = await getServerSession(authOption);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/orders/deliveries/${deliverId}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.user.payload.token}`,
      },
      next: { tags: ["getCurrentDeli"] },
    }
  );
  const result = await res.json();
  return result;
};
