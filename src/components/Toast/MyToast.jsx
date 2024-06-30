"use client";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

export const AddToCart = ({ data = {}, className }) => {
  const { toast } = useToast();

  return (
    <Button
      className={className}
      onClick={() => {
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
