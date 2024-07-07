import React from "react";
import Sidebar from "./components/Sidebar";

const layout = ({ children }) => {
  return (
    <div className="">
      <Sidebar />
      <main className="ml-[300px]">{children}</main>
    </div>
  );
};

export default layout;
