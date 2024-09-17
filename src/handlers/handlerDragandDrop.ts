import { NextRouter } from "next/router";
import { uploadFile } from "./handlerFile";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

class handlerDragandDrop {
    constructor(private dropArea: HTMLElement | null) {
        this.dropArea = dropArea
    }

    dragenter = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

    dragover = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        this.dropArea!.classList.add("opacity-50")
    }

    dragleave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        this.dropArea!.classList.remove("opacity-50")
    }

    drop = (e: React.DragEvent<HTMLDivElement>,
        isLoading: React.Dispatch<React.SetStateAction<boolean>>
        , router: AppRouterInstance) => {

        e.preventDefault()
        this.dropArea!.classList.remove("opacity-50")
        const file = e.dataTransfer!.files[0];

        isLoading(true)

        try {
            uploadFile(file, isLoading, router)
        } catch (error) {
            console.error("Error reading file:", error);
            isLoading(false)
        }

    }

}

export default handlerDragandDrop