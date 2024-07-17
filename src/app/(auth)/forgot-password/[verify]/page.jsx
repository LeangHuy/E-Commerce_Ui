import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import VerifyFormComponent from "../../_component/VerifyFormComponent";
import ForgotVerifyFormComponent from "../../_component/ForgotVerifyForm";

async function VerifyPage({ params: { verify } }) {
  return (
    <div className="flex h-full p-32">
      <div className=" bg-white p-10 rounded-xl lg:rounded-r-none lg:rounded-l-xl w-[30rem] flex flex-col justify-center">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <Link href={"/forgot-password"}>
              <ArrowLeft />
            </Link>

            <div className="font-semibold text-[1rem]">Cambodia Shopping</div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <div className="text-[1.4rem] font-bold">Verify Password</div>
              <div className="text-[0.85rem] text-gray-500 font-semibold">
                Code sent to{" "}
                <span className="text-primary">
                  {verify.replace("%40", "@")}
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
        <ForgotVerifyFormComponent email={verify.replace("%40", "@")} />
      </div>
      <div className="bg-blue-500 w-[30rem] object-fill h-full bg-[url('/images/girl.jpg')] rounded-r-xl lg:block hidden bg-cover"></div>
    </div>
  );
}

export default VerifyPage;
