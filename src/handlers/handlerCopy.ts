export const handleCopyLink = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const url = window.location.href;
    const button = event.currentTarget;
    const initialText = button.outerHTML;

    navigator.clipboard.writeText(url);
    button.textContent = "Copied!";

    setTimeout(() => {
        button.outerHTML = initialText;
    }, 1500);
};
