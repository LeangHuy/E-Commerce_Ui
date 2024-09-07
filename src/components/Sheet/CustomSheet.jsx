"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAddToCart } from "@/store/useAddToCart";
import { ShoppingCart } from "lucide-react";
import { useEffect } from "react";

export function CustomSheet() {
  const { cartList } = useAddToCart();

  useEffect(() => {
  }, [cartList]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <ShoppingCart className="cursor-pointer hover:stroke-sky-500" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Product you have added to cart</SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
        </SheetHeader>
        <div className="py-4"></div>
      </SheetContent>
    </Sheet>
  );
}
