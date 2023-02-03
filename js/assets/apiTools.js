const URL = "https://rickandmortyapi.com/api/character/";

export let savePages = {};
export let saveCharacters = {};

export async function getCharacters(page = 1) {
    const response = savePages[page - 1] ?? (await fetch(`${URL}?page=${page}`));
    const characters = savePages[page - 1] ?? (await response.json());
    const results = characters.results;

    savePages[page - 1] = characters;
    return results;
}

export async function getFilterCharacters(name = "rick") {
    /* Other params: status, species, type, gender */

    const response = saveCharacters[name] ?? (await fetch(`${URL}?name=${name}`));
    const filterCharacters = saveCharacters[name] ?? (await response.json());
    const results = filterCharacters.results;

    saveCharacters[name] = filterCharacters;
    return results;
}
