
const toggleTheme = () => {
    const html = document.documentElement.classList;
    html.toggle("dark")
    html.toggle("light")
}

export default toggleTheme