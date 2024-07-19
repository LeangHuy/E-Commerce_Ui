export const orderService = async (proList) => {
  const res = await fetch(`http://34.143.196.56:9090/api/v1/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: `Bearer ${session?.user?.token}`,
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
    body: JSON.stringify(proList),
  });

  const { payload } = await res.json();
  return payload;
};
