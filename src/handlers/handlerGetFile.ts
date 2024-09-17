import FileInterface from "@/interfaces/fileInterface";

export const handlerGetFile = async (id: number): Promise<FileInterface | null> => {
    const response = await
        fetch(`http://localhost:3001/upload/${id}`,
            { method: "GET" });
    const data: FileInterface = await response.json();
    return data
}
