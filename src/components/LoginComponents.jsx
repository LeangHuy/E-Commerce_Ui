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
export default function LoginComponents() {
  const route = useRouter();
  const loginZod = z.object({
    email: z.string().email({ message: "Please provide a valid email" }),
    password: z
      .string()
      .min(5, { message: "Password must be atleast 5 characters" }),
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
    resolver: zodResolver(loginZod),
  });
  console.log(errors);
  const handleLogin = async (data) => {
    console.log("data: ", data);
    try {
      const res = await signIn("credentials", {
        username: data?.email,
        password: data?.password,
        redirect: false,
      });
      console.log("res: ", res);
      if (res?.error === null) {
        toast.success("Login Successfully");
        route.push("/");
        route.refresh();
      } else {
        toast.error(res.error);
      }
    } catch (err) {
      console.log("Login failed: ", err);
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

          {/* <label className="font-semibold text-sm text-gray-600 pb-1 block">
            Password
          </label> */}
          <div>
            <div className=" focus-within:border-gray-500 focus-within:border-2 flex gap-4 items-center px-4  rounded-lg   w-full justify-center border ">
              <Image
                src={"/password.svg"}
                width={20}
                height={20}
                alt="Email Icons"
              />

              <input
                placeholder="Password"
                type="password"
                className="focus:outline-none border-none px-3 py-2  w-full  text-sm"
                {...register("password", { required: true })}
              />
            </div>
            {errors.password && (
              <p className="text-[0.65rem] mt-2 text-red-500 self-end">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="text-[0.8rem] self-end ">
            Forgot password?
            <Link
              href={"/forgot-password"}
              className="text-blue-500 ml-2 font-semibold"
            >
              Click here
            </Link>
          </div>

          <Button
            // isLoading={isSubmitting}
            type="submit"
            color="primary"
            className="rounded-sm"
          >
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
