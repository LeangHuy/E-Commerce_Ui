import { baseUrl } from "../utils/constants";

export const registerService = async (req) => {
  const res = await fetch(`${baseUrl}/auths/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((user) => user.json())
    .catch((e) => console.log(e));
  return res;
};

export const verfiyService = async (otpCode) => {
  const res = await fetch(`${baseUrl}/auths/verify?otpCode=${otpCode}`, {
    method: "PUT",
  })
    .then((user) => user.json())
    .catch((e) => console.log(e));
  return res;
};

export const loginService = async (req) => {
  const res = await fetch(`${baseUrl}/auths/login`, {
    method: "POST",
    body: JSON.stringify(req),
  })
    .then((user) => user.json())
    .catch((e) => console.log(e));
  return res;
};
