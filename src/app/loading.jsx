import React from 'react'
import { Spinner } from "@nextui-org/react";

export default function Loading() {
    return (
        <div className="w-full h-[100vh] flex items-center justify-center">
            <Spinner
                label="Loading..."
                color="primary"
                classNames={{
                    label: "text-text_color",
                }}
            />
        </div>
    )
}
