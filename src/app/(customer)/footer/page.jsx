import { footer_data } from "@/data/footer";
import { getPhoto } from "@/lib/utils";
import { getShopInfoService } from "@/service/shop.service";
import { MapPinned } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Footer() {
  const shopData = await getShopInfoService();
  const shopPayload = shopData?.payload;
  return (
    <div id="footer" className="py-24  relative overflow-hidden  isolate bg-sky-300 bg-opacity-20">
      <div className="w-[1330px] mx-auto grid grid-cols-[200px_1fr_auto] gap-[8rem]">
        <div className="flex flex-col gap-3">
          <Link href="/">
            <Image
              src={getPhoto(shopPayload?.logo)}
              alt="alt"
              width={1000}
              height={1000}
              className="size-[6rem] rounded-full"
            />
          </Link>

        </div>
        <div className="flex justify-between ">
          {footer_data.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <h2 className="font-semibold text-center text-xl flex gap-2">{item?.icon && item.icon === 'MapPinned' && <MapPinned />} {item.title}</h2>
              <hr className="bg-white border-none h-0.5 rounded-full" />
              <div className="flex flex-col gap-2">
                {item.data.map((detail, i) => (
                  <Link
                    key={i}
                    target="_blank"
                    className="cursor-pointer transition-all hover:translate-x-1"
                    href={item?.link ? item.link : "#"}>
                    {detail}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-semibold ">Contact</h3>

          <div className="flex gap-2 items-center mt-6">
            <Link href={shopPayload?.telegramLink} target="new">
              <Image src="/telegram.svg" alt="alt" width={1000}
                height={1000}
                className="size-[1.5rem] rounded-full" />
            </Link>

            <Link href={shopPayload?.facebookLink} target="new">
              <Image src="/facebook.svg" alt="alt" width={1000}
                height={1000}
                className="size-[1.5rem] rounded-full" />
            </Link>

          </div>
        </div>
      </div>
    </div >
  );
}
