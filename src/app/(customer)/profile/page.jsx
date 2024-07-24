import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { getPhoto } from "@/lib/utils";
import { getUserData } from "@/service/user.service";
import { Pencil } from "lucide-react";
import { Map } from "lucide-react";
import Image from "next/image";
import React from "react";
import EditProfile from "./EditProfile";

async function page() {
  const userData = await getUserData();
  const user = userData?.payload?.user;
  return <EditProfile user={user} />;
}

export default page;
