import { fileReader } from "./handlerFile";

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
        isLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
        e.preventDefault()
        this.dropArea!.classList.remove("opacity-50")
        const file = e.dataTransfer!.files[0];
        isLoading(true)
        try {
            fileReader(file, isLoading)
        } catch (error) {
            console.error("Error reading file:", error);
            isLoading(false)
        }
    }

}

export default handlerDragandDrop