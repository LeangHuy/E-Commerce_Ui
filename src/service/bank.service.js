import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const createBank = async ({ bankName, qrCode }) => {
  const session = await getServerSession(authOption);

  const res = await fetch(`${process.env.BASE_URL}/banks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.user.payload.token}`,
    },
    body: JSON.stringify({
      bankName,
      qrCode,
    }),
  });

  const { payload } = await res.json();
  return payload;
};
