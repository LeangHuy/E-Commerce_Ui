import LoginComponents from "@/components/LoginComponents";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

async function LoginPage() {

  return (
    <div className="flex h-full p-16">
      <div className=" bg-white p-10 rounded-xl lg:rounded-r-none lg:rounded-l-xl w-[30rem]">
        <div className="flex flex-col gap-5">
          {/* <Link href={"/"} className="flex"><ArrowLeft />Back</Link> */}
          <div className="font-semibold text-[1rem] flex"><Link href={"/"}><ArrowLeft /></Link>Cambodia Shopping</div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <div className="text-[1.4rem] font-bold">
                Log in to your account
              </div>
              <div className="text-[0.85rem] text-gray-500 font-semibold">
                Welcome back!
              </div>
            </div>
          </div>
        </div>
        <LoginComponents />
        <div className="text-[0.8rem] self-end ">
          Don't have an account?
          <Link href={"/register"} className="text-blue-500 ml-2 font-semibold">
            Register
          </Link>
        </div>
      </div>

      <div className="bg-blue-500 w-[30rem] object-fill h-full bg-[url('/images/girl.jpg')] rounded-r-xl lg:block hidden bg-cover"></div>
    </div>
  );
}

export default LoginPage;
