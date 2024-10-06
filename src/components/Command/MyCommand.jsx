import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";

export function MyCommand({ data }) {
  return (
    <Command className="rounded-lg ">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          {data?.map((item, idx) =>
            <Link href={`/view/product/${item?.productId}`} className="cursor-pointer" key={idx}>
              <CommandItem>
                <span >{item?.productName}</span>
              </CommandItem>
            </Link>
          )}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
