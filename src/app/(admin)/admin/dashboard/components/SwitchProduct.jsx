"use client";
import React from "react";
import { Switch } from "@/components/ui/switch";
import { changeStatusProductAction } from "@/acitons/productAction";

const SwitchProduct = ({ isActive, productId, product }) => {
    const onChange = async (productId) => {
        await changeStatusProductAction(productId, isActive);
    };


    return (
        <Switch
            onCheckedChange={() => onChange(productId)}
            checked={product?.isStatus}
            className="ml-auto"
            id="airplane-mode"
        />
    );
};

export default SwitchProduct;
