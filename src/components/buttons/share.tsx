'use client'

import Image from "next/image"

import { handleCopyLink } from "@/handlers/handlerCopy"

export default function Share() {

    return (
        <button className="bg-3662E3 text-F9FAFB text-[10px] font-semibold flex py-2 px-3 gap-1 rounded-md"
            onClick={handleCopyLink}
        >
            <Image
                src="/Link.svg"
                alt="logo"
                width={12}
                height={12}
                priority
            />
            <p>Share</p>
        </button>
    )
}

