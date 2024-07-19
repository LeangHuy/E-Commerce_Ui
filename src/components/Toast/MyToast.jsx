"use client";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { useAddToCart } from "@/store/useAddToCart";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const AddToCart = ({ data = {}, className, user }) => {
  const { addToCart } = useAddToCart();
  const router = useRouter();
  return (
    <Button
      className={className}
      onClick={() => {
        if (!user) {
          toast.error("Please login first");
          router.push("/login");
          return;
        }
        addToCart(data);
        toast.success("Product has been added to cart");
      }}
    >
      <ShoppingCart className="stroke-black group-hover:stroke-white" />
    </Button>
  );
};
