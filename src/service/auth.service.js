import { baseUrl } from "../utils/constants";

// export const registerService = async (req) => {
//   const res = await fetch(`${baseUrl}/auths/register`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(req),
//   })
//     .then((user) => user.json())
//     .catch((e) => console.log(e));
//     console.log(res)
//   return res;
// };

// export const verfiyService = async (otpCode) => {
//   const res = await fetch(`${baseUrl}/auths/verify?otpCode=${otpCode}`, {
//     method: "PUT",
//   })
//     .then((user) => user.json())
//     .catch((e) => console.log(e));
//   console.log(res)
//   return res;
// };

export const registerService = async (req) => {
  console.log(req);
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auths/register`, {
    method: "POST",
    headers: {
      // accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
  const data = await res.json();
  console.log(data);
  return data;
};

export const verfiyService = async (otpCode) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auths/verify?otpCode=${otpCode}`,
    {
      method: "PUT",
      headers: {
        "CONTENT-TYPE": "application/json",
      },
    }
  );
const data= await res.json();
  console.log(data);
  return data;
};

export const loginService = async (req) => {
  console.log(req)
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auths/login`, {
    method: "POST",
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((user) => user.json())
    .catch((e) => console.log(e));
  return res;
};
