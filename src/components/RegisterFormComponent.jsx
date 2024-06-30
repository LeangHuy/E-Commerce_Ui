"use client";

import { registerAction } from "@/acitons/authAction";
import { routePath } from "@/constants/route-path";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const RegisterFormComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    setIsLoading(true);
    const res = await registerAction({
      firstName: data?.firstName,
      lastName: data?.lastName,
      phone: "0962626669",
      address: "no address",
      gender: "Other",
      profile: "string.png",
      email: data?.email,
      password: data?.password,
      confirmPassword: data?.confirmPassword,
    });
    if (res?.status === 400) {
      setIsLoading(false);
      toast.error("Failed to register!");
    } else {
      setIsLoading(false);
      toast.success("Registed successfully!");
      router.push(`${routePath.REGISTER}/${data?.email}`);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="w-full flex flex-col gap-4"
      >
        <div className="flex items-start flex-col justify-start">
          <label htmlFor="firstName" className="text-sm text-gray-700 mr-2">
            First Name:
          </label>
          <input
            {...register("firstName", {
              required: "Firstname is required",
            })}
            type="text"
            name="firstName"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />

          {errors?.firstName?.message && (
            <p className="text-red-500 text-sm mt-2">
              {errors?.firstName?.message}
            </p>
          )}
        </div>

        <div className="flex items-start flex-col justify-start">
          <label htmlFor="lastName" className="text-sm text-gray-700 mr-2">
            Last Name:
          </label>
          <input
            {...register("lastName", {
              required: "Lastname is required",
            })}
            type="text"
            name="lastName"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {errors?.lastName?.message && (
            <p className="text-red-500 text-sm mt-2">
              {errors?.lastName?.message}
            </p>
          )}
        </div>

        <div className="flex items-start flex-col justify-start">
          <label htmlFor="email" className="text-sm text-gray-700 mr-2">
            Email:
          </label>
          <input
            {...register("email", {
              required: "Email is required",
            })}
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />

          {errors?.email?.message && (
            <p className="text-red-500 text-sm mt-2">
              {errors?.email?.message}
            </p>
          )}
        </div>

        <div className="flex items-start flex-col justify-start">
          <label htmlFor="password" className="text-sm text-gray-700 mr-2">
            Password:
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
            <p className="text-red-500 text-sm mt-2">
              {errors?.password?.message}
            </p>
          )}
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="confirmPassword"
            className="text-sm text-gray-700 mr-2"
          >
            Confirm Password:
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
            <p className="text-red-500 text-sm mt-2">
              {errors?.confirmPassword?.message}
            </p>
          )}
        </div>

        <Button
          isLoading={isLoading ? true : false}
          type="submit"
          color="primary"
          className="rounded-sm"
        >
          Register
        </Button>
      </form>
    </>
  );
};

export default RegisterFormComponent;