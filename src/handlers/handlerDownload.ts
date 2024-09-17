import FileInterface from "@/interfaces/fileInterface";

const baseURL = process.env.URL_SERVER
export const handlerDownload = async (id: number) => {

    const response = await fetch(`${baseURL}/upload/${id}`);
    const data: FileInterface = await response.json();

    if (!data.name) {
        return
    } else {
        const link = document.createElement('a')
        link.href = `${baseURL}/download/${data.name}`
        link.download = data.name
        link.click()
    }

}