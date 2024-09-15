"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import toast from "react-hot-toast";

const PrintActionInvoice = ({ order }) => {
  const printInvoice = async () => {
    const res = await fetch("https://seko.jsreportonline.net/api/report", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Basic c2VrbzoxMjM0NTY3OA==",
      },
      body: JSON.stringify({
        template: {
          name: "/Invoice/invoice-main",
        },
        data: order,
      }),
    });
    const data = await res.json();
    console.log("data ", data);
  };

  return <Button onClick={printInvoice}>Print Invoice</Button>;
};

export default PrintActionInvoice;
