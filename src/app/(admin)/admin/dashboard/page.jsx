import React from "react";
import Header from "./components/Header";
import { redirect } from "next/navigation";
import { getUserData } from "@/service/user.service";

const AdminDashboardPage = async ({ searchParams: { tab = "Overview" } }) => {
  const userData = await getUserData();
  if (userData.payload.role === "USER") {
    redirect("/");
  }

  return (
    <div className="w-full">
      <Header tab={tab} />
      <div className="content p-5 bg-gray-100">
        <div className=" bg-white rounded-2xl p-10">Contents</div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
