import React from "react";
import Link from "next/link";
import RegisterFormComponent from "@/components/RegisterFormComponent";

function RegisterPage() {
  return (
    <div className="flex h-full p-8">
      <div className=" bg-white p-10 rounded-xl lg:rounded-r-none lg:rounded-l-xl w-[30rem]">
        <div className="flex flex-col gap-5">
          <div className="font-semibold text-[1rem]">PlayStation Game Cambodia</div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <div className="text-[1.4rem] font-bold">
                Sign up your account
              </div>
            </div>
          </div>
        </div>
        <RegisterFormComponent />
        <div className="text-[0.8rem] self-end ">
          Already have an account?
          <Link href={"/login"} className="text-blue-500 ml-2 font-semibold">
            Login
          </Link>
        </div>
      </div>
      <div className="bg-blue-500 w-[30rem] object-fill h-full bg-[url('/images/girl.jpg')] rounded-r-xl lg:block hidden bg-cover"></div>
    </div>
  );
}

export default RegisterPage;
