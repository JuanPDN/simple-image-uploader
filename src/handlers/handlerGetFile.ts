import FileInterface from "@/interfaces/fileInterface";

export const handlerGetFile = async (id: number): Promise<FileInterface | null> => {
    try {
        const response = await fetch(`http://localhost:3001/upload/${id}`, { method: "GET" });
        if (!response.ok) {
            throw new Error(`Failed to get file with id ${id}. Status code: ${response.status}`);
        }
        const data: FileInterface | null = await response.json();
        if (!data) {
            throw new Error(`Failed to get file with id ${id}. Response is null`);
        }
        return data;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}
