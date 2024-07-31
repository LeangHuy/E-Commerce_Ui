import { baseUrl } from "../utils/constants";

export const registerService = async (req) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auths/register`, {
    method: "POST",
    headers: {
      // accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
  const data = await res.json();
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
  const data = await res.json();
  return data;
};

export const loginService = async (req) => {
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

export const resendEmail = async (req) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auths/resend?email=${req.email}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();

  return data;
};

export const forgotPassword = async (req) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auths/forget?email=${req.email}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: req.password,
        confirmPassword: req.confirmPassword,
      }),
    }
  );

  const data = await res.json();
  return data;
};
