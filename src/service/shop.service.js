import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { shopUrl } from "@/utils/constants";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";

// export const getShopInfoService = async () => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/shops`, {
//       next: { tags: ["shop"] },
//     })
//       .then((data) => data.json())
//       .catch((e) => console.log(e));
//     return res;
//   } catch (e) {
//     console.log("Error: ", e);
//   }
// };

export const getShopInfoService = async () => {
  const session = await getServerSession(authOption);
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/shops`, {
    method: "GET",
    headers: {
      "CONTENT-TYPE": "application/json",
      Authorization: `Bearer ${session.user.payload.token}`,
    },
  });
  const data = await res.json();
  return data;
};

export const updateShopInfoService = async (req) => {
  const {
    shopId,
    shopName,
    shopAddress,
    email,
    phone,
    logo,
    facebookLink,
    telegramLink,
  } = req;
  const session = await getSession();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/shops/${shopId}`,
    {
      method: "PUT",
      body: JSON.stringify({
        shopName,
        shopAddress,
        email,
        phone,
        logo,
        facebookLink,
        telegramLink,
      }),
      headers: {
        "CONTENT-TYPE": "application/json",
        Authorization: `Bearer ${session.user.payload.token}`,
      },
    }
  );
  const data = await res.json();
  return data;
};
