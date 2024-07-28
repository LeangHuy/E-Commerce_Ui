import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const orderService = async (proList) => {
  try {
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

    const result = await res.json();
    console.log("result", result);
    if (result.status == 400) throw new Error("Product out of stock");

    const { payload } = result;
    return payload;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const countTotalOrderPerDayService = async () => {
  const session = await getServerSession(authOption);
  try {
    const res = await fetch(`${process.env.BASE_URL}/orders/total/per/day`, {
      headers: {
        "Content-Type": "*/*",
        Authorization: `Bearer ${session.user.payload.token}`,
      },
    }).then((data) => data.json());
    return res?.payload;
  } catch (error) {}
};

export const getAllOrders = async () => {
  const session = await getServerSession(authOption);

  try {
    const res = await fetch(`${process.env.BASE_URL}/orders`, {
      headers: {
        "Content-Type": "*/*",
        Authorization: `Bearer ${session.user.payload.token}`,
      },
      next: {
        tags: ["getAllOrders"],
      },
    }).then((data) => data.json());
    return res?.payload;
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export const getAllOrdersAdmin = async () => {
  const session = await getServerSession(authOption);

  try {
    const res = await fetch(`${process.env.BASE_URL}/orders/admin`, {
      headers: {
        "Content-Type": "*/*",
        Authorization: `Bearer ${session.user.payload.token}`,
      },
      next: {
        tags: ["getAllOrdersAdmin"],
      },
    }).then((data) => data.json());
    return res?.payload;
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export const changeStatusOrder = async (orderId, status) => {
  const session = await getServerSession(authOption);

  try {
    const res = await fetch(
      `${process.env.BASE_URL}/orders/${orderId}?status=${status}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "*/*",
          Authorization: `Bearer ${session.user.payload.token}`,
        },
        next: {
          tags: ["changeStatusOrder"],
        },
      }
    ).then((data) => data.json());
    return res?.payload;
  } catch (error) {
    return {
      error: error.message,
    };
  }
};
