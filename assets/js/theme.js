(() => {
    "use strict";
    const LS_THEME_KEY = "theme";
    const THEMES = {
        LIGHT: "light",
        DARK: "dark",
        SOLARIZED_LIGHT: "solarized-light",
        SOLARIZED_DARK: "solarized-dark",
        AUTO: "auto",
    };

    const THEME_FAMILIES = {
        regular: [THEMES.LIGHT, THEMES.DARK],
        solarized: [THEMES.SOLARIZED_LIGHT, THEMES.SOLARIZED_DARK],
    };

    const body = document.body;
    const config = body.getAttribute("data-theme");

    const getThemeFamily = (theme) => {
        if (THEME_FAMILIES.regular.includes(theme)) return "regular";
        if (THEME_FAMILIES.solarized.includes(theme)) return "solarized";
        return "regular";
    };

    const getThemeState = () => {
        const lsState = localStorage.getItem(LS_THEME_KEY);

        let configState;
        switch (config) {
            case THEMES.DARK:
                configState = THEMES.DARK;
                break;
            case THEMES.LIGHT:
                configState = THEMES.LIGHT;
                break;
            case THEMES.SOLARIZED_LIGHT:
                configState = THEMES.SOLARIZED_LIGHT;
                break;
            case THEMES.SOLARIZED_DARK:
                configState = THEMES.SOLARIZED_DARK;
                break;
            case THEMES.AUTO:
            default:
                configState = window.matchMedia("(prefers-color-scheme: dark)")
                    .matches
                    ? THEMES.DARK
                    : THEMES.LIGHT;
                break;
        }

        if (lsState) {
            const lsFamily = getThemeFamily(lsState);
            const configFamily = getThemeFamily(configState);

            if (lsFamily === configFamily) {
                return lsState;
            }

            localStorage.removeItem(LS_THEME_KEY);
        }

        return configState;
    };

    const initTheme = (state) => {
        const allThemes = [
            THEMES.LIGHT,
            THEMES.DARK,
            THEMES.SOLARIZED_LIGHT,
            THEMES.SOLARIZED_DARK
        ];
        allThemes.forEach(theme => {
            document.documentElement.classList.remove(theme);
        });

        document.documentElement.classList.add(state);
    };

    // init theme ASAP, then do the rest.
    initTheme(getThemeState());
    requestAnimationFrame(() => body.classList.remove("notransition"))

    const toggleTheme = () => {
        const currentState = getThemeState();
        const family = getThemeFamily(currentState);
        const familyThemes = THEME_FAMILIES[family];

        let newState;

        if (family === "regular") {
            newState = currentState === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
        } else if (family === "solarized") {
            newState = currentState === THEMES.SOLARIZED_LIGHT
                ? THEMES.SOLARIZED_DARK
                : THEMES.SOLARIZED_LIGHT;
        }

        localStorage.setItem(LS_THEME_KEY, newState);
        initTheme(newState);
    };

    window.addEventListener("DOMContentLoaded", () => {
        // Theme switch
        const lamp = document.getElementById("mode");

        lamp.addEventListener("click", () => toggleTheme());

        // Blur the content when the menu is open
        const cbox = document.getElementById("menu-trigger");

        cbox.addEventListener("change", function () {
            const area = document.querySelector(".wrapper");
            if (this.checked) return area.classList.add("blurry");
            area.classList.remove("blurry");
        });
    });
})();
