"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ButtonDelete = ({ productId, fnDelete, children }) => {
  const onDelete = async (e) => {
    e.preventDefault();
    if (fnDelete) {
      const result = await fnDelete(productId);
      if (result) {
        toast.success("Delete successfully");
      }
    }
  };

  return (
    <Button className="ml-auto" onClick={onDelete}>
      {children}
    </Button>
  );
};

export default ButtonDelete;
