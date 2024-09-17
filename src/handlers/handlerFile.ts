const handlerFile = (event: React.ChangeEvent<HTMLInputElement>,
    isLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    const selectedFiles = event.target.files;

    isLoading(true)
    try {
        selectedFiles &&
            uploadFile(selectedFiles[0], isLoading);
    } catch (error) {
        console.error("Error reading file:", error);
        isLoading(false)
    }
};

const validationFile = (file: File,
    isLoading: React.Dispatch<React.SetStateAction<boolean>>): boolean => {
    const MAX_FILE_SIZE = 2 * 1024 * 1024;
    if (!file) return false

    if (!file.type.includes("image")) {
        alert("Please select an image file");
        isLoading(false)
        return false;
    }

    if (file.size > MAX_FILE_SIZE) {
        alert("Max file size is 2MB");
        isLoading(false)
        return false;
    }
    return true
}

const uploadFile = async (file: File,
    isLoading: React.Dispatch<React.SetStateAction<boolean>>)
    : Promise<void | null> => {

    if (!validationFile(file, isLoading)) return

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    try {
        fileReader.onload = () => {
            const formData = new FormData()
            formData.append("file", file)

            fetch("http://localhost:3001/upload", {
                method: "POST",
                body: formData
            })
                .then((response) => response.json())
                .then((data) => {
                    isLoading(false)
                    window.location.href = `/${data.id}`
                }).catch((error) => {
                    console.error("Error:", error);
                    isLoading(false)
                })
        };

    } catch (error) {
        isLoading(false)
        return console.error("Error reading file:", error);
    }
}

export {
    handlerFile,
    uploadFile
}