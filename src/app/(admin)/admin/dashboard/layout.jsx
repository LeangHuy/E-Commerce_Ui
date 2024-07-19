import React from "react";
import Sidebar from "./components/Sidebar";
import { Toaster } from "react-hot-toast";

const layout = ({ children }) => {
  return (
    <div className="">
      <Sidebar />
      <main className="ml-[250px]">
        {children}
        <Toaster position="top-center" reverseOrder={false} />
      </main>
    </div>
  );
};

export default layout;
