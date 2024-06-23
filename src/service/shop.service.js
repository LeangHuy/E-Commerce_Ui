import { shopUrl } from "../../utils/constants";

export const getShopInfoService = async () => {
  try {
    const res = await fetch(`${shopUrl}/shops`, {
      next: { tags: ["shop"] },
    })
      .then((data) => data.json())
      .catch((e) => console.log(e));
    return res;
  } catch (e) {
    console.log("Error: ", e);
  }
};
