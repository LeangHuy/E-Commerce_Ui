"use client";
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import React, { useState } from 'react';
import * as XLSX from 'xlsx';

function ExportToExcel({ data, fileName }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const exportToExcel = () => {
        setLoading(true);
        setError(null); // Reset error state

        try {
            const exportData = data.flatMap((order) => {
                return order.orderResponse.orderDetail.map((product) => ({
                    Invoice: order.orderResponse.invoiceId,
                    ProductName: product.productName,
                    UnitPrice: product.unitPrice,
                    Quantity: product.orderQty,
                    Discount: product.discount,
                    ExtPrice: product.totalProductPrice,
                }));
            });

            // Create a workbook and worksheet
            const workbook = XLSX.utils.book_new();
            const worksheet = XLSX.utils.json_to_sheet(exportData);
            XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");

            // Save the workbook as an Excel file
            XLSX.writeFile(workbook, `${fileName}.xlsx`);
        } catch (error) {
            console.error("Error exporting to Excel:", error);
            setError("Failed to export to Excel. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Button onClick={exportToExcel} disabled={loading}>
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Export to Excel"}
            </Button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
}

export default ExportToExcel;
