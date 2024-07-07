export const createSlideShow = async ({ title, description }) => {
  const res = await fetch(`${process.env.BASE_URL}/slideshows`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: `Bearer ${session?.user?.token}`,
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
    body: JSON.stringify({
      title,
      description,
    }),
  });

  const { payload } = await res.json();

  return payload;
};

export const getAllSlideShows = async () => {
  const res = await fetch(
    `${process.env.BASE_URL}/slideshows`,
    {
      headers: {
        "Content-Type": "application/json",
        //   Authorization: `Bearer ${session?.user?.token}`,
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    },
    {
      next: {
        tag: ["getAllSlideShows"],
      },
    }
  );

  const { payload } = await res.json();

  return payload;
};
