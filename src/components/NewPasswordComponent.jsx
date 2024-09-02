"use client";

import { registerAction } from "@/acitons/authAction";
import { routePath } from "@/constants/route-path";
import { forgotPassword, registerService } from "@/service/auth.service";
import { globalEmail } from "@/store/authglobal";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const NewPasswordComponent = () => {
  const router = useRouter();

  const email = globalEmail((state) => state.email);
  useEffect(() => {
    if (!email) {
      toast.error("Email is unavailable. Returning to login page....");
      router.push("/login");
      router.refresh();
    }
  }, [email, router]);

  const newPasswordZod = z
    .object({
      password: z.string().min(5, { message: "Password is too short" }),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(newPasswordZod),
  });

  const handleForgot = async (data) => {
    const fullData = {
      email: email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    const res = await forgotPassword(fullData);
    if (res?.status === 400 && res.status === 404) {
      toast.error(res.detail);
    } else {
      toast.success(res.message);
      router.push(`/login`);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(handleForgot)}
        className="w-full flex flex-col my-2 gap-2"
      >
        <div className="flex items-start flex-col justify-start ">
          <label htmlhtmlFor="password" className="text-sm text-gray-700 mr-2">
            New Password:
          </label>
          <input
            {...register("password", {
              required: "Password is required",
            })}
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {errors?.password?.message && (
            <p className="text-red-500 text-[0.65rem] mt-2 self-end">
              {errors?.password?.message}
            </p>
          )}
        </div>

        <div className="flex items-start flex-col justify-start ">
          <label
            htmlhtmlFor="confirmPassword"
            className="text-sm text-gray-700 mr-2"
          >
            Confirm New Password:
          </label>
          <input
            {...register("confirmPassword", {
              required: "Confirmed password is required",
            })}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {errors?.confirmPassword?.message && (
            <p className="text-red-500 text-[0.65rem] mt-2 self-end">
              {errors?.confirmPassword?.message}
            </p>
          )}
        </div>

        <Button
          isLoading={isSubmitting}
          type="submit"
          color="primary"
          className="rounded-sm"
        >
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Change password
        </Button>
      </form>
    </>
  );
};

export default NewPasswordComponent;
