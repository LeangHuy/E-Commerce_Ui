import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

// export const createBank = async ({ bankName, qrCode }) => {
//   const session = await getServerSession(authOption);

//   const res = await fetch(`${process.env.BASE_URL}/banks`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${session.user.payload.token}`,
//     },
//     body: JSON.stringify({
//       bankName,
//       qrCode,
//     }),
//   });
//   console.log("========== service ============");
//   console.log("bankName: ", bankName);
//   console.log("qrCode: ", qrCode);
//   console.log("========== service ============");

//   const { payload } = await res.json();
//   return payload;
// };

export const createBank = async (data) => {
  const session = await getServerSession(authOption);

  const res = await fetch(`${process.env.BASE_URL}/banks`, {
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
