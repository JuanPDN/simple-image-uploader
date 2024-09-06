'use client'

import Image from "next/image"
import { handlerFile } from "@/handlers/handlerFile"
import handlerDragandDrop from "@/handlers/handlerDragandDrop"
import { useEffect, useRef } from "react"

export default function DropArea() {
    const dropArea = useRef<HTMLDivElement | null>(null)
    const dragAndDrop = useRef<handlerDragandDrop | null>(null)

    useEffect(() => {
        if (dropArea.current) {
            dragAndDrop.current = new handlerDragandDrop(dropArea.current)
        }
    }, [dropArea])

    return (
        <div className="bg-FFFFFF dark:bg-212936 max-w-[540px] w-full p-2 rounded-xl shadow-lg mx-2">
            <div ref={dropArea}
                className=" flex flex-col items-center py-28 border border-E5E7EB dark:border-4D5562 border-dashed rounded-lg"
                onDragOver={(e) => dragAndDrop.current?.dragover(e)}
                onDragEnter={(e) => dragAndDrop.current?.dragenter(e)}
                onDragLeave={(e) => dragAndDrop.current?.dragleave(e)}
                onDrop={(e) => dragAndDrop.current?.drop(e)}
            >
                <Image
                    src="/exit.svg"
                    alt="logo"
                    width={32}
                    height={32}
                />
                <p className="mt-5 text-sm font-medium">Drag & drop a file or
                    <label htmlFor="file" className="text-3662E3 font-light cursor-pointer"> browse files</label>
                </p>
                <p className="mt-2 text-xs font-light">JPG, PNG or GIF - Max file size 2MB</p>
                <input id="file" type="file" accept="image/*" onChange={(e) => handlerFile(e)} className="hidden" />
            </div>
        </div >
    )
}