(() => {
    // Theme switch
    const lamp = document.getElementById("mode");

    const toggleTheme = (state) => {
        if (state === "dark") {
            localStorage.setItem("theme", "light");
            initTheme("light");
        } else if (state === "light") {
            localStorage.setItem("theme", "dark");
            initTheme("dark");
        }
    };

    lamp.addEventListener("click", () => toggleTheme(getThemeState()));

    // Blur the content when the menu is open
    const cbox = document.getElementById("menu-trigger");

    cbox.addEventListener("change", function () {
        const area = document.querySelector(".wrapper");
        this.checked
            ? area.classList.add("blurry")
            : area.classList.remove("blurry");
    });
})();
