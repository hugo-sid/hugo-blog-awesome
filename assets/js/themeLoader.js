const body = document.body;
const data = body.getAttribute("data-theme");

const initTheme = (state) => {
  if (state === "dark") {
    body.setAttribute("data-theme", "dark");
  } else if (state === "light") {
    body.removeAttribute("data-theme");
  } else {
    localStorage.setItem("theme", data);
  }
};

initTheme(localStorage.getItem("theme"));

setTimeout(() => body.classList.remove("notransition"), 75);
