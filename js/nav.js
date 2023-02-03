import { $, $body } from "./assets/selectors.js";

const $menu = $(".nav__ul");
const $openMenuBtn = $(".nav__button--menu");

const $navRectTop = $(".nav__rect--top");
const $navRectMiddle = $(".nav__rect--middle");
const $navRectBottom = $(".nav__rect--bottom");

function toogleMenu() {
    $menu.classList.toggle("nav__ul--visible");
    $body.classList.toggle("body--event");

    if ($menu.classList.contains("nav__ul--visible")) $openMenuBtn.title = "Cerrar menú";
    else $openMenuBtn.title = "Abrir menú";

    $navRectTop.classList.toggle("nav__rect--topchange");
    $navRectMiddle.classList.toggle("nav__rect--middlechange");
    $navRectBottom.classList.toggle("nav__rect--bottomchange");
}

$openMenuBtn.addEventListener("click", toogleMenu);
