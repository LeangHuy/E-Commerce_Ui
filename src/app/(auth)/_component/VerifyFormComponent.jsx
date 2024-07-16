"use client";

import { verfiyAction } from "@/acitons/authAction";
import { routePath } from "@/constants/route-path";
import { verfiyService } from "@/service/auth.service";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import OTPInput from "react-otp-input";

const VerifyFormComponent = () => {
  const [otp, setOtp] = useState("")
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitOTP = async (data) => {
    // const otpCode = data?.a?.concat(
    //   data?.b,
    //   data?.c,
    //   data?.d,
    //   data?.e,
    //   data?.f
    // );
    // console.log(otpCode);
    const res = await verfiyService(otp);
    if (!res?.statusCode) {
      toast.error(res?.detail);
    } else {
      toast.success(res.message);
      router.push(routePath.LOGIN);
      router.refresh()
    }
    console.log(res);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitOTP)}>
        {/* <div class="grid grid-cols-6 gap-x-4 my-2">
          <input
            type="text"
            {...register("a")}
            className="rounded-lg text-center bg-gray-100 cursor-text w-14 aspect-square flex items-center justify-center"
          />
          <input
            type="text"
            {...register("b")}
            className="rounded-lg text-center bg-gray-100 cursor-text w-14 aspect-square flex items-center justify-center"
          />
          <input
            type="text"
            {...register("c")}
            className="rounded-lg text-center bg-gray-100 cursor-text w-14 aspect-square flex items-center justify-center"
          />
          <input
            type="text"
            {...register("d")}
            className="rounded-lg text-center bg-gray-100 cursor-text w-14 aspect-square flex items-center justify-center"
          />
          <input
            type="text"
            {...register("e")}
            className="rounded-lg text-center bg-gray-100 cursor-text w-14 aspect-square flex items-center justify-center"
          />
          <input
            type="text"
            {...register("f")}
            className="rounded-lg text-center bg-gray-100 cursor-text w-14 aspect-square flex items-center justify-center"
          />
        </div> */}
         <OTPInput
                // inputStyle="inputStyle"
                skipDefaultStyles
                numInputs={6}
                onChange={setOtp}
                renderSeparator={<span>|</span>}
                value={otp}
                // {...register("otp")}
                // placeholder={placeholder}
                containerStyle=""
                inputStyle="text-2xl  border p-5 w-[60px] text-black text-center"
                inputType="text"
                renderInput={(props) => <input {...props} />}
                shouldAutoFocus
              />
        <div class="flex items-center flex-row justify-between my-6">
          <Link href={routePath.LOGIN}>
            <button className="text-gray-600 text-sm">Back to Login</button>
          </Link>

          <button className="text-gray-600 text-sm">Resend</button>
        </div>

        <Button type="submit" color="primary" className="rounded-sm w-full">
          Verify
        </Button>
      </form>
    </>
  );
};

export default VerifyFormComponent;
