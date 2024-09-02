"use client";
import { postImgAction } from "@/acitons/uploadImgAction";
import { updateUserInfoAction } from "@/acitons/userAction";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { getPhoto } from "@/lib/utils";
import { Pencil } from "lucide-react";
import { Map } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const EditProfile = ({ user }) => {
  const [img, setImg] = useState({
    imgFile: null,
    imgPrev: null,
  });

  useEffect(() => {
  }, [img]);

  const [gender, setGender] = useState(user?.gender);
  const { handleSubmit, register } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", img.imgFile);
    let pf = img.imgFile;
    if (pf) {
      pf = await postImgAction(formData);
    }
    const newInfo = await updateUserInfoAction({
      ...data,
      profile: pf ? pf : user?.profile,
      gender: gender,
    });
    if (newInfo?.status == "OK") {
      toast.success("Update information successfully");
      router.push("/");
    }
  };

  return (
    <div className="p-5 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container mx-auto rounded-md shadow-md border-1 p-10 px-80"
      >
        <div className="relative flex justify-center items-center">
          <label htmlFor="pf">
            <Image
              width={1000}
              height={1000}
              className="relative w-24 h-24 border rounded-full object-cover"
              src={!img.imgPrev ? getPhoto(user?.profile) : img?.imgPrev}
              alt="profile"
            />
          </label>
          <input
            onChange={(e) =>
              setImg({
                imgFile: e.target.files[0],
                imgPrev: URL.createObjectURL(e.target.files[0]),
              })
            }
            type="file"
            className="absolute opacity-0"
            id="pf"
          />
          <label
            htmlFor="pf"
            className="absolute ml-20 -mb-10 bg-sky-400 rounded-full p-1.5 cursor-pointer"
          >
            <Pencil stroke="white" className="size-[1rem]" />
          </label>
        </div>

        <div className="flex gap-10 mt-3">
          <div className="w-full">
            <Label className="font-bold">First name</Label>

            <input
              type="text"
              name="firstName"
              {...register("firstName", { required: true })}
              defaultValue={user?.firstName}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>
          <div className="w-full">
            <Label className="font-bold">Last name</Label>
            <input
              type="text"
              name="lastName"
              defaultValue={user?.lastName}
              {...register("lastName", { required: true })}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>
        </div>
        <div className="w-full mt-3">
          <Label className="font-bold">Email</Label>

          <input
            disabled
            type="text"
            name="email"
            defaultValue={user?.email}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
        </div>
        <div className="w-full mt-3">
          <Label className="font-bold">Address</Label>

          <div className="flex relative w-full px-3 py-2 rounded-md border focus-within:border-gray-500 focus-within:border-2 justify-between items-center">
            <input
              type="text"
              name="address"
              defaultValue={user?.address}
              {...register("address", { required: true })}
              className="focus:outline-none border-none w-full bg-transparent"
            />
            <Map className="cursor-pointer" />
          </div>
        </div>
        <div className="w-full mt-3">
          <Label className="font-bold">Contact Number</Label>
          <input
            type="text"
            name="phone"
            defaultValue={user?.phone}
            {...register("phone", { required: true })}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
        </div>
        <RadioGroup defaultValue={gender} className="mt-6 flex gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              {...register("gender", { required: true })}
              value="Male"
              id="r2"
              onClick={() => setGender("Male")}
            />
            <Label htmlFor="r2">Male</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              {...register("gender", { required: true })}
              value="Female"
              id="r3"
              onClick={() => setGender("Female")}
            />
            <Label htmlFor="r3">Female</Label>
          </div>
        </RadioGroup>

        <div className="flex justify-end">
          <Button className="mt-3 ">Save change</Button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
