import React from "react";
import { Progress } from "@nextui-org/react";
type progressProps = {
    name: string,
    color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined,
    value: number
}
export default function Prog({ name, color = "secondary", value }: progressProps) {
    return (
        <div className="flex gap-2 items-center w-full">
            <p>{name}</p>
            <Progress className=' mt-1' size='md' color={`${color}`} aria-label="Loading..." value={value} />
        </div>
    );
}
