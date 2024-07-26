import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const orderService = async (proList) => {
  const session = await getServerSession(authOption);
  const res = await fetch(`${process.env.BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: `Bearer ${session?.user?.token}`,
      Authorization: `Bearer ${session.user.payload.token}`,
    },
    body: JSON.stringify(proList),
  });

  const { payload } = await res.json();
  return payload;
};
