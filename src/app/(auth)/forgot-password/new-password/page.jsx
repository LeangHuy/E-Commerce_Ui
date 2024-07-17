import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import NewPasswordComponent from "@/components/NewPasswordComponent";

async function NewPasswordPage() {
  return (
    <div className="flex h-full p-16">
      <div className=" bg-white p-10 rounded-xl lg:rounded-r-none lg:rounded-l-xl w-[30rem] flex flex-col justify-center">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <Link href={"/forgot-password/verify"}>
              <ArrowLeft />
            </Link>

            <div className="font-semibold text-[1rem]">Cambodia Shopping</div>
          </div>{" "}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <div className="text-[1.4rem] font-bold">Forgot Password</div>
              <div className="text-[0.85rem] text-gray-500 font-semibold">
                Enter your new password
              </div>
            </div>
          </div>
        </div>
        <NewPasswordComponent />
      </div>

      <div className="bg-blue-500 w-[30rem] object-fill h-full bg-[url('/images/girl.jpg')] rounded-r-xl lg:block hidden bg-cover"></div>
    </div>
  );
}

export default NewPasswordPage;
