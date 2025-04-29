"use client"

import { LinkButtonType } from "@/types/LinkButtonType";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LinkButton({ startIcon, href, name, value, func, endIcon }: LinkButtonType) {
    const [buttonName, setButtonName] = useState(name);

    const handleCopyValue = () => {
        if (value) {
            navigator.clipboard.writeText(value);
            setButtonName("Copied!");
            setTimeout(() => setButtonName(name), 2000);
        }
    };

    const functions = [
        { funcName: "copy", func: handleCopyValue },
    ]

    return (
        <Link 
            href={href || ""}
            title={name}
            {...(href ? { target: "_blank", rel: "noopener noreferrer" } : {onClick: functions.find(f => f.funcName === func)?.func})}
            className="max-w-96 px-4 flex items-center justify-between w-full h-12 bg-white font-bold border border-stone-400 rounded-full shadow-md hover:brightness-95 active:brightness-90 duration-300"
        >
                <Image src={startIcon || ""} alt={name || "icon"} className="w-auto h-full py-3" />
                <h5 className="flex-1 text-center">{buttonName}</h5>
                <Image src={endIcon || ""} alt={name || "icon"} className="w-auto h-full py-3" />
        </Link>
    )
}