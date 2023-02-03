import { $ } from "./assets/selectors.js";
import { getFilterCharacters } from "./assets/apiTools.js";

const $form = $(".search__form");
const $input = $(".search__input");
const $submit = $(".search__button--submit");

async function showFilterCharacters(name) {
    const filterCharacters = await getFilterCharacters(name);
}
