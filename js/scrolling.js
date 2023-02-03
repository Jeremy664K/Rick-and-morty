import { $ } from "./assets/selectors.js";

const $logo = $(".nav__logo");

window.addEventListener("scroll", () => {
    const { scrollY } = window;

    if (scrollY > 0) $logo.classList.add("nav__logo--scroll");
    else $logo.classList.remove("nav__logo--scroll");
});
