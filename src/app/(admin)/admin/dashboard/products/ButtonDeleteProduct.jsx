"use client";
import { Button } from "@/components/ui/button";

const ButtonDelete = ({ productId, fnDelete, children }) => {
  const onDelete = async () => {
    const result = await fnDelete(productId);
  };

  return <Button onClick={() => onDelete}>{children}</Button>;
};

export default ButtonDelete;
