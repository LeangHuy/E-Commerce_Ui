import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { MyCommand } from "../Command/MyCommand";
import { getAllProductService } from "@/service/product.service";

export async function SearchDialog() {
  const products = await getAllProductService()
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Search className="cursor-pointer hover:stroke-sky-500" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px">
        <MyCommand data={products} />
      </DialogContent>
    </Dialog>
  );
}
