import LoginComponents from "@/components/LoginComponents";
import React from "react";
import TextBetweenLine from "../_component/TextBetweenLine";
import Image from "next/image";
import Link from "next/link";
import { getUserData } from "@/service/user.service";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import ForgotComponents from "@/components/ForgotComponent";
import { ArrowLeft } from "lucide-react";

async function ForgotPage() {
  return (
    <div className="flex h-full p-32">
      <div className=" bg-white p-10 rounded-xl lg:rounded-r-none lg:rounded-l-xl w-[30rem] flex flex-col justify-center">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <Link href={"/login"}>
              <ArrowLeft />
            </Link>

            <div className="font-semibold text-[1rem]">Cambodia Shopping</div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <div className="text-[1.4rem] font-bold">Forgot Password</div>
              <div className="text-[0.85rem] text-gray-500 font-semibold">
                Enter your email
              </div>
            </div>
          </div>
        </div>
        <ForgotComponents />
      </div>
      <div className="bg-blue-500 w-[30rem] object-fill h-full bg-[url('/images/girl.jpg')] rounded-r-xl lg:block hidden bg-cover"></div>
    </div>
  );
}

export default ForgotPage;
