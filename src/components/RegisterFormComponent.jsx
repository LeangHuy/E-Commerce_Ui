"use client";

import { registerAction } from "@/acitons/authAction";
import { useForm } from "react-hook-form";

const RegisterFormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
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
    if (res) {
      alert("register success!");
    } else {
      alert("failed to register!");
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="w-full flex flex-col gap-4"
      >
        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="firstName"
            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
          >
            First Name:
          </label>
          <input
            {...register("firstName")}
            type="text"
            name="firstName"
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="lastName"
            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
          >
            Last Name:
          </label>
          <input
            {...register("lastName")}
            type="text"
            name="lastName"
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="email"
            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
          >
            Email:
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            name="email"
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="password"
            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
          >
            Password:
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            name="password"
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="confirmPassword"
            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
          >
            Confirm Password:
          </label>
          <input
            {...register("confirmPassword")}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default RegisterFormComponent;
