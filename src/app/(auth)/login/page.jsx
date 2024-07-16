import LoginComponents from "@/components/LoginComponents";
import React from "react";
import TextBetweenLine from "../_component/TextBetweenLine";
import Image from "next/image";
import Link from "next/link";

function LoginPage() {
  return (
    <div className="flex h-full p-16">
      <div className=" bg-white p-10 rounded-xl lg:rounded-r-none lg:rounded-l-xl w-[30rem]">
        <div className="flex flex-col gap-5">
          <div className="font-semibold text-[1rem]">Cambodia Shopping</div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <div className="text-[1.4rem] font-bold">
                Log in to your account
              </div>
              <div className="text-[0.85rem] text-gray-500 font-semibold">
                Welcome back! Select method to log in
              </div>
            </div>
            <div className="flex gap-5">
              <div className="border w-[15rem] h-[3rem] rounded flex items-center p-2 gap-5 cursor-pointer">
                <Image
                  src={"/google.svg"}
                  width={30}
                  height={30}
                  alt="Google Icons"
                />
                <div className="text-[0.8rem] font-semibold">Google</div>
              </div>
              <div className="border w-[15rem] h-[3rem] rounded flex items-center p-2 gap-5 cursor-pointer">
                <Image
                  src={"/facebook.svg"}
                  width={30}
                  height={30}
                  alt="Facebook Icons"
                />
                <div className="text-[0.8rem] font-semibold">Facebook</div>
              </div>
            </div>
            {/* <div>Or continue with email</div> */}
            <TextBetweenLine />
          </div>
        </div>
        <LoginComponents />
        <div className="text-[0.8rem] self-end ">
          Dont have an account?
          <Link
            href={"/register"}
            className="text-blue-500 ml-2 font-semibold"
          >
            Register
          </Link>
        </div>
      </div>

      <div className="bg-blue-500 w-[30rem] object-fill h-full bg-[url('/images/girl.jpg')] rounded-r-xl lg:block hidden bg-cover"></div>
    </div>
  );
}

export default LoginPage;
