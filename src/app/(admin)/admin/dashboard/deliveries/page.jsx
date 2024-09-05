import React from "react";
import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import { ImagePlusIcon, Eye, Trash } from "lucide-react";
import Link from "next/link";


async function DeliveryPage({ searchParams: { tab = "Delivery" } }) {

    return (
        <div className="w-full">
            <Header tab={tab}>
                <Link href={"/admin/dashboard/deliveries/add?tab=Delivery"}>
                    <Button className="flex gap-2 items-center">
                        <ImagePlusIcon className="size-[20px]" />
                        <span className="text-sm">Add Delivery</span>
                    </Button>
                </Link>
            </Header>
            {/* <div className="content p-5 bg-gray-100">
                <div className="bg-white min-h-screen rounded-2xl p-10">
                    <BankTableComponent banks={allBanks} />
                </div>
            </div> */}
        </div>
    );
}

export default DeliveryPage;
