"use client";

import { Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";

const VerifyFormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitOTP = (data) => {
    console.log("data: ", data);
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
        <div class="flex items-center flex-col justify-between my-6">
          <button>
            <p class="text-gray-600 text-sm">{"Didn't receive code?"}</p>
          </button>
        </div>

        <Button
          type="submit"
          color="primary"
          className="rounded-sm w-full"
        >
          Verify
        </Button>
      </form>
    </>
  );
};

export default VerifyFormComponent;
