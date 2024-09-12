import FileInterface from "@/interfaces/fileInterface";

export const handlerDownload = async (id: number) => {

    const response = await fetch(`http://localhost:3001/upload/${id}`);
    const data: FileInterface = await response.json();

    if (!data.name) {
        return
    } else {
        const link = document.createElement('a')
        link.href = `http://localhost:3001/download/${data.name}`
        link.download = data.name
        link.click()
    }

}