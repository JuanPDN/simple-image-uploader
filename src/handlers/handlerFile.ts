const handlerFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    selectedFiles && fileReader(selectedFiles[0]);
};

const fileReader = (file: File | null): string | null => {
    if (!file) {
        return null;
    }

    const maxFileSize = 2 * 1024 * 1024;

    if (file.size > maxFileSize) {
        alert("Max file size is 2MB");
        return null;
    } else if (!file.type.includes("image")) {
        alert("Please select an image file");
        return null;
    }

    const fileReader = new FileReader();

    try {
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            const fileDataUrl = fileReader.result as string;
            return fileDataUrl;
        };
    } catch (error) {
        console.error("Error reading file:", error);
        return null;
    }
    return null;
}
export {
    handlerFile,
    fileReader
}