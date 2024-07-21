import { footer_data } from "@/data/footer";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { CopyrightIcon } from "lucide-react";
import Image from "next/image";

import React from "react";

export default function Footer() {
  return (
    <div id="footer" className="py-24  relative overflow-hidden  isolate bg-sky-300 bg-opacity-20">
      <div className="w-[1330px] mx-auto grid grid-cols-[200px_1fr_auto] gap-[8rem]">
        <div className="flex flex-col gap-3">
          <Image
            src="/images/logo.png"
            alt="alt"
            width={1000}
            height={1000}
            className="size-[6rem] rounded-full"
          />
          {/* <h3 className="text-2xl font-bold">Game of the game</h3> */}
        </div>
        <div className="grid grid-cols-4 gap-10">
          {footer_data.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <h3 className="font-semibold">{item.title}</h3>
              <ul className="flex flex-col gap-2">
                {item.data.map((detail, i) => (
                  <li
                    key={i}
                    className="cursor-pointer transition-all hover:translate-x-1"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h3 className="font-semibold ">Contact</h3>
          {/* <div>
            <div class="mt-6 flex max-w-md gap-x-4">
              <label for="email-address" class="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div> */}
          <div className="flex gap-2 items-center mt-6">
            <InstagramLogoIcon className="size-6 cursor-pointer hover:scale-105 transition-all " />
            <TwitterLogoIcon className="size-6 cursor-pointer hover:scale-105 transition-all " />
          </div>
        </div>
      </div>
      {/* <div
        class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div class="aspect-[1155/678] footer w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"></div>
      </div> */}
    </div>
  );
}
