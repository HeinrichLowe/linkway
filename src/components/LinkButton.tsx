"use client"

import { LinkButtonType } from "@/types/LinkButtonType";
import Image from "next/image";
import Link from "next/link";

export default function LinkButton({ startIcon, href, name, value, func, endIcon }: LinkButtonType) {
    const handleCopyValue = () => {
        if (value) {
            navigator.clipboard.writeText(value);
            alert(`"${value}" copiado para a área de transferência!`);
        }
    };

    const functions = [
        { name: "copy", func: handleCopyValue },
    ]

    return (
        <Link 
            href={href || ""}
            {...(href ? { target: "_blank", rel: "noopener noreferrer" } : {onClick: functions.find(f => f.name === func)?.func})}
            className="max-w-96 px-4 flex items-center justify-between w-full h-12 bg-white text-[#555] font-bold border border-stone-400 rounded-full shadow-md hover:brightness-95 active:brightness-90 duration-300"
        >
                <Image src={startIcon || ""} alt={name || "icon"} className="w-auto h-full py-3" />
                <h5 className="flex-1 text-center">{name || "Link Button"}</h5>
                <Image src={endIcon || ""} alt={name || "icon"} className="w-auto h-full py-3" />
        </Link>
    )
}