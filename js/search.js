import { $ } from "./assets/selectors.js";
import { getFilterCharacters } from "./assets/apiTools.js";
import { buildCharacter, buildError } from "./assets/builds.js";

const $form = $(".search__form");
const $input = $(".search__input");
const $charactersData = $(".characters__data");

async function showFilterCharacters(name) {
    const filterCharacters = await getFilterCharacters(name);
    const fragmentCharacters = new DocumentFragment();

    if (filterCharacters === undefined) {
        const error = buildError("No encontrado");
        return $charactersData.appendChild(error);
    }

    filterCharacters.forEach((character) => {
        const articleCharacter = buildCharacter(character);
        fragmentCharacters.appendChild(articleCharacter);
    });

    $charactersData.appendChild(fragmentCharacters);
}

function handleSearch(e) {
    e.preventDefault();

    const { value } = $input;
    if (value === "") return "Empty value";

    $charactersData.innerHTML = "";
    showFilterCharacters(value);
}

$form.addEventListener("submit", handleSearch);
