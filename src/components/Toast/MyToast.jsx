"use client";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { useAddToCart } from "@/store/useAddToCart";

export const AddToCart = ({ data = {}, className }) => {
  const { toast } = useToast();
  const { addToCart } = useAddToCart();
  return (
    <Button
      className={className}
      onClick={() => {
        addToCart(data);
        toast({
          title: "Thank you",
          description: "Product has been added to cart",
        });
      }}
    >
      <ShoppingCart className="stroke-black group-hover:stroke-white" />
    </Button>
  );
};
