import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Footer from "./footer/page";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
