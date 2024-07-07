import React from "react";
import Header from "./components/Header";

const AdminDashboardPage = ({ searchParams: { tab = "Overview" } }) => {
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
