import * as React from "react";
import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";

export function DrawerCheckout() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="block w-full">Checkout now</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm ">
          {/* <DrawerHeader>
            <DrawerTitle className="text-center">
              Proccess the payment
            </DrawerTitle>
            <DrawerDescription className="text-center">
              Complete the payment step below
            </DrawerDescription>
          </DrawerHeader> */}
          <DrawerClose asChild className="absolute top-4 right-4">
            <div className="flex cursor-pointer items-center justify-center rounded-full">
              <X />
            </div>
          </DrawerClose>
          <div className="p-4 pb-0">
            {/* <div className="mt-3 h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar
                    dataKey="goal"
                    style={{
                      fill: "hsl(var(--foreground))",
                      opacity: 0.9,
                    }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div> */}
          </div>
        </div>
        <div className="w-[80%] mx-auto p-10 grid grid-cols-3 gap-10">
          <div className="flex flex-col gap-5">
            <h3 className="text-center font-semibold">Step 1</h3>
            <div>
              <p>
                បងប្អូនអាចធ្វើការទូទាត់ប្រាក់តាមរយៈ ABA របស់ពួកយើងបាន
                ដោយគ្រាន់តែចុចតំណរ Link ABA ឬ Scan QR Code ដែលពួកយើងបានដាក់
                រាល់ការទូទាត់ប្រាក់របស់បងប្អូនវានឹងធ្វើការលោត Alert Notification
                មកកាន់ Telegram របស់ពួកយើងដោយស្វ័យប្រវត្តិ!
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-center font-semibold">Step 2</h3>
            <div>
              <Image
                src={"/images/payway.JPG"}
                alt="payway"
                width={1000}
                height={1000}
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-center font-semibold">Step 3</h3>
            <div className="flex flex-col gap-3">
              <p>
                ក្រោយពេលបងប្អូនធ្វើការទូទាត់ប្រាក់រួច
                បងប្អូនអាចចុចតំណរខាងក្រោមនេះដើម្បីធ្វើការឆាតជាមួយនឹងពួកយើងតាម
                Telegram
                ក្នុងការបញ្ចាក់ប្រាប់ពីទីតាំងនិងលេខទំនាក់ទំនងបងប្អូនដើម្បីទទួលបានឥវ៉ាន់
              </p>
              <Button className="block w-full ">
                <Link
                  href={"https://t.me/Playstation_Game_cambodia"}
                  className="font-semibold"
                  target="_blank"
                >
                  Contact us via Telegram
                </Link>
              </Button>
            </div>
          </div>
          <div className="col-start-2 col-end-3">
            {/* <DrawerClose asChild> */}
            <Button variant="outline" className="block w-full">
              Done
            </Button>
            {/* </DrawerClose> */}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
