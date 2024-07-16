import React from "react";
import { AddToCart } from "../Toast/MyToast";

const AddToCartButton = ({ product }) => {
  return (
    <AddToCart
      className={"bg-transparent group border hover:border-transparent "}
    />
  );
};

export default AddToCartButton;
