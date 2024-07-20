import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Footer from "./footer/page";
import { Toaster } from "react-hot-toast";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      <Toaster />
    </div>
  );
};

export default layout;
