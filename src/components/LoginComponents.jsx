"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
export default function LoginComponents() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = async (data) => {
    console.log("data: ", data);
    try {
      const res = await signIn("credentials", {
        username: data?.email,
        password: data?.password,
        redirect: false
      })
      console.log("res: ", res)
      if(res?.status === 200) {
        toast.success("Login successfully")
      } else {
        toast.error("Failed to login")
      }
    } catch(err) {
      console.log("Login failed: ", err)
    } 

  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="px-5 py-7">
          <label className="font-semibold text-sm text-gray-600 pb-1 block">
            E-mail
          </label>
          <input
            type="text"
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            {...register("email")}
          />
          <label className="font-semibold text-sm text-gray-600 pb-1 block">
            Password
          </label>
          <input
            type="text"
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            {...register("password")}
          />
          <button
            type="submit"
            className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
          >
            <span className="inline-block mr-2">Login</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 inline-block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
