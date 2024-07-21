import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const orderService = async (proList) => {
  const session = await getServerSession(authOption);
  const res = await fetch(`http://34.143.196.56:9090/api/v1/orders`, {
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
