"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { resendEmail } from "@/service/auth.service";
export default function ForgotComponents() {
  const route = useRouter();
  const forgotZod = z.object({
    email: z.string().email({ message: "Please provide a valid email" }),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(forgotZod),
  });
  const handleLogin = async (data) => {
    const res = await resendEmail(data);
    if (res.status !== 404 && res.state !== 400) {
      toast.success("Email send! Check your email for OTP code");
      route.push(`/forgot-password/${data?.email}`);
      route.refresh();
    } else {
      toast.error(res.detail);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="flex flex-col gap-5 py-7">
          {/* <label className="font-semibold text-sm text-gray-600 pb-1 block">
            E-mail
          </label> */}
          <div>
            <div className=" focus-within:border-gray-500 focus-within:border-2 flex gap-4 items-center px-4  w-full rounded-lg  justify-center border ">
              <Image
                src={"/email.svg"}
                width={20}
                height={20}
                alt="Email Icons"
              />
              <input
                type="text"
                placeholder="Email"
                className="focus:outline-none border-none px-3 py-2   text-sm w-full"
                {...register("email")}
              />
            </div>
            {errors.email && (
              <p className="text-[0.65rem] mt-2 text-red-500 self-end">
                {errors.email.message}
              </p>
            )}
          </div>
          <Button
            // isLoading={isSubmitting}
            type="submit"
            color="primary"
            className="rounded-sm"
          >
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
}
