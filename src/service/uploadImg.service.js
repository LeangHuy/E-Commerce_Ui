export const uploadImg = async (fileImg, slideId) => {
  const res = await fetch(`${process.env.BASE_URL}/files/${slideId}`, {
    method: "POST",
    headers: {
      //   "Content-Type": "application/json",
      //   Authorization: `Bearer ${session?.user?.token}`,
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
    body: fileImg,
  });

  const { payload } = await res.json();

  return payload;
};
