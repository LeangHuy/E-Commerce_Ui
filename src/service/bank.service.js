import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

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

export const getAllBanks = async () => {
  const session = await getServerSession(authOption);
  const res = await fetch(`${process.env.BASE_URL}/banks`, {
    next: {
      tag: ["getAllBanks"],
    },
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${session.user.payload.token}`,
    },
  });
  const { payload } = await res.json();
  return payload;
};

export const getBankById = async (bankId) => {
  const session = await getServerSession(authOption);

  const res = await fetch(`${process.env.BASE_URL}/banks/${bankId}`, {
    next: {
      tag: ["getBankById"],
    },
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${session.user.payload.token}`,
    },
  });
  const { payload } = await res.json();
  return payload;
};

export const deleteBankById = async (bankId) => {
  const session = await getServerSession(authOption);

  const res = await fetch(`${process.env.BASE_URL}/banks/${bankId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${session.user.payload.token}`,
    },
  });
  const { payload } = await res.json();
  return payload;
};

export const updateBank = async (data, bankId) => {
  const session = await getServerSession(authOption);

  const res = await fetch(`${process.env.BASE_URL}/banks/${bankId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.user.payload.token}`,
    },
    body: JSON.stringify(data),
  });

  const { payload } = await res.json();
  return payload;
};
