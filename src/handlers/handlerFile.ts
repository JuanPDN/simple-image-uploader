const handlerFile = (event: React.ChangeEvent<HTMLInputElement>,
    isLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    const selectedFiles = event.target.files;

    isLoading(true)
    selectedFiles &&
        setTimeout(() => {
            fileReader(selectedFiles[0]);
            isLoading(false)
        }, 2000)

};

const fileReader = (file: File | null): string | null => {
    const maxFileSize = 2 * 1024 * 1024;
    const fileReader = new FileReader();

    if (!file) {
        return null;
    }

    if (!file.type.includes("image")) {
        alert("Please select an image file");
        return null;
    } else if (file.size > maxFileSize) {
        alert("Max file size is 2MB");
        return null;
    }

    try {
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            const fileDataUrl = fileReader.result as string;
            console.log(fileDataUrl);
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