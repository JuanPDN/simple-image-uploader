const handlerFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    const maxFileSize = 2 * 1024 * 1024;

    if (selectedFiles) {
        if (selectedFiles[0].size > maxFileSize) {
            alert("Max file size is 2MB");
            return;
        }
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(selectedFiles![0]);

    fileReader.onload = () => {
        const fileDataUrl = fileReader.result;
        console.log(fileDataUrl);
    };
};

export default handlerFile