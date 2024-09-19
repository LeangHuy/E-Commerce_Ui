"use client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import React from "react";
import { useState } from "react";

const PrintActionInvoice = ({ order }) => {
  const [loading, setLoading] = useState(false);
  const printInvoice = async () => {
    setLoading(true);
    const url = "https://seko.jsreportonline.net/api/report";
    const username = "seko";
    const password = "12345678";
    const token = btoa(`${username}:${password}`);
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Basic ${token}`,
    };
    const body = {
      template: { name: "/Invoice/invoice-main" },
      data:
        order
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
        mode: "cors",
      });
      if (!response.ok) {
        console.error('Error: Unable to fetch the report.');
        alert('Error: Unable to fetch the report.');
        return;
      }
      const pdfBlob = await response.blob();
      const pdfUrl = URL.createObjectURL(pdfBlob);
      const printWindow = window.open(pdfUrl, '_blank');
      if (printWindow) {
        printWindow.print();
      }
    } catch (error) {
      console.error("Error fetching report:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={printInvoice} >{loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Print Invoice"}</Button>
    </div>
  )
};

export default PrintActionInvoice;
