import { $ } from "./assets/selectors.js";
import { getCharacters } from "./assets/apiTools.js";
import { buildCharacter } from "./assets/builds.js";

const $charactersData = $(".characters__data");
const $charactersMoreBtn = $(".characters__button--more");

const randomPage = Math.floor(Math.random() * 42 + 1);
let page = randomPage;

async function showCharacters(page) {
    const characters = await getCharacters(page);
    const fragmentCharacters = new DocumentFragment();

    characters.forEach((character) => {
        const articleCharacter = buildCharacter(character);
        fragmentCharacters.appendChild(articleCharacter);
    });

    $charactersData.appendChild(fragmentCharacters);
}

async function seeMore() {
    const randomPage = Math.round(Math.random() * 42 + 1);
    page = randomPage;

    const lastChild = $charactersData.lastChild;
    await showCharacters(page);

    const { top } = lastChild.getBoundingClientRect();
    const position = top + window.scrollY + 325;
    window.scrollTo(0, position);
}

showCharacters();
$charactersMoreBtn.addEventListener("click", seeMore);
