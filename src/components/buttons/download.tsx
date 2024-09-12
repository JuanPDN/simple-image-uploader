'use client'

import { handlerDownload } from "@/handlers/handlerDownload"
import Image from "next/image"

export default function Download({ id }: { id: number }) {
    return (
        <button className="bg-3662E3 text-F9FAFB text-[10px] font-semibold flex py-2 px-3 gap-1 rounded-md"
            onClick={() => handlerDownload(id)}
        >
            <Image
                src="/download.svg"
                alt="logo"
                width={12}
                height={12}
                priority
            />
            <p>Download</p>
        </button>
    )
}