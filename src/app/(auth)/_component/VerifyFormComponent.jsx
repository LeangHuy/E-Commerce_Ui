"use client";

import { verfiyAction } from "@/acitons/authAction";
import { routePath } from "@/constants/route-path";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const VerifyFormComponent = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitOTP = async (data) => {
    const otpCode = data?.a?.concat(
      data?.b,
      data?.c,
      data?.d,
      data?.e,
      data?.f
    );
    console.log(otpCode);
    const res = await verfiyAction(otpCode);
    if (res?.status) {
      toast.error(res?.detail);
    } else {
      toast.success("Verified successfully!");
      router.push(routePath.LOGIN);
    }
    console.log(res);
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitOTP)}>
        <div class="grid grid-cols-6 gap-x-4 my-2">
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
        </div>
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
