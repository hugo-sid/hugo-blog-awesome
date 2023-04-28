const body = document.body;
const config = body.getAttribute("data-theme");

const getThemeState = () => {
    const lsState = localStorage.getItem("theme");
    if (lsState) return lsState;

    let state;
    switch (config) {
        case "dark":
            state = "dark";
            break;
        case "light":
            state = "light";
            break;
        case "auto":
        default:
            state = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
            break;
    }
    return state;
};

const initTheme = (state) => {
    if (state === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
    } else if (state === "light") {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
    }
};

initTheme(getThemeState());

setTimeout(() => body.classList.remove("notransition"), 75);
